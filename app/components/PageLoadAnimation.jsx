"use client";

import { useEffect, useState } from "react";

const animationDuration = 700;
const pageEntranceDuration = 700;

export default function PageLoadAnimation() {
  const [isVisible, setIsVisible] = useState(true);
  const [isPageEntering, setIsPageEntering] = useState(true);
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    const entranceTimer = window.setTimeout(
      () => setIsPageEntering(false),
      pageEntranceDuration,
    );
    let hideTimer = window.setTimeout(
      () => setIsVisible(false),
      animationDuration,
    );

    const showAnimation = () => {
      window.clearTimeout(hideTimer);
      setAnimationKey((key) => key + 1);
      setIsVisible(true);
      hideTimer = window.setTimeout(
        () => setIsVisible(false),
        animationDuration,
      );
    };

    const handleClick = (event) => {
      if (!(event.target instanceof Element)) return;

      const link = event.target.closest('a[href^="#"]');
      if (link && link.hash !== window.location.hash) showAnimation();
    };

    document.addEventListener("click", handleClick);

    return () => {
      window.clearTimeout(entranceTimer);
      window.clearTimeout(hideTimer);
      document.removeEventListener("click", handleClick);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {isPageEntering && (
        <div aria-hidden="true" className="page-enter-overlay">
          <div className="page-preloader">
            <p className="page-preloader-name">
              Ajay's<span className="page-preloader-ellipsis">...</span>
            </p>
            <p className="page-preloader-caption">PORTFOLIO</p>
          </div>
        </div>
      )}
      {isVisible && (
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-0.5 overflow-hidden bg-zinc-200/50"
        >
          <div
            key={animationKey}
            className="page-load-sweep h-full w-1/3 bg-gradient-to-r from-transparent via-orange-500 to-amber-400"
          />
        </div>
      )}
    </>
  );
}
