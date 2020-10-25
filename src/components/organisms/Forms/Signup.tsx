import React, { FormEvent, useState } from 'react'
import axios, { AxiosError } from 'axios'

/* Styles */
import { Container, Text, Anchor } from './styles'

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
import { screens } from '@src/styles/theme'

/* Constants */
import { routes } from '@src/constants/routes'
import config from '@src/config'
import handleErrors from '@src/utils/handleErrors'

const Login = (): JSX.Element => {
   /* States */
   const [username, setUsername] = useState('')
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const [fullname, setFullname] = useState('')
   const [error, setError] = useState<AxiosError | null>(null)
   const [success, setSuccess] = useState(false)
   const [loading, setLoading] = useState(false)
   const isInvalid = !username || !email || !password

   /* Methods */
   const handleSubmit = (e: FormEvent) => {
      e.preventDefault()

      setLoading(true)
      setError(null)

      axios({
         method: 'POST',
         baseURL: config.SERVER_URL,
         url: '/api/user',
         data: {
            fullName: fullname,
            username,
            password,
            email
         }
      })
         .then((user) => {
            setSuccess(true)
            console.log(user)
         })
         .catch((err: AxiosError) => {
            setError(err)
            setLoading(false)
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
                  placeholder="Enter your fullname..."
                  error={null}
                  value={fullname}
                  onChange={({
                     target
                  }: React.ChangeEvent<HTMLInputElement>) => {
                     setFullname(target.value)
                  }}
               />
               <FormField
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

               <FormField
                  id="email"
                  control={Input}
                  label="Email"
                  type="email"
                  placeholder="Enter your email..."
                  error={null}
                  value={email}
                  onChange={({
                     target
                  }: React.ChangeEvent<HTMLInputElement>) => {
                     setEmail(target.value)
                  }}
               />

               <FormField
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
                     header={
                        `${error?.response?.data.error}: ${error?.response?.data.statusCode}` ||
                        'Error'
                     }
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
