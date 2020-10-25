import React, { useState } from 'react'

/* Semantic UI */
import {
   Modal,
   Input,
   Form,
   Button,
   Message,
   Transition
} from 'semantic-ui-react'

/* Types */
interface Props {
   trigger: React.ReactNode
}

const ModalAddPhoto = ({ trigger }: Props): JSX.Element => {
   /* Destructuting */
   const { Header, Content, Actions } = Modal
   const { Field } = Form

   /* States */
   const [open, setOpen] = useState(false)
   const [labelValue, setLabelValue] = useState('')
   const [photoURL, setPhotoURL] = useState('')
   const [error, setError] = useState<Error | null>(null)
   const [loading, setLoading] = useState(false)
   const isInvalid = !labelValue || !photoURL

   /* Methods */
   const HandleSubmit = () => {
      setError(null)
      setLoading(true)
      setTimeout(() => {
         setError(new Error('Error testing'))
         setLoading(false)
      }, 1000)
   }

   return (
      <Modal
         onOpen={() => setOpen(true)}
         onClose={() => setOpen(false)}
         open={open}
         trigger={trigger}
         size="tiny"
      >
         <Header>Add a new photo</Header>
         <Content>
            <Form error={!!error} method="POST">
               <Field
                  placeholder="Enter tags"
                  fluid
                  icon="tags"
                  iconPosition="left"
                  type="text"
                  control={Input}
                  label="Label"
                  id="label"
                  value={labelValue}
                  onChange={({ target }: React.ChangeEvent<HTMLInputElement>) =>
                     setLabelValue(target.value)
                  }
               />

               <Field
                  control={Input}
                  placeholder="www.myimage.com"
                  fluid
                  icon="image"
                  iconPosition="left"
                  type="text"
                  label="Photo URL"
                  id="url"
                  value={photoURL}
                  onChange={({ target }: React.ChangeEvent<HTMLInputElement>) =>
                     setPhotoURL(target.value)
                  }
               />
               <Transition visible={!!error} animation="shake" duration={500}>
                  <Message
                     error
                     header={error?.name || 'Error loading image'}
                     content={error?.message}
                  />
               </Transition>
            </Form>
         </Content>

         <Actions>
            <Button onClick={() => setOpen(false)} content="Cancel" basic />
            <Button
               content="Submit"
               labelPosition="right"
               icon="checkmark"
               positive
               disabled={isInvalid || loading}
               onClick={HandleSubmit}
               loading={loading}
            />
         </Actions>
      </Modal>
   )
}

export default ModalAddPhoto
