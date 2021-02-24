import { call, put } from 'redux-saga/effects'
import api from '../../../services/api'
import { loginSuccess, loginFail } from '../user/actions'
import { User } from './types'

type UserPayload = {
  payload: { user: User }
}

export function* login({ payload }: UserPayload) {
  try {
    const { user } = payload

    const response = yield call(api.post, '', user)
    yield put(loginSuccess(response.data))
  } catch (err) {
    yield put(loginFail())
  }
}
