import styled from 'styled-components';

export const Table = styled.table`
margin: 0 auto;
  max-width: 100%;
  width: 27.5rem;
  margin-bottom: 1.875rem;
   border-radius: .5rem;
  box-shadow: -0.0625rem -0.0625rem .0625rem #fff, .0625rem .0625rem .0625rem #babecc;
`;


export const Thead = styled.thead`
 border-radius: .5rem;
  background-color: #e9edff;
  color: #9e0202;
  text-shadow: .0625rem .0625rem .0625rem #fff;
  font-size: 1rem;
  font-weight: 400;
  text-transform: uppercase;
`;


export const Tr = styled.tr`
text-align: left;
  padding-right: 1.5rem;


  :nth-child(even){
background-color: #e9edff;
}

:nth-child(odd){
border: .1875rem solid #e9edff;
border-radius: .5rem;
background-color: transparent;
}
`;


export const Th = styled.th`
  padding: .5rem 0;

  :first-child {
border-top-left-radius: 0.5em;
}

  :last-child {
border-top-right-radius: 0.5em;
}
`;

export const Tb = styled.tbody`
text-align: center;
`;

export const Td = styled.td`
  border-right: .125rem solid #e9edff;
`;

export const Type = styled(Td)`
  text-transform: capitalize;
`;