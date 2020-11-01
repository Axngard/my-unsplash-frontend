import config from '@src/config'
import { endpoints } from '@src/constants'
import items from '@src/constants/localStorageItems'
import { Action } from '@src/interfaces'
import axios, { AxiosError } from 'axios'
import { verify } from 'jsonwebtoken'
import { Dispatch } from 'redux'

/* Types */
export enum cases {
   LOGIN_REQUEST,
   LOGIN_SUCCESS,
   LOGIN_FAILED,
   LOGIN_IDLE
}

interface User {
   username: string
   password: string
}

/* Actions */
export const loginSuccess = (accessToken: string): Action => ({
   type: cases.LOGIN_SUCCESS,
   payload: accessToken
})

export const loginFailed = (error: AxiosError): Action => ({
   type: cases.LOGIN_FAILED,
   payload: error
})

export const loginIdle = (): Action => ({
   type: cases.LOGIN_IDLE
})

export const loginRequest = (): Action => ({
   type: cases.LOGIN_REQUEST
})

export const login = (user: User) => (dispatch: Dispatch): void => {
   dispatch(loginIdle())
   dispatch(loginRequest())

   axios({
      method: 'POST',
      baseURL: config.SERVER_URL,
      url: endpoints.LOGIN,
      data: user
   })
      .then(({ data }) => {
         const { accessToken } = data
         verify(accessToken, config.JWT_SECRET || '')

         localStorage.setItem(items.TOKEN, accessToken)
         dispatch(loginSuccess(accessToken))
      })
      .catch((err: AxiosError) => {
         dispatch(loginFailed(err))
      })
}
