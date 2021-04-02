// eslint-disable-next-line no-use-before-define
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
import { Loader } from 'semantic-ui-react'

/* Types */
import { State } from '@src/interfaces'

const PhotoGrid = (): JSX.Element => {
   /* States */
   const {
      getImages: {
         data: { images, imagesFiltered },
         status
      }
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
               {status === 'loading' && (
                  <Loader active inline="centered">
                     Preparing Images
                  </Loader>
               )}
               {status === 'success' && !images.length && (
                  <p>Upload an image to see them here.</p>
               )}

               <React.Fragment>
                  {imagesFiltered.length
                     ? imagesFiltered
                        ?.filter((img) => img.url)
                        .slice(0, 20)
                        .map((photo) => (
                           <PhotoCard key={photo._id} photo={photo} />
                        ))
                     : images
                        .slice(0, 20)
                        .map((photo) => (
                           <PhotoCard key={photo._id} photo={photo} />
                        ))}
               </React.Fragment>
            </Grid>
         </Wrapper>
      </Container>
   )
}

export default PhotoGrid
