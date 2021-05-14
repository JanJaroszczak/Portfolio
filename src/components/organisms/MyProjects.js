import React, { useState, useRef } from 'react';

import ProjectCard from '../atoms/ProjectCard';
import useOnScreen from '../../utils/useOnScreen';

import { routes } from '../../routes';

import {
  StyledCommonPageWrapper,
  StyledSectionTitle,
} from '../../globalStyles/StyledCommonElements';
import { StyledSectionWrapper } from './styles/StyledMyProjects';

import cms from '../../assets/cms.png';
import onlineShop from '../../assets/onlineShop/desktop_full_small.gif';
import psychologist from '../../assets/psychologist.jpg';

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
          img={onlineShop}
          alt="Online Shop GIF"
          projectLabel="Online Shop"
          link={routes.onlineShop}
        />
        <ProjectCard
          img={cms}
          alt="CMS for E-Commerce logo"
          projectLabel="CMS for E-Commerce"
          duringDev
        />
        <ProjectCard
          img={psychologist}
          alt="Psychologist Website logo"
          projectLabel="Psychologist Commercial Website"
          duringDev
          center
        />
      </StyledSectionWrapper>
    </StyledCommonPageWrapper>
  );
};

export default MyProjects;
