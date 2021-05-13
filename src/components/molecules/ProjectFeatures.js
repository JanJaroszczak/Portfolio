import React, { useState, useRef } from 'react';

import ProjectFeature from '../atoms/ProjectFeature';
import useOnScreen from '../../utils/useOnScreen';

import { StyledSectionSubHeading } from './styles/StyledProjectFeatures';

const ProjectFeatures = ({ projectFeatures }) => {
  const [isSubHeadingVisible, setIsSubHeadingVisible] = useState(false);

  const subHeadingRef = useRef();

  const isSubHeadingOnScreen = useOnScreen(subHeadingRef);

  if (isSubHeadingOnScreen) {
    if (!isSubHeadingVisible) setIsSubHeadingVisible(true);
  }

  const features = projectFeatures.map((feature, index) => (
    <ProjectFeature {...feature} key={index} />
  ));

  return (
    <>
      <StyledSectionSubHeading
        ref={subHeadingRef}
        visible={isSubHeadingVisible}
      >
        Main features:
      </StyledSectionSubHeading>
      <ul>{features}</ul>
    </>
  );
};

export default ProjectFeatures;
