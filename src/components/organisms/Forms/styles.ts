import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

export const Container = styled.section`
   padding: 10rem 0;
`

export const Text = styled.p`
   text-align: center;
`

export const Anchor = styled(Link)`
   &:hover {
      text-decoration: underline;
   }
`
