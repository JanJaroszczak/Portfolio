import styled, { css } from 'styled-components';
import { Link } from 'react-scroll';
import { NavLink } from 'react-router-dom';

export const StyledIcon = styled.div`
  position: fixed;
  top: 25px;
  right: 25px;
  cursor: pointer;
  z-index: 2;

  /* border: 1px solid white; */
`;

export const StyledMenu = styled.div`
  position: fixed;
  left: 0;
  width: 100%;
  top: -300px;
  padding: 10px 0;
  z-index: 1;
  border-bottom: 2px solid ${({ theme }) => theme.colors.moderateGray};
  background-color: ${({ theme }) => theme.colors.gray};
  transition: 0.3s;

  ${({ menuToggle }) =>
    menuToggle &&
    css`
      top: 0;
    `}
`;

export const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;

  /* border: 1px solid black; */
`;

export const StyledLi = styled.li`
  align-self: center;
  justify-self: center;
  margin: 0 10px;

  /* border: 1px solid black; */
`;

export const StyledRouterNavLink = styled(NavLink)`
  display: block;
  position: relative;
  padding: 10px 20px;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.l};
  text-decoration: none;
`;

export const StyledNavLink = styled(Link)`
  display: block;
  position: relative;
  padding: 10px 20px;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.l};
  text-decoration: none;
`;
