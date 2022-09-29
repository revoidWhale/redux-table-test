import { configureStore } from '@reduxjs/toolkit'
import { tableReducer } from './reducers/tableReducer'

export const store = configureStore({
  reducer: {
    tableReducer,
  },
})
