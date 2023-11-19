import { useRoutes } from "react-router-dom";

import AuthRoutes from "./AuthRoutes";
import MainRoutes from "./MainRoutes";
import ErrorRoutes from "./ErrorRoutes";

export default function AllRoutes() {
  return useRoutes([AuthRoutes, MainRoutes, ErrorRoutes]);
}
