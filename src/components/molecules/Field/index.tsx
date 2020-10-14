import React from 'react'

/* Semantic UI */
import { Form } from 'semantic-ui-react'

/* Types */
interface FieldProps {
   children: React.ReactNode
   type: 'text' | 'email'
   placeholder: string
}

const Field = ({ children, type, placeholder }: FieldProps): JSX.Element => {
   const { Field } = Form
   return (
      <Field>
         <label htmlFor="">{children}</label>
         <input placeholder={placeholder} type={type} />
      </Field>
   )
}

export default Field
