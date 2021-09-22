import { apiKey } from '../key';
export const baseFetchURL = 'https://dataservice.accuweather.com';

export const accuWeatherURL = {
  autoComplete: (text: string) =>
    `/locations/v1/cities/autocomplete?apikey=${apiKey}&q=${text}`,
  currentConditions: (locationKey: number = 215854) =>
    `/currentconditions/v1/${locationKey}?details=true&apikey=${apiKey}`,
  fiveDayForecast: (locationKey: number = 215854) =>
    `/forecasts/v1/daily/5day/${locationKey}?apikey=${apiKey}`,
  geoPositionSearch: (location: string) =>
    `/locations/v1/cities/geoposition/search?apikey=${apiKey}&q=${location}`,
};
