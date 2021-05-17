import styled, { css } from 'styled-components';

import { animationOffset } from '../../../helpers/elementsCSSVariables';

export const StyledCardWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr auto;
  height: 200px;
  text-align: center;
  transform: ${({ visible }) =>
    visible ? 'translateY(0)' : `translateY(${animationOffset})`};
  transition: 1s;
  -webkit-transition: 1s;

  @media (max-width: 720px) {
    ${({ center }) =>
      center &&
      css`
        grid-column: 1/3;
      `}
  }

  @media (max-width: 480px) {
    ${({ center }) =>
      center &&
      css`
        grid-column: 1/2;
      `}
  }
`;

export const StyledIconWrapper = styled.div`
  align-self: center;
`;

export const StyledImg = styled.img`
  width: 90px;
`;

export const StyledSkillName = styled.h4`
  font-weight: ${({ theme }) => theme.fontWeights.light};

  @media (max-width: 480px) {
    font-size: ${({ theme }) => theme.fontSizes.m};
  }
`;
