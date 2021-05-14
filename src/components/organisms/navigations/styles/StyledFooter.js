import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledFooter = styled.footer`
  width: 100%;
  height: 70px;
  font-size: ${({ theme }) => theme.fontSizes.s};
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.gray};

  /* @media (max-width: 400px) {
    font-size: ${({ theme }) => theme.fontSizes.ss};
  } */
`;

export const StyledUl = styled.ul`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* margin: 0 auto; */
  /* 
  @media (max-width: 400px) {
    flex-direction: column;
  } */
`;

export const StyledLi = styled.li`
  margin: 0 20px;

  /* @media (max-width: 400px) {
    margin: 5px 0;
  } */
`;

export const StyledFooterButton = styled.button`
  font-size: ${({ theme }) => theme.fontSizes.s};
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.fontWeights.light};
  border: none;
  background-color: transparent;

  /* @media (max-width: 400px) {
    font-size: ${({ theme }) => theme.fontSizes.ss};
  } */
`;

export const StyledLink = styled.a`
  text-decoration: none;
  color: inherit;

  i {
    margin-right: 5px;
  }
`;
