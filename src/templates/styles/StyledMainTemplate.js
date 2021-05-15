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
    /* padding-bottom: 100px; */
    margin-top: 0;
    /* margin-bottom: -70px; */
  } ;
`;

// export const StyledWrapper = styled.div`
//   min-height: calc(100vh - 140px);
//   padding-bottom: 30px;
//   margin-top: 70px;

//   @media (max-width: 750px) {
//     min-height: calc(100vh - 50px);
//     padding-bottom: 100px;
//     margin-top: 50px;
//     margin-bottom: -70px;
//   } ;
// `;
