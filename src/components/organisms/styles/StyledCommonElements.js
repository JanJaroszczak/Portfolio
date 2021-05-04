import styled from 'styled-components';

export const StyledCommonPageWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;

  /* border: 1px solid black; */
`;

export const StyledSectionTitle = styled.h1`
  position: absolute;
  top: -84px;
  left: 40px;
  /* font-size: ${({ theme }) => theme.fontSizes.sl}; */
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.gray};
  transform: ${({ visible }) =>
    visible ? 'translateY(0)' : 'translateY(-60px)'};
  transition: 1s;
`;

export const StyledSectionHeading = styled.h2`
  margin: 30px 10px;
  /* font-size: ${({ theme }) => theme.fontSizes.xl}; */
  font-weight: ${({ theme }) => theme.fontWeights.light};
  text-align: center;
  transform: ${({ visible }) =>
    visible ? 'translateY(0)' : 'translateY(60px)'};
  transition: 1s;
`;
