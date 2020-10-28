import reducer, { DO_SOMETHING } from '@src/redux/reducer/photos'
import ItemMock from '@src/__mocks__/item.mock'
import initialState from '@src/utils/items'

describe('Reducer', () => {
   it('should return initial state', () => {
      expect(reducer(initialState, { type: 'hola' })).toEqual(initialState)
   })

   /* Testing Reducer Action */
   it('should be this action', () => {
      const payload = ItemMock
      const action = {
         type: DO_SOMETHING,
         payload
      }
      const expected = [...initialState, payload]

      expect(reducer(initialState, action)).toEqual(expected)
   })
})
