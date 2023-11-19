import { type RouteObject } from "react-router-dom";
import { lazy } from "react";

import LazyLoader from "../hoc/LazyLoader";
import MainLayout from "../layout/MainLayout";
import MainRoutesGuard from "../hoc/MainRoutesGuard";

// page imports
const AllNotes = LazyLoader(lazy(() => import("../pages/AllNotes")));
const Categories = LazyLoader(lazy(() => import("../pages/Categories")));
const TagBasedNotes = LazyLoader(lazy(() => import("../pages/TagBasedNotes")));

const MainRoutes: RouteObject = {
  path: "/",
  element: (
    <MainRoutesGuard>
      {/* if not logged in redirect to login "/login" else move with available routes*/}
      <MainLayout />
    </MainRoutesGuard>
  ),
  children: [
    {
      index: true,
      element: <AllNotes />,
    },
    {
      path: "categories",
      element: <Categories />,
    },
    {
      path: "tag/:tagId",
      element: <TagBasedNotes />,
    },
  ],
};

export default MainRoutes;
