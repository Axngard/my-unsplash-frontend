import React, { FormEvent, useState } from 'react'

/* Styles */
import { Container, Text, Anchor } from './styles'

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
import { screens } from '@src/styles/theme'

/* Constants */
import { routes } from '@src/constants/routes'

const Login = (): JSX.Element => {
   /* Destructuring */
   const { Field } = Form

   /* States */
   const [username, setUsername] = useState('')
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const [error, setError] = useState<Error | null>(null)
   const [loading, setLoading] = useState(false)
   const isInvalid = !username || !email || !password

   /* Methods */
   const handleSubmit = (e: FormEvent) => {
      e.preventDefault()

      setLoading(true)
      setError(null)
      setTimeout(() => {
         setLoading(false)
         setError(new Error('This is an error for testing'))
      }, 2000)
   }

   return (
      <Container>
         <Wrapper breakpoint={screens.xs}>
            <Form
               error={!!error}
               onSubmit={handleSubmit}
               action="/auth/login"
               method="POST"
            >
               <Header as="h2">Signup</Header>
               <Field
                  id="username"
                  control={Input}
                  label="Username"
                  type="text"
                  placeholder="Your username..."
                  error={null}
                  value={username}
                  onChange={({
                     target
                  }: React.ChangeEvent<HTMLInputElement>) => {
                     setUsername(target.value)
                  }}
               />

               <Field
                  id="email"
                  control={Input}
                  label="Email"
                  type="email"
                  placeholder="Your email..."
                  error={null}
                  value={email}
                  onChange={({
                     target
                  }: React.ChangeEvent<HTMLInputElement>) => {
                     setEmail(target.value)
                  }}
               />

               <Field
                  id="password"
                  control={Input}
                  label="Password"
                  type="password"
                  placeholder="Your password..."
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
                     header={error?.name}
                     content={error?.message}
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
