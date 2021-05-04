import styled from 'styled-components';

export const StyledHeaderWrapper = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
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
  margin-bottom: 20px;
  opacity: ${({ fadeIn }) => (fadeIn ? '1' : '0')};
  font-size: ${({ theme }) => theme.fontSizes.sl};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  letter-spacing: 2px;
  transform: ${({ fadeIn }) => (fadeIn ? 'translateY(0)' : 'translateY(20px)')};
  transition: 2s;
`;

export const StyledSubHeading = styled.h3`
  opacity: ${({ fadeIn }) => (fadeIn ? '1' : '0')};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.thin};
  transform: ${({ fadeIn }) => (fadeIn ? 'translateY(0)' : 'translateY(20px)')};
  transition: 2s;
  transition-delay: 0.5s;
`;

export const StyledArrowButton = styled.button`
  position: absolute;
  left: 50%;
  bottom: 30px;
  transform: translateX(-50%);
  background-color: transparent;
  border: none;
  font-size: ${({ theme }) => theme.fontSizes.xxl};
  color: white;

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
