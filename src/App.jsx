import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home.jsx";
import JewarAirport from "./pages/JewarAirport";
import Aboutus from "./pages/Aboutus.jsx";
import JattariGrowth from "./pages/JattariGrowth";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const frame = window.requestAnimationFrame(() => {
        document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: "smooth" });
      });
      return () => window.cancelAnimationFrame(frame);
    }

    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

function ScrollReveal() {
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;

    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-revealed");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -35px 0px" },
    );

    const addRevealTargets = () => {
      const pageMains = document.querySelectorAll("main");
      if (!pageMains.length) return;

      pageMains.forEach((main) => {
        main.querySelectorAll("h1, h2, h3").forEach((element) => {
          element.dataset.reveal = "heading";
        });

        main.querySelectorAll("img").forEach((element) => {
          element.dataset.reveal = "image";
        });

        main.querySelectorAll("p").forEach((element) => {
          element.dataset.reveal = "text";
        });

        main.querySelectorAll("[class]").forEach((element) => {
          if (element.matches("h1, h2, h3, p, img")) return;

          const classes = String(element.className);
          const hasCardShape = /rounded-(?:xl|2xl|3xl|\[)/.test(classes);
          const hasCardSurface = /(?:shadow-|border\s|bg-)/.test(classes);
          if (hasCardShape && hasCardSurface && element.children.length > 0) {
            element.dataset.reveal = "card";
          }
        });

        main
          .querySelectorAll("[data-reveal]:not(.is-revealed)")
          .forEach((element) => revealObserver.observe(element));
      });
    };

    addRevealTargets();
    const mutationObserver = new MutationObserver(addRevealTargets);
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      mutationObserver.disconnect();
      revealObserver.disconnect();
    };
  }, []);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <ScrollReveal />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jewar-airport" element={<JewarAirport />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/jattari-growth" element={<JattariGrowth />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
