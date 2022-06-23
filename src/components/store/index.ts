import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import reducers from './reducers'
export const reducer = combineReducers(reducers)

export const store = createStore(reducer, applyMiddleware(thunk))

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch