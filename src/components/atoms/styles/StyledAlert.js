import styled, { css } from 'styled-components';

// import { alertVariants } from '../../../helpers/atomsTypesAndVariants';

export const StyledAlert = styled.div`
  display: inline-block;
  height: 40px;
  /* width: 100%; */
  /* margin: 15px 0; */
  margin-left: 40px;
  padding-right: 15px;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.regular};

  line-height: 40px;
  color: ${({ theme }) => theme.colors.mainDark};
  background-color: ${({ theme }) => theme.colors.success};
  border-radius: 8px;
  i {
    margin: 0 10px 0 15px;
    font-size: ${({ theme }) => theme.fontSizes.m};
    vertical-align: -2px;
    color: ${({ theme }) => theme.colors.successIcon};
  }

  ${({ visible }) =>
    !visible &&
    css`
      visibility: hidden;
    `}

  @media (max-width: 310px) {
    font-size: ${({ theme }) => theme.fontSizes.xs};

    i {
      margin: 0 10px;
    }
  }
`;
