import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Header, Footer, MobMenu, Loader } from "../components";
import { ROUTES } from "../utils/const";
const LazyAbout = React.lazy(() => import('../pages/about'));
const LazyHome = React.lazy(() => import('../pages'));
const LazyPress = React.lazy(() => import('../pages/press'));
const LazyProject = React.lazy(() => import('../pages/project'));
const LazyProjects = React.lazy(() => import('../pages/projects'));
const LazyServices = React.lazy(() => import('../pages/services'));
const LazyDesignProject = React.lazy(() => import('../pages/design-project'));

export const AppRouter: React.FC = () => {
  const [isMobMenuOpen, setMobMenuOpen] = React.useState(false);
  
  return (
    <div className="wrapper">
      <BrowserRouter>
        <MobMenu/>
        <Header />
        <main className="main">
          <Suspense fallback={ <Loader />}>
            <Routes>
              <Route path={ROUTES.Home} element={<LazyHome />} />
              <Route path={ROUTES.About} element={<LazyAbout />} />
              <Route path={ROUTES.Press} element={<LazyPress />} />
              <Route path={ROUTES.Project} element={<LazyProject />} />
              <Route path={ROUTES.Projects} element={<LazyProjects />} />
              <Route path={ROUTES.Services} element={<LazyServices />} />
              <Route path={ROUTES.DesignProject} element={<LazyDesignProject />} />
              {/* {publicRoutes.map(({ path, component, exact }) => (
                <Route path={path} element={component} />
              ))} */}
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
};
