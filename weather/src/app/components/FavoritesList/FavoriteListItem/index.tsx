import { IFavorite } from 'app/components/favoritesSlice/types';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components/macro';
import { loadImage } from 'utils';

interface Props {
  favorite: IFavorite;
}

export function FavoriteListItem(props: Props) {
  const { favorite } = props;
  const iconAsNumber = favorite.conditions.WeatherIcon;
  return (
    <FavoriteListItemFrame>
      <NavLink exact={true} className="link" to={`${favorite.key}`}>
        <FavoriteName>{favorite.conditions.locationName}</FavoriteName>
        <FavoriteID>{favorite.key}</FavoriteID>
        <FavoriteWeatherDay>
          {favorite.conditions.WeatherText}
        </FavoriteWeatherDay>
        <FavoriteWeatherImage>
          <img
            src={loadImage(
              `${iconAsNumber < 10 ? `0${iconAsNumber}` : iconAsNumber}-s.png`,
            )}
            alt={favorite.conditions.WeatherText}
          />
        </FavoriteWeatherImage>
      </NavLink>
    </FavoriteListItemFrame>
  );
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
