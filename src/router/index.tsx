import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Header, Footer, MobMenu, Loader } from "../components";
import { ROUTES } from "../utils/const";
import Home from "../pages"; 
import { UserApiClient } from "../api";
import { ProjectType } from "../types";
const LazyAbout = React.lazy(() => import('../pages/about'));
const LazyPress = React.lazy(() => import('../pages/press'));
const LazyProject = React.lazy(() => import('../pages/project'));
const LazyProjects = React.lazy(() => import('../pages/projects'));
const LazyServices = React.lazy(() => import('../pages/services'));
const LazyDesignProject = React.lazy(() => import('../pages/design-project'));

export const AppRouter: React.FC = () => {
  const [isMobMenuOpen, setMobMenuOpen] = React.useState(false);
  
  const mobMenuRef = React.useRef(null)
  const menuButtonRef = React.useRef<HTMLButtonElement>(null)
  const [projects, setProjects] = React.useState<ProjectType[]>([])

  React.useEffect(() => {
    const onClose = (e: any) => {
      if (!e.path.includes(mobMenuRef.current) && !e.path.includes(menuButtonRef.current)) {
        document.body.classList.remove("lock")
        menuButtonRef?.current?.classList.remove("active")
        setMobMenuOpen(false)
      }
    }
  
    document.body.addEventListener("click", onClose)

    return () => document.body.removeEventListener("click", onClose)
  }, [])

  React.useEffect(() => {
    UserApiClient.getProjects().then(data => {
      setProjects(data)
    })
  }, [])

  const onClose = () => {
    document.body.classList.remove("lock")
    menuButtonRef?.current?.classList.remove("active")
    setMobMenuOpen(false)
  }

  return (
    <div className="wrapper">
      <BrowserRouter>
        <MobMenu ref={mobMenuRef} isOpen={isMobMenuOpen} onClose={onClose} />
        <Header openMobMenu={setMobMenuOpen} menuButtonRef={menuButtonRef} />
        <main className="main">
          <Suspense fallback={ <Loader />}>
            <Routes>
              <Route path="/*" element={<Home projects={projects} />} />
              <Route path={ROUTES.About} element={<LazyAbout projects={projects} />} />
              <Route path={ROUTES.Press} element={<LazyPress />} />

              <Route path={ROUTES.Project} element={<LazyProject projects={projects} />} />
              <Route path={ROUTES.Projects} element={<LazyProjects projects={projects} />} />
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
