import styled from 'styled-components';

import { animationOffset } from '../../../helpers/elementsCSSVariables';

export const StyledLi = styled.li`
  transform: ${({ visible }) =>
    visible ? 'translateY(0)' : `translateY(${animationOffset})`};
  transition: 1s;
`;

export const StyledProjectFeature = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-areas:
    'tick description'
    'gif gif';
  margin: 20px 0 40px;
  font-weight: ${({ theme }) => theme.fontWeights.light};

  i {
    font-size: ${({ theme }) => theme.fontSizes.m};
    margin-top: 4px;
    margin-right: 20px;
  }
`;

export const StyledGIFWrapper = styled.div`
  grid-area: gif;
  margin-top: 20px;
`;

export const StyledGIF = styled.img`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.gray};
`;
