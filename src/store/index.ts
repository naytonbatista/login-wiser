import { createStore, Store, applyMiddleware } from 'redux'
import rootReducer from './ducks/rootReducer'
import rootSaga from './ducks/rootSaga'
import createSagaMiddleware from 'redux-saga'
import { UserState } from './ducks/user/types'

export interface ApplicationState {
  user: UserState
}

const sagaMiddleware = createSagaMiddleware()

const store: Store<ApplicationState> = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(rootSaga)

export default store
