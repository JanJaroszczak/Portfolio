import React, { useState, useRef } from 'react';

import useOnScreen from '../../utils/useOnScreen';

import {
  StyledLi,
  StyledProjectFeature,
  StyledGIFWrapper,
  StyledGIF,
} from './styles/StyledProjectFeature';

const ProjectFeature = ({ featureDescription, gif, gifAlt }) => {
  const [isFeatureVisible, setIsFeatureVisible] = useState(false);

  const featureRef = useRef();

  const isFeatureOnScreen = useOnScreen(featureRef);

  if (isFeatureOnScreen) {
    if (!isFeatureVisible) setIsFeatureVisible(true);
  }

  return (
    <StyledLi ref={featureRef} visible={isFeatureVisible}>
      <StyledProjectFeature>
        <i className="fas fa-check"></i>
        <p>{featureDescription}</p>
        <StyledGIFWrapper>
          <StyledGIF src={gif} alt={gifAlt} />
        </StyledGIFWrapper>
      </StyledProjectFeature>
    </StyledLi>
  );
};

export default ProjectFeature;
