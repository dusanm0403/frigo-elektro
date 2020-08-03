import * as React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "../screens/home/Home";
import Services from "../screens/services/Services";
import Contact from "../screens/contact/Contact"
import ScrollToTop from "../components/scrollToTop/ScrollToTop";


const publicPath = "/";

export const routeCodes = {
  HOME: publicPath,
  SERVICES: `${ publicPath }usluge`,
  CONTACT: `${ publicPath }kontakt`
};

export default () => {
  return (
    <ScrollToTop>
      <Switch>
        <Route exact path={routeCodes.HOME} render={() => <Home />} />
        <Route exact path={routeCodes.SERVICES} render={() => <Services />} />
        <Route exact path={routeCodes.CONTACT} render={() => <Contact />} />
      </Switch>
    </ScrollToTop>
  );
};
