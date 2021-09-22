import * as React from 'react';
import styled from 'styled-components/macro';
import { CurrentWeather } from './CurrentWeather/Loadable';
import { FiveDayForecast } from './FiveDayForecast/Loadable';
import { getCurrentConditions, getFiveDayForecast, mock, fullConditions } from 'utils';
import { ICurrentConditions, IFiveDayForecast, IFullConditions, ISpinnerError } from 'types';
import { Spinner } from '../Spinner/Loadable';

interface Props {
  locationKey: string;
}

export function WeatherDetails(props: Props) {
  const [showSpinner, setShowSpinner] = React.useState(false);
  const [spinnerError, setSpinnerError] = React.useState<ISpinnerError>();
  const [currentConditions, setCurrentConditions] = React.useState<IFullConditions[]>([]);
  const [fiveDayForecast, setFiveDayForecase] =
    React.useState<IFiveDayForecast>();
  const { locationKey } = props;
  React.useEffect(() => {
    (async () => {
      try {
        setShowSpinner(true);
        // await getCurrentConditions(Number(locationKey), setCurrentConditions);
        // await getFiveDayForecast(Number(locationKey), setFiveDayForecase);
        setCurrentConditions([fullConditions])
        setFiveDayForecase(mock.fiveDays)
        setShowSpinner(false);
      } catch ({ message }) {
        console.log(message)
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

  return (
    <Spinner
      showSpinner={showSpinner}
      error={spinnerError}
      VisualComponent={false}
    >
      <WeatherDetailsFrame>
        {fiveDayForecast && (
          <FiveDayForecast fiveDayForecast={fiveDayForecast} />
        )}
        <CurrentWeather currentConditions={currentConditions} />
      </WeatherDetailsFrame>
    </Spinner>
  );
}

const WeatherDetailsFrame = styled.div``;
