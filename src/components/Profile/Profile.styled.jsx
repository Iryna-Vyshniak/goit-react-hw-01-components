import styled from 'styled-components';

export const ProfileCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  
  margin: 0 auto;
  margin-bottom: 32px;
  padding: 8px;

  max-width: 100%;
  width: 360px;
  
  border-radius: 4px;
  box-shadow: -1px -1px 1px #fff, 1px 1px 1px #babecc;
  background-color: #e9edff;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 30px;
`;

export const Avatar = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 20px;

  height: 150px;
  width: 150px;
  border-radius: 50%;
  box-shadow: -3px -3px 7px #ffffff, 3px 3px 5px #ceced1;

  &:hover {
    background: #ecf0f3;
    box-shadow: inset -3px -3px 7px #ffffff, inset 3px 3px 5px #ceced1;
  }
`;

export const Info = styled.p`
  margin: 10px 0 5px 0;
  color: #9e0202;
  text-shadow: 1px 1px 1px #fff;
  font-size: 16px;
  font-weight: 400;
`;

export const Name = styled(Info)`
  font-size: 23px;
  font-weight: 500;
`;

export const Tag = styled(Info)`
  color: #2b3162;
`;

export const Location = styled(Info)`
  color: #1a236a;
`;

export const StatsList = styled.ul`
  display: flex;
  gap: 10px;
  justify-content: space-evenly;
  margin-bottom: 32px;
`;

export const StatsItem = styled.li`
  padding: 5px;
  border: none;
  border-radius: 8px;
  box-shadow: -3px -3px 7px #ffffff, 3px 3px 5px #ceced1;
  &:hover {
    background: #ecf0f3;
    box-shadow: inset -3px -3px 7px #ffffff, inset 3px 3px 5px #ceced1;
  }
`;

export const StatsInfo = styled.span`
  margin: 0px 5px;
  color: #31344b;
  font-size: 16px;
  font-weight: 400;
`;

export const Label = styled(StatsInfo)`
  font-weight: 400;
`;

export const Quantity = styled(StatsInfo)`
  color: #1a236a;
  text-shadow: 1px 1px 1px #fff;
  font-weight: 700;
`;
