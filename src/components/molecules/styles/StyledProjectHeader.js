import styled from 'styled-components';

import { animationOffset } from '../../../helpers/elementsCSSVariables';

export const StyledProjectHeaderWrapper = styled.div`
  transform: ${({ visible }) =>
    visible ? 'translateY(0)' : `translateY(${animationOffset})`};
  transition: 1s;
`;

export const StyledSectionHeading = styled.h3`
  margin: 40px 10px 20px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  text-align: center;
`;

export const StyledParagraph = styled.p`
  margin: 20px 0 40px;
  font-weight: ${({ theme }) => theme.fontWeights.light};
`;

export const StyledLinksList = styled.ul`
  text-align: center;
  li {
    display: inline-block;
  }

  li:not(:last-child) {
    margin-right: 40px;
  }
`;

export const StyledLink = styled.a`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  text-decoration: none;
  color: inherit;

  /* border: 1px solid ${({ theme }) => theme.colors.gray}; */

  i {
    margin-right: 10px;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.semiGray};
  }
`;
