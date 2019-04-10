import React, {Suspense} from 'react';
const Home = React.lazy(() => import('./Home'));

function LazyHome() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Home/>
      </Suspense>
    </div>
  );
}

export default LazyHome;