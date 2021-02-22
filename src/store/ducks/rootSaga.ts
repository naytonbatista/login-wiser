import { all, takeLatest } from 'redux-saga/effects'
import { UserTypes } from './user/types'
import { login } from './user/sagas'

export default function* rootSaga() {
  return yield all([takeLatest(UserTypes.LOGIN_REQUEST, login)])
}
