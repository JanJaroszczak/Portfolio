import React, { useEffect, useState, useRef } from 'react';
import { useDispatch } from 'react-redux';

import ProjectHeader from '../molecules/ProjectHeader';
import ProjectFeatures from '../molecules/ProjectFeatures';
import useOnScreen from '../../utils/useOnScreen';

import { toggleIsHomePageOpen } from '../../store/actions';

import {
  StyledCommonPageWrapper,
  StyledSectionTitle,
} from '../../globalStyles/StyledCommonElements';
import { StyledSectionWrapper, StyledGoBackLink } from './styles/StyledProject';

const Project = ({ projectMainInfo, projectFeatures }) => {
  const [isTitleVisible, setIsTitleVisible] = useState(false);

  const titleRef = useRef();

  const isTitleOnScreen = useOnScreen(titleRef);

  if (isTitleOnScreen) {
    if (!isTitleVisible) setIsTitleVisible(true);
  }

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(toggleIsHomePageOpen(false));
  }, []);

  return (
    <StyledCommonPageWrapper>
      <a id="project" className="scroll-target" />
      <StyledSectionWrapper>
        <StyledGoBackLink
          to={{
            pathname: '/',
            state: {
              scrollTarget: 'my-projects',
            },
          }}
        >
          <i className="fas fa-arrow-left"></i>
        </StyledGoBackLink>
        <StyledSectionTitle ref={titleRef} visible={isTitleVisible}>
          {projectMainInfo.pageTitle}
        </StyledSectionTitle>
        <ProjectHeader {...projectMainInfo} />
        <ProjectFeatures projectFeatures={projectFeatures} />
        <StyledGoBackLink
          to={{
            pathname: '/',
            state: {
              scrollTarget: 'my-projects',
            },
          }}
          bottom
        >
          <i className="fas fa-arrow-left"></i>
        </StyledGoBackLink>
      </StyledSectionWrapper>
    </StyledCommonPageWrapper>
  );
};

export default Project;
