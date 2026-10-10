import { useEffect, useLayoutEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home.jsx";
import JewarAirport from "./pages/JewarAirport";
import JewarDevelopment from "./pages/JewarDevelopment.jsx";
import DestinationDetail from "./pages/DestinationDetail.jsx";
import Aboutus from "./pages/Aboutus.jsx";
import JattariGrowth from "./pages/JattariGrowth";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useLayoutEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    if (hash) {
      const frame = window.requestAnimationFrame(() => {
        document.getElementById(hash.slice(1))?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
      return () => window.cancelAnimationFrame(frame);
    }

    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [pathname, hash]);

  return null;
}

function ScrollReveal() {
  useEffect(() => {
    const revealObserver = "IntersectionObserver" in window
      ? new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-revealed");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0, rootMargin: "0px 0px -48px 0px" },
    )
      : null;

    const addRevealTargets = () => {
      const pageMains = document.querySelectorAll("main");
      if (!pageMains.length) return;

      pageMains.forEach((main) => {
        const isHomePage = main.hasAttribute("data-home-page");

        if (isHomePage) {
          main.querySelectorAll("section").forEach((section) => {
            section.dataset.revealSection = "true";
          });
        } else {
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
        }

        main
          .querySelectorAll("[data-reveal]:not(.is-revealed), [data-reveal-section]:not(.is-revealed)")
          .forEach((element) => {
            if (revealObserver) {
              revealObserver.observe(element);
            } else {
              element.classList.add("is-revealed");
            }
          });
      });
    };

    addRevealTargets();
    const mutationObserver = new MutationObserver(addRevealTargets);
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      mutationObserver.disconnect();
      revealObserver?.disconnect();
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
        <Route path="/jewar-development" element={<JewarDevelopment />} />
        <Route path="/destinations/:slug" element={<DestinationDetail />} />
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
