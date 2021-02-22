export enum UserTypes {
  LOGIN_REQUEST = '@login/LOGIN_REQUEST',
  LOGIN_SUCCESS = '@login/LOGIN_SUCCESS',
  LOGIN_FAIL = '@login/LOGIN_FAIL'
}

export interface User {
  userName: string
  password: string
}

export interface UserState {
  readonly user: User
  readonly loading: boolean
  readonly error: boolean
}
