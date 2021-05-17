import styled from 'styled-components';

export const StyledButton = styled.button`
  display: inline-block;
  padding: 7px 15px;
  background-color: ${({ theme }) => theme.colors.gray};
  font-size: ${({ theme }) => theme.fontSizes.xxs};
  color: ${({ theme }) => theme.colors.white};
  text-transform: capitalize;
  border: none;
  transition: 0.5s;
  transition-delay: 0.0001s;

  @media (max-width: 320px) {
    padding: 7px 8px;
  }

  @media (max-width: 300px) {
    padding: 7px 4px;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.black};
  }
`;
