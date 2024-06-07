import styled from 'styled-components';

export const ProductCartContainer = styled.div`
  width: 100%;
  height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  img {
    width: auto;
    height: 90%;
    object-fit: cover;
    margin-bottom: 5px;
  }

  button {
    width: 250px;
    opacity: 0.7;
    position: absolute;
    top: 255px;
    display: none;
  }

  &:hover {
    img {
      opacity: 0.8;
    }

    button {
      opacity: 0.85;
      display: flex;
    }
  }

  @media screen and (max-width: 800px) {
    button {
      display: block;
      opacity: 0.9;
      min-width: unset;
      padding: 0 10px;
    }

    &:hover {
      .image {
        opacity: unset;
      }
      button {
        opacity: unset;
      }
    }
  }
`;

export const Footer = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  text-transform: capitalize;
`;
