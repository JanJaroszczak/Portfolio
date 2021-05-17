import styled from 'styled-components';

export const StyledTermsWrapper = styled.div`
  max-height: 60vh;
  overflow: auto;
`;

export const StyledTermsHeading = styled.h3`
  font-weight: ${({ theme }) => theme.fontWeights.light};
  padding: 10px 30px;
`;

export const StyledTermsContentWrapper = styled.div`
  margin-bottom: 15px;
  padding: 0 30px;
  font-size: ${({ theme }) => theme.fontSizes.xxs};
  font-weight: ${({ theme }) => theme.fontWeights.light};
  text-align: justify;
  overflow-wrap: break-word;

  h3 {
    font-size: ${({ theme }) => theme.fontSizes.m};
    text-align: left;
  }

  h4 {
    font-size: ${({ theme }) => theme.fontSizes.s};
    text-align: left;
  }

  p,
  li {
    font-size: ${({ theme }) => theme.fontSizes.xs};
  }
`;
