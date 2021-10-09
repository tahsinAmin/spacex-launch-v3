import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter/counterSlice'
import launchesReducer from './launches/launchSlice'

export const store = configureStore({
  reducer: {
     counter: counterReducer,
     launches: launchesReducer,
  },
})