import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll';

export const StyledNav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  background-color: ${({ theme }) => theme.colors.gray};
  border-bottom: 2px solid ${({ theme }) => theme.colors.white};
  z-index: 1;
`;

export const StyledUl = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
  margin: 0 auto;
`;

export const StyledLi = styled.li`
  margin-right: 10px;

  &:not(:last-child) {
    margin-right: 40px;
  }
`;

export const StyledRouterNavLink = styled(NavLink)`
  font-size: ${({ theme }) => theme.fontSizes.l};
  font-weight: ${({ theme }) => theme.fontWeights.extraLight};
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
  transition: 0.3s;
  cursor: pointer;

  @media (max-width: 650px) {
    font-size: ${({ theme }) => theme.fontSizes.s};
  }

  @media (max-width: 540px) {
    font-size: ${({ theme }) => theme.fontSizes.xs};
  }

  &:hover,
  &:active {
    color: ${({ theme }) => theme.colors.lightGray};
  }
`;

export const StyledNavLink = styled(Link)`
  font-size: ${({ theme }) => theme.fontSizes.l};
  font-weight: ${({ theme }) => theme.fontWeights.extraLight};
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
  transition: 0.3s;
  cursor: pointer;

  @media (max-width: 650px) {
    font-size: ${({ theme }) => theme.fontSizes.s};
  }

  @media (max-width: 540px) {
    font-size: ${({ theme }) => theme.fontSizes.xs};
  }

  &:hover,
  &:active {
    color: ${({ theme }) => theme.colors.lightGray};
  }
`;
