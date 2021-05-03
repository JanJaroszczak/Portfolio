import React from 'react';
import styled from 'styled-components';
import Header from '../components/organisms/Header';

const StyledHomePageWrapper = styled.div`
  height: 2000px;
`;

const HomePage = () => {
  return (
    <StyledHomePageWrapper>
      <Header />
    </StyledHomePageWrapper>
  );
};

export default HomePage;
