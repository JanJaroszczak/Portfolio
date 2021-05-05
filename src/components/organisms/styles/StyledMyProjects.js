import styled from 'styled-components';

export const StyledSectionWrapper = styled.section`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  margin-top: 150px;
  border: 8px solid ${({ theme }) => theme.colors.gray};
`;
