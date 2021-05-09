import React from 'react';
import { ThemeProvider } from 'styled-components';

import Footer from '../components/organisms/navigations/Footer';
import GlobalStyle from '../globalStyles/GlobalStyles';

import { mainTheme } from '../themes/mainTheme';

import { StyledPageContentWrapper } from './styles/StyledMainTemplate';

const MainTemplate = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={mainTheme}>
        {/* <Navbar /> */}
        <StyledPageContentWrapper>{children}</StyledPageContentWrapper>
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default MainTemplate;
