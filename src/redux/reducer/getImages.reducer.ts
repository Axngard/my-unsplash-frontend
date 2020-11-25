/* eslint-disable indent */
import statuses from '@src/constants/reducerStatuses'
import { Image } from '@src/interfaces'
import { AxiosError } from 'axios'
import { actionTypes, getImageActions } from '../actions/getImages.action'

/* types */
interface LocalState {
   data: Image[]
   status: statuses
   error: null | AxiosError
}

const initialState: LocalState = {
   data: [],
   status: statuses.IDLE,
   error: null
}

function getImageReducer(
   state: LocalState = initialState,
   action: getImageActions
): LocalState {
   switch (action.type) {
      case actionTypes.GET_IMAGE_REQUEST:
         return {
            ...state,
            status: statuses.LOADING
         }
      case actionTypes.GET_IMAGE_FAILED:
         return {
            ...state,
            error: action.error,
            status: statuses.FAILED
         }
      case actionTypes.GET_IMAGE_SUCCESS:
         return {
            ...state,
            data: action.images,
            status: statuses.SUCCESS
         }
      default:
         return state
   }
}

export default getImageReducer
