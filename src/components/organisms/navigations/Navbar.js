import React from 'react';
import { useSelector } from 'react-redux';

import {
  StyledNav,
  StyledUl,
  StyledLi,
  StyledRouterNavLink,
  StyledNavLink,
} from './styles/StyledNavbar';

const Navbar = () => {
  const isHomePageOpen = useSelector(({ isHomePageOpen }) => isHomePageOpen);

  return (
    <StyledNav>
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
            >
              Contact
            </StyledRouterNavLink>
          )}
        </StyledLi>
      </StyledUl>
    </StyledNav>
  );
};

export default Navbar;

//  <StyledUl>
//         <StyledLi>
//           {/* <StyledNavLink to={{ hash: '#about-me' }}>About me</StyledNavLink> */}
//           <StyledNavLink href="/#about-me">About me</StyledNavLink>
//         </StyledLi>
//         <StyledLi>
//           {/* <StyledNavLink to="#my-tech-stack">My tech stack</StyledNavLink> */}
//           <StyledNavLink href="/#my-tech-stack">My tech stack</StyledNavLink>
//         </StyledLi>
//         <StyledLi>
//           {/* <StyledNavLink to="#my-projects">My projects</StyledNavLink> */}
//           <StyledNavLink href="/#my-projects">My projects</StyledNavLink>
//         </StyledLi>
//         <StyledLi>
//           {/* <StyledNavLink to="#contact">Contact</StyledNavLink> */}{' '}
//           <StyledNavLink href="/#contact">Contact</StyledNavLink>
//         </StyledLi>
//       </StyledUl>
