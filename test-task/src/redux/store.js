import { configureStore } from '@reduxjs/toolkit';

import settingsSliceReducer from './settingsSlice';
import charactersReducer from './charactersSlice';

export const store = configureStore({
  reducer: {
    settings: settingsSliceReducer,
    characters: charactersReducer,
  },
});
