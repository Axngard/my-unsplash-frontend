import React from 'react'

/* Redux */
import { useDispatch, useSelector } from 'react-redux'

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
   FormField,
   Image,
   Segment
} from 'semantic-ui-react'

/* Types */
import { State } from '@src/interfaces'
import { uploadImage } from '@src/redux/actions/uploadImage.action'
interface Props {
   trigger: React.ReactNode
}

const ModalAddPhoto = ({ trigger }: Props): JSX.Element => {
   /* States */
   const [open, setOpen] = React.useState(false)
   const [labelValue, setLabelValue] = React.useState('')
   const [photoURL, setPhotoURL] = React.useState('')
   const isInvalid = !labelValue || !photoURL
   const inputImage = React.useRef<HTMLInputElement>(null)
   const { error, status } = useSelector((state: State) => state.uploadImage)
   const dispatch = useDispatch()

   /* Methods */
   const handleSubmit = (/* e: React.FormEvent */) => {
      if (inputImage.current && inputImage.current.form) {
         dispatch(uploadImage(inputImage.current?.form))
      }
   }

   const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault()
      if (e.target.form) {
         const formData = new FormData(e.target.form)
         const file = formData.get('file')

         const image = URL.createObjectURL(file)
         setPhotoURL(image)
      }
   }

   /* Effects */
   React.useEffect(() => {
      if (status === 'success') setOpen(false)
   }, [status])

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
            <Form onSubmit={handleSubmit} error={!!error} method="POST">
               <FormField
                  placeholder="Enter tags"
                  fluid
                  name="tags"
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
               <input
                  onChange={handleUpload}
                  ref={inputImage}
                  type="file"
                  name="file"
                  hidden={true}
               />

               <FormField
                  fluid
                  primary
                  basic
                  content="Upload image"
                  control={Button}
                  icon="upload"
                  id="image"
                  type="button"
                  label="Image"
                  onClick={() => inputImage.current?.click()}
               />
               <Segment tertiary hidden={!photoURL}>
                  <Image
                     centered
                     src={photoURL}
                     size="small"
                     rounded
                     bordered
                  />
               </Segment>

               <Transition visible={!!error} animation="shake" duration={500}>
                  <Message
                     error
                     header={error?.name || 'Error loaded image'}
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
               disabled={isInvalid || status === 'loading'}
               loading={status === 'loading'}
               type="submit"
               onClick={handleSubmit}
            />
         </ModalActions>
      </Modal>
   )
}

export default ModalAddPhoto
