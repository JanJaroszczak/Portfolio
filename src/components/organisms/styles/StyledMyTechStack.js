import styled from 'styled-components';

export const StyledSectionWrapper = styled.section`
  position: relative;
  margin-top: 150px;
  padding: 0 30px 40px;
  border: 8px solid ${({ theme }) => theme.colors.gray};
`;

export const StyledSectionHeading = styled.h2`
  margin: 40px 10px 20px;
  /* font-size: ${({ theme }) => theme.fontSizes.xl}; */
  font-weight: ${({ theme }) => theme.fontWeights.light};
  text-align: center;
  transform: ${({ visible }) =>
    visible ? 'translateY(0)' : 'translateY(60px)'};
  transition: 1s;
`;

export const StyledGridWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto;
  row-gap: 30px;
  place-items: center;
  margin-bottom: ${({ technologies }) => (technologies ? '50px' : '10px')};
`;
