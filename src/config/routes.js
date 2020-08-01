import * as React from "react";
import { Route, Switch } from "react-router-dom";

import HomeScreen from "../screens/home/Home";
import ScrollToTop from "../components/scrollToTop/ScrollToTop";


const publicPath = "/";

export const routeCodes = {
  HOME: publicPath,
};

export default () => {
  return (
    <ScrollToTop>
      <Switch>
        <Route exact path={routeCodes.HOME} render={() => <HomeScreen />} />
      </Switch>
    </ScrollToTop>
  );
};
