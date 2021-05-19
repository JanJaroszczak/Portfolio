import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { scroller } from 'react-scroll';

import { toggleIsHomePageOpen } from '../store/actions';

import AboutMe from '../components/organisms/AboutMe';
import Contact from '../components/organisms/Contact';
import Header from '../components/organisms/Header';
import MyProjects from '../components/organisms/MyProjects';
import MyTechStack from '../components/organisms/MyTechStack';

const HomePage = ({ history }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(toggleIsHomePageOpen(true));

    let timer;
    if (history.location.state) {
      timer = setTimeout(() => {
        scroller.scrollTo(history.location.state.scrollTarget);
        window.history.replaceState({}, '');
      }, 300);
    }
    return () => {
      clearTimeout(timer);
    };
  }, []);

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
