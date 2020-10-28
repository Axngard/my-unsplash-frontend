import styled from '@emotion/styled'

export const Container = styled.section``
export const Grid = styled.div`
   display: grid;
   padding: 2rem 0;
   grid-template-columns: repeat(auto-fill, minmax(288px, 1fr));
   grid-gap: 1rem;

   figure {
      position: relative;
      margin: 0;
      font-size: 14px;
      border-radius: 5px;
      border-radius: 0.5rem;
      overflow: hidden;
      background-color: rgba(0, 0, 0, 0.2);
      width: 100%;
      height: 100%;
      box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
   }

   figure img {
      width: 100%;
      height: 100%;
      object-fit: cover;
   }
`
