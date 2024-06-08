import styled from 'styled-components';

export const CategoryContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 15px;
  max-width: 1400px;
  margin: 0 auto;

  @media screen and (min-width: 576px) {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 10px;
  }
  @media screen and (min-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const Title = styled.h2`
  font-size: 28px;
  margin-bottom: 25px;
  text-align: center;
`;
