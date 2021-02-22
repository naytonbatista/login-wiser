import { Reducer } from 'redux'
import { UserState, UserTypes } from './types'

const emptyUser = { userName: '', password: '' }

const INITIAL_STATE: UserState = {
  error: false,
  loading: false,
  data: emptyUser
}

const reducer: Reducer<UserState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserTypes.LOGIN_REQUEST:
      return { ...state, loading: true }
    case UserTypes.LOGIN_SUCCESS:
      return { ...state, loading: false, error: false, data: action.payload }
    case UserTypes.LOGIN_FAIL:
      return { ...state, loading: false, error: true, data: emptyUser }
    default:
      return state
  }
}

export default reducer
