import styled from 'styled-components';

export const BackgroundImage = styled.div<{ $imageUrl: string }>`
  width: auto;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: ${(props) => `url(${props.$imageUrl})`};
`;

export const Body = styled.div`
  position: absolute;
  height: 100%;
  width: 50%;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;

  h2 {
    font-weight: bold;
    margin: 0;
    font-size: 28px;
    text-transform: uppercase;
  }

  p {
    font-weight: lighter;
    font-size: 16px;
  }
`;

export const DirectoryItemContainer = styled.div`
  display: inline-block;
  height: 80vh;
  width: 100%;

  &:hover {
    cursor: pointer;
  }
`;
