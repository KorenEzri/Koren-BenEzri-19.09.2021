import { IFavorite } from 'app/components/favoritesSlice/types';
import { Spinner } from 'app/components/Spinner/Loadable';
import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components/macro';
import { IFiveDayForecast, IFullConditions, ISpinnerError } from 'types';
import { getCurrentConditions, loadImage } from 'utils';

interface Props {
  iFavorite: IFavorite;
}

export function FavoriteListItem(props: Props) {
  const { iFavorite } = props;

  const [showSpinner, setShowSpinner] = React.useState(false);
  const [spinnerError, setSpinnerError] = React.useState<ISpinnerError>();
  const [currentConditions, setCurrentConditions] = React.useState<
    IFullConditions[]
  >([]);

  React.useEffect(() => {
    (async () => {
      try {
        const { key, name } = iFavorite;
        setShowSpinner(true);
        await getCurrentConditions(Number(key), setCurrentConditions);
        if (!currentConditions[0]) {
          setShowSpinner(false);
          return;
        }
        currentConditions[0].key = key;
        currentConditions[0].locationName = name;
        setCurrentConditions(currentConditions);
        setShowSpinner(false);
      } catch ({ message }) {
        console.log(message);
        if (typeof message === 'string') {
          const error = {
            isErr: true,
            message: message,
          };
          setSpinnerError(error);
        }
        setShowSpinner(false);
      }
    })();
  }, []);

  const iconAsNumber = currentConditions[0]?.WeatherIcon;
  return currentConditions[0] ? (
    <Spinner
      showSpinner={showSpinner}
      error={spinnerError}
      VisualComponent={false}
      submitLoader={true}
    >
      <FavoriteListItemFrame>
        <NavLink exact={true} className="link" to={`${iFavorite.key}`}>
          <FavoriteName>{currentConditions[0].locationName}</FavoriteName>
          <FavoriteID>{iFavorite.key}</FavoriteID>
          <FavoriteWeatherDay>
            {currentConditions[0].WeatherText}
          </FavoriteWeatherDay>
          <FavoriteWeatherImage>
            <img
              src={loadImage(
                `${
                  iconAsNumber < 10 ? `0${iconAsNumber}` : iconAsNumber
                }-s.png`,
              )}
              alt={currentConditions[0].WeatherText}
            />
          </FavoriteWeatherImage>
        </NavLink>
      </FavoriteListItemFrame>
    </Spinner>
  ) : <p>{spinnerError?.message === "Request failed with status code 503" ? "Too many requests - Accuweather blocked us :(" : spinnerError?.message}</p>;
}

const FavoriteListItemFrame = styled.div`
  margin-bottom: 20px;
  * {
    text-decoration: none;
    color: black;
  }
  user-select: none;
  margin-top: 10px;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 12px;
  width: 180px;
  height: 210px;
  text-align: center;
  -webkit-box-shadow: 3px 5px 15px -4px rgba(0, 0, 0, 0.57);
  box-shadow: 3px 5px 15px -4px rgba(0, 0, 0, 0.57);
  cursor: pointer;
  transition: 500ms;
  border: 1px solid transparent;
  &:hover {
    border: 1px solid darkgreen;
    transition: 500ms;
  }
  &:active {
    border: 2px solid darkgreen;
    transition: 0ms;
  }
`;
const FavoriteName = styled.div``;
const FavoriteID = styled.div``;
const FavoriteWeatherDay = styled.div`
  margin-bottom: 20px;
`;
const FavoriteWeatherImage = styled.div`
  margin-bottom: 20px;
  img {
    width: 100px;
    height: 60px;
  }
`;
