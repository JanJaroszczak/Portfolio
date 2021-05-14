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
  padding-top: 45px;
  margin-bottom: ${sectionsGap};
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
