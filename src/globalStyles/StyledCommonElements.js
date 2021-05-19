import styled from 'styled-components';
import { isIOS, isAndroid } from 'react-device-detect';

import { animationOffset } from '../helpers/elementsCSSVariables';

export const StyledCommonPageWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;

  @media (max-width: 1280px) {
    padding: 0 40px;
  }

  @media (max-width: 800px) {
    padding: 0 20px;
  }

  @media (max-width: 380px) {
    padding: 0 10px;
  }
`;

export const StyledSectionTitle = styled.h1`
  position: absolute;
  top: ${isIOS ? '-85px' : '-84px'};
  left: 40px;
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  transform: ${({ visible }) =>
    visible ? 'translateY(0)' : `translateY(-${animationOffset})`};
  transition: 1s;
  transition-delay: 0.0001s;

  @media (max-width: 650px) {
    font-size: ${({ theme }) => theme.fontSizes.ssl};
    top: ${isAndroid ? '-62px' : '-63px'};
  }

  @media (max-width: 520px) {
    font-size: ${({ theme }) => theme.fontSizes.xxxl};
    top: ${isAndroid ? '-50px' : '-51px'};
  }

  @media (max-width: 480px) {
    font-size: ${({ theme }) => theme.fontSizes.xxl};
    top: -37px;
    top: ${isAndroid ? '-36px' : '-37px'};
    left: 20px;
  }

  @media (max-width: 350px) {
    font-size: ${({ theme }) => theme.fontSizes.xl};
    top: ${isIOS ? '-35px' : '-34px'};
    left: 20px;
  }
`;

export const StyledSectionHeading = styled.h2`
  margin: 30px 10px;
  font-weight: ${({ theme }) => theme.fontWeights.light};
  text-align: center;
  transform: ${({ visible }) =>
    visible ? 'translateY(0)' : `translateY(${animationOffset})`};
  transition: 1s;
  transition-delay: 0.0001s;

  @media (max-width: 1100px) {
    font-size: ${({ theme }) => theme.fontSizes.xxl};
  }

  @media (max-width: 480px) {
    font-size: ${({ theme }) => theme.fontSizes.l};
  }
`;
