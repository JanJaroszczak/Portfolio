import React, { useEffect } from 'react';
import Particles from 'react-tsparticles';
import styled from 'styled-components';

import { headerBackgroundOptions } from './helpers/headerBackgroundOptions';

const StyledHeaderWrapper = styled.div``;

const Header = (props) => {
  useEffect(() => {
    let el = document.querySelector('.tsparticles-canvas-el');
    el.setAttribute(
      'style',
      'height: 100vh; width: 100%; z-index: 0; background-color: #1a1a2e; background-position: 50% 50%; background-repeat: no-repeat; background-size: cover; pointer-events: initial;'
    );
  }, []);

  // <canvas
  //   class="tsparticles-canvas-el"
  //   width="881"
  //   height="937"
  //   style="height: 100%; width: 100%; position: fixed; z-index: 0; top: 0px; left: 0px; background-color: rgb(19, 59, 93); background-position: 50% 50%; background-repeat: no-repeat; background-size: cover; pointer-events: initial;"
  // ></canvas>;

  return (
    <StyledHeaderWrapper>
      <Particles
        id="tsparticles"
        init={props.particlesInit}
        loaded={props.particlesLoaded}
        options={headerBackgroundOptions}
      />
    </StyledHeaderWrapper>
  );
};

export default Header;
