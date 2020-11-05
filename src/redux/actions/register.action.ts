import config from '@src/config'
import axios, { AxiosError } from 'axios'

/* Constants */
import { endpoints } from '@src/constants'

/* Redux */
import { Dispatch } from 'redux'

/* Types */
import { Action } from '@src/interfaces'
export enum types {
   REGISTER_REQUEST = 'REGISTER_REQUEST',
   REGISTER_SUCCESS = "'REGISTER_SUCCESS'",
   REGISTER_FAILED = 'REGISTER_FAILED',
   REGISTER_IDLE = 'REGISTER_IDLE'
}
interface User {
   fullName: string
   username: string
   email: string
   password: string
}

/* Actions */
const registerSuccess = (user: User): Action => ({
   type: types.REGISTER_SUCCESS,
   payload: user
})

const registerFailed = (error: AxiosError): Action => ({
   type: types.REGISTER_FAILED,
   payload: error
})

const registerIdle = (): Action => ({
   type: types.REGISTER_IDLE
})

const registerRequest = (): Action => ({
   type: types.REGISTER_REQUEST
})

export const register = (user: User) => (dispatch: Dispatch): Promise<void> => {
   dispatch(registerIdle())
   dispatch(registerRequest())

   return axios({
      method: 'POST',
      baseURL: config.SERVER_URL,
      url: endpoints.SIGNUP,
      data: user
   })
      .then(({ data }) => {
         dispatch(registerSuccess(data))
      })
      .catch((err: AxiosError) => {
         dispatch(registerFailed(err))
      })
}
