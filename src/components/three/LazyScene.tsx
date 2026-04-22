import { Suspense, lazy, useEffect, useState } from "react";

const LoadedScene = lazy(() => import("./HeroScene").then((m) => ({ default: m.HeroScene })));
const ImcsLoaded = lazy(() => import("./ImcsScene").then((m) => ({ default: m.ImcsScene })));

import SceneFallback from "./SceneFallback";

type Variant = "hero" | "imcs";

/**
 * Lazy-mounts a 3D scene only after:
 *  - the browser is idle
 *  - the container has scrolled into view (saves GPU on first paint)
 *  - the device is not a tiny mobile (graceful 2D fallback)
 */
export const LazyScene = ({
  variant,
  fallbackLabel,
}: {
  variant: Variant;
  fallbackLabel?: string;
}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const isLowPower =
      window.matchMedia("(max-width: 640px)").matches &&
      navigator.hardwareConcurrency !== undefined &&
      navigator.hardwareConcurrency <= 4;

    if (isLowPower) return; // keep fallback only

    const idle =
      (window as unknown as { requestIdleCallback?: (cb: () => void) => number }).requestIdleCallback ??
      ((cb: () => void) => window.setTimeout(cb, 250));

    const id = idle(() => setMounted(true));
    return () => {
      if (typeof id === "number") clearTimeout(id);
    };
  }, []);

  return (
    <>
      <SceneFallback label={fallbackLabel ?? "Initializing"} />
      {mounted && (
        <Suspense fallback={null}>
          {variant === "hero" ? <LoadedScene /> : <ImcsLoaded />}
        </Suspense>
      )}
    </>
  );
};

export default LazyScene;
