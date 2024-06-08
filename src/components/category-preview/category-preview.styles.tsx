import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const CategoryPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 30px auto;
`;

export const Title = styled(Link)`
  font-size: 28px;
  margin-bottom: 25px;
  cursor: pointer;
`;

export const Preview = styled.div`
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
