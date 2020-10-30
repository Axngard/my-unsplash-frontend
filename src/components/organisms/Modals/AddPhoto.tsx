import React, { useState } from 'react'

/* Semantic UI */
import {
   Modal,
   Input,
   Form,
   Button,
   Message,
   Transition,
   ModalActions,
   ModalContent,
   ModalHeader,
   FormField
} from 'semantic-ui-react'

/* Types */
interface Props {
   trigger: React.ReactNode
}

const ModalAddPhoto = ({ trigger }: Props): JSX.Element => {
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
         centered={false}
         onOpen={() => setOpen(true)}
         onClose={() => setOpen(false)}
         open={open}
         trigger={trigger}
         size="tiny"
      >
         <ModalHeader>Add a new photo</ModalHeader>
         <ModalContent>
            <Form error={!!error} method="POST">
               <FormField
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

               <FormField
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
         </ModalContent>

         <ModalActions>
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
         </ModalActions>
      </Modal>
   )
}

export default ModalAddPhoto
