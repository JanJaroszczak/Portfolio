import styled from 'styled-components';

export const StyledSectionWrapper = styled.section`
  position: relative;
  margin-top: 200px;
  padding: 0 30px 30px;
  border: 8px solid ${({ theme }) => theme.colors.gray};
`;

export const StyledGridWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto;
  row-gap: 30px;
  place-items: center;
  margin-bottom: ${({ technologies }) => (technologies ? '50px' : '')};
`;
