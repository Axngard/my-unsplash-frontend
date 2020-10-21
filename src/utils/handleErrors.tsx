import React from 'react'
import { List } from 'semantic-ui-react'

const handleErrors = (array: Array<string>): JSX.Element => {
   /* Destructuring */
   const { Item } = List
   return (
      <List bulleted>
         {array.map((e, i) => (
            <Item key={i}>{e}</Item>
         ))}
      </List>
   )
}

export default handleErrors
