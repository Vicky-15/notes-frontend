/* eslint-disable @typescript-eslint/no-explicit-any */
import { ComponentType, Suspense } from "react";
import Loader from "../components/Loader";

const LazyLoader = (Component: ComponentType<any>) => (props: any) =>
  (
    <Suspense fallback={<Loader />}>
      <Component {...props} />
    </Suspense>
  );

export default LazyLoader;
