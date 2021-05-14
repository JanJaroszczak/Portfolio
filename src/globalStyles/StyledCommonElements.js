import styled from 'styled-components';

import { animationOffset } from '../helpers/elementsCSSVariables';

export const StyledCommonPageWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;

  /* border: 1px solid black; */

  @media (max-width: 1280px) {
    padding: 0 60px;
  }

  @media (max-width: 800px) {
    padding: 0 20px;
  }
`;

export const StyledSectionTitle = styled.h1`
  position: absolute;
  top: -84px;
  left: 40px;
  /* font-size: ${({ theme }) => theme.fontSizes.sl}; */
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  transform: ${({ visible }) =>
    visible ? 'translateY(0)' : `translateY(-${animationOffset})`};
  transition: 1s;

  @media (max-width: 650px) {
    font-size: ${({ theme }) => theme.fontSizes.ssl};
    top: -63px;
  }

  @media (max-width: 520px) {
    font-size: ${({ theme }) => theme.fontSizes.xxxl};
    top: -51px;
  }

  @media (max-width: 480px) {
    font-size: ${({ theme }) => theme.fontSizes.xxl};
    top: -37px;
    left: 20px;
  }

  @media (max-width: 350px) {
    font-size: ${({ theme }) => theme.fontSizes.xl};
    top: -34px;
    left: 20px;
  }
`;

export const StyledSectionHeading = styled.h2`
  margin: 30px 10px;
  /* font-size: ${({ theme }) => theme.fontSizes.xl}; */
  font-weight: ${({ theme }) => theme.fontWeights.light};
  text-align: center;
  transform: ${({ visible }) =>
    visible ? 'translateY(0)' : `translateY(${animationOffset})`};
  transition: 1s;

  @media (max-width: 1100px) {
    font-size: ${({ theme }) => theme.fontSizes.xxl};
  }

  @media (max-width: 450px) {
    font-size: ${({ theme }) => theme.fontSizes.l};
  }
`;
