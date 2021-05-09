import React from 'react';

import AboutMe from '../components/organisms/AboutMe';
import Contact from '../components/organisms/Contact';
import Header from '../components/organisms/Header';
import MyProjects from '../components/organisms/MyProjects';
import MyTechStack from '../components/organisms/MyTechStack';

import { StyledHomePageWrapper } from './styles/StyledHomePage';

const HomePage = () => {
  return (
    <StyledHomePageWrapper>
      <Header />
      <AboutMe />
      <MyTechStack />
      <MyProjects />
      <Contact />
    </StyledHomePageWrapper>
  );
};

export default HomePage;
