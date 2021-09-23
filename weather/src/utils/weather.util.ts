import React from 'react';
import { network } from 'network';
import { accuWeatherURL, DaysOfTheWeek } from 'utils';
const images = require.context('assets/weathericons', true);

export const getCurrentConditions = async (
  key: number,
  setter: React.SetStateAction<any>,
) => {
  const { data } = await network.get(accuWeatherURL.currentConditions(key));
  console.log('DATA: ', data);
  setter(data);
};

export const getFiveDayForecast = async (
  key: number,
  setter: React.SetStateAction<any>,
) => {
  const { data } = await network.get(accuWeatherURL.fiveDayForecast(key));
  setter(data);
};

export const getDayOfWeek = (date: Date) => {
  const dayAsANumber = date.getDay();
  return DaysOfTheWeek[dayAsANumber];
};

export const loadImage = imageName => images(`./${imageName}`).default;
