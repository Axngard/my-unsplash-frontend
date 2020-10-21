import React from 'react'
import { List } from 'semantic-ui-react'

const handleErrors = (array: Array<string> | string): JSX.Element => {
   /* Destructuring */
   const { Item } = List

   if (!array.length) {
      return <span>Internal Server Error</span>
   }

   if (typeof array === 'string') {
      if (array === 'user_duplicated') {
         return <span>User already exists</span>
      }

      return <span>{array}</span>
   }

   return (
      <List bulleted>
         {array.map((e, i) => (
            <Item key={i}>{e}</Item>
         ))}
      </List>
   )
}

export default handleErrors
