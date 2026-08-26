import { useEffect, useState } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";
import "./index.css";
import Banner from "./components/Home/banner";
import AbouTmE from "./components/Home/aboutme";
import Experience from "./components/Home/experience";
import MyEducations from "./components/Home/education";
import SelectedWorks from "./components/Home/selectedworks";
import OurSkills from "./components/Home/ourskills";
import OurProjects from "./components/Home/ourProjects";

// Layout Components
import Header from "./header";
import Footer from "./footer";

function App() {
  const [loaderProgress, setLoaderProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [cursor, setCursor] = useState({
    x: 0,
    y: 0,
    isActive: false,
    isPointer: false,
  });

  useEffect(() => {
    const revealItems = document.querySelectorAll<HTMLElement>("[data-reveal]");

    if (!("IntersectionObserver" in window)) {
      revealItems.forEach((item) => item.classList.add("is-visible"));
      return;
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
        threshold: 0.18,
        rootMargin: "0px 0px -12% 0px",
      },
    );

    revealItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const progressTimer = window.setInterval(() => {
      setLoaderProgress((currentProgress) => {
        if (currentProgress >= 100) {
          window.clearInterval(progressTimer);
          return 100;
        }

        return Math.min(currentProgress + 2, 100);
      });
    }, 28);

    return () => window.clearInterval(progressTimer);
  }, []);

  useEffect(() => {
    if (loaderProgress !== 100) {
      return;
    }

    const doneTimer = window.setTimeout(() => {
      setIsLoaded(true);
    }, 450);

    return () => window.clearTimeout(doneTimer);
  }, [loaderProgress]);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;

    if (!finePointer) {
      return;
    }

    const handlePointerMove = (event: PointerEvent) => {
      const target = event.target as HTMLElement | null;
      const isPointer = Boolean(
        target?.closest("a, button, [role='button'], input, textarea, select"),
      );

      setCursor({
        x: event.clientX,
        y: event.clientY,
        isActive: true,
        isPointer,
      });
    };

    const handlePointerLeave = () => {
      setCursor((currentCursor) => ({
        ...currentCursor,
        isActive: false,
        isPointer: false,
      }));
    };

    window.addEventListener("pointermove", handlePointerMove);
    document.documentElement.addEventListener("mouseleave", handlePointerLeave);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      document.documentElement.removeEventListener("mouseleave", handlePointerLeave);
    };
  }, []);

  return (
    <BrowserRouter>
    <div
      className={`custom-cursor ${cursor.isActive ? "is-active" : ""} ${
        cursor.isPointer ? "is-pointer" : ""
      }`}
      style={{
        "--cursor-x": `${cursor.x}px`,
        "--cursor-y": `${cursor.y}px`,
      } as React.CSSProperties}
    />
    {!isLoaded && (
      <div className={`site-loader ${loaderProgress === 100 ? "is-complete" : ""}`}>
        <div className="loader-inner">
          <p className="loader-label">Loading Portfolio</p>
          <div className="loader-percent">{loaderProgress}%</div>
          <div className="loader-track">
            <span style={{ width: `${loaderProgress}%` }} />
          </div>
        </div>
      </div>
    )}
    <Header />
    <Routes>
      <Route
      path="/" element={
        <>
        <Banner/>
        <AbouTmE />
        <Experience />
        <MyEducations />
        <SelectedWorks />
        <OurSkills />
        <OurProjects />
        </>
      }
      >
      </Route>
    </Routes>
    <Footer />
    </BrowserRouter>
  );
}

export default App;
