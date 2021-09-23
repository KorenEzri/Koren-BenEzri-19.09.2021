import * as React from 'react';
import styled from 'styled-components/macro';
import { IFiveDayForecast } from 'types';
import { ForecastDay } from './ForecastDay/Loadable';

interface Props {
  fiveDayForecast: IFiveDayForecast;
}

export function ForecastDayList(props: Props) {
  const { fiveDayForecast } = props;
  return (
    <FiveDayForecastListFrame>
      {fiveDayForecast?.DailyForecasts.map((forecast, index) => {
        return (
          <>
            <ForecastDay index={index} forecast={forecast} />
          </>
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