import styled from 'styled-components';

import {
  animationOffset,
  sectionsGap,
  sectionGap650px,
  sectionGap520px,
  sectionGap480px,
} from '../../../helpers/elementsCSSVariables';

export const StyledSectionWrapper = styled.section`
  position: relative;
  display: grid;
  grid-template-columns: 3fr 4fr;
  margin-bottom: ${sectionsGap};
  border: 8px solid ${({ theme }) => theme.colors.gray};

  @media (max-width: 1000px) {
    grid-template-columns: 2fr 4fr;
  }

  @media (max-width: 850px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
  }

  @media (max-width: 650px) {
    margin-bottom: ${sectionGap650px};
  }

  @media (max-width: 520px) {
    margin-bottom: ${sectionGap520px};
  }

  @media (max-width: 480px) {
    margin-bottom: ${sectionGap480px};
    border: 5px solid ${({ theme }) => theme.colors.gray};
  }
`;

export const StyledImageColumn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledImg = styled.img`
  width: 100%;
  transform: ${({ visible }) =>
    visible ? 'translateY(0)' : `translateY(${animationOffset})`};
  transition: 1s;
  -webkit-transition: 1s;

  @media (max-width: 850px) {
    max-width: 510px;
  }
`;

export const StyledTextColumn = styled.div`
  text-align: center;
`;

export const StyledSectionParagraph = styled.p`
  margin: 20px 40px 20px;
  font-weight: ${({ theme }) => theme.fontWeights.light};
  text-align: justify;
  transform: ${({ visible }) =>
    visible ? 'translateY(0)' : `translateY(${animationOffset})`};
  transition: 1s;
  -webkit-transition: 1s;

  @media (max-width: 1100px) {
    font-size: ${({ theme }) => theme.fontSizes.xs};
  }

  @media (max-width: 480px) {
    margin: 20px 20px 20px;
  }
`;
