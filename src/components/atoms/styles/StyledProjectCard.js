import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

import { animationOffset } from '../../../helpers/elementsCSSVariables';

export const StyledProjectCardWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr auto;
  max-width: 500px;
  margin: 0 auto 30px;
  text-align: center;
  transform: ${({ visible }) =>
    visible ? 'translateY(0)' : `translateY(${animationOffset})`};
  transition: 1s;
  transition-delay: 0.0001s;

  ${({ center }) =>
    center &&
    css`
      grid-column: 1/3;
    `}

  @media (max-width: 1200px) {
    max-width: 450px;
  }

  @media (max-width: 1100px) {
    max-width: 400px;
  }

  @media (max-width: 1040px) {
    max-width: 350px;
  }

  @media (max-width: 900px) {
    max-width: 300px;
  }

  @media (max-width: 770px) {
    max-width: 250px;
  }

  @media (max-width: 670px) {
    max-width: 500px;

    ${({ center }) =>
      center &&
      css`
        grid-column: 1/2;
      `}
  }
`;

export const StyledImageWrapper = styled.div`
  position: relative;
  font-size: 0;
  overflow: hidden;

  border: 1px solid black;
`;

export const StyledDuringDevLabel = styled.div`
  position: absolute;
  height: 40px;
  width: 300px;
  top: 50px;
  right: -70px;
  font-size: ${({ theme }) => theme.fontSizes.m};
  transform: rotate(45deg);
  background-color: ${({ theme }) => theme.colors.moderateGray};
  color: white;
  line-height: 40px;

  @media (max-width: 1040px) {
    height: 30px;
    top: 30px;
    right: -100px;
    font-size: ${({ theme }) => theme.fontSizes.xs};
    line-height: 30px;
  }

  @media (max-width: 670px) {
    height: 40px;
    top: 50px;
    right: -70px;
    font-size: ${({ theme }) => theme.fontSizes.m};
    line-height: 40px;
  }

  @media (max-width: 550px) {
    height: 30px;
    top: 30px;
    right: -100px;
    font-size: ${({ theme }) => theme.fontSizes.xs};
    line-height: 30px;
  }

  @media (max-width: 360px) {
    height: 20px;
    top: 30px;
    right: -115px;
    font-size: ${({ theme }) => theme.fontSizes.ss};
    line-height: 20px;
  }

  span {
    padding-left: 10px;

    @media (max-width: 360px) {
      padding-right: 5px;
      padding-left: 0;
    }
  }
`;

export const StyledImg = styled.img`
  width: 100%;
  transition: 0.3s;
  transition-delay: 0.0001s;

  &:hover {
    transform: scale(1.1);
  }
`;

export const StyledProjectName = styled.h3`
  font-weight: ${({ theme }) => theme.fontWeights.light};
  padding-top: 15px;

  @media (max-width: 1200px) {
    font-size: ${({ theme }) => theme.fontSizes.xl};
  }

  @media (max-width: 1100px) {
    font-size: ${({ theme }) => theme.fontSizes.l};
  }

  @media (max-width: 770px) {
    font-size: ${({ theme }) => theme.fontSizes.m};
  }

  @media (max-width: 670px) {
    font-size: ${({ theme }) => theme.fontSizes.xxl};
  }

  @media (max-width: 550px) {
    font-size: ${({ theme }) => theme.fontSizes.l};
  }

  @media (max-width: 380px) {
    font-size: ${({ theme }) => theme.fontSizes.s};
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;
