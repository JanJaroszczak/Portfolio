import React, { useEffect, useState } from 'react';
import Particles from 'react-tsparticles';

import { headerBackgroundOptions } from './helpers/headerBackgroundOptions';

import {
  StyledHeaderWrapper,
  StyledHeadingWrapper,
  StyledHeading,
  StyledSubHeading,
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
    </StyledHeaderWrapper>
  );
};

export default Header;
