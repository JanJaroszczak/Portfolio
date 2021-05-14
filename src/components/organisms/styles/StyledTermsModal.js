import styled from 'styled-components';

export const StyledTermsWrapper = styled.div`
  max-height: 70vh;
  overflow: auto;
`;

export const StyledTermsHeading = styled.h3`
  font-weight: ${({ theme }) => theme.fontWeights.light};
  padding: 10px 0;

  /* border: 1px solid black; */
`;

export const StyledParagraph = styled.p`
  margin-bottom: 15px;
  padding: 0 30px;
  font-size: ${({ theme }) => theme.fontSizes.xxs};
  font-weight: ${({ theme }) => theme.fontWeights.light};
  text-align: justify;
`;
