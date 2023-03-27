import styled from 'styled-components';

export const FriendsList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;

  margin: 0 auto;
  padding: 0;
  list-style: none;
  margin-bottom: ${props => props.theme.space[5]}px;
`;
