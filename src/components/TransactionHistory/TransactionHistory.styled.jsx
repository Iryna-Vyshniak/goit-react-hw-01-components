import styled from 'styled-components';

export const Table = styled.table`
  margin: 0 auto;
  margin-bottom: ${props => props.theme.space[5]}px;
  padding: ${props => props.theme.space[4]}px;
 
  max-width: 90%;
  width: 90%;
  border-radius: ${props => props.theme.radii.medium};
  box-shadow: -0.0625rem -0.0625rem 0.0625rem #fff,
    0.0625rem 0.0625rem 0.0625rem #babecc;
`;

export const Thead = styled.thead`
  border-radius: ${props => props.theme.radii.medium};
  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.accent};
  text-shadow: 0.0625rem 0.0625rem 0.0625rem #fff;
  font-family: ${props => props.theme.fonts.heading};
  font-size: 1rem;
  text-transform: uppercase;
`;

export const Tr = styled.tr`
  :hover {
   background-color: rgb(115, 120, 175);
-webkit-box-shadow: 0 6px 6px -6px #0E1119;
     -moz-box-shadow: 0 6px 6px -6px #0E1119;
          box-shadow: 0 6px 6px -6px #0E1119;
           color: #ffffff;
    text-shadow: .0625rem .0625rem .0625rem #400075;
`;

export const ExtendedTr = styled(Tr)`
  background-color: ${props =>
    props.idx % 2 === 0 ? props.theme.colors.muted : 'transparent'};
`;

// :nth-child(even) {
//     background-color: #e9edff;
//   }

//   :nth-child(odd) {
//     border: 0.1875rem solid #e9edff;
//     border-radius: 0.5rem;
//     background-color: transparent;
//   }

export const Th = styled.th`
  padding: 0.5rem 0;
  padding-left: ${props => props.theme.space[4]}px;
  text-align: left;

  :first-child {
    border-top-left-radius: ${props => props.theme.radii.medium};
  }

  :last-child {
    border-top-right-radius: ${props => props.theme.radii.medium};
  }
`;

export const Tb = styled.tbody`
  background-color: ${props => props.theme.colors.white};
`;

export const Td = styled.td`
  padding-left: ${props => props.theme.space[4]}px;
  border-right: 0.125rem solid #e9edff;

  :hover {
    background-color: ${props => props.theme.colors.background};
    color: #400075;
    text-shadow: 0.0625rem 0.0625rem 0.0625rem #fff;
    font-weight: ${props => props.theme.fontWeights.bold}px;

    box-shadow: rgb(115, 120, 175) -1px 1px, rgb(115, 120, 175) -2px 2px,
      rgb(115, 120, 175) -3px 3px, rgb(115, 120, 175) -4px 4px,
      rgb(115, 120, 175) -5px 5px, rgb(115, 120, 175) -6px 6px;
    transform: translate3d(6px, -6px, 0);

    transition-delay: 0s;
    transition-duration: 0.4s;
    transition-property: all;
    transition-timing-function: line;
  }
`;

export const Type = styled(Td)`
  text-transform: capitalize;
`;
