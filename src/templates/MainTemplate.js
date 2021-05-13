import React, { useState } from 'react';
import { CircleArrow as ScrollUpButton } from 'react-scroll-up-button';
import { ThemeProvider } from 'styled-components';

import Navbar from '../components/organisms/navigations/Navbar';
import Footer from '../components/organisms/navigations/Footer';
import GlobalStyle from '../globalStyles/GlobalStyle';
import TermsModal from '../components/organisms/TermsModal';

import { mainTheme } from '../themes/mainTheme';

import { StyledPageContentWrapper } from './styles/StyledMainTemplate';

import { animateScroll as scroll } from 'react-scroll';

const MainTemplate = ({ children }) => {
  const [isScrollVisible, setIsScrollVisible] = useState(false);

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={mainTheme}>
        <Navbar />
        <StyledPageContentWrapper>
          <TermsModal />
          {children}
        </StyledPageContentWrapper>
        <Footer />
      </ThemeProvider>

      {/* <button
        onClick={() => scroll.scrollToTop()}
        style={{ position: 'fixed', bottom: '0', right: '4%' }}
      >
        go to top
      </button> */}
      <ScrollUpButton
        style={{ outline: 'none', WebkitTapHighlightColor: 'transparent' }}
      />
    </>
  );
};

export default MainTemplate;
