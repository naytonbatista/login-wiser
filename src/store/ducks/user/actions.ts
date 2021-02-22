import { action } from 'typesafe-actions'
import { UserTypes, User } from './types'

export const loginRequest = (user: User) =>
  action(UserTypes.LOGIN_REQUEST, { user })
export const loginSuccess = (data: User) =>
  action(UserTypes.LOGIN_SUCCESS, { data })
export const loginFail = () => action(UserTypes.LOGIN_FAIL)
