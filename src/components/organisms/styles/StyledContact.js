import styled from 'styled-components';

export const StyledSectionWrapper = styled.section`
  position: relative;
  margin-top: 150px;
  padding: 0 30px 40px;
  border: 8px solid ${({ theme }) => theme.colors.gray};
`;

export const StyledContactHeading = styled.h4`
  margin: 30px 0;
  font-weight: ${({ theme }) => theme.fontWeights.light};
  text-align: center;

  /* border: 1px solid black; */
`;

export const StyledForm = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

export const StyledTextInputsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledTextareaWrapper = styled.div`
  position: relative;
  margin-top: 15px;

  /* border: 1px solid black; */
`;

// export const StyledClientDataInputsWrapper = styled.div`
//   @media (max-width: 768px) {
//     max-width: 250px;
//     margin: 0 auto;
//   }

//   /* border: 1px solid black; */
// `;

export const StyledErrorWrapper = styled.div`
  position: absolute;
  bottom: ${({ textarea }) => (textarea ? '-30px' : '-22px')};
  left: 5px;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.error};

  /* border: 1px solid black; */
`;

export const StyledTextAreaLabel = styled.label`
  display: block;
  margin-bottom: 3px;
  font-size: ${({ theme }) => theme.fontSizes.s};
`;

export const StyledTextarea = styled.textarea`
  display: block;
  width: 600px;
  min-height: 250px;
  padding: 5px 10px;
  resize: vertical;
  font-family: inherit;
  background-color: transparent;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  outline: none;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  transition: 0.5s;

  &:focus {
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
      rgba(0, 0, 0, 0.22) 0px 15px 12px;
  }

  @media (max-width: 1024px) {
    width: 100%;
  } ;
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
