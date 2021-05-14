import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from '../views/HomePage';
import OnlineShop from '../views/OnlineShop';

import { routes } from '../routes';

const Router = () => {
  const { home, onlineShop } = routes;

  return (
    <Switch>
      <Route exact path={home} component={HomePage} />
      <Route path={onlineShop} component={OnlineShop} />
    </Switch>
  );
};

export default Router;
