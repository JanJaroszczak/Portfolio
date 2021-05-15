import styled from 'styled-components';

export const StyledPageContentWrapper = styled.div`
  min-height: calc(100vh - 140px);
  padding-bottom: 80px;
  margin-top: 70px;

  @media (max-width: 1000px) {
    padding-bottom: 40px;
  }

  @media (max-width: 490px) {
    min-height: calc(100vh - 50px);
    margin-top: 0;
  } ;
`;
