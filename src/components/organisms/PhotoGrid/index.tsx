import React from 'react'
import { useSelector } from 'react-redux'

/* Styles */
import { Container, Grid } from './styles'
import { screens } from '@src/styles/theme'

/* Components */
import { Wrapper } from '@components/atoms'
import { PhotoCard } from '@components/molecules'

/* Types */
import { State } from '@src/interfaces'

const PhotoGrid = (): JSX.Element => {
   const photos = useSelector((state: State) => state.photos)
   return (
      <Container>
         <Wrapper breakpoint={screens.xl}>
            <Grid>
               {photos.map((photo) => (
                  <PhotoCard key={photo._id} photo={photo} />
               ))}
            </Grid>
         </Wrapper>
      </Container>
   )
}

export default PhotoGrid
