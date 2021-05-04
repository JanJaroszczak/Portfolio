import React, { useEffect, useState } from 'react';
import Particles from 'react-tsparticles';

import { headerBackgroundOptions } from './helpers/headerBackgroundOptions';

import {
  StyledHeaderWrapper,
  StyledHeadingWrapper,
  StyledHeading,
  StyledSubHeading,
  StyledArrowButton,
} from './styles/StyledHeader';

const Header = (props) => {
  const [isFadeIn, setIsFadeIn] = useState(false);

  useEffect(() => {
    setIsFadeIn(true);
  }, []);

  return (
    <StyledHeaderWrapper>
      <Particles
        id="tsparticles"
        init={props.particlesInit}
        loaded={props.particlesLoaded}
        options={headerBackgroundOptions}
        height={'100vh'}
        width={'100%'}
      />
      <StyledHeadingWrapper>
        <StyledHeading fadeIn={isFadeIn}>Hi, I'm Jan Jaroszczak.</StyledHeading>
        <StyledSubHeading fadeIn={isFadeIn}>
          A Front-end Developer.
        </StyledSubHeading>
      </StyledHeadingWrapper>
      <StyledArrowButton>
        {/* <i class="fas fa-angle-down"></i> */}
        <i class="fas fa-chevron-down"></i>
      </StyledArrowButton>
    </StyledHeaderWrapper>
  );
};

export default Header;
