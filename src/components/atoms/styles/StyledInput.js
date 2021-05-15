import styled, { css } from 'styled-components';

// import { inputVariants } from '../../../helpers/atomsTypesAndVariants';

export const StyledInputWrapper = styled.div`
  display: inline-block;
  position: relative;
  /* min-width: 252px;
  margin-right: 0 auto; */

  /* border: 1px solid black; */

  /* @media (max-width: 650px) {
    display: block;
  } */
`;

export const StyledLabel = styled.label`
  display: block;
  margin-bottom: 3px;
  font-size: ${({ theme }) => theme.fontSizes.s};

  /* border: 1px solid black; */

  @media (max-width: 520px) {
    font-size: ${({ theme }) => theme.fontSizes.xs};
  }
`;

export const StyledInput = styled.input`
  display: block;
  width: 250px;
  height: 30px;
  margin-bottom: 20px;
  padding: 0 10px;
  font-family: inherit;
  background-color: transparent;
  font-size: ${({ theme }) => theme.fontSizes.xxs};
  outline: none;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  transition: 0.5s;

  @media (max-width: 400px) {
    width: 100%;
  }

  &:focus {
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
      rgba(0, 0, 0, 0.22) 0px 15px 12px;
  }
`;

export const StyledErrorWrapper = styled.div`
  position: absolute;
  bottom: -8px;
  left: 5px;
  font-size: ${({ theme }) => theme.fontSizes.xxs};
  color: ${({ theme }) => theme.colors.error};

  @media (max-width: 650px) {
    font-size: ${({ theme }) => theme.fontSizes.ss};
    bottom: -4px;
  }
`;
