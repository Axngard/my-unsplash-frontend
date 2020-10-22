import React from 'react'

/* Semantic UI */
import { List } from 'semantic-ui-react'

const handleErrors = (array: Array<string> | string): JSX.Element => {
   /* Destructuring */
   const { Item } = List

   if (typeof array === 'string') {
      if (array === 'user_duplicated') {
         return <span>User already exists</span>
      }

      if (array === 'verify_credentials') {
         return <span>Credentials invalid</span>
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
