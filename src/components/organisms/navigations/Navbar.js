import React from 'react';

import {
  StyledNav,
  StyledUl,
  StyledLi,
  StyledNavLink,
} from './styles/StyledNavbar';

const Navbar = () => {
  return (
    <StyledNav>
      <StyledUl>
        <StyledLi>
          {/* <StyledNavLink to={{ hash: '#about-me' }}>About me</StyledNavLink> */}
          <StyledNavLink href="#about-me">About me</StyledNavLink>
        </StyledLi>
        <StyledLi>
          {/* <StyledNavLink to="#my-tech-stack">My tech stack</StyledNavLink> */}
          <StyledNavLink href="#my-tech-stack">My tech stack</StyledNavLink>
        </StyledLi>
        <StyledLi>
          {/* <StyledNavLink to="#my-projects">My projects</StyledNavLink> */}
          <StyledNavLink href="#my-projects">My projects</StyledNavLink>
        </StyledLi>
        <StyledLi>
          {/* <StyledNavLink to="#contact">Contact</StyledNavLink> */}{' '}
          <StyledNavLink href="#contact">Contact</StyledNavLink>
        </StyledLi>
      </StyledUl>
    </StyledNav>
  );
};

export default Navbar;
