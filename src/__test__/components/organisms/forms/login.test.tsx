import React from 'react'
import { shallow } from 'enzyme'
import { LoginForm } from '@components/organisms'

// Si no importo este Router salta un error por usar Link fuera de un Router

describe('<LoginForm />', () => {
   const loginForm = shallow(<LoginForm />)

   it('should render correctly', () => {
      expect(loginForm).toHaveLength(1)
   })

   it('should render <Header /> with text Login', () => {
      expect(loginForm.find('Header').contains('Login')).toBeTruthy()
   })
})
