import React, { useRef } from 'react'
import { useSelector } from 'react-redux'

/* Styles */
import { Container, Grid } from './styles'

/* Atoms */
import { Wrapper } from '@components/atoms'
import { State } from '@src/interfaces'
import { screens } from '@src/styles/theme'

const PhotosGrid = (): JSX.Element => {
   const photos = useSelector((state: State) => state.photos)
   const grid = useRef(null)
   return (
      <Container>
         <Wrapper breakpoint={screens.xl}>
            <Grid ref={grid}>
               {photos.map((photo) => (
                  <figure key={photo._id}>
                     <img width="200" height="200" src={photo.url} alt="" />
                  </figure>
               ))}
            </Grid>
         </Wrapper>
      </Container>
   )
}

export default PhotosGrid
