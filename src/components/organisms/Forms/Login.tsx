import React, { FormEvent, useState } from 'react'
import axios, { AxiosError } from 'axios'

/* Config */
import config from '@src/config'

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
import { routes, endpoints, localStorageItems as item } from '@src/constants'

/* Utils */
import handleErrors from '@src/utils/handleErrors'

const Login = (): JSX.Element => {
   /* States */
   const [error, setError] = useState<AxiosError | null>(null)
   const [loading, setLoading] = useState(false)
   const [user, setUser] = useState({
      username: '',
      password: ''
   })
   const isInvalid = !user.password || !user.username

   /* Methods */
   const handleSubmit = (e: FormEvent) => {
      e.preventDefault()

      setLoading(true)
      setError(null)

      axios({
         method: 'POST',
         baseURL: config.SERVER_URL,
         url: endpoints.LOGIN,
         data: user
      })
         .then(({ data }) => {
            localStorage.setItem(item.TOKEN, data.accessToken)
            window.location.reload()
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
            <Form error={!!error} onSubmit={handleSubmit} method="POST">
               <Header as="h2">Login</Header>
               <FormField
                  name="username"
                  id="username"
                  control={Input}
                  label="Username"
                  type="text"
                  placeholder="Enter your username..."
                  error={null}
                  onChange={handleChange}
               />

               <FormField
                  id="password"
                  control={Input}
                  name="password"
                  label="Password"
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
                     content={handleErrors(error?.response?.data.message)}
                  />
               </Transition>

               <Button
                  loading={loading}
                  disabled={isInvalid || loading}
                  fluid
                  primary
                  type="submit"
               >
                  Login
               </Button>

               <Text>
                  I don&apos;t have an{' '}
                  <Anchor to={routes.SIGNUP}>account</Anchor> yet.
               </Text>
            </Form>
         </Wrapper>
      </Container>
   )
}

export default Login
