import React from 'react'
import { shallow } from 'enzyme'
import { SignupForm } from '@components/organisms'

describe('<SignupForm />', () => {
   const signupForm = shallow(<SignupForm />)

   it('should render correctly', () => {
      expect(signupForm).toHaveLength(1)
   })

   it('should render <Header /> with text Signup', () => {
      expect(signupForm.find('Header').contains('Signup')).toBeTruthy()
   })
})
