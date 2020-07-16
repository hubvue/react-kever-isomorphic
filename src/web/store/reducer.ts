import { StateType, initialState } from './data'
import { ActionType, Action } from './action'

const reducer = (state = initialState, action: ActionType): StateType => {
  switch (action.type) {
    case Action.INCREASE:
      return {
        ...state,
        ...action.data,
      }
    case Action.REDUCE:
      return {
        ...state,
        ...action.data,
      }
    default:
      return state
  }
}

export default reducer
