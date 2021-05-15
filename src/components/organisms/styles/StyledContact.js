import styled from 'styled-components';

import { animationOffset } from '../../../helpers/elementsCSSVariables';

export const StyledSectionWrapper = styled.section`
  position: relative;
  padding: 0 30px 40px;
  border: 8px solid ${({ theme }) => theme.colors.gray};

  @media (max-width: 480px) {
    border: 5px solid ${({ theme }) => theme.colors.gray};
  }

  @media (max-width: 430px) {
    padding: 0 15px 30px;
  }
`;

export const StyledContactHeading = styled.h4`
  margin: 30px 0;
  margin: ${({ email, social }) =>
    email ? '40px 0 15px' : social ? '50px 0 20px' : '30px 0'};

  font-weight: ${({ theme }) => theme.fontWeights.light};
  text-align: center;

  @media (max-width: 650px) {
    font-size: ${({ theme }) => theme.fontSizes.l};
  }

  @media (max-width: 520px) {
    font-size: ${({ theme }) => theme.fontSizes.m};
  }

  @media (max-width: 480px) {
    font-size: ${({ theme }) => theme.fontSizes.s};
  }
`;

export const StyledForm = styled.div`
  transform: ${({ visible }) =>
    visible ? 'translateY(0)' : `translateY(${animationOffset})`};
  transition: 1s;
`;

export const StyledFormContentWrapper = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

export const StyledTextInputsWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 650px) {
    flex-direction: column;
  }
`;

export const StyledTextareaWrapper = styled.div`
  position: relative;
  margin-top: 15px;
`;

export const StyledErrorWrapper = styled.div`
  position: absolute;
  bottom: ${({ textarea }) => (textarea ? '-30px' : '-22px')};
  left: 5px;
  font-size: ${({ theme }) => theme.fontSizes.xxs};
  color: ${({ theme }) => theme.colors.error};

  @media (max-width: 650px) {
    font-size: ${({ theme }) => theme.fontSizes.ss};
    bottom: ${({ textarea }) => (textarea ? '-27px' : '-19px')};
  }
`;

export const StyledTextAreaLabel = styled.label`
  display: block;
  margin-bottom: 3px;
  font-size: ${({ theme }) => theme.fontSizes.s};

  @media (max-width: 520px) {
    font-size: ${({ theme }) => theme.fontSizes.xs};
  }
`;

export const StyledTextarea = styled.textarea`
  display: block;
  width: 100%;
  min-height: 250px;
  padding: 5px 10px;
  resize: vertical;
  font-family: inherit;
  background-color: transparent;
  font-size: ${({ theme }) => theme.fontSizes.xxs};
  outline: none;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  -webkit-appearance: none;
  transition: 0.5s;

  &:focus {
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
      rgba(0, 0, 0, 0.22) 0px 15px 12px;
  }
`;

export const StyledTermsWrapper = styled.div`
  position: relative;
  display: block;
  margin: 35px 0 30px;

  input {
    width: 20px;
    height: 20px;
    cursor: pointer;
  }
`;

export const StyledCheckboxLabel = styled.label`
  margin-left: 10px;
  font-size: ${({ theme }) => theme.fontSizes.m};
  vertical-align: 4px;
`;

export const StyledSubSectionWrapper = styled.div`
  text-align: center;
  transform: ${({ visible }) =>
    visible ? 'translateY(0)' : `translateY(${animationOffset})`};
  transition: 1s;
  text-align: center;

  span {
    margin: 0 20px;
    font-size: ${({ theme }) => theme.fontSizes.m};
  }
`;

export const StyledContactLink = styled.a`
  font-size: ${({ theme }) => theme.fontSizes.m};
  color: ${({ theme }) => theme.colors.gray};
  text-decoration: none;

  @media (max-width: 480px) {
    font-size: ${({ theme }) => theme.fontSizes.s};
  }

  i {
    margin-right: 10px;
  }
`;

export const StyledLi = styled.li`
  &:first-child {
    margin-bottom: 15px;
  }
`;
