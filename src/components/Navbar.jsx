import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, ChevronDown, Menu, Plane, X } from "lucide-react";
import logo from "../assets/Images/logo-transparent.png";

const navItems = [
  { name: "𝓗𝓸𝓶𝓮", path: "/" },
  { name: "𝓭𝓮𝓼𝓽𝓲𝓷𝓪𝓽𝓲𝓸𝓷", dropdown: true },
  { name: "𝓐𝓫𝓸𝓾𝓽 𝓤𝓼", path: "/aboutus" },
  { name: "𝓙𝓪𝓽𝓽𝓪𝓻𝓲 𝓖𝓻𝓸𝔀𝓽𝓱", path: "/jattari-growth" },
  { name: "𝓟𝓻𝓸𝓳𝓮𝓬𝓽𝓼", path: "/projects" },
  { name: "𝓒𝓸𝓷𝓽𝓪𝓬𝓽", path: "/contact" },
];

const destinations = [
  { name: "Jewar", path: "/destinations/jewar", region: "Airport & Yamuna region" },
  { name: "Palwal", path: "/destinations/palwal", region: "Haryana" },
  { name: "Aligarh", path: "/destinations/aligarh", region: "University & heritage" },
  { name: "Khair", path: "/destinations/khair", region: "Aligarh district" },
  { name: "Greater Noida", path: "/destinations/greater-noida", region: "Urban & business hub" },
  { name: "Mathura", path: "/destinations/mathura", region: "Braj region" },
  { name: "Agra", path: "/destinations/agra", region: "Heritage city" },
];
const destinationLinks = [
  { name: "Jewar Airport", path: "/jewar-airport" },
  ...destinations,
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isCompact, setIsCompact] = useState(false);
  const destinationsMenuRef = useRef(null);

  useEffect(() => {
    let previousScrollY = window.scrollY;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < 24) setIsCompact(false);
      else if (Math.abs(currentScrollY - previousScrollY) > 8) setIsCompact(currentScrollY > previousScrollY);
      previousScrollY = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const closeOnOutsideClick = (event) => {
      const menu = destinationsMenuRef.current;
      if (menu?.open && !menu.contains(event.target)) menu.open = false;
    };
    const closeOnEscape = (event) => {
      if (event.key === "Escape" && destinationsMenuRef.current?.open) {
        destinationsMenuRef.current.open = false;
      }
    };

    document.addEventListener("pointerdown", closeOnOutsideClick);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("pointerdown", closeOnOutsideClick);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <motion.header key={location.pathname} initial={{ opacity: 0, y: -64 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }} className="fixed top-0 left-0 right-0 z-50 px-4 pt-4 transition-[padding] duration-300 sm:px-6 lg:px-8" style={{ paddingTop: isCompact ? "0.5rem" : "1rem" }}>
      <nav className="mx-auto max-w-7xl">

        <div>
          <div
            className="flex items-center justify-between rounded-2xl border border-[#D5C8B7] bg-[#FFFEFB]/90 px-4 py-5 shadow-[0_8px_30px_rgba(150,85,55,0.10)] backdrop-blur-xl transition-all duration-300 ease-out sm:px-6" style={{ paddingTop: isCompact ? "0.75rem" : "1.25rem", paddingBottom: isCompact ? "0.75rem" : "1.25rem" }}
          >

            {/* ================= LOGO ================= */}
            <Link
              to="/"
              onClick={closeMenu}
              className="group flex items-center gap-3"
            >
              <img
                src={logo}
                alt="Jattari Growth Destination logo"
                className="shrink-0 object-contain transition-all duration-300 group-hover:scale-105" style={{ width: isCompact ? "3.25rem" : "3.75rem", height: isCompact ? "2.75rem" : "3.25rem" }}
              />

              {/* Logo Text */}
              <div className="leading-none">
                <div className="text-[15px] font-extrabold tracking-tight text-[#292923] sm:text-base">
                  𝒋𝒂𝒕𝒕𝒂𝒓𝒊
                </div>

                <div className="mt-1 text-[8px] font-semibold uppercase tracking-[0.18em] text-[#B95F3D] sm:text-[9px]">
                  𝒈𝒓𝒐𝒘𝒕𝒉 𝒅𝒆𝒔𝒕𝒊𝒏𝒂𝒕𝒊𝒐𝒏
                </div>
              </div>
            </Link>

            {/* ================= DESKTOP NAV ================= */}
            <div className="hidden items-center gap-1 lg:flex">
              {navItems.map((item) => item.dropdown ? (
                <details key={item.name} ref={destinationsMenuRef} className="group relative">
                  <summary className="flex cursor-pointer list-none items-center gap-1 rounded-lg px-3 py-2 text-base font-bold text-[#5C574F] transition-all duration-300 hover:bg-[#F5F2EA] hover:text-[#B95F3D] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#C87550]">
                    {item.name}<ChevronDown size={15} className="transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="absolute left-0 top-full z-50 mt-2 w-60 rounded-2xl border border-[#D5C8B7] bg-[#FFFEFB] p-2 shadow-[0_14px_38px_rgba(64,48,32,0.16)]">
                    {destinationLinks.map((destination) => (
                      <NavLink
                        key={destination.path}
                        to={destination.path}
                        onClick={(event) => { event.currentTarget.closest("details").open = false; }}
                        className={({ isActive }) => `block rounded-xl px-4 py-2.5 text-sm font-semibold transition ${isActive ? "bg-[#F5F2EA] text-[#B95F3D]" : "text-[#5C574F] hover:bg-[#F5F2EA] hover:text-[#B95F3D]"}`}
                      >
                        {destination.name}
                      </NavLink>
                    ))}
                  </div>
                </details>
              ) : (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) => `relative rounded-lg px-3 py-2 text-base font-bold transition-all duration-300 ${isActive ? "text-[#B95F3D]" : "text-[#5C574F] hover:bg-[#F5F2EA] hover:text-[#B95F3D]"}`}
                >
                  {item.name}
                </NavLink>
              ))}
            </div>

            {/* ================= DESKTOP CTA ================= */}
            <div className="hidden lg:block">
              <Link
                to="/#properties"
                className="
                  nav-explore-cta group flex items-center gap-2
                  rounded-xl
                  bg-[#C87550]
                  px-5 py-2.5
                  text-sm font-semibold text-white
                  shadow-lg shadow-[#E9E1D5]
                  transition-all duration-300
                  hover:-translate-y-0.5
                  hover:bg-[#B95F3D]
                  hover:shadow-xl hover:shadow-[#E9E1D5]
                "
              >
                <span className="relative z-10">Explore Properties</span>
              </Link>
            </div>

            {/* ================= MOBILE BUTTON ================= */}
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              className="
                flex h-10 w-10 items-center justify-center
                rounded-xl
                border border-[#D5C8B7]
                bg-[#F5F2EA]
                text-[#B95F3D]
                transition-all duration-300
                hover:bg-[#E9E1D5]
                lg:hidden
              "
            >
              {isOpen ? <X size={21} /> : <Menu size={21} />}
            </button>
          </div>
        </div>

        {/* ================= MOBILE MENU ================= */}
        <div
          className={`
            overflow-hidden transition-all duration-300 lg:hidden
            ${
              isOpen
                ? "mt-2 max-h-[760px] opacity-100"
                : "max-h-0 opacity-0"
            }
          `}
        >
          <div
            className="
              rounded-2xl
              border border-[#D5C8B7]
              bg-[#FFFEFB]/95
              p-3
              shadow-[0_10px_35px_rgba(150,85,55,0.12)]
              backdrop-blur-xl
            "
          >
            {navItems.map((item) => item.dropdown ? (
              <div key={item.name} className="px-1 py-2">
                <p className="px-3 pb-2 text-xs font-bold uppercase tracking-[0.15em] text-[#9B783E]">Destinations</p>
                <div className="grid grid-cols-2 gap-1">
                  {destinations.map((destination) => (
                    <NavLink
                      key={destination.path}
                      to={destination.path}
                      onClick={closeMenu}
                      className={({ isActive }) => `block rounded-lg px-3 py-2.5 text-sm font-semibold transition ${isActive ? "bg-[#F5F2EA] text-[#B95F3D]" : "text-[#5C574F] hover:bg-[#F5F2EA] hover:text-[#B95F3D]"}`}
                    >
                      {destination.name}
                    </NavLink>
                  ))}
                </div>
                <NavLink
                  to="/jewar-airport"
                  onClick={closeMenu}
                  className={({ isActive }) => `mt-2 flex items-center gap-2 rounded-xl bg-[#292e29] px-3 py-3 text-sm font-bold text-white transition hover:bg-[#3A4039] ${isActive ? "ring-2 ring-[#D99A78]" : ""}`}
                >
                  <Plane size={16} className="text-[#D99A78]" /> Jewar Airport overview <ArrowUpRight size={15} className="ml-auto text-[#D99A78]" />
                </NavLink>
              </div>
            ) : (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={closeMenu}
                className={({ isActive }) => `block rounded-xl px-4 py-3 text-base font-bold transition-all duration-200 ${isActive ? "bg-[#F5F2EA] text-[#B95F3D]" : "text-[#5C574F] hover:bg-[#F5F2EA] hover:text-[#B95F3D]"}`}
              >
                {item.name}
              </NavLink>
            ))}

            {/* Mobile CTA */}
            <Link
              to="/#properties"
              onClick={closeMenu}
              className="
                nav-explore-cta mt-2 flex items-center justify-center gap-2
                rounded-xl
                bg-[#C87550]
                px-4 py-3
                text-sm font-semibold text-white
                shadow-md shadow-[#E9E1D5]
              "
            >
              <span className="relative z-10">Explore Properties</span>
            </Link>
          </div>
        </div>

      </nav>
    </motion.header>
  );
}

export default Navbar;
