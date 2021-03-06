import styled from 'styled-components';

import { animationOffset } from '../../../helpers/elementsCSSVariables';

export const StyledLi = styled.li`
  transform: ${({ visible }) =>
    visible ? 'translateY(0)' : `translateY(${animationOffset})`};
  transition: 1s;
  transition-delay: 0.0001s;
`;

export const StyledProjectFeature = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-areas:
    'tick description'
    'gif gif';
  margin: 20px 0 40px;
  font-weight: ${({ theme }) => theme.fontWeights.light};

  @media (max-width: 480px) {
    display: block;
  }

  p {
    text-align: justify;

    @media (max-width: 770px) {
      font-size: ${({ theme }) => theme.fontSizes.s};
    }

    @media (max-width: 480px) {
      font-size: ${({ theme }) => theme.fontSizes.xs};
    }

    i {
      margin-right: 10px;
      font-size: ${({ theme }) => theme.fontSizes.xxs};
    }
  }

  i {
    font-size: ${({ theme }) => theme.fontSizes.m};
    margin-top: 4px;
    margin-right: 20px;
  }
`;

export const StyledGIFWrapper = styled.div`
  grid-area: gif;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-top: ${({ gif }) => (gif ? '20px' : '0')};
`;

export const StyledGIF = styled.img`
  width: 100%;
  max-width: ${({ verticalGIF }) => (verticalGIF ? '350px' : 'none')};
  border: 1px solid ${({ theme }) => theme.colors.gray};
`;
