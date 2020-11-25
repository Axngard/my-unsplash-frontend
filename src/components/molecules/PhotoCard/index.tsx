import React from 'react'

/* Styles */
import { ImageContainer, Img } from './styles'

/* Components */
import { ModalPhoto } from '@components/organisms'

/* Types */
import { Image } from '@src/interfaces'

interface Props {
   photo: Image
}

const PhotoCard = ({ photo }: Props): JSX.Element => {
   /* Destructuring */
   const { labels, username, url } = photo

   const trigger = (
      <ImageContainer>
         <Img rounded src={url} alt={`${labels[0]} image by ${username}`} />
      </ImageContainer>
   )

   return (
      <ModalPhoto user={username} labels={labels} url={url} trigger={trigger} />
   )
}

export default PhotoCard
