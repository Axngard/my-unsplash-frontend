import styled from '@emotion/styled'
import { colors } from '@src/styles/theme'
import { Image } from 'semantic-ui-react'

export const ImageContainer = styled.figure`
   margin: 0;
   font-size: 14px;
   width: 100%;
   height: 100%;
   box-shadow: 3px 3px 7px ${colors.shadow};
`

export const Img = styled(Image)`
   width: 100%;
   height: 100%;
   object-fit: cover;
   min-height: 200px;
   border: 1px solid ${colors.shadow};
`
