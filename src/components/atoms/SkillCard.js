import React, { useState, useRef } from 'react';
import { Icon } from '@iconify/react';

import useOnScreen from '../../utils/useOnScreen';

import {
  StyledCardWrapper,
  StyledIconWrapper,
  StyledImg,
  StyledSkillName,
} from './styles/StyledSkillCard';

const SkillCard = ({
  skillIcon,
  iconHeight,
  iconColor,
  skillLabel,
  img,
  imgAlt,
  center,
}) => {
  const [isCardVisible, setIsCardVisible] = useState(false);

  const cardRef = useRef();

  const isCardOnScreen = useOnScreen(cardRef);

  if (isCardOnScreen) {
    if (!isCardVisible) setIsCardVisible(true);
  }

  return (
    <StyledCardWrapper ref={cardRef} visible={isCardVisible} center={center}>
      <StyledIconWrapper>
        {img ? (
          <StyledImg src={img} alt={imgAlt} />
        ) : (
          <Icon icon={skillIcon} height={iconHeight} color={iconColor} />
        )}
      </StyledIconWrapper>
      <StyledSkillName>{skillLabel}</StyledSkillName>
    </StyledCardWrapper>
  );
};

export default SkillCard;
