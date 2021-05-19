import styled from 'styled-components';

import { animationOffset } from '../../../helpers/elementsCSSVariables';

export const StyledSectionSubHeading = styled.h4`
  margin: 40px 0 0;
  font-weight: ${({ theme }) => theme.fontWeights.light};
  text-align: center;
  transform: ${({ visible }) =>
    visible ? 'translateY(0)' : `translateY(${animationOffset})`};
  transition: 1s;
  transition-delay: 0.0001s;

  @media (max-width: 770px) {
    font-size: ${({ theme }) => theme.fontSizes.l};
  }
`;

export const StyledFeaturesUl = styled.ul`
  li:last-child div {
    margin: 20px 0 25px;
  }
`;
