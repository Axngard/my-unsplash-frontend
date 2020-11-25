import config from '@src/config'
import { endpoints, localStorageItems } from '@src/constants'
import axios, { AxiosError } from 'axios'
import { Dispatch } from 'redux'

/* Types */
export enum actionTypes {
   GET_IMAGE_SUCCESS = 'GET_IMAGE_SUCCESS',
   GET_IMAGE_FAILED = 'GET_IMAGE_FAILED',
   GET_IMAGE_IDLE = 'GET_IMAGE_IDLE',
   GET_IMAGE_REQUEST = 'GET_IMAGE_REQUEST'
}

interface getImageSuccessAction {
   type: typeof actionTypes.GET_IMAGE_SUCCESS
   images: any
}

interface getImageFailedAction {
   type: typeof actionTypes.GET_IMAGE_FAILED
   error: AxiosError | null
}

interface getImageIdleAction {
   type: typeof actionTypes.GET_IMAGE_IDLE
}

interface getImageRequestAction {
   type: typeof actionTypes.GET_IMAGE_REQUEST
}

export type getImageActions =
   | getImageFailedAction
   | getImageSuccessAction
   | getImageIdleAction
   | getImageRequestAction

/* Actions creators */
export const getImageIdle = (): getImageIdleAction => ({
   type: actionTypes.GET_IMAGE_IDLE
})

export const getImageRequest = (): getImageRequestAction => ({
   type: actionTypes.GET_IMAGE_REQUEST
})

export const getImageFailed = (
   error: AxiosError | null
): getImageFailedAction => ({
   type: actionTypes.GET_IMAGE_FAILED,
   error
})

export const getImageSuccess = (images: any[]): getImageSuccessAction => ({
   type: actionTypes.GET_IMAGE_SUCCESS,
   images
})

/* Action */
export function getImages() {
   return (dispatch: Dispatch): Promise<any> => {
      dispatch(getImageRequest())

      const accessToken = localStorage.getItem(localStorageItems.TOKEN)

      return axios({
         baseURL: config.SERVER_URL,
         method: 'GET',
         url: endpoints.GET_IMAGES,
         headers: { Authorization: `Bearer ${accessToken}` }
      })
         .then(({ data }) => {
            dispatch(getImageSuccess(data.data))
         })
         .catch((err) => {
            dispatch(getImageFailed(err))
         })
   }
}
