import { type RouteObject } from "react-router-dom";

import AuthLayout from "../layout/AuthLayout";
import AuthRoutesGuard from "../hoc/AuthRoutesGuard";
import { lazy } from "react";
import LazyLoader from "../hoc/LazyLoader";

// page imports
const Login = LazyLoader(lazy(() => import("../pages/Login")));
const Register = LazyLoader(lazy(() => import("../pages/Register")));

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
      element: <Login />,
    },
    {
      path: "register",
      element: <Register />,
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
