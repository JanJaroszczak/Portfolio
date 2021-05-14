import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { sectionsGap } from '../../../helpers/elementsCSSVariables';

export const StyledSectionWrapper = styled.section`
  position: relative;
  margin-bottom: ${sectionsGap};
  margin-top: 90px;
  padding: 0 60px 40px;
  border: 8px solid ${({ theme }) => theme.colors.gray};
`;

export const StyledGoBackLink = styled(NavLink)`
  position: absolute;
  top: ${({ bottom }) => (bottom ? 'none' : `10px`)};
  bottom: ${({ bottom }) => (bottom ? '10px' : `none`)};
  left: 20px;
  color: inherit;
  font-size: ${({ theme }) => theme.fontSizes.goBackArrow};
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.semiGray};
  }
`;
