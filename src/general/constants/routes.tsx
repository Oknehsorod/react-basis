import React from 'react';
import { Route } from 'common/utils/router';

export const routes: Route[] = [
    {
        path: "/",
        exact: true,
        component: () => <div>App</div>,
        middlewares: []
    }
]