import React from 'react'

/* Styles */
import { ImageContainer, Img } from './styles'

/* Semantic UI */

/* Types */
import { Photo } from '@src/interfaces'

interface Props {
   photo: Photo
}

const PhotoCard = ({ photo }: Props): JSX.Element => {
   return (
      <ImageContainer key={photo._id}>
         <Img rounded src={photo.url} alt={`${photo.labels[0]} image`} />
      </ImageContainer>
   )
}

export default PhotoCard
