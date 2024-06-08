import styled from 'styled-components';

export const DirectoryContainer = styled.div`
  margin: 0 auto;
  overflow: hidden;
  max-width: 1200px;
  height: 100%;
`;

export const DirectoryWrapper = styled.div<{ $index: number }>`
  white-space: nowrap;
  transform: ${(props) => `translate3d(${-props.$index * 100}%,0,0)`};
  transition: ease 1000ms;
`;

export const SlideDots = styled.div`
  text-align: center;
`;

export const SlideDot = styled.div<{ $active?: boolean }>`
  display: inline-block;
  height: 4px;
  width: 24px;
  cursor: pointer;
  margin: 5px;
  background-color: ${(props) => (props.$active ? '#333' : '#ccc')};
`;
