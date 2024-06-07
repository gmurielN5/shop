import styled from 'styled-components';

export const CheckoutContainer = styled.div`
  max-width: 900px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px auto;
`;

export const CheckoutHeader = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  gap: 10px;
  border-bottom: 1px solid darkgrey;
`;

export const HeaderBlock = styled.div`
  text-transform: capitalize;
  text-align: left;
  width: 23%;
  &:last-child {
    width: 8%;
  }
`;

export const SmallBlock = styled.div`
  text-transform: capitalize;
  text-align: left;
  width: 18%;
`;

export const Total = styled.span`
  margin-top: 10px;
  margin-left: auto;
  font-size: 24px;
`;
