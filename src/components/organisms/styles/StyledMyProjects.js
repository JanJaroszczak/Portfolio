import styled from 'styled-components';

import {
  sectionsGap,
  sectionGap650px,
  sectionGap520px,
  sectionGap480px,
} from '../../../helpers/elementsCSSVariables';

export const StyledSectionWrapper = styled.section`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  column-gap: 30px;
  padding: 45px 30px 0;
  margin-bottom: ${sectionsGap};
  border: 8px solid ${({ theme }) => theme.colors.gray};

  @media (max-width: 670px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 650px) {
    margin-bottom: ${sectionGap650px};
  }

  @media (max-width: 520px) {
    margin-bottom: ${sectionGap520px};
    padding: 30px 30px 0;
  }

  @media (max-width: 480px) {
    margin-bottom: ${sectionGap480px};
    border: 5px solid ${({ theme }) => theme.colors.gray};
  }

  @media (max-width: 430px) {
    padding: 30px 15px 0;
  }
`;
