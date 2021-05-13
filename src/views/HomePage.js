import React from 'react';

import AboutMe from '../components/organisms/AboutMe';
import Contact from '../components/organisms/Contact';
import Header from '../components/organisms/Header';
import MyProjects from '../components/organisms/MyProjects';
import MyTechStack from '../components/organisms/MyTechStack';

const HomePage = () => {
  return (
    <>
      <Header />
      <AboutMe />
      <MyTechStack />
      <MyProjects />
      <Contact />
    </>
  );
};

export default HomePage;
