import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import routes from "./routes";
import { createBrowserHistory } from "history";
import { RouterProviderProps } from "./model";

const BrowserHistory = createBrowserHistory();

const RouterProvider: React.FunctionComponent<RouterProviderProps> = ({
  children,
}) => {
  return (
    <>
      <Router history={BrowserHistory}>
        <Switch>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} exact={route.exact}>
              {children}
              <route.component />
            </Route>
          ))}
        </Switch>
      </Router>
    </>
  );
};
export { BrowserHistory };
export default RouterProvider;
