import React, { useState, useRef } from 'react';

import useOnScreen from '../../utils/useOnScreen';

import {
  StyledProjectHeaderWrapper,
  StyledSectionHeading,
  StyledParagraph,
  StyledLinksList,
  StyledLink,
} from './styles/StyledProjectHeader';

const ProjectHeader = ({
  sectionHeading,
  projectOverview,
  usedTechnologies,
  gitHubLink,
  liveVersionLink,
}) => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);

  const headerRef = useRef();

  const isHeaderOnScreen = useOnScreen(headerRef);

  if (isHeaderOnScreen) {
    if (!isHeaderVisible) setIsHeaderVisible(true);
  }

  return (
    <StyledProjectHeaderWrapper ref={headerRef} visible={isHeaderVisible}>
      <StyledSectionHeading>{sectionHeading}</StyledSectionHeading>
      <StyledParagraph>
        {projectOverview}
        {<br />}
        {<br />}
        Created using i.a. following technologies:
        {<br />}
        {usedTechnologies}
      </StyledParagraph>
      <StyledLinksList>
        <li>
          <StyledLink href={gitHubLink} target="_blank">
            <i className="fab fa-github"></i>GitHub
          </StyledLink>
        </li>
        <li>
          <StyledLink href={liveVersionLink} target="_blank">
            <i className="fas fa-desktop"></i>Live version
          </StyledLink>
        </li>
      </StyledLinksList>
    </StyledProjectHeaderWrapper>
  );
};

export default ProjectHeader;
