import React from 'react';
import { Switch } from 'react-router-dom';

import { routes } from 'general/constants/routes';
import { createRoutes } from 'general/utils/router';

export function App() {
  return <Switch>{createRoutes(routes)}</Switch>;
}
