import { compose, createStore } from 'redux'
import reducer from './reducer'
import initialState from '@src/utils/items'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(reducer, initialState, composeEnhancers())

export default store
