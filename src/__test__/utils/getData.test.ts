import axios from 'axios'
import getData from '@src/utils/getData'

jest.mock('axios')

describe('Get Data - Utils', () => {
   it('should return successfully data from an API', (done) => {
      const mockAxios = {
         get: axios.get as jest.Mock
      }
      const mockData = { id: 0, title: '' }

      mockAxios.get.mockImplementationOnce(() => {
         return Promise.resolve({ data: mockData })
      })

      getData('www.myapi.com', { method: 'GET' }).then((data) => {
         expect(data).toEqual(mockData)
         expect(mockAxios.get).toHaveBeenCalledTimes(1)
         done()
      })
   })
})
