/* eslint-disable indent */
import statuses from '@src/constants/reducerStatuses'
import { AxiosError } from 'axios'
import { uploadImageActions, types } from '../actions/uploadImage.action'

/* types */
interface LocalState {
   data: {
      image: string
   }
   status: statuses
   error: null | AxiosError
}

const initialState: LocalState = {
   data: {
      image: ''
   },
   status: statuses.IDLE,
   error: null
}

function uploadImageReducer(
   state: LocalState = initialState,
   action: uploadImageActions
): LocalState {
   switch (action.type) {
      case types.UPLOAD_IMAGE_IDLE:
         return {
            ...state,
            error: null,
            status: statuses.IDLE
         }
      case types.UPLOAD_IMAGE_REQUEST:
         return {
            ...state,
            status: statuses.LOADING
         }
      case types.UPLOAD_IMAGE_FAILED:
         return {
            ...state,
            error: action.error,
            status: statuses.FAILED
         }
      case types.UPLOAD_IMAGE_SUCCESS:
         return {
            ...state,
            data: {
               image: action.image
            },
            status: statuses.SUCCESS
         }
      default:
         return state
   }
}

export default uploadImageReducer
