import styled from 'styled-components';
import { Link } from 'react-scroll';

import {
  sectionsGap,
  sectionGap650px,
  sectionGap520px,
  sectionGap480px,
} from '../../../helpers/elementsCSSVariables';

export const StyledHeaderWrapper = styled.div`
  position: relative;
  margin-bottom: ${sectionsGap};

  @media (max-width: 650px) {
    margin-bottom: ${sectionGap650px};
  }

  @media (max-width: 520px) {
    margin-bottom: ${sectionGap520px};
  }

  @media (max-width: 480px) {
    margin-bottom: ${sectionGap480px};
  }
`;

export const StyledHeadingWrapper = styled.div`
  position: absolute;
  width: 100%;
  top: 50%;
  left: 50%;
  padding: 0 30px;
  transform: translate(-50%, -50%);
  color: white;
  text-align: center;

  @media (max-width: 1200px) {
    top: 40%;
  }

  @media (max-width: 490px) {
    top: 43%;
  }
`;

export const StyledHeading = styled.h1`
  margin-bottom: 20px;
  opacity: ${({ fadeIn }) => (fadeIn ? '1' : '0')};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  letter-spacing: 2px;
  transform: ${({ fadeIn }) => (fadeIn ? 'translateY(0)' : 'translateY(20px)')};
  transition: 2s;
  transition-delay: 0.0001s;

  @media (max-width: 1200px) {
    font-size: ${({ theme }) => theme.fontSizes.ul};
  }

  @media (max-width: 750px) {
    font-size: ${({ theme }) => theme.fontSizes.sl};
  }

  @media (max-width: 400px) {
    font-size: ${({ theme }) => theme.fontSizes.xxxl};
  }
`;

export const StyledSubHeading = styled.h2`
  opacity: ${({ fadeIn }) => (fadeIn ? '1' : '0')};
  font-weight: ${({ theme }) => theme.fontWeights.thin};
  transform: ${({ fadeIn }) => (fadeIn ? 'translateY(0)' : 'translateY(20px)')};
  transition: 2s;
  transition-delay: 0.5s;

  @media (max-width: 1200px) {
    font-size: ${({ theme }) => theme.fontSizes.sl};
  }

  @media (max-width: 750px) {
    font-size: ${({ theme }) => theme.fontSizes.xxl};
  }

  @media (max-width: 400px) {
    font-size: ${({ theme }) => theme.fontSizes.xxl};
  }
`;

export const StyledArrowLink = styled(Link)`
  position: absolute;
  left: 50%;
  bottom: 30px;
  transform: translateX(-50%);
  background-color: transparent;
  border: none;
  font-size: ${({ theme }) => theme.fontSizes.headerArrow};
  color: white;
  cursor: pointer;

  @media (max-width: 1200px) {
    bottom: 100px;
  }

  @media (max-width: 750px) {
    bottom: 70px;
  }

  @media (max-width: 600px) {
    bottom: 90px;
  }

  /* @media (max-width: 490px) {
    bottom: 70px;
  } */

  & i {
    transform: translateY(-40px);
    opacity: 0;
    animation: arrow 2s linear infinite;
  }

  @keyframes arrow {
    10% {
      opacity: 0;
    }

    25% {
      opacity: 1;
    }

    60% {
      opacity: 1;
    }

    90% {
      opacity: 0;
    }

    100% {
      opacity: 0;
      transform: translateY(30px);
    }
  }
`;
