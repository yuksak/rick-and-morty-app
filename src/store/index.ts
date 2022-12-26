import { configureStore } from '@reduxjs/toolkit';
import { characterReducer, darkModeReducer } from './slices';

const store = configureStore({
  reducer: {
    characters: characterReducer,
    darkMode: darkModeReducer,
    //   locations: ,
    //   episodes:
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
