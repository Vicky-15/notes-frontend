import { type RouteObject } from "react-router-dom";

const ErrorRoutes: RouteObject = {
  path: "/",
  children: [
    {
      path: "server-error",
      element: (
        <h1>
          503 : server is busy, overloaded, or down for maintenance. The status
          is generally understood to be temporary, and the resource should be
          available later
        </h1>
      ),
    },
    {
      path: "*",
      element: (
        <h1>
          404 : the page you requested was not found on the server
          <a href="/">go home</a>
        </h1>
      ),
    },
  ],
};

export default ErrorRoutes;
