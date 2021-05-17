import React, { useEffect, useState } from 'react';
import HamburgerMenu from 'react-hamburger-menu';
import { useSelector } from 'react-redux';

import { routes } from '../../../routes';

import {
  StyledIcon,
  StyledMenu,
  StyledUl,
  StyledLi,
  StyledRouterNavLink,
  StyledNavLink,
} from './styles/StyledNavbarMobile';

const NavbarMobile = ({ mobileMenuOn }) => {
  const [menuToggle, setMenuToggle] = useState(false);

  const handleMenuClick = () => {
    setMenuToggle((prevState) => !prevState);
  };

  const isHomePageOpen = useSelector(({ isHomePageOpen }) => isHomePageOpen);

  useEffect(() => {
    setMenuToggle(false);
  }, [mobileMenuOn]);

  const renderHamburgerMenuIcon = () => (
    <HamburgerMenu
      isOpen={menuToggle}
      menuClicked={handleMenuClick}
      width={28}
      height={22}
      strokeWidth={5}
      rotate={0}
      color="#959595"
      borderRadius={0}
      animationDuration={0.2}
    />
  );

  const renderMenu = () => (
    <StyledMenu menuToggle={menuToggle}>
      <StyledUl>
        <StyledLi>
          {isHomePageOpen ? (
            <StyledNavLink
              to="about-me"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              onClick={handleMenuClick}
            >
              About me
            </StyledNavLink>
          ) : (
            <StyledRouterNavLink
              to={{
                pathname: '/',
                state: {
                  scrollTarget: 'about-me',
                },
              }}
              onClick={handleMenuClick}
            >
              About me
            </StyledRouterNavLink>
          )}
        </StyledLi>
        <StyledLi>
          {isHomePageOpen ? (
            <StyledNavLink
              to="my-tech-stack"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              onClick={handleMenuClick}
            >
              My tech stack
            </StyledNavLink>
          ) : (
            <StyledRouterNavLink
              to={{
                pathname: '/',
                state: {
                  scrollTarget: 'my-tech-stack',
                },
              }}
              onClick={handleMenuClick}
            >
              My tech stack
            </StyledRouterNavLink>
          )}
        </StyledLi>
        <StyledLi>
          {isHomePageOpen ? (
            <StyledNavLink
              to="my-projects"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              onClick={handleMenuClick}
            >
              My projects
            </StyledNavLink>
          ) : (
            <StyledRouterNavLink
              to={{
                pathname: '/',
                state: {
                  scrollTarget: 'my-projects',
                },
              }}
              onClick={handleMenuClick}
            >
              My projects
            </StyledRouterNavLink>
          )}
        </StyledLi>
        <StyledLi>
          {isHomePageOpen ? (
            <StyledNavLink
              to="contact"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              onClick={handleMenuClick}
            >
              Contact
            </StyledNavLink>
          ) : (
            <StyledRouterNavLink
              to={{
                pathname: '/',
                state: {
                  scrollTarget: 'contact',
                },
              }}
              onClick={handleMenuClick}
            >
              Contact
            </StyledRouterNavLink>
          )}
        </StyledLi>
      </StyledUl>
    </StyledMenu>
  );

  return (
    <>
      <StyledIcon menuToggle={menuToggle} burger>
        {renderHamburgerMenuIcon()}
      </StyledIcon>
      {renderMenu()}
    </>
  );
};

export default NavbarMobile;
