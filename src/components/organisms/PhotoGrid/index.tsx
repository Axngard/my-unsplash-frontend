import React from 'react'

/* Redux */
import { useDispatch, useSelector } from 'react-redux'
import { getImages } from '@src/redux/actions/getImages.action'

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
   /* States */
   const {
      getImages: { data: images, status }
   } = useSelector((state: State) => state)
   const dispatch = useDispatch()

   /* Life circle */
   React.useEffect(() => {
      dispatch(getImages())
   }, [])

   return (
      <Container>
         <Wrapper breakpoint={screens.xl}>
            <Grid>
               {status === 'loading' && <p>Loading...</p>}
               <Masonry>
                  {images
                     ?.filter((img) => img.url)
                     .map((photo) => (
                        <PhotoCard key={photo._id} photo={photo} />
                     ))}
               </Masonry>
            </Grid>
         </Wrapper>
      </Container>
   )
}

export default PhotoGrid
