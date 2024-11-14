import { configureStore } from '@reduxjs/toolkit';
import employeesReducer from './../slices/slice';

export const store = configureStore({
  reducer: {
    employees: employeesReducer
  }
});
