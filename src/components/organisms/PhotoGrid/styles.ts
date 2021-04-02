import styled from '@emotion/styled'

export const Container = styled.section``

export const Grid = styled.ul`
   padding: 2rem 0;
   list-style: none;
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
   grid-template-rows: inherit;
   gap: 1rem;

   @supports (grid-template-rows: masonry) {
      grid-template-rows: masonry;
   }
`
