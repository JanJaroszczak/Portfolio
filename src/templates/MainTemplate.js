import React from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from '../globalStyles/GlobalStyles';

import { mainTheme } from '../themes/mainTheme';

const MainTemplate = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={mainTheme}>
        {/* <Navbar /> */}
        {children}
        {/* <Footer /> */}
      </ThemeProvider>
    </>
  );
};

export default MainTemplate;
