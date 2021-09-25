import * as React from 'react';
import styled from 'styled-components/macro';
import { IFiveDayForecast } from 'types';
import { ForecastDay } from './ForecastDay/Loadable';

interface Props {
  fiveDayForecast: IFiveDayForecast;
}
enum TempratureType {
  "fahrenheit",
  "celsius"
}

export function ForecastDayList(props: Props) {
  const [tempratureType, setTempratureType] = React.useState<TempratureType>(0);
  const { fiveDayForecast } = props;

  const cToFahr = (c) => c * 9 / 5 + 32;
  const fahrToC = (f) => (f - 32) * 5 / 9

  return (
    <FiveDayForecastListFrame>
      {fiveDayForecast?.DailyForecasts.map((forecast, index) => {
        // if (tempratureType === TempratureType.celsius) {
          
        // }
        return (
            <ForecastDay key={`forecastDayKey#${index}`} index={index} forecast={forecast} />
        );
      })}
    </FiveDayForecastListFrame>
  );
}

const FiveDayForecastListFrame = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  list-style-type: none;
  max-width: 1100px;
  flex-wrap: wrap;
`;