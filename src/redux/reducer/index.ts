/* eslint-disable indent */
import { Item, Action } from '@src/interfaces'

export const DO_SOMETHING = 'DO_SOMETHING'

const reducer = (state: Item[] = [], action: Action): Item[] => {
   switch (action.type) {
      case DO_SOMETHING:
         return [...state, action.payload]

      default:
         return state
   }
}

export default reducer
