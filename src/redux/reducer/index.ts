/* Redux */
import { combineReducers } from 'redux'
import auth from './auth.reducer'
import register from './register.reducer'
import photos from './photos'
import uploadImage from './uploadImage.reducer'
import getImages from './getImages.reducer'

const reducers = combineReducers({
   auth,
   photos,
   register,
   uploadImage,
   getImages
})

export default reducers
