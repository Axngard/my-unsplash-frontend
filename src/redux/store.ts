import { compose, createStore, applyMiddleware } from 'redux'
import reducer from './reducer'
import photos from '@src/utils/items'
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
   reducer,
   { photos },
   compose(applyMiddleware(thunk), composeEnhancers())
)

export default store
