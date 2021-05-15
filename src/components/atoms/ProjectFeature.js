import React, { useState, useRef } from 'react';
import { useMediaQuery } from 'react-responsive';

import useOnScreen from '../../utils/useOnScreen';

import {
  StyledLi,
  StyledProjectFeature,
  StyledGIFWrapper,
  StyledGIF,
} from './styles/StyledProjectFeature';

const ProjectFeature = ({ featureDescription, gif, gifAlt, verticalGIF }) => {
  const [isFeatureVisible, setIsFeatureVisible] = useState(false);

  const featureRef = useRef();

  const isFeatureOnScreen = useOnScreen(featureRef);

  if (isFeatureOnScreen) {
    if (!isFeatureVisible) setIsFeatureVisible(true);
  }

  const is480px = useMediaQuery({
    query: '(max-width: 480px)',
  });

  return (
    <StyledLi ref={featureRef} visible={isFeatureVisible}>
      <StyledProjectFeature>
        {!is480px && <i className="fas fa-check"></i>}
        <p>
          {is480px && <i className="fas fa-check"></i>}
          {featureDescription}
        </p>
        <StyledGIFWrapper gif={gif}>
          {gif && (
            <StyledGIF src={gif} alt={gifAlt} verticalGIF={verticalGIF} />
          )}
        </StyledGIFWrapper>
      </StyledProjectFeature>
    </StyledLi>
  );
};

export default ProjectFeature;
