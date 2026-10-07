import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/Images/logo-transparent.png";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Jewar Airport", path: "/jewar-airport" },
  { name: "About Us", path: "/aboutus" },
  { name: "Jattari Growth", path: "/jattari-growth" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <nav className="mx-auto max-w-7xl">

        <div>
          <div
            className="
              flex items-center justify-between
              rounded-2xl
              border border-[#D5C8B7]
              bg-[#FFFEFB]/90
              px-4 sm:px-6
              py-5
              shadow-[0_8px_30px_rgba(150,85,55,0.10)]
              backdrop-blur-xl
            "
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
                className="h-12 w-14 shrink-0 object-contain transition-transform duration-300 group-hover:scale-105"
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
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    `
                    relative rounded-lg px-3 py-2
                    text-sm font-medium
                    transition-all duration-300
                    ${
                      isActive
                        ? "text-[#B95F3D]"
                        : "text-[#5C574F] hover:bg-[#F5F2EA] hover:text-[#B95F3D]"
                    }
                    `
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>

            {/* ================= DESKTOP CTA ================= */}
            <div className="hidden lg:block">
              <Link
                to="/contact"
                className="
                  group flex items-center gap-2
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
                Explore Properties
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
                ? "mt-2 max-h-[500px] opacity-100"
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
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `
                  block rounded-xl px-4 py-3
                  text-sm font-medium
                  transition-all duration-200
                  ${
                    isActive
                      ? "bg-[#F5F2EA] text-[#B95F3D]"
                      : "text-[#5C574F] hover:bg-[#F5F2EA] hover:text-[#B95F3D]"
                  }
                  `
                }
              >
                {item.name}
              </NavLink>
            ))}

            {/* Mobile CTA */}
            <Link
              to="/contact"
              onClick={closeMenu}
              className="
                mt-2 flex items-center justify-center gap-2
                rounded-xl
                bg-[#C87550]
                px-4 py-3
                text-sm font-semibold text-white
                shadow-md shadow-[#E9E1D5]
              "
            >
              Explore Properties
            </Link>
          </div>
        </div>

      </nav>
    </header>
  );
}

export default Navbar;
