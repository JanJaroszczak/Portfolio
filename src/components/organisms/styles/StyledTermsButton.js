import styled from 'styled-components';

export const StyledTermsButton = styled.button`
  font-size: ${({ theme }) => theme.fontSizes.s};
  color: ${({ theme }) => theme.colors.link};
  font-weight: ${({ theme }) => theme.fontWeights.light};
  border: none;
  background-color: transparent;

  @media (max-width: 520px) {
    font-size: ${({ theme }) => theme.fontSizes.xs};
  }

  @media (max-width: 350px) {
    font-size: ${({ theme }) => theme.fontSizes.xxs};
    vertical-align: 1px;
  }

  @media (max-width: 310px) {
    font-size: ${({ theme }) => theme.fontSizes.ss};
    vertical-align: 2px;
  }
`;
