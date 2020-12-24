/* Redux */
import config from '@src/config'
import { endpoints, localStorageItems } from '@src/constants'
import axios, { AxiosError, AxiosResponse } from 'axios'
import { Dispatch } from 'redux'
import { getImages } from './getImages.action'

/* Types */
export enum types {
   UPLOAD_IMAGE_SUCCESS = 'UPLOAD_IMAGE_SUCCESS',
   UPLOAD_IMAGE_FAILED = 'UPLOAD_IMAGE_FAILED',
   UPLOAD_IMAGE_IDLE = 'UPLOAD_IMAGE_IDLE',
   UPLOAD_IMAGE_REQUEST = 'UPLOAD_IMAGE_REQUEST'
}

interface uploadImageFailedAction {
   type: typeof types.UPLOAD_IMAGE_FAILED
   error: AxiosError
}

interface uploadImageSuccessAction {
   type: typeof types.UPLOAD_IMAGE_SUCCESS
   image: string
}

interface uploadImageIdleAction {
   type: typeof types.UPLOAD_IMAGE_IDLE
}

interface uploadImageRequestAction {
   type: typeof types.UPLOAD_IMAGE_REQUEST
}

export type uploadImageActions =
   | uploadImageFailedAction
   | uploadImageSuccessAction
   | uploadImageIdleAction
   | uploadImageRequestAction

/* Actions */
export const uploadImageSuccess = (
   image: string
): uploadImageSuccessAction => ({
   type: types.UPLOAD_IMAGE_SUCCESS,
   image
})

export const uploadImageFailed = (
   error: AxiosError
): uploadImageFailedAction => ({
   type: types.UPLOAD_IMAGE_FAILED,
   error
})

export const uploadImageIdle = (): uploadImageIdleAction => ({
   type: types.UPLOAD_IMAGE_IDLE
})

export const uploadImageRequest = (): uploadImageRequestAction => ({
   type: types.UPLOAD_IMAGE_REQUEST
})

export function uploadImage(form: HTMLFormElement) {
   return (dispatch: Dispatch<any>): Promise<any> => {
      dispatch(uploadImageIdle())
      dispatch(uploadImageRequest())
      const accessToken = localStorage.getItem(localStorageItems.TOKEN)
      const formData = new FormData(form)

      const labelsArray = (formData.get('tags') as string).split(/[,\s-]+/)

      labelsArray.forEach((label) => {
         formData.append('labels', label)
      })

      return axios({
         url: endpoints.UPLOAD_IMAGE,
         data: formData,
         method: 'POST',
         baseURL: config.SERVER_URL,
         headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${accessToken}`
         }
      })
         .then(({ data }: AxiosResponse) => {
            dispatch(uploadImageSuccess(data))
            dispatch(getImages())
         })
         .catch((err: AxiosError) => {
            dispatch(uploadImageFailed(err))
         })
   }
}
