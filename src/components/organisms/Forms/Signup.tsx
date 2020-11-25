import React from 'react'
import { useHistory } from 'react-router-dom'

/* Styles */
import { Container, Text, Anchor } from './styles'
import { screens } from '@src/styles/theme'

/* Semantic UI */
import {
   Form,
   Header,
   Button,
   Input,
   Message,
   Transition,
   FormField
} from 'semantic-ui-react'

/* Molecules */
import { Wrapper } from '@components/atoms'

/* Constants */
import { routes } from '@src/constants'

/* Utils */
import handleErrors from '@src/utils/handleErrors'

/* Redux */
import { useDispatch, useSelector } from 'react-redux'
import { register } from '@src/redux/actions/register.action'

/* Types */
import { State } from '@src/interfaces'

const Login = (): JSX.Element => {
   /* States */
   const dispatch = useDispatch()
   const [user, setUser] = React.useState({
      username: '',
      email: '',
      password: '',
      fullName: ''
   })
   const { error, status } = useSelector((state: State) => state.register)
   const isInvalid = !user.username || !user.email || !user.password
   const history = useHistory()

   /* Methods */
   const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault()
      dispatch(register(user))
   }

   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setUser({
         ...user,
         [e.target.name]: e.target.value
      })
   }

   /* Effects */
   React.useEffect(() => {
      if (status === 'success') history.push(routes.LOGIN)
   }, [status])

   return (
      <Container>
         <Wrapper breakpoint={screens.xs}>
            <Form
               success={status === 'success'}
               error={!!error}
               onSubmit={handleSubmit}
            >
               <Header as="h2">Signup</Header>
               <FormField
                  id="fullname"
                  control={Input}
                  label="Fullname"
                  type="text"
                  name="fullName"
                  placeholder="Enter your fullname..."
                  error={null}
                  onChange={handleChange}
               />
               <FormField
                  id="username"
                  control={Input}
                  label="Username"
                  type="text"
                  name="username"
                  placeholder="Enter your username..."
                  error={null}
                  onChange={handleChange}
               />

               <FormField
                  id="email"
                  control={Input}
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="Enter your email..."
                  error={null}
                  onChange={handleChange}
               />

               <FormField
                  id="password"
                  control={Input}
                  label="Password"
                  name="password"
                  type="password"
                  placeholder="Enter your password..."
                  error={null}
                  onChange={handleChange}
               />
               <Transition visible={!!error} animation="shake" duration={500}>
                  <Message
                     error
                     header={`${error?.response?.data.error || 'Error'}: ${
                        error?.response?.data.statusCode || 500
                     }`}
                     content={handleErrors(error?.response?.data.message || [])}
                  />
               </Transition>

               <Transition
                  visible={status === 'success'}
                  animation="fade"
                  duration={500}
               >
                  <Message
                     success
                     header="User registered"
                     content="You have been successfully registered."
                  />
               </Transition>

               <Button
                  loading={status === 'loading'}
                  disabled={isInvalid || status === 'loading'}
                  fluid
                  primary
                  type="submit"
               >
                  Signup
               </Button>

               <Text>
                  I have already an <Anchor to={routes.LOGIN}>account</Anchor>.
               </Text>
            </Form>
         </Wrapper>
      </Container>
   )
}

export default Login
