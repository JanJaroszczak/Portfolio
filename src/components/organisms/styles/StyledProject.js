import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import {
  sectionsGap,
  sectionGap650px,
  sectionGap520px,
  sectionGap480px,
} from '../../../helpers/elementsCSSVariables';

export const StyledSectionWrapper = styled.section`
  position: relative;
  margin-bottom: ${sectionsGap};
  margin-top: 90px;
  padding: 0 60px 40px;
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

export const StyledGoBackLink = styled(NavLink)`
  position: absolute;
  top: ${({ bottom }) => (bottom === 'true' ? 'none' : `10px`)};
  bottom: ${({ bottom }) => (bottom === 'true' ? '10px' : `none`)};
  left: 20px;
  color: inherit;
  font-size: ${({ theme }) => theme.fontSizes.goBackArrow};
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.semiGray};
  }
`;
