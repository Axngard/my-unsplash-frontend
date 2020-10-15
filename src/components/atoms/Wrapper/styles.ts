import styled from '@emotion/styled'

/* Types */
interface Theme {
   breakpoint: string
}

export const WrapperStyled = styled.div`
   width: 100%;
   max-width: ${({ theme }: { theme: Theme }) => theme.breakpoint};
   margin: 0 auto;
   padding: 0 1rem;
`
