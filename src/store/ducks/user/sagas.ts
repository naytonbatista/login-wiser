import { call, put } from 'redux-saga/effects'
import api from 'services/api'
import { loginSuccess, loginFail } from '../user/actions'

export function* login() {
  try {
    const response = yield call(api.get)
    yield put(loginSuccess(response.data))
  } catch (err) {
    yield put(loginFail())
  }
}
