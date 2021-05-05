import styled from 'styled-components';

export const StyledSectionWrapper = styled.section`
  position: relative;
  display: grid;
  grid-template-columns: 3fr 4fr;
  margin-top: 150px;
  border: 8px solid ${({ theme }) => theme.colors.gray};
`;

export const StyledImageColumn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  /* border: 1px solid ${({ theme }) => theme.colors.gray}; */
`;

export const StyledImg = styled.img`
  width: 100%;
  transform: ${({ visible }) =>
    visible ? 'translateY(0)' : 'translateY(60px)'};
  transition: 1s;
`;

export const StyledTextColumn = styled.div`
  text-align: center;

  /* border: 1px solid ${({ theme }) => theme.colors.gray}; */
`;

export const StyledSectionParagraph = styled.p`
  margin: 20px 40px 40px;
  /* font-size: ${({ theme }) => theme.fontSizes.m}; */
  font-weight: ${({ theme }) => theme.fontWeights.light};
  text-align: justify;
  transform: ${({ visible }) =>
    visible ? 'translateY(0)' : 'translateY(60px)'};
  transition: 1s;
`;
