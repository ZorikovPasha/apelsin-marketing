import React, { Suspense } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import { Header, Footer, MobMenu, Loader } from "../components";
import { publicRoutes } from "./routes";

export const AppRouter: React.FC = () => {
  const [isMobMenuOpen, setMobMenuOpen] = React.useState(false);
  
  return (
    <div className="wrapper">
        <BrowserRouter>
          <MobMenu/>
          <Header />
          <main className="main">
            {publicRoutes.map(({ path, component, exact }) => (
              <Suspense fallback={ <Loader />} key={path}>
                <Route path={path} component={component} exact={exact} />
              </Suspense>
            ))}
          </main>
          <Footer />
        </BrowserRouter>
    </div>
  );
};
