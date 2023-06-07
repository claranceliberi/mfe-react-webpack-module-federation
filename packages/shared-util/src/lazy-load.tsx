import React, { lazy, Suspense } from 'react';

export function lz(importFunc: () => Promise<any>, fallback = null) {
  const LazyComponent = lazy(importFunc);

  // eslint-disable-next-line react/display-name
  return (props: Record<string | number, unknown>) => (
    <Suspense fallback={fallback}>
      <LazyComponent {...props} />
    </Suspense>
  );
}
