import styled, { css } from 'styled-components';

export const StyledHeaderWrapper = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  background-color: #2e2a2a;
`;

export const StyledHeadingWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  text-align: center;
`;

export const StyledHeading = styled.h1`
  transform: ${({ fadeIn }) => (fadeIn ? 'translateY(0)' : 'translateY(20px)')};
  opacity: ${({ fadeIn }) => (fadeIn ? '1' : '0')};
  transition: 2s;
  margin-bottom: 20px;
  font-weight: 300;
  font-size: 7rem;
`;

export const StyledSubHeading = styled.h2`
  transform: ${({ fadeIn }) => (fadeIn ? 'translateY(0)' : 'translateY(20px)')};
  opacity: ${({ fadeIn }) => (fadeIn ? '1' : '0')};
  transition: 2s;
  transition-delay: 0.5s;
  font-weight: 200;
  font-size: 4rem;
`;
