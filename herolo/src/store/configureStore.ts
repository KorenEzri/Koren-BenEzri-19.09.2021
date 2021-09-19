import {
  configureStore,
  getDefaultMiddleware,
  StoreEnhancer,
} from '@reduxjs/toolkit';
import { createInjectorsEnhancer } from 'redux-injectors';
import createSagaMiddleware from 'redux-saga';

import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

const persistConfig = {
  key: 'root',
  storage,
};

// const rootReducer = combineReducers({});

// const persistedReducer = persistReducer(persistConfig,
//   rootReducer
//   );

// export const store = configureStore({
//   reducer: persistedReducer,
// });
// export const persistor = persistStore(store);
