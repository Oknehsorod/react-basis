import React from 'react';
import { Route as RouteDOM, Redirect } from 'react-router-dom';

import { Route } from 'common/utils/router';

export function createRoutes(routes: Route[]) {
  return routes.map(({ path, exact, component, middlewares }) => {
    let redirectTo: string | null = null;
    for (let i = 0; i < middlewares.length; i += 1) {
      const currCheck = middlewares[i].check();
      if (currCheck.redirect) {
        redirectTo = currCheck.to;
        break;
      }
    }
    if (redirectTo) {
      return <Redirect key={path} to={redirectTo} />;
    } else {
      return (
      <RouteDOM key={path} path={path} exact={exact}>{React.createElement(component)}</RouteDOM>
      );
    }
  });
}
