import React, { useEffect, useState, useRef } from 'react';

import useOnScreen from '../../utils/useOnScreen';

import {
  StyledCommonPageWrapper,
  StyledSectionTitle,
  StyledSectionHeading,
} from './styles/StyledCommonElements';
import {
  StyledSectionWrapper,
  StyledImageColumn,
  StyledImg,
  StyledTextColumn,
  StyledSectionParagraph,
} from './styles/StyledAboutMe';

import devices from '../../assets/devices.png';

const AboutMe = ({ aboutMeOffsetTop }) => {
  const [isTitleVisible, setIsTitleVisible] = useState(false);
  const [isImageVisible, setIsImageVisible] = useState(false);
  const [isHeadingVisible, setIsHeadingVisible] = useState(false);
  const [isParagraphVisible, setIsParagraphVisible] = useState(false);

  const aboutMeRef = useRef();
  const titleRef = useRef();
  const imageRef = useRef();
  const headingRef = useRef();
  const paragraphRef = useRef();

  const isTitleOnScreen = useOnScreen(titleRef);
  const isImageOnScreen = useOnScreen(imageRef);
  const isHeadingOnScreen = useOnScreen(headingRef);
  const isParagraphOnScreen = useOnScreen(paragraphRef);

  if (isTitleOnScreen) {
    if (!isTitleVisible) setIsTitleVisible(true);
  }

  if (isImageOnScreen) {
    if (!isImageVisible) setIsImageVisible(true);
  }

  if (isHeadingOnScreen) {
    if (!isHeadingVisible) setIsHeadingVisible(true);
  }

  if (isParagraphOnScreen) {
    if (!isParagraphVisible) setIsParagraphVisible(true);
  }

  useEffect(() => {
    aboutMeOffsetTop(aboutMeRef.current.offsetTop);
    window.onresize = () => {
      aboutMeOffsetTop(aboutMeRef.current.offsetTop);
    };
  }, []);

  return (
    <StyledCommonPageWrapper ref={aboutMeRef}>
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
          <StyledSectionHeading ref={headingRef} visible={isHeadingVisible}>
            Lorem, ipsum dolor.
          </StyledSectionHeading>
          <StyledSectionParagraph
            ref={paragraphRef}
            visible={isParagraphVisible}
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem quia
            aut tenetur, vitae illum reprehenderit, mollitia dignissimos ab
            tempora itaque magnam repellendus delectus nemo assumenda omnis
            perferendis. Ut amet nostrum necessitatibus ipsa sit sint
            distinctio, quam doloremque, vitae corporis reprehenderit mollitia
            explicabo dolore qui exercitationem! Sit adipisci, ut beatae facilis
            impedit esse laudantium quaerat cupiditate velit voluptates
            aspernatur minus voluptate nisi veniam consequuntur repellendus ad
            perspiciatis quisquam repellat? Fugit molestiae cumque harum nemo,
            repellat cum et magni libero, reprehenderit voluptates sunt. Eius
            asperiores distinctio beatae esse adipisci sit quam similique illo?
            Molestiae reiciendis quidem id explicabo ea sint, cupiditate quis.
          </StyledSectionParagraph>
        </StyledTextColumn>
      </StyledSectionWrapper>
    </StyledCommonPageWrapper>
  );
};

export default AboutMe;
