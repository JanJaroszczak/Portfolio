import React from 'react';

import MainTemplate from '../templates/MainTemplate';
import Router from '../routing/Router';

const Root = () => {
  return (
    <MainTemplate>
      <Router />
    </MainTemplate>
  );
};

export default Root;
