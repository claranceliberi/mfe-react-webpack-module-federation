import React from 'react';
import { RouteObject } from 'react-router-dom';
import RootLayout from '../pages/index';
import About from '../pages/about';

// mfe routes, make sure you don't start with a slash here, otherwise it will break
const routes: RouteObject[] = [
  {
    path: '',
    element: <RootLayout />,
  },
  {
    path: 'about',
    element: <About />,
  },
];

export default routes;
