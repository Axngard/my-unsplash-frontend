import React, { FormEvent, useState } from 'react'
import { useHistory } from 'react-router-dom'

/* Axios */
import axios, { AxiosError } from 'axios'

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
import { routes, endpoints } from '@src/constants'

/* Config */
import config from '@src/config'

/* Utils */
import handleErrors from '@src/utils/handleErrors'

const Login = (): JSX.Element => {
   /* States */
   const [error, setError] = useState<AxiosError | null>(null)
   const [success, setSuccess] = useState(false)
   const [loading, setLoading] = useState(false)
   const [user, setUser] = useState({
      username: '',
      email: '',
      password: '',
      fullName: ''
   })
   const isInvalid = !user.username || !user.email || !user.password
   const history = useHistory()

   /* Methods */
   const handleSubmit = (e: FormEvent) => {
      e.preventDefault()

      setLoading(true)
      setError(null)

      axios({
         method: 'POST',
         baseURL: config.SERVER_URL,
         url: endpoints.SIGNUP,
         data: user
      })
         .then(() => {
            setSuccess(true)
            history.replace('/login')
         })
         .catch((err: AxiosError) => {
            setError(err)
            setLoading(false)
         })
   }

   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setUser({
         ...user,
         [e.target.name]: e.target.value
      })
   }

   return (
      <Container>
         <Wrapper breakpoint={screens.xs}>
            <Form success={success} error={!!error} onSubmit={handleSubmit}>
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

               <Transition visible={success} animation="fade" duration={500}>
                  <Message
                     success
                     header="User registered"
                     content="You have been successfully registered."
                  />
               </Transition>

               <Button
                  loading={loading}
                  disabled={isInvalid || loading}
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
