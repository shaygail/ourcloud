"use client";

import { useEffect } from "react";

const STORAGE_KEY = "ourcloud-loaded";
const SKIP_MS = 2 * 60 * 60 * 1000;

/** Hold on empty black before anything appears. */
const EMPTY_MS = 1000;
/** Count + wordmark reveal. */
const REVEAL_MS = 1800;
/** Pause at 100% before exit. */
const HOLD_MS = 320;
/** Fade the overlay away. */
const EXIT_MS = 480;

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

function finishLoader() {
  document.documentElement.removeAttribute("data-ourcloud-loader");
  try {
    localStorage.setItem(STORAGE_KEY, String(Date.now()));
  } catch {
    /* private mode */
  }
}

export function LoadingScreen() {
  useEffect(() => {
    if (document.documentElement.dataset.ourcloudLoader !== "1") return;

    const root = document.getElementById("loader");
    if (!root) {
      finishLoader();
      return;
    }

    const countEl = root.querySelector<HTMLElement>(".loader__count");
    const wordmark = root.querySelector<HTMLElement>(".loader__wordmark");
    const patch = root.querySelector<HTMLElement>(".loader__patch");
    const failsafe = window.setTimeout(finishLoader, EMPTY_MS + REVEAL_MS + HOLD_MS + EXIT_MS + 1500);

    let raf = 0;
    let revealStarted = 0;
    let exiting = false;

    const setProgress = (p: number) => {
      const eased = easeOutCubic(p);
      const pct = Math.round(eased * 100);

      if (countEl) {
        countEl.textContent = String(pct).padStart(3, "0");
        countEl.style.opacity = String(0.35 + eased * 0.65);
      }

      if (wordmark) {
        // Reveal left → right with the count.
        const hidden = Math.max(0, 100 - eased * 100);
        wordmark.style.clipPath = `inset(0 ${hidden}% 0 0)`;
        wordmark.style.opacity = String(Math.min(1, eased * 1.15));
      }

      if (patch) {
        // Accent square arrives in the last third.
        const patchT = Math.max(0, (eased - 0.55) / 0.45);
        patch.style.transform = `scaleX(${easeOutCubic(patchT)})`;
      }
    };

    const exit = () => {
      if (exiting) return;
      exiting = true;
      root.classList.add("is-exiting");
      window.setTimeout(() => {
        finishLoader();
      }, EXIT_MS);
    };

    const tickReveal = (now: number) => {
      const t = Math.min(1, (now - revealStarted) / REVEAL_MS);
      setProgress(t);
      if (t < 1) {
        raf = requestAnimationFrame(tickReveal);
        return;
      }
      window.setTimeout(exit, HOLD_MS);
    };

    // Phase 1: empty black screen.
    root.classList.add("is-empty");
    setProgress(0);

    const startReveal = window.setTimeout(() => {
      root.classList.remove("is-empty");
      root.classList.add("is-revealing");
      revealStarted = performance.now();
      raf = requestAnimationFrame(tickReveal);
    }, EMPTY_MS);

    return () => {
      window.clearTimeout(startReveal);
      window.clearTimeout(failsafe);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="loader" id="loader" role="status" aria-label="Loading" aria-live="polite">
      <div className="loader__mark">
        <div className="loader__wordmark" aria-label="ourcloud solutions">
          <span className="loader__line">
            <span className="loader__text">ourcloud</span>
            <span className="loader__patch" aria-hidden="true" />
          </span>
          <span className="loader__text loader__text--accent">solutions</span>
        </div>
        <span className="loader__count">000</span>
      </div>
    </div>
  );
}

/** Inline boot: show loader before paint on desktop when not recently seen. */
export const loaderBootScript = `
(function () {
  try {
    var seen = Number(localStorage.getItem("${STORAGE_KEY}"));
    var age = Date.now() - seen;
    if (seen && age >= 0 && age < ${SKIP_MS}) return;
  } catch (e) {}
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  if (window.matchMedia("(max-width: 767px)").matches) return;
  document.documentElement.setAttribute("data-ourcloud-loader", "1");
})();
`;
