import { configureStore } from "@reduxjs/toolkit";
import emailReducer from "../redux/emailSlice";

const store = configureStore({
  reducer: {
    emails: emailReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
