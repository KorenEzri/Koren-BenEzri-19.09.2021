import React from 'react';
import { network } from 'network';
import { accuWeatherURL, DaysOfTheWeek } from 'utils';
import axios, { CancelToken } from 'axios';
const images = require.context('assets/weathericons', true);
let cancelToken;
let times;

export const debounce = (func, time) => {
  clearTimeout(times);
  times = setTimeout(func, time);
};
export const getCurrentConditions = async (
  key: number,
  setter: React.SetStateAction<any>,
) => {
  const { data } = await network.get(accuWeatherURL.currentConditions(key));
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
export const getAutoCompleteSuggestions = async (
  text: string,
  setter: React.SetStateAction<any>,
) => {
  if (typeof cancelToken != typeof undefined) {
    cancelToken.cancel('Operation canceled due to new request.');
  }
  cancelToken = axios.CancelToken.source();
  const { data } = await network.get(accuWeatherURL.autoComplete(text), {
    cancelToken: cancelToken.token,
  });
  setter(data);
};

export const loadImage = imageName => images(`./${imageName}`).default;
