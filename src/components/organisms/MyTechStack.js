import React, { useState, useRef } from 'react';
import fileTypeHtml from '@iconify-icons/vscode-icons/file-type-html';
import fileTypeCss from '@iconify-icons/vscode-icons/file-type-css';
import fileTypeJsOfficial from '@iconify-icons/vscode-icons/file-type-js-official';
import fileTypeReactjs from '@iconify-icons/vscode-icons/file-type-reactjs';
import reduxIcon from '@iconify-icons/logos/redux';
import reactRouter from '@iconify-icons/logos/react-router';
import materialUi from '@iconify-icons/logos/material-ui';
import sassIcon from '@iconify-icons/logos/sass';
import jqueryIcon from '@iconify-icons/cib/jquery';
import styledComponents from '@iconify-icons/simple-icons/styled-components';
import firebaseIcon from '@iconify-icons/logos/firebase';
import fileTypeNpm from '@iconify-icons/vscode-icons/file-type-npm';
import webpackIcon from '@iconify-icons/logos/webpack';
import gitIcon from '@iconify-icons/logos/git-icon';
import githubIcon from '@iconify-icons/cib/github';

import SkillCard from '../atoms/SkillCard';
import useOnScreen from '../../utils/useOnScreen';

import {
  StyledCommonPageWrapper,
  StyledSectionTitle,
} from '../../globalStyles/StyledCommonElements';
import {
  StyledSectionWrapper,
  StyledSectionHeading,
  StyledGridWrapper,
} from './styles/StyledMyTechStack';

import formikIcon from '../../assets/formik.png';

const MyTechStack = () => {
  const [isTitleVisible, setIsTitleVisible] = useState(false);
  const [isHeadingVisible, setIsHeadingVisible] = useState(false);
  const [isHeading2Visible, setIsHeading2Visible] = useState(false);

  const titleRef = useRef();
  const headingRef = useRef();
  const heading2Ref = useRef();

  const isTitleOnScreen = useOnScreen(titleRef);
  const isHeadingOnScreen = useOnScreen(headingRef);
  const isHeading2OnScreen = useOnScreen(heading2Ref);

  if (isTitleOnScreen) {
    if (!isTitleVisible) setIsTitleVisible(true);
  }

  if (isHeadingOnScreen) {
    if (!isHeadingVisible) setIsHeadingVisible(true);
  }

  if (isHeading2OnScreen) {
    if (!isHeading2Visible) setIsHeading2Visible(true);
  }

  const renderSkills = () => (
    <>
      <StyledSectionHeading ref={headingRef} visible={isHeadingVisible}>
        Technologies:
      </StyledSectionHeading>
      <StyledGridWrapper technologies={true}>
        <SkillCard
          skillIcon={fileTypeHtml}
          iconHeight={140}
          skillLabel="HTML"
        />
        <SkillCard skillIcon={fileTypeCss} iconHeight={140} skillLabel="CSS" />
        <SkillCard
          skillIcon={fileTypeJsOfficial}
          iconHeight={140}
          skillLabel="JavaScript"
        />
        <SkillCard
          skillIcon={fileTypeReactjs}
          iconHeight={151}
          skillLabel="React"
        />
        <SkillCard skillIcon={reduxIcon} iconHeight={123} skillLabel="Redux" />
        <SkillCard
          skillIcon={reactRouter}
          iconHeight={82}
          skillLabel="React Router"
        />
        <SkillCard
          skillIcon={firebaseIcon}
          iconHeight={120}
          skillLabel="Google Firebase"
        />
        <SkillCard img={formikIcon} imgAlt="Formik icon" skillLabel="Formik" />
        <SkillCard
          skillIcon={materialUi}
          iconHeight={110}
          skillLabel="Material-UI"
        />
        <SkillCard skillIcon={sassIcon} iconHeight={105} skillLabel="Sass" />
        <SkillCard
          skillIcon={styledComponents}
          iconHeight={150}
          skillLabel="Styled Components"
        />
        <SkillCard
          skillIcon={jqueryIcon}
          iconHeight={120}
          skillLabel="jQuery"
          iconColor="#0868AB"
        />
      </StyledGridWrapper>
      <StyledSectionHeading ref={heading2Ref} visible={isHeading2Visible} tools>
        Tools:
      </StyledSectionHeading>
      <StyledGridWrapper tools>
        <SkillCard skillIcon={fileTypeNpm} iconHeight={143} skillLabel="npm" />
        <SkillCard
          skillIcon={webpackIcon}
          iconHeight={150}
          skillLabel="Webpack"
        />
        <SkillCard
          skillIcon={gitIcon}
          iconHeight={130}
          skillLabel="Git"
          center
        />
      </StyledGridWrapper>
    </>
  );

  return (
    <StyledCommonPageWrapper>
      <a id="my-tech-stack" className="scroll-target" />
      <StyledSectionWrapper>
        <StyledSectionTitle ref={titleRef} visible={isTitleVisible}>
          My tech stack.
        </StyledSectionTitle>
        {renderSkills()}
      </StyledSectionWrapper>
    </StyledCommonPageWrapper>
  );
};

export default MyTechStack;
