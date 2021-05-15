import styled, { css } from 'styled-components';

export const StyledAlert = styled.div`
  display: inline-block;
  height: 40px;
  margin-left: 40px;
  padding-right: 15px;
  font-size: ${({ theme }) => theme.fontSizes.xxs};
  font-weight: ${({ theme }) => theme.fontWeights.regular};

  line-height: 40px;
  color: ${({ theme }) => theme.colors.mainDark};
  background-color: ${({ theme }) => theme.colors.success};
  border-radius: 8px;

  @media (max-width: 430px) {
    margin-left: 15px;
    padding-right: 5px;
    font-size: ${({ theme }) => theme.fontSizes.ss};
  }

  @media (max-width: 320px) {
    margin-left: 5px;
  }

  i {
    margin: 0 10px 0 15px;
    font-size: ${({ theme }) => theme.fontSizes.m};
    vertical-align: -2px;
    color: ${({ theme }) => theme.colors.successIcon};

    @media (max-width: 430px) {
      margin: 0 5px 0 5px;
    }
  }

  ${({ visible }) =>
    !visible &&
    css`
      visibility: hidden;
    `}
`;
