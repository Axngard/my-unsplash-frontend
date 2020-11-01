import React from 'react'

/* Styles */
import { ImageContainer, Img } from './styles'

/* Components */
import { ModalPhoto } from '@components/organisms'

/* Types */
import { Photo } from '@src/interfaces'

interface Props {
   photo: Photo
}

const PhotoCard = ({ photo }: Props): JSX.Element => {
   /* Destructuring */
   const { labels, url, user } = photo

   const trigger = (
      <ImageContainer>
         <Img
            loading="lazy"
            rounded
            src={url}
            alt={`${labels[0]} image by ${user}`}
         />
      </ImageContainer>
   )

   return <ModalPhoto user={user} labels={labels} url={url} trigger={trigger} />
}

export default PhotoCard
