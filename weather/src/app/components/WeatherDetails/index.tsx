import * as React from 'react';
import styled from 'styled-components/macro';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { CurrentWeather } from './CurrentWeather/Loadable';
import { FiveDayForecast } from './FiveDayForecast/Loadable';
import { WeatherBasics } from './WeatherBasics/Loadable';
import {
  fullConditions,
  getCurrentConditions,
  getFiveDayForecast,
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

  const MySwal = withReactContent(Swal)

  React.useEffect(() => {
    let key = window.location.hash.slice(2);
    setLocationKey(key);
  }, [locationKey, locationName]);

  React.useEffect(() => {
    (async () => {
      try {
        setShowSpinner(true);
        await getCurrentConditions(Number(locationKey), setCurrentConditions);
        await getFiveDayForecast(Number(locationKey), setFiveDayForecase);
        if (!currentConditions[0]) {
          setShowSpinner(false);
          return;
        }
        currentConditions[0].key = locationKey || '215854';
        currentConditions[0].locationName = locationName || 'Tel Aviv';
        setCurrentConditions(currentConditions);
        setShowSpinner(false);
      } catch ({ message }) {
        if (message === 'Request failed with status code 503') {
          MySwal.fire({
            title: <p>Erorr - status 503</p>,
            didOpen: () => {
              MySwal.clickConfirm()
            }
          }).then(() => {
            return MySwal.fire(<p>Too many requests - the service was blocked by AccuWeather, displaying mock data.</p>)
          })
          setCurrentConditions([fullConditions]);
          setFiveDayForecase(mock.fiveDays);
          setShowSpinner(false);
          return;
        }
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
  }, [locationKey, locationName]);

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
  margin-top: -5px;
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
