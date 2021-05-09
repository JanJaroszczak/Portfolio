import styled from 'styled-components';

import { sectionsGap } from '../../../helpers/elementsCSSVariables';

export const StyledSectionWrapper = styled.section`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  margin-bottom: ${sectionsGap};
  border: 8px solid ${({ theme }) => theme.colors.gray};
`;
