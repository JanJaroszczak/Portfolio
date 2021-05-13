import React from 'react';

import Project from '../components/organisms/Project';

import {
  onlineShopMainInfo,
  onlineShopFeatures,
} from './helpers/OnlineShopContent';

const OnlineShop = () => {
  return (
    <Project
      projectMainInfo={onlineShopMainInfo}
      projectFeatures={onlineShopFeatures}
    />
  );
};

export default OnlineShop;
