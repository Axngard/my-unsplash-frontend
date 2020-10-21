import styled from '@emotion/styled'
import { screens } from '@src/styles/theme'
import { Link } from 'react-router-dom'

export const Container = styled.header`
   padding: 1.5rem 0;
   box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
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
