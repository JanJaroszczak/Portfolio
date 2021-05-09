import React, { useState, useRef } from 'react';

import ProjectCard from '../atoms/ProjectCard';
import useOnScreen from '../../utils/useOnScreen';

import {
  StyledCommonPageWrapper,
  StyledSectionTitle,
} from './styles/StyledCommonElements';
import { StyledSectionWrapper } from './styles/StyledMyProjects';

import project1 from '../../assets/online_shop.gif';
import project2 from '../../assets/cms.png';

const MyProjects = () => {
  const [isTitleVisible, setIsTitleVisible] = useState(false);

  const titleRef = useRef();

  const isTitleOnScreen = useOnScreen(titleRef);

  if (isTitleOnScreen) {
    if (!isTitleVisible) setIsTitleVisible(true);
  }

  return (
    <StyledCommonPageWrapper>
      <a id="my-projects" className="scroll-target" />
      <StyledSectionWrapper>
        <StyledSectionTitle ref={titleRef} visible={isTitleVisible}>
          My projects.
        </StyledSectionTitle>
        <ProjectCard
          img={project1}
          alt="Online Shop GIF"
          projectLabel="Online Shop"
        />
        <ProjectCard
          img={project2}
          alt="CMS for E-Commerce GIF"
          projectLabel="E-Commerce CMS"
          duringDev
        />
      </StyledSectionWrapper>
    </StyledCommonPageWrapper>
  );
};

export default MyProjects;
