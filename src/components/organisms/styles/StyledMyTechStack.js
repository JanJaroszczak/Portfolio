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
  margin-bottom: ${sectionsGap};
  padding: 0 30px 40px;
  border: 8px solid ${({ theme }) => theme.colors.gray};

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

export const StyledSectionHeading = styled.h2`
  margin: 40px 10px 20px;
  /* font-size: ${({ theme }) => theme.fontSizes.xl}; */
  font-weight: ${({ theme }) => theme.fontWeights.light};
  text-align: center;
  transform: ${({ visible }) =>
    visible ? 'translateY(0)' : `translateY(${animationOffset})`};
  transition: 1s;
`;

export const StyledGridWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto;
  row-gap: 30px;
  place-items: center;
  margin-bottom: ${({ technologies }) => (technologies ? '50px' : '10px')};
`;
