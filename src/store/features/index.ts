import { combineReducers } from "@reduxjs/toolkit"
import CounterReducer from "./counter"

export const reducers = combineReducers({
  counter: CounterReducer,
})
