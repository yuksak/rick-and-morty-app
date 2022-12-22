import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    //   characters: ,
    //   locations: ,
    //   episodes:
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
