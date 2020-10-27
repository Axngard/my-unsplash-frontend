import { combineReducers } from 'redux'
import photoReducer from './photos'

const reducers = combineReducers({
   photos: photoReducer
})

export default reducers
