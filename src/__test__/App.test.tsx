import React from 'react'
import { shallow } from 'enzyme'
import App from '@src/App'

describe('<App />', () => {
   const app = shallow(<App />)

   it('should render without crashing', () => {
      expect(app).toHaveLength(1)
   })

   it('should render with three routes', () => {
      expect(app.find('Route')).toHaveLength(3)
   })

   it('should render with GlobalStyles', () => {
      expect(app.find('ForwardRef(render)')).toHaveLength(1)
   })
})
