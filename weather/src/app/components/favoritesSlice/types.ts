import { IFiveDayForecast, IFullConditions } from '../../../types';
export interface IFavorite {
  conditions: IFullConditions;
  forecast: IFiveDayForecast;
  key: string;
}
/* --- STATE --- */
export interface IFavoritesState {
  favorites: IFavorite[];
  locationKeys: string[];
}
