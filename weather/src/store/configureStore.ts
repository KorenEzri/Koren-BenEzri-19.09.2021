import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
  StoreEnhancer,
} from '@reduxjs/toolkit';
import { createInjectorsEnhancer } from 'redux-injectors';
import createSagaMiddleware from 'redux-saga';

import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { favoritesReducer } from 'app/components/favoritesSlice';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  favorites: favoritesReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});
export const persistor = persistStore(store);
