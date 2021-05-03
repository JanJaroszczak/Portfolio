import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from '../views/HomePage';

import { routes } from '../routes';

const Router = () => {
  const { home } = routes;

  return (
    <Switch>
      <Route exact path={home} component={HomePage} />
    </Switch>
  );
};

export default Router;
