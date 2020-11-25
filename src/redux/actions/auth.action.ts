import config from '@src/config'
import { verify } from 'jsonwebtoken'
import axios, { AxiosError } from 'axios'

/* Redux */
import { Dispatch } from 'redux'

/* Constants */
import { endpoints } from '@src/constants'
import items from '@src/constants/localStorageItems'

/* Types */
export enum types {
   LOGIN_REQUEST = 'LOGIN_REQUEST',
   LOGIN_SUCCESS = 'LOGIN_SUCCESS,',
   LOGIN_FAILED = 'LOGIN_FAILED',
   LOGIN_IDLE = 'LOGIN_IDLE'
}

interface User {
   username: string
   password: string
}

interface loginSuccessAction {
   type: typeof types.LOGIN_SUCCESS
   payload: string
}

interface loginFailedAction {
   type: typeof types.LOGIN_FAILED
   payload: AxiosError
}

interface loginIdleAction {
   type: typeof types.LOGIN_IDLE
}

interface loginRequestAction {
   type: typeof types.LOGIN_REQUEST
}

export type loginActions =
   | loginFailedAction
   | loginIdleAction
   | loginRequestAction
   | loginSuccessAction

/* Actions */
export const loginSuccess = (accessToken: string): loginSuccessAction => ({
   type: types.LOGIN_SUCCESS,
   payload: accessToken
})

export const loginFailed = (error: AxiosError): loginFailedAction => ({
   type: types.LOGIN_FAILED,
   payload: error
})

export const loginIdle = (): loginIdleAction => ({
   type: types.LOGIN_IDLE
})

export const loginRequest = (): loginRequestAction => ({
   type: types.LOGIN_REQUEST
})

export const login = (user: User) => (dispatch: Dispatch): Promise<void> => {
   dispatch(loginIdle())
   dispatch(loginRequest())

   return axios({
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
