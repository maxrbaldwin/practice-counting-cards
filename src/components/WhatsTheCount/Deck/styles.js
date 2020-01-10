import styled from '@emotion/styled';

export const Card = styled.div`
  font-size: 300px;
  color: ${props => (props.suit === 'heart' || props.suit === 'diamond' ? 'red' : 'black')};
  display: inline-flex;
`;
