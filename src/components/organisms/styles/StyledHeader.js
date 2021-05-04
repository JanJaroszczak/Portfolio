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
  font-weight: 600;
  font-size: 7rem;
  letter-spacing: 2px;
`;

export const StyledSubHeading = styled.h2`
  transform: ${({ fadeIn }) => (fadeIn ? 'translateY(0)' : 'translateY(20px)')};
  opacity: ${({ fadeIn }) => (fadeIn ? '1' : '0')};
  transition: 2s;
  transition-delay: 0.5s;
  font-weight: 100;
  font-size: 4rem;
`;

export const StyledArrowButton = styled.button`
  position: absolute;
  left: 50%;
  bottom: 30px;
  transform: translateX(-50%);
  background-color: transparent;
  border: none;
  color: white;
  font-size: 5rem;

  & i {
    transform: translateY(-40px);
    opacity: 0;
    animation: arrow 2s linear infinite;
  }

  @keyframes arrow {
    10% {
      opacity: 0;
    }

    25% {
      opacity: 1;
    }

    60% {
      opacity: 1;
    }

    90% {
      opacity: 0;
    }

    100% {
      opacity: 0;
      transform: translateY(30px);
    }
  }
`;
