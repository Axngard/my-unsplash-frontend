import { combineReducers } from 'redux'
import auth from './authentication'
import photos from './photos'

const reducers = combineReducers({
   auth,
   photos
})

export default reducers
