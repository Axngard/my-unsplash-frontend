/* Redux */
import { combineReducers } from 'redux'
import auth from './auth.reducer'
import register from './register.reducer'
import photos from './photos'
import uploadImage from './uploadImage.reducer'

const reducers = combineReducers({
   auth,
   photos,
   register,
   uploadImage
})

export default reducers
