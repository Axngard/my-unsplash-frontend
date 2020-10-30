import React from 'react'

/* Semantic UI */
import {
   Modal,
   ModalContent,
   Image,
   ModalDescription,
   ModalHeader,
   Header,
   List,
   Label,
   ModalActions,
   Button
} from 'semantic-ui-react'

/* Types */
interface Props {
   trigger: React.ReactNode
   url: string
   labels: Array<string>
   user: string
}

const ModalPhoto = ({ trigger, url, labels, user }: Props): JSX.Element => {
   const [open, setOpen] = React.useState<boolean>(false)

   return (
      <Modal
         closeIcon
         onClose={() => setOpen(false)}
         open={open}
         onOpen={() => setOpen(true)}
         trigger={trigger}
         centered={false}
      >
         <ModalHeader>Upload image</ModalHeader>
         <ModalContent image>
            <Image
               alt={`${labels[0]} image by ${user}`}
               size="medium"
               src={url}
            />
            <ModalDescription>
               <Header>{user}</Header>

               <List horizontal>
                  {labels.map((l, i) => {
                     if (l === 'n/a') return
                     return (
                        <List.Item key={i}>
                           <Label>{l}</Label>
                        </List.Item>
                     )
                  })}
               </List>
            </ModalDescription>
         </ModalContent>
         <ModalActions>
            <Button onClick={() => setOpen(false)} content="Cancel" basic />
         </ModalActions>
      </Modal>
   )
}

export default ModalPhoto
