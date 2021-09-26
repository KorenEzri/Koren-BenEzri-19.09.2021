export interface IFavorite {
  name: string;
  key: string;
}
/* --- STATE --- */
export interface IFavoritesState {
  favorites: IFavorite[];
}
