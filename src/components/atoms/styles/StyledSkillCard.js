import styled from 'styled-components';

export const StyledCardWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr auto;
  height: 200px;
  /* width: 160px; */
  text-align: center;
  transform: ${({ visible }) =>
    visible ? 'translateY(0)' : 'translateY(60px)'};
  transition: 1s;

  /* border: 1px solid black; */
`;

export const StyledIconWrapper = styled.div`
  align-self: center;

  /* border: 1px solid black; */
`;

export const StyledImg = styled.img`
  width: 90px;

  /* border: 1px solid black; */
`;

export const StyledSkillName = styled.h4`
  font-weight: ${({ theme }) => theme.fontWeights.light};

  /* border: 1px solid black; */
`;
