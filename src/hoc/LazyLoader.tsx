import React, { Suspense } from "react";
import Loader from "../components/Loader";

type FCType<P> = React.FC<P>;

const LazyLoader =
  <P extends object>(Component: FCType<P>): FCType<P> =>
  (props: P) =>
    (
      <Suspense fallback={<Loader />}>
        <Component {...props} />
      </Suspense>
    );
export default LazyLoader;
