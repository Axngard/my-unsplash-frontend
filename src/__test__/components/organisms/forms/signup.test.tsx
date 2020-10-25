import React from 'react'
import { shallow, mount } from 'enzyme'
import { SignupForm } from '@components/organisms'
import { create } from 'react-test-renderer'
import ProviderMock from '@src/__mocks__/Provider.mock'

describe('<SignupForm />', () => {
   const signupForm = shallow(<SignupForm />)

   it('should render correctly', () => {
      expect(signupForm).toHaveLength(1)
   })

   it('should render <Header /> with text Signup', () => {
      expect(signupForm.find('Header').contains('Signup')).toBeTruthy()
   })
})

describe('Fullname input', () => {
   it('should capture correctly onChange', () => {
      const wrapper = mount(
         <ProviderMock>
            <SignupForm />
         </ProviderMock>
      )
      let field = wrapper.find('input#fullname')

      field.simulate('change', {
         target: { value: 'test' }
      })

      field = wrapper.find('input#fullname')

      expect(field.props().value).toEqual('test')
   })
})
