import { compose, createStore } from 'redux'
import reducer from './reducer'
import photos from '@src/utils/items'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(reducer, { photos }, composeEnhancers())

export default store
