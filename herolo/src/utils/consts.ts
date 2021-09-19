import { apiKey } from '../key';
export const baseFetchURL = 'http://dataservice.accuweather.com';

export const accuWeatherURL = {
  autoComplete: (text: string) =>
    `${baseFetchURL}/locations/v1/cities/autocomplete?apikey=${apiKey}&q=${text}`,
  currentConditions: (locationKey: number = 215854) =>
    `${baseFetchURL}/currentconditions/v1/${locationKey}?apikey=${apiKey}`,
  fiveDayForecase: (locationKey: number = 215854) =>
    `${baseFetchURL}/forecasts/v1/daily/5day/${locationKey}?apikey=${apiKey}`,
  geoPositionSearch: (location: string) =>
    `${baseFetchURL}/locations/v1/cities/geoposition/search?apikey=${apiKey}&q=${location}`,
};
