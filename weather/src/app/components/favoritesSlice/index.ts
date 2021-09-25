import { current, PayloadAction } from '@reduxjs/toolkit';
import { IFiveDayForecast, IFullConditions } from 'types';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { IFavoritesState } from './types';

export const initialState: IFavoritesState = {
  favorites: [],
  locationKeys: [],
};

const slice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite(
      state,
      action: PayloadAction<{
        conditions: IFullConditions;
        forecast: IFiveDayForecast;
      }>,
    ) {
      const { conditions, forecast } = action.payload;
      if (!conditions.key) return;
      state.favorites = [
        ...state.favorites,
        { conditions, forecast, key: conditions.key },
      ];
      state.locationKeys = [...state.locationKeys, conditions.key];
    },
    removeFavorite(
      state,
      action: PayloadAction<{
        conditions: IFullConditions;
        forecast: IFiveDayForecast;
      }>,
    ) {
      const { conditions } = action.payload;
      if (!conditions.key) return;
      const favoriteItemIndex = state.favorites.findIndex(
        f => f.key === conditions.key,
      );
      const locationKeyIndex = state.locationKeys.findIndex(
        key => key === conditions.key,
      );
      state.favorites.splice(favoriteItemIndex, 1);
      state.locationKeys.splice(locationKeyIndex, 1);
    },
  },
});

export const { actions: favoritesActions } = slice;

export const useFavoritesSlice = () => {
  return { actions: slice.actions };
};

export const favoritesReducer = slice.reducer;
