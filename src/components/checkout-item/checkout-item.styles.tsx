import styled from 'styled-components';

export const CheckoutItemContainer = styled.div`
  width: 100%;
  min-height: 100px;
  display: flex;
  align-items: center;
  gap: 10px;
  border-bottom: 1px solid darkgrey;
  padding: 5px 0;
`;

export const ImageContainer = styled.div`
  width: 18%;
  img {
    width: 100%;
    height: 100%;
  }
`;

export const BaseSpan = styled.span`
  width: 23%;
`;

export const Quantity = styled.span`
  display: flex;
  width: 18%;
`;

export const Arrow = styled.div`
  cursor: pointer;
`;

export const Value = styled.span`
  margin: 0 10px;
`;

export const RemoveButton = styled.div`
  padding-left: 12px;
  cursor: pointer;
`;
