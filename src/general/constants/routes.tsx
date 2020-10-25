import React from 'react';
import { Route } from 'common/utils/router';

import { routes as authRoutes } from 'auth/constants/routes';

export const routes: Route[] = [
    {
        path: "/",
        exact: true,
        component: () => <div>App</div>,
        middlewares: []
    },
    ...authRoutes
]