import React, { useState, useRef } from 'react';

import useOnScreen from '../../utils/useOnScreen';

import {
  StyledCommonPageWrapper,
  StyledSectionTitle,
  StyledSectionHeading,
} from '../../globalStyles/StyledCommonElements';

import {
  StyledSectionWrapper,
  StyledImageColumn,
  StyledImg,
  StyledTextColumn,
  StyledSectionParagraph,
} from './styles/StyledAboutMe';

import devices from '../../assets/devices.png';

const AboutMe = () => {
  const [isTitleVisible, setIsTitleVisible] = useState(false);
  const [isImageVisible, setIsImageVisible] = useState(false);
  const [isHeadingVisible, setIsHeadingVisible] = useState(false);
  const [isParagraphVisible, setIsParagraphVisible] = useState(false);

  const titleRef = useRef();
  const imageRef = useRef();
  const paragraphRef = useRef();

  const isTitleOnScreen = useOnScreen(titleRef);
  const isImageOnScreen = useOnScreen(imageRef);
  const isParagraphOnScreen = useOnScreen(paragraphRef);

  if (isTitleOnScreen) {
    if (!isTitleVisible) setIsTitleVisible(true);
  }

  if (isImageOnScreen) {
    if (!isImageVisible) setIsImageVisible(true);
  }

  if (isParagraphOnScreen) {
    if (!isParagraphVisible) setIsParagraphVisible(true);
  }

  return (
    <StyledCommonPageWrapper>
      <a id="about-me" className="scroll-target" />
      <StyledSectionWrapper>
        <StyledSectionTitle ref={titleRef} visible={isTitleVisible}>
          About me.
        </StyledSectionTitle>
        <StyledImageColumn>
          <StyledImg
            src={devices}
            alt="devices"
            ref={imageRef}
            visible={isImageVisible}
          />
        </StyledImageColumn>
        <StyledTextColumn>
          <StyledSectionParagraph
            ref={paragraphRef}
            visible={isParagraphVisible}
          >
            I am an ex-logistics and supply chain manager who found passion in
            web development and decided to change his career path. From primary
            school until graduating from university I created several small
            webpages. I have always enjoyed doing it, however due to my program
            of studies and other career opportunities I have never dived deeper
            into web development. During the first COVID-19 lockdown I finally
            had more free time and started learning about front-end from the
            very beginning to have a better knowledge base. It was really fun
            for me and, at the same time, extremely interesting - to such an
            extent that after several months I decided that I want to change my
            career and try my hand in the IT world. Having a job that I love, is
            my dream.
          </StyledSectionParagraph>
        </StyledTextColumn>
      </StyledSectionWrapper>
    </StyledCommonPageWrapper>
  );
};

export default AboutMe;
