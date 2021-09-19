import * as React from 'react';
import styled from 'styled-components/macro';
import { CurrentWeather } from "./CurrentWeather/Loadable"
import { FiveDayForecast } from "./FiveDayForecast/Loadable"

interface Props {}

export function WeatherDetails(props: Props) {

  return (
  <WeatherDetailsFrame>
    <CurrentWeather />
    <FiveDayForecast />
  </WeatherDetailsFrame>
  );

};

const WeatherDetailsFrame = styled.div``;