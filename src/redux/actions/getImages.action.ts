import config from '@src/config'
import { endpoints, localStorageItems } from '@src/constants'
import { Image } from '@src/interfaces'
import axios, { AxiosError } from 'axios'
import { Dispatch } from 'redux'

/* Types */
export enum actionTypes {
   GET_IMAGE_SUCCESS = 'GET_IMAGE_SUCCESS',
   GET_IMAGE_FAILED = 'GET_IMAGE_FAILED',
   GET_IMAGE_IDLE = 'GET_IMAGE_IDLE',
   GET_IMAGE_REQUEST = 'GET_IMAGE_REQUEST',
   GET_IMAGE_FILTERED = 'GET_IMAGE_FILTERED'
}

interface getImageSuccessAction {
   type: typeof actionTypes.GET_IMAGE_SUCCESS
   images: Image[]
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

interface getImageFilteredAction {
   type: typeof actionTypes.GET_IMAGE_FILTERED
   word: string
}

export type getImageActions =
   | getImageFailedAction
   | getImageSuccessAction
   | getImageIdleAction
   | getImageRequestAction
   | getImageFilteredAction

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

export const getImageSuccess = (images: Image[]): getImageSuccessAction => ({
   type: actionTypes.GET_IMAGE_SUCCESS,
   images
})

export const getImagesFiltered = (word: string): getImageFilteredAction => ({
   type: actionTypes.GET_IMAGE_FILTERED,
   word: word.toLowerCase()
})

/* Actions */
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
