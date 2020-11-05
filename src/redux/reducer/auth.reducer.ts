/* eslint-disable indent */
import { AxiosError } from 'axios'
import { verify } from 'jsonwebtoken'
import config from '@src/config'

/* Redux */
import { types } from '../actions/auth.action'

/* Contantans */
import { reducerStatuses as status } from '@src/constants'
import items from '@src/constants/localStorageItems'

/* Types */
import { Action } from '@src/interfaces'
interface State {
   data: {
      loggedIn: boolean
   }
   status: status
   error: null | Error | AxiosError
}

let isLogged

try {
   isLogged = verify(
      localStorage.getItem(items.TOKEN) || '',
      config.JWT_SECRET || ''
   )
} catch (err) {
   isLogged = false
   localStorage.removeItem(items.TOKEN)
}

const initialState: State = {
   data: { loggedIn: !!isLogged },
   status: status.IDLE,
   error: null
}

function authenticationReducer(
   state = initialState,
   { type, payload }: Action
): State {
   switch (type) {
      case types.LOGIN_REQUEST:
         return {
            ...state,
            status: status.LOADING
         }
      case types.LOGIN_SUCCESS:
         return {
            ...state,
            status: status.SUCCESS,
            data: { loggedIn: true }
         }
      case types.LOGIN_FAILED:
         return {
            ...state,
            status: status.FAILED,
            data: { loggedIn: false },
            error: payload
         }
      case types.LOGIN_IDLE: {
         return {
            ...state,
            status: status.IDLE,
            error: null
         }
      }
      default:
         return state
   }
}

export default authenticationReducer
