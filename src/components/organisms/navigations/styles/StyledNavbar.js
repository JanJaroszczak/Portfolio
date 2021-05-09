import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  background-color: ${({ theme }) => theme.colors.gray};
  border-bottom: 2px solid ${({ theme }) => theme.colors.white};
  z-index: 1;

  /* border: 1px solid black; */
`;

export const StyledUl = styled.ul`
  /* display: grid;
  grid-template-columns: auto auto auto auto; */
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;

  /* flex-grow: 1; */
  /* flex-shrink: 1; */
  margin: 0 auto;

  /* border: 1px solid white; */
`;

export const StyledLi = styled.li`
  &:not(:last-child) {
    margin-right: 40px;
  }

  /* border: 1px solid white; */
`;

export const StyledNavLink = styled.a`
  font-size: ${({ theme }) => theme.fontSizes.l};
  font-weight: ${({ theme }) => theme.fontWeights.extraLight};
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
  transition: 0.3s;

  &:hover,
  &:active {
    color: #c5c5c5;
  }
`;
