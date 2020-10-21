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
   Transition
} from 'semantic-ui-react'

/* Molecules */
import { Wrapper } from '@components/atoms'

/* Constants */
import { routes } from '@src/constants/routes'

/* Utils */
import handleErrors from '@src/utils/handleErrors'

const Login = (): JSX.Element => {
   /* Destructuring */
   const { Field } = Form

   /* States */
   const [username, setUsername] = useState('')
   const [password, setPassword] = useState('')
   const [error, setError] = useState<AxiosError | null>(null)
   const [loading, setLoading] = useState(false)
   const [success, setSuccess] = useState(false)
   const isInvalid = !username || !password

   /* Methods */
   const handleSubmit = (e: FormEvent) => {
      e.preventDefault()

      setLoading(true)
      setError(null)

      axios({
         method: 'POST',
         baseURL: config.SERVER_URL,
         url: '/api/auth/login',
         data: {
            username,
            password
         }
      })
         .then((user) => {
            setSuccess(true)
            console.log(user)
         })
         .catch((err: AxiosError) => {
            setError(err)
            setLoading(false)
            console.log(error?.response?.data)
         })
   }

   return (
      <Container>
         <Wrapper breakpoint={screens.xs}>
            <Form
               success={success}
               error={!!error}
               onSubmit={handleSubmit}
               method="POST"
            >
               <Header as="h2">Login</Header>
               <Field
                  id="username"
                  control={Input}
                  label="Username"
                  type="text"
                  placeholder="Enter your username..."
                  error={null}
                  value={username}
                  onChange={({
                     target
                  }: React.ChangeEvent<HTMLInputElement>) => {
                     setUsername(target.value)
                  }}
               />

               <Field
                  id="password"
                  control={Input}
                  label="Password"
                  type="password"
                  placeholder="Enter your password..."
                  error={null}
                  value={password}
                  onChange={({
                     target
                  }: React.ChangeEvent<HTMLInputElement>) => {
                     setPassword(target.value)
                  }}
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
