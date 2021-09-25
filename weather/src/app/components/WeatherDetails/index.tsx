import * as React from 'react';
import styled from 'styled-components/macro';
import { CurrentWeather } from './CurrentWeather/Loadable';
import { FiveDayForecast } from './FiveDayForecast/Loadable';
import { WeatherBasics } from "./WeatherBasics/Loadable"
import {
  getCurrentConditions,
  getFiveDayForecast,
  fullConditions,
  mock,
} from 'utils';
import { IFiveDayForecast, IFullConditions, ISpinnerError } from 'types';
import { Spinner } from '../Spinner/Loadable';
import { AddToFavorites, SearchBar } from '..';

interface Props {}

export function WeatherDetails(props: Props) {
  const [searchText, setSearchText] = React.useState('');
  const [locationKey, setLocationKey] = React.useState<string>('215854');
  const [locationName, setLocationName] = React.useState<string>('Tel Aviv');
  const [showSpinner, setShowSpinner] = React.useState(false);
  const [spinnerError, setSpinnerError] = React.useState<ISpinnerError>();
  const [currentConditions, setCurrentConditions] = React.useState<
    IFullConditions[]
  >([]);
  const [fiveDayForecast, setFiveDayForecase] =
    React.useState<IFiveDayForecast>();

  React.useEffect(() => {
    let key = window.location.hash.slice(2);
    setLocationKey(key);
  }, [locationKey]);

  React.useEffect(() => {
    (async () => {
      try {
        setShowSpinner(true);
        // await getCurrentConditions(Number(locationKey), setCurrentConditions);
        // await getFiveDayForecast(Number(locationKey), setFiveDayForecase);
        fullConditions.key = locationKey;
        fullConditions.locationName = locationName;
        setCurrentConditions([fullConditions]);
        setFiveDayForecase(mock.fiveDays);
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
  }, [locationKey]);

  return (
    <Spinner
      showSpinner={showSpinner}
      error={spinnerError}
      VisualComponent={false}
    >
      <WeatherDetailsFrame>
        <LeftSidebarFrame>
          <SearchBar
            setSearchText={setSearchText}
            setLocationKey={setLocationKey}
            setLocationName={setLocationName}
            searchText={searchText}
          />
          <WeatherBasics currentConditions={currentConditions[0]} />
          {fiveDayForecast && (
            <AddToFavorites
              favorite={currentConditions[0].favorite}
              locationKey={locationKey}
              locationName={locationName}
              favoriteItem={{
                conditions: currentConditions[0],
                forecast: fiveDayForecast,
                key: locationKey,
              }}
            />
          )}
        </LeftSidebarFrame>
        <MainContentFrame>
          {fiveDayForecast && (
            <FiveDayForecast fiveDayForecast={fiveDayForecast} />
          )}
          <CurrentWeather currentConditions={currentConditions} />
        </MainContentFrame>
      </WeatherDetailsFrame>
    </Spinner>
  );
}

const WeatherDetailsFrame = styled.div`
  user-select: none;
`;
const LeftSidebarFrame = styled.div`
  background-color: #fffffd;
  width: 20%;
  float: left;
  @media (max-width: 768px) {
    width: 10%;
  }
`;
const MainContentFrame = styled.div`
  background-color: #f7f6f9;
  padding: 10px;
  width: 80%;
  float: right;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
