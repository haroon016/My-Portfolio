import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollEffects() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let animationFrame = 0;
    let observer;

    const setScrollProgress = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? window.scrollY / maxScroll : 0;
      document.documentElement.style.setProperty(
        "--scroll-progress",
        Math.min(Math.max(progress, 0), 1).toFixed(3),
      );
      animationFrame = 0;
    };

    const handleScroll = () => {
      if (!animationFrame) {
        animationFrame = window.requestAnimationFrame(setScrollProgress);
      }
    };

    const revealFrame = window.requestAnimationFrame(() => {
      const revealItems = Array.from(document.querySelectorAll("[data-reveal]"));

      setScrollProgress();
      window.addEventListener("scroll", handleScroll, { passive: true });
      window.addEventListener("resize", handleScroll);

      if (motionQuery.matches) {
        revealItems.forEach((item) => item.classList.add("is-visible"));
        return;
      }

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer.unobserve(entry.target);
            }
          });
        },
        {
          rootMargin: "0px 0px -12% 0px",
          threshold: 0.18,
        },
      );

      revealItems.forEach((item) => observer.observe(item));
    });

    return () => {
      window.cancelAnimationFrame(revealFrame);
      observer?.disconnect();
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      if (animationFrame) {
        window.cancelAnimationFrame(animationFrame);
      }
    };
  }, [pathname]);

  return null;
}

export default ScrollEffects;
