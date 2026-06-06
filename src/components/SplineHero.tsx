'use client';

import { Suspense, lazy, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

// react-spline (583KB JS + 1.2MB scene + WASM) lives ONLY in this island.
// With client:idle, Astro never adds this chunk to modulepreload, so it
// won't download on page load — only when requestIdleCallback fires.
const Spline = lazy(() => import('@splinetool/react-spline'));

interface Props {
  scene: string;
}

export function SplineHero({ scene }: Props) {
  const [target, setTarget] = useState<Element | null>(null);

  useEffect(() => {
    // Skip entirely on mobile: the container is hidden md:block, so no visual loss
    // and we avoid downloading ~2MB of 3D resources on slow connections.
    if (!window.matchMedia('(min-width: 768px)').matches) return;
    setTarget(document.getElementById('hero-spline-slot'));
  }, []);

  if (!target) return null;

  return createPortal(
    <Suspense fallback={null}>
      <Spline scene={scene} className="w-full h-full" />
    </Suspense>,
    target
  );
}
