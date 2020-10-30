import styled from '@emotion/styled'
import { colors, animations } from '@src/styles/theme'
import { Image } from 'semantic-ui-react'

export const ImageContainer = styled.figure`
   cursor: pointer;
   margin: 0;
   width: 100%;
   height: 100%;
   box-shadow: 3px 3px 7px ${colors.shadow};
   transition: filter ${animations.normal};

   &:hover {
      filter: brightness(0.7);
   }
`

export const Img = styled(Image)`
   position: absolute;
   top: 0;
   width: 100%;
   height: 100%;
   object-fit: cover;
   min-height: 200px;
   border: 1px solid ${colors.shadow};
`
