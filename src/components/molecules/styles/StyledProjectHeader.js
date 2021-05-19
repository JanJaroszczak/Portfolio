import styled from 'styled-components';

import { animationOffset } from '../../../helpers/elementsCSSVariables';

export const StyledProjectHeaderWrapper = styled.div`
  transform: ${({ visible }) =>
    visible ? 'translateY(0)' : `translateY(${animationOffset})`};
  transition: 1s;
  transition-delay: 0.0001s;
`;

export const StyledSectionHeading = styled.h3`
  margin: 40px 10px 20px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  text-align: center;

  @media (max-width: 770px) {
    font-size: ${({ theme }) => theme.fontSizes.xl};
  }

  @media (max-width: 700px) {
    margin: 50px 10px 20px;
  }

  @media (max-width: 640px) {
    font-size: ${({ theme }) => theme.fontSizes.l};
  }
`;

export const StyledParagraph = styled.p`
  margin: 20px 0 40px;
  font-weight: ${({ theme }) => theme.fontWeights.light};
  text-align: justify;

  @media (max-width: 770px) {
    font-size: ${({ theme }) => theme.fontSizes.s};
  }

  @media (max-width: 480px) {
    font-size: ${({ theme }) => theme.fontSizes.xs};
  }
`;

export const StyledLinksList = styled.ul`
  text-align: center;
  li {
    display: inline-block;

    @media (max-width: 480px) {
      display: block;
    }
  }

  li:not(:last-child) {
    margin-right: 40px;

    @media (max-width: 480px) {
      margin-right: 0;
      margin-bottom: 15px;
    }
  }
`;

export const StyledLink = styled.a`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  text-decoration: none;
  color: inherit;

  @media (max-width: 480px) {
    font-size: ${({ theme }) => theme.fontSizes.l};
  }

  i {
    margin-right: 20px;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.semiGray};
  }
`;
