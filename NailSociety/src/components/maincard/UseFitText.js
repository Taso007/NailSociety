import { useEffect, useRef } from "react";

export default function useFitText({ min = 12, max = 64, step = 1 } = {}) {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const text = textRef.current;
    if (!container || !text) return;

    const fit = () => {
      let lo = min, hi = max, best = min;

      // Reset before measuring
      text.style.fontSize = `${min}px`;

      while (lo <= hi) {
        const mid = Math.floor((lo + hi) / 2);
        text.style.fontSize = `${mid}px`;

        const fits =
          text.scrollWidth <= container.clientWidth &&
          text.scrollHeight <= container.clientHeight;

        if (fits) { best = mid; lo = mid + step; }
        else { hi = mid - step; }
      }
      text.style.fontSize = `${best}px`;
    };

    const ro = new ResizeObserver(fit);
    ro.observe(container);
    ro.observe(text);
    window.addEventListener("resize", fit);
    fit();

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", fit);
    };
  }, [min, max, step]);

  return { containerRef, textRef };
}
