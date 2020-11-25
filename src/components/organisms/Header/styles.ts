import styled from '@emotion/styled'
import { colors, screens } from '@src/styles/theme'
import { Link } from 'react-router-dom'

export const Container = styled.header`
   padding: 1.5rem 0;
   box-shadow: 0px 3px 7px ${colors.shadow};
`

export const Grid = styled.div`
   display: flex;
   justify-content: space-between;

   @media (max-width: ${screens.sm}) {
      display: grid;
      grid-row-gap: 1rem;
      grid-template-columns: 1fr;
   }
`

export const LogoContainer = styled(Link)`
   display: flex;
   align-items: center;
`
