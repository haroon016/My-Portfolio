import { useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import Cover from "./components/Cover";
import About from "./components/About";
import Experience from "./components/Experience";
import TechStack from "./components/TechStack";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import portfolioBg from "./assets/portfoliobg.mp4";
import "./App.css";

function App() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1.5;
    }
  }, []);

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const revealItems = Array.from(document.querySelectorAll("[data-reveal]"));
    let animationFrame = 0;

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

    setScrollProgress();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    if (motionQuery.matches) {
      revealItems.forEach((item) => item.classList.add("is-visible"));

      return () => {
        window.removeEventListener("scroll", handleScroll);
        window.removeEventListener("resize", handleScroll);
        if (animationFrame) {
          window.cancelAnimationFrame(animationFrame);
        }
      };
    }

    const observer = new IntersectionObserver(
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

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      if (animationFrame) {
        window.cancelAnimationFrame(animationFrame);
      }
    };
  }, []);

  return (
    <div className="app-shell">
      <Navbar />
      <Cover />

      <div className="portfolio-video-area">
        <div className="portfolio-video-area__background">
          <video
            ref={videoRef}
            className="portfolio-video-area__media"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src={portfolioBg} type="video/mp4" />
          </video>
          <div className="portfolio-video-area__overlay" />
        </div>

        <div className="portfolio-video-area__content">
          <About />
          <Experience />
          <TechStack />
          <Contact />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
