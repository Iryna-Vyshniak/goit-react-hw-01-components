import styled from 'styled-components';

export const Status = styled.span`
display: block;
margin-left: 1.625rem;
width: 16px;
height: 16px;
border-radius: 50%;
background-color: ${props => {
        return props.isOnline ? 'green' : 'red';
    }}

`;

export const Image = styled.img`
display: block;
margin-left: 2.625rem;
width: 80px;
height: 80px;
border-radius: 8px;
`;


export const Name = styled.p`
  margin-left: 10px;
  color: #9e0202;
  text-shadow: 1px 1px 1px #fff;
  font-size: 16px;
  font-weight: 700;
`;