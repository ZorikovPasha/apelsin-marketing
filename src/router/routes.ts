import React from 'react';
import { ROUTES } from '../utils/const';
import About from '../pages/about';
import DesignProject from '../pages/design-project';
import Home from '../pages';
import Press from '../pages/press';
import Project from '../pages/project';
import Projects from '../pages/projects';
import Services from '../pages/services'; 

export const publicRoutes = [
  {
    path: ROUTES.About,
    component: About,
    exact: true
  },
  {
    path: ROUTES.Home,
    component: Home,
    exact: true
  },
  {
    path: ROUTES.Press,
    component: Press,
    exact: true
  },
  {
    path: ROUTES.Projects,
    component: Projects,
    exact: true
  },
  {
    path: ROUTES.Project,
    component: Project,
    exact: true
  },
  {
    path: ROUTES.Services,
    component: Services,
    exact: true
  },
  {
    path: ROUTES.DesignProject,
    component: DesignProject,
    exact: true
  },
];
