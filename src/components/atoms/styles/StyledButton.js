import styled, { css } from 'styled-components';

// import { buttonVariants } from '../../../helpers/atomsTypesAndVariants';

export const StyledButton = styled.button`
  display: inline-block;
  padding: 7px 15px;
  background-color: ${({ theme }) => theme.colors.gray};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.white};
  text-transform: capitalize;
  border: none;
  transition: 0.5s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.black};
  }
`;
