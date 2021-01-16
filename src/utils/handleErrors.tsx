import React from 'react'

/* Semantic UI */
import { List } from 'semantic-ui-react'

const handleErrors = (array: Array<string> | string): JSX.Element => {
   /* Destructuring */
   const { Item } = List

   if (typeof array === 'string' && array.length) {
      if (array === 'user_duplicated') {
         return <span>User already exists</span>
      }

      if (array === 'verify_credentials') {
         return <span>Credentials invalid</span>
      }

      if (array === 'weak_password') {
         return <span>Your password is insecure</span>
      }

      if (array === 'mimetype_not_allowed') {
         return <span>This format is invalid</span>
      }

      return <span>{array}</span>
   }

   if (typeof array === 'object') {
      return (
         <List bulleted>
            {array.map((e, i) => (
               <Item key={i}>{e}</Item>
            ))}
         </List>
      )
   }

   return <span>Internal Server Error</span>
}

export default handleErrors
