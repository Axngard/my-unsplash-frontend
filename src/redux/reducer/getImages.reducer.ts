/* eslint-disable indent */
import statuses from '@src/constants/reducerStatuses'
import { Image } from '@src/interfaces'
import { AxiosError } from 'axios'
import { actionTypes, getImageActions } from '../actions/getImages.action'

/* types */
interface LocalState {
   data: {
      images: Image[]
      imagesFiltered: Image[]
   }
   status: statuses
   error: null | AxiosError
}

const initialState: LocalState = {
   data: {
      imagesFiltered: [],
      images: []
   },
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
            data: { ...state.data, images: action.images },
            status: statuses.SUCCESS
         }
      case actionTypes.GET_IMAGE_FILTERED: {
         const imagesFiltered = state.data.images.filter(
            (image) =>
               image.labels
                  .toString()
                  .toLowerCase()
                  .includes(action.word.toLowerCase()) ||
               image.username.toLowerCase().includes(action.word.toLowerCase())
         )

         return {
            ...state,
            data: {
               ...state.data,
               imagesFiltered
            }
         }
      }
      default:
         return state
   }
}

export default getImageReducer
