import React, { useState, useRef } from 'react';
import { animateScroll as scroll } from 'react-scroll';

import useOnScreen from '../../utils/useOnScreen';
import {
  StyledProjectCardWrapper,
  StyledImageWrapper,
  StyledImg,
  StyledProjectName,
  StyledDuringDevLabel,
  StyledLink,
} from './styles/StyledProjectCard';

const ProjectCard = ({
  img,
  imgAlt,
  projectLabel,
  duringDev,
  center,
  link,
}) => {
  const [isCardVisible, setIsCardVisible] = useState(false);

  const cardRef = useRef();

  const isCardOnScreen = useOnScreen(cardRef);

  if (isCardOnScreen) {
    if (!isCardVisible) setIsCardVisible(true);
  }

  return (
    <StyledProjectCardWrapper
      ref={cardRef}
      visible={isCardVisible}
      center={center}
    >
      <StyledImageWrapper>
        {link ? (
          <StyledLink to={link} onClick={() => scroll.scrollToTop()}>
            <StyledImg src={img} alt={imgAlt} />
          </StyledLink>
        ) : (
          <StyledImg src={img} alt={imgAlt} />
        )}
        {duringDev && (
          <StyledDuringDevLabel>
            <span>In development</span>
          </StyledDuringDevLabel>
        )}
      </StyledImageWrapper>
      {link ? (
        <StyledProjectName>
          <StyledLink to={link} onClick={() => scroll.scrollToTop()}>
            {projectLabel}
          </StyledLink>
        </StyledProjectName>
      ) : (
        <StyledProjectName>{projectLabel}</StyledProjectName>
      )}
    </StyledProjectCardWrapper>
  );
};

export default ProjectCard;
