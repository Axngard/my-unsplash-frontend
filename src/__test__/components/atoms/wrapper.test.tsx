import React from 'react'
import { Wrapper } from '@components/atoms'
import { shallow } from 'enzyme'
import { create } from 'react-test-renderer'

describe('<Wrapper />', () => {
   const children = <h1>Testing</h1>
   const wrapper = shallow(<Wrapper>{children}</Wrapper>)

   it('should render without crashing', () => {
      expect(wrapper).toHaveLength(1)
   })

   it('should match snapshot', () => {
      const wrapper = create(<Wrapper>{children}</Wrapper>)

      expect(wrapper.toJSON()).toMatchSnapshot()
   })

   it('should render children', () => {
      expect(wrapper.find('h1').text()).toEqual('Testing')
   })
})
