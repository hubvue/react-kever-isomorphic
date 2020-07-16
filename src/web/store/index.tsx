import { createStore, applyMiddleware, combineReducers } from 'redux'
import reducer from './reducer'
import { StateType } from './data'

const configurStore = (initialData?: StateType) => {
  return createStore(reducer, initialData)
}

export default configurStore
