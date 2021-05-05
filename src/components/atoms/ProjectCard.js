import React, { useState, useRef } from 'react';

import useOnScreen from '../../utils/useOnScreen';

import {
  StyledProjectCardWrapper,
  StyledImageWrapper,
  StyledImg,
  StyledProjectName,
} from './styles/StyledProjectCard';

const ProjectCard = ({ img, imgAlt, projectLabel }) => {
  const [isCardVisible, setIsCardVisible] = useState(false);

  const cardRef = useRef();

  const isCardOnScreen = useOnScreen(cardRef);

  if (isCardOnScreen) {
    if (!isCardVisible) setIsCardVisible(true);
  }

  return (
    <StyledProjectCardWrapper ref={cardRef} visible={isCardVisible}>
      <StyledImageWrapper>
        <StyledImg src={img} alt={imgAlt} />
      </StyledImageWrapper>
      <StyledProjectName>{projectLabel}</StyledProjectName>
    </StyledProjectCardWrapper>
  );
};

export default ProjectCard;
