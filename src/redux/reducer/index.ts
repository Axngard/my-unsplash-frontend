/* Redux */
import { combineReducers } from 'redux'
import auth from './auth.reducer'
import register from './register.reducer'
import photos from './photos'

const reducers = combineReducers({
   auth,
   photos,
   register
})

export default reducers
