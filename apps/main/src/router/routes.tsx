/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { Suspense } from 'react';
import { RouteObject } from 'react-router-dom';
import RootLayout from '../pages/index';
import About from '../pages/about';

// @ts-ignore
import { mount as mountExamination } from 'examination/ExaminationApp';
// @ts-ignore
import { mount as mountAutoEcole } from 'autoEcole/AutoEcoleApp';
// @ts-ignore
import { mount as mountCbtTracking } from 'cbtTracking/CbtTrackingApp';
// @ts-ignore
import { mount as mountLicensing } from 'licensing/LicensingApp';
// @ts-ignore
import { mount as mountQueueManagement } from 'queueManagement/QueueManagementApp';
// @ts-ignore
import { mount as mountUserManagement } from 'userManagement/UserManagementApp';
// @ts-ignore
import { mount as mountWatchList } from 'watchList/WatchListApp';

// const ExaminationMFELazy = React.lazy(() => import('../mfe/examination'));

const { routes: examinationRoutes, App: ExaminationApp } = mountExamination();
const { routes: autoEcoleRoutes, App: AutoEcoleApp } = mountAutoEcole();
const { routes: cbtTrackingRoutes, App: CbtTrackingApp } = mountCbtTracking();
const { routes: licensingRoutes, App: LicensingApp } = mountLicensing();
const { routes: queueManagementRoutes, App: QueueManagementApp } = mountQueueManagement();
const { routes: userManagementRoutes, App: UserManagementApp } = mountUserManagement();
const { routes: watchListRoutes, App: WatchListApp } = mountWatchList();

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
  {
    path: '/auto-ecole',
    element: <AutoEcoleApp />,
    children: [...autoEcoleRoutes],
  },
  {
    path: '/cbt-tracking',
    element: <CbtTrackingApp />,
    children: [...cbtTrackingRoutes],
  },
  {
    path: '/licensing',
    element: <LicensingApp />,
    children: [...licensingRoutes],
  },
  {
    path: '/queue-management',
    element: <QueueManagementApp />,
    children: [...queueManagementRoutes],
  },
  {
    path: '/user-management',
    element: <UserManagementApp />,
    children: [...userManagementRoutes],
  },
  {
    path: '/watchlist',
    element: <WatchListApp />,
    children: [...watchListRoutes],
  },
];

export default routes;
