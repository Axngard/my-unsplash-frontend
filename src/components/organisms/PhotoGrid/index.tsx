import React from 'react'
import { useSelector } from 'react-redux'

/* Styles */
import { Container, Grid } from './styles'
import { screens } from '@src/styles/theme'

/* Components */
import { Wrapper } from '@components/atoms'
import { PhotoCard } from '@components/molecules'
import Masonry from 'react-masonry-component'

/* Types */
import { State } from '@src/interfaces'

const PhotoGrid = (): JSX.Element => {
   const photos = useSelector((state: State) => state.photos)
   return (
      <Container>
         <Wrapper breakpoint={screens.xl}>
            <Grid>
               <Masonry>
                  {photos.map((photo) => (
                     <PhotoCard key={photo._id} photo={photo} />
                  ))}
               </Masonry>
            </Grid>
         </Wrapper>
      </Container>
   )
}

export default PhotoGrid
