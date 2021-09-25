import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';

const selectSlice = (state: RootState) => state.favorites || initialState;

export const selectFavorites = createSelector([selectSlice], state => state);
