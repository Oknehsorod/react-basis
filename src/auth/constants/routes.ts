import { Route } from 'common/utils/router';
import { Login } from 'auth/components';

export enum Paths {
    Login = "/login"
}

export const routes: Route[] = [
    {
        path: Paths.Login,
        exact: true,
        component: Login,
        middlewares: []
    }
]