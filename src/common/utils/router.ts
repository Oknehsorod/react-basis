export interface Middleware {
  check(): { redirect: boolean; to: string };
}

export interface Route {
  path: string;
  exact: boolean;
  component: () => JSX.Element;
  middlewares: Middleware[];
}
