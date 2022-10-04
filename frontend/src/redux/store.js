import { configureStore } from '@reduxjs/toolkit'
import authSlice from './authSlice'
import productSlice from './productSlice'
import adminSlice from './adminAuthSlice'
import logger from "redux-logger";

export const store = configureStore({
  reducer: {
    authReducer: authSlice,
    productReducer: productSlice,
    adminReducer: adminSlice,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
})