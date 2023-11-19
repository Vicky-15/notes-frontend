import { type RouteObject } from "react-router-dom";

import AuthLayout from "../layout/AuthLayout";
import AuthRoutesGuard from "../hoc/AuthRoutesGuard";

const AuthRoutes: RouteObject = {
  path: "/",
  element: (
    <AuthRoutesGuard>
      <AuthLayout />
      {/* if logged in redirect to home "/" else move with login related routes*/}
    </AuthRoutesGuard>
  ),
  children: [
    {
      path: "login",
      element: <h1>{"hello from AuthLayout login"}</h1>,
    },
    {
      path: "register",
      element: <h1>{"hello from AuthLayout register"}</h1>,
    },
    {
      path: "forgot-password",
      element: <h1>{"hello from AuthLayout forgot-password"}</h1>,
    },
    {
      path: "reset-password",
      element: <h1>{"hello from AuthLayout reset-password"}</h1>,
    },
  ],
};

export default AuthRoutes;
