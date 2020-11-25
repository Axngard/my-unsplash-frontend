import styled from '@emotion/styled'
import { colors, animations, screens } from '@src/styles/theme'
import { Image } from 'semantic-ui-react'

export const ImageContainer = styled.figure`
   cursor: pointer;
   margin: 0;
   width: 25%;
   box-shadow: 3px 3px 7px ${colors.shadow};
   transition: filter ${animations.normal};

   @media (max-width: ${screens.lg}) {
      width: 33.33333%;
   }

   @media (max-width: ${screens.md}) {
      width: 50%;
   }

   @media (max-width: ${screens.sm}) {
      width: 100%;
   }

   &:hover {
      filter: brightness(0.7);
   }
`

export const Img = styled(Image)`
   width: 100%;
   height: 100%;
   object-fit: cover;
   border: 1px solid ${colors.shadow};
`
