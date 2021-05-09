import React, { useState, useRef } from 'react';

import useOnScreen from '../../utils/useOnScreen';

import {
  StyledProjectCardWrapper,
  StyledImageWrapper,
  StyledImg,
  StyledProjectName,
  StyledDuringDevLabel,
} from './styles/StyledProjectCard';

const ProjectCard = ({ img, imgAlt, projectLabel, duringDev }) => {
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
        {duringDev && (
          <StyledDuringDevLabel>
            <span>During dev...</span>
          </StyledDuringDevLabel>
        )}
      </StyledImageWrapper>
      <StyledProjectName>{projectLabel}</StyledProjectName>
    </StyledProjectCardWrapper>
  );
};

export default ProjectCard;
