/* eslint-disable indent */
import { Action } from '@src/interfaces'

/* Consttans */
import { reducerStatuses as status } from '@src/constants'

/* Axios */
import { AxiosError } from 'axios'

/* Types */
import { types } from '@src/redux/actions/register.action'
interface State {
   data: null
   status: status
   error: null | Error | AxiosError
}

/* Initial State */
const initialState: State = {
   data: null,
   status: status.IDLE,
   error: null
}

/* Reducer */
function registerReducer(
   state = initialState,
   { type, payload }: Action
): State {
   switch (type) {
      case types.REGISTER_IDLE:
         return {
            ...state,
            error: null,
            status: status.IDLE
         }
      case types.REGISTER_SUCCESS:
         return {
            ...state,
            status: status.SUCCESS
         }
      case types.REGISTER_REQUEST:
         return {
            ...state,
            status: status.LOADING,
            data: payload
         }
      case types.REGISTER_FAILED:
         return {
            ...state,
            status: status.FAILED,
            error: payload
         }
      default:
         return state
   }
}

export default registerReducer
