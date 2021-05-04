import React, { useState } from 'react';
import AboutMe from '../components/organisms/AboutMe';
import Header from '../components/organisms/Header';
import MyTechStack from '../components/organisms/MyTechStack';

import { StyledHomePageWrapper } from './styles/StyledHomePage';

const HomePage = () => {
  const [aboutMeOffset, setAboutMeOffset] = useState();

  const updateAboutMeOffset = (offsetTop) => {
    setAboutMeOffset(offsetTop);
    console.log(offsetTop);
  };

  const scrollDown = () => {
    window.scrollTo({
      top: aboutMeOffset - 100,
      behavior: 'smooth',
    });
  };

  return (
    <StyledHomePageWrapper>
      <Header onArrowButton={scrollDown} />
      <AboutMe aboutMeOffsetTop={updateAboutMeOffset} />
      <MyTechStack />
    </StyledHomePageWrapper>
  );
};

export default HomePage;
