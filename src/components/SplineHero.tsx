'use client';

import { Suspense, lazy, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

// react-spline (583KB JS + 1.2MB scene + WASM) lives ONLY in this island.
// With client:idle, Astro never adds this chunk to modulepreload, so it
// won't download on page load — only when requestIdleCallback fires.
const Spline = lazy(() => import('@splinetool/react-spline'));

interface Props {
  scene: string;
  slotId?: string;
}

export function SplineHero({ scene, slotId = 'spline-slot' }: Props) {
  const [target, setTarget] = useState<Element | null>(null);

  useEffect(() => {
    // Skip entirely on mobile: no visual loss and avoids downloading ~2MB on slow connections.
    if (!window.matchMedia('(min-width: 768px)').matches) return;
    setTarget(document.getElementById(slotId));
  }, [slotId]);

  if (!target) return null;

  return createPortal(
    <Suspense fallback={null}>
      <Spline scene={scene} className="w-full h-full" />
    </Suspense>,
    target
  );
}
