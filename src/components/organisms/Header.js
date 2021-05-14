import React, { useEffect, useState } from 'react';
import Particles from 'react-tsparticles';

import { headerBackgroundOptions } from './helpers/headerBackgroundOptions';

import {
  StyledHeaderWrapper,
  StyledHeadingWrapper,
  StyledHeading,
  StyledSubHeading,
  StyledArrowLink,
} from './styles/StyledHeader';

const Header = ({ particlesInit, particlesLoaded }) => {
  const [isFadeIn, setIsFadeIn] = useState(false);

  useEffect(() => {
    setIsFadeIn(true);
  }, []);

  return (
    <StyledHeaderWrapper>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={headerBackgroundOptions}
        height={'calc(100vh - 70px)'}
        width={'100%'}
      />
      <StyledHeadingWrapper>
        <StyledHeading fadeIn={isFadeIn}>Hi, I'm Jan Jaroszczak.</StyledHeading>
        <StyledSubHeading fadeIn={isFadeIn}>
          Front-end Developer.
        </StyledSubHeading>
      </StyledHeadingWrapper>
      <StyledArrowLink
        to="about-me"
        activeClass="active"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
      >
        <i className="fas fa-chevron-down"></i>
      </StyledArrowLink>
    </StyledHeaderWrapper>
  );
};

export default Header;
