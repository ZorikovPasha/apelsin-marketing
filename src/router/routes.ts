import React from 'react';

import { ROUTES } from '../utils/const';

const LazyAbout = React.lazy(() => import('../pages/about'));
const LazyHome = React.lazy(() => import('../pages'));
const LazyPress = React.lazy(() => import('../pages/press'));
const LazyProject = React.lazy(() => import('../pages/project'));
const LazyProjects = React.lazy(() => import('../pages/projects'));
const LazyServices = React.lazy(() => import('../pages/services'));
const LazyDesignProject = React.lazy(() => import('../pages/design-project'));

export const publicRoutes = [
  {
    path: ROUTES.About,
    component: LazyAbout,
    exact: true
  },
  {
    path: ROUTES.Home,
    component: LazyHome,
    exact: true
  },
  {
    path: ROUTES.Press,
    component: LazyPress,
    exact: true
  },
  {
    path: ROUTES.Projects,
    component: LazyProjects,
    exact: true
  },
  {
    path: ROUTES.Project,
    component: LazyProject,
    exact: true
  },
  {
    path: ROUTES.Services,
    component: LazyServices,
    exact: true
  },
  {
    path: ROUTES.DesignProject,
    component: LazyDesignProject,
    exact: true
  },
];
