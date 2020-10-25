/* eslint-disable indent */
import { Item } from '@src/interfaces'
import { Action } from 'redux'

export const DO_SOMETHING = 'DO_SOMETHING'

const reducer = (state: Item[] = [], action: Action<string>): Item[] => {
   switch (action.type) {
      case DO_SOMETHING:
         return state

      default:
         return state
   }
}

export default reducer
