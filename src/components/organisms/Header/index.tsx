import React from 'react'
import { Link } from 'react-router-dom'

/* Styles */
import { Container, Grid } from './styles'
import { screens } from '@src/styles/theme'

/* Atoms */
import { Wrapper } from '@components/atoms'

/* Semantic UI */
import { Input, Button, Header as Title } from 'semantic-ui-react'

/* Organisms */
import { ModalAddPhoto } from '@components/organisms'

const Header = (): JSX.Element => {
   return (
      <Container>
         <Wrapper breakpoint={screens.xl}>
            <Grid>
               <Link to="/">
                  <Title
                     textAlign="left"
                     as="h1"
                     subheader="You favorites photos"
                     content="My Unsplash"
                     icon="picture"
                     size="medium"
                  />
               </Link>

               <Input
                  icon="search"
                  iconPosition="left"
                  placeholder="Search by..."
                  size="small"
               />
               <ModalAddPhoto trigger={<Button positive>Add a photo</Button>} />
            </Grid>
         </Wrapper>
      </Container>
   )
}

export default Header
