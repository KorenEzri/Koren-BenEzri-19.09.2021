import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { IFavorite, IFavoritesState } from './types';

export const initialState: IFavoritesState = {
  favorites: [],
};

const slice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite(state, action: PayloadAction<IFavorite>) {
      const favorite = action.payload;
      state.favorites = [...state.favorites, favorite];
    },
    removeFavorite(state, action: PayloadAction<IFavorite>) {
      const favorite = action.payload;
      const favoriteItemIndex = state.favorites.findIndex(
        f => f.key === favorite.key,
      );
      state.favorites.splice(favoriteItemIndex, 1);
    },
  },
});

export const { actions: favoritesActions } = slice;

export const useFavoritesSlice = () => {
  return { actions: slice.actions };
};

export const favoritesReducer = slice.reducer;
