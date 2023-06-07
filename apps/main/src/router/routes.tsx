import React, { Suspense } from 'react';
import { RouteObject } from 'react-router-dom';
import RootLayout from '../pages/index';
import About from '../pages/about';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { mount } from 'examination/ExaminationApp';

// const ExaminationMFELazy = React.lazy(() => import('../mfe/examination'));

const { routes: examinationRoutes, App: ExaminationApp } = mount();
console.log(examinationRoutes);
const routes: RouteObject[] = [
  {
    path: '/',
    element: <RootLayout />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/examination',
    element: <ExaminationApp />,
    children: [...examinationRoutes],
  },
];

export default routes;
