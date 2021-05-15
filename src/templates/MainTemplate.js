import React, { useState, useRef } from 'react';
import ScrollUpButton from 'react-scroll-up-button';
import { ThemeProvider } from 'styled-components';
import { useMediaQuery } from 'react-responsive';

import Footer from '../components/organisms/navigations/Footer';
import GlobalStyle from '../globalStyles/GlobalStyle';
import Navbar from '../components/organisms/navigations/Navbar';
import NavbarMobile from '../components/organisms/navigations/NavbarMobile';
import TermsModal from '../components/organisms/TermsModal';
import useOnClickOutside from '../utils/useOnClickOutside';

import { mainTheme } from '../themes/mainTheme';

import { StyledPageContentWrapper } from './styles/StyledMainTemplate';

const MainTemplate = ({ children }) => {
  const [mobileMenuOn, setMobileMenuOn] = useState(false);
  const outsideClickRef = useRef();

  useOnClickOutside(outsideClickRef, () => {
    setMobileMenuOn((prevState) => !prevState);
  });

  const isDesktopNavbar = useMediaQuery({
    query: '(min-width: 491px)',
  });

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={mainTheme}>
        {isDesktopNavbar ? (
          <Navbar />
        ) : (
          <div ref={outsideClickRef}>
            <NavbarMobile mobileMenuOn={mobileMenuOn} />
          </div>
        )}
        <StyledPageContentWrapper>
          <TermsModal />
          {children}
        </StyledPageContentWrapper>
        <Footer />
      </ThemeProvider>
      <ScrollUpButton
        style={{ outline: 'none', WebkitTapHighlightColor: 'transparent' }}
      />
    </>
  );
};

export default MainTemplate;
