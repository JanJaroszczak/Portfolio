import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledFooter = styled.footer`
  width: 100%;
  height: 70px;
  font-size: ${({ theme }) => theme.fontSizes.s};
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.gray};

  @media (max-width: 720px) {
    font-size: ${({ theme }) => theme.fontSizes.xs};
  }

  @media (max-width: 650px) {
    font-size: ${({ theme }) => theme.fontSizes.xxs};
  }

  @media (max-width: 400px) {
    font-size: ${({ theme }) => theme.fontSizes.ss};
  }
`;

export const StyledUl = styled.ul`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* margin: 0 auto; */

  @media (max-width: 570px) {
    display: grid;
    grid-template-columns: 1.4fr 1fr;
    grid-template-rows: 1fr 1fr;
    place-items: center;
    /* grid-template-areas:
      'copyright terms'
      'github github'; */
  }

  @media (max-width: 330px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
  }
`;

export const StyledLi = styled.li`
  margin: 0 20px;

  @media (max-width: 760px) {
    margin: 0 10px;
  }

  @media (max-width: 570px) {
    margin: 0 0;

    grid-column: ${({ copyright, terms }) =>
      copyright ? '1/2' : terms ? '2/3' : '1/3'};
  }

  ${({ copyright }) =>
    copyright &&
    css`
      padding-left: 10px;
    `}

  @media (max-width: 330px) {
    grid-column: 1/2;

    ${({ copyright }) =>
      copyright &&
      css`
        padding-left: 0;
      `}
  }
`;

export const StyledFooterButton = styled.button`
  font-size: ${({ theme }) => theme.fontSizes.s};
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.fontWeights.light};
  border: none;
  background-color: transparent;

  @media (max-width: 720px) {
    font-size: ${({ theme }) => theme.fontSizes.xs};
  }

  @media (max-width: 650px) {
    font-size: ${({ theme }) => theme.fontSizes.xxs};
  }

  @media (max-width: 400px) {
    font-size: ${({ theme }) => theme.fontSizes.ss};
  }
`;

export const StyledLink = styled.a`
  text-decoration: none;
  color: inherit;

  i {
    margin-right: 5px;
  }
`;
