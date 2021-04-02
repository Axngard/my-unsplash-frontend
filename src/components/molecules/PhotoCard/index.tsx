// eslint-disable-next-line no-use-before-define
import React from 'react'

/* Styles */
import { ImageContainer, Img, Item } from './styles'

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

   const Trigger = (
      <Item>
         <ImageContainer>
            <Img
               loading="lazy"
               width="300"
               height="300"
               rounded
               src={url}
               alt={`${labels[0]} image by ${username}`}
            />
         </ImageContainer>
      </Item>
   )

   return (
      <ModalPhoto user={username} labels={labels} url={url} trigger={Trigger} />
   )
}

export default PhotoCard
