import { Link } from "react-router-dom";
import logo from "../assets/Images/logo-transparent.png";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

import {
  ArrowUpRight,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
} from "lucide-react";


const quickLinks = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Jewar Airport",
    path: "/jewar-airport",
  },
  {
    name: "Aboutus",
    path: "/aboutus",
  },
  {
    name: "Jattari Growth",
    path: "/jattari-growth",
  },
];

const projectLinks = [
  {
    name: "Anugrah Homes",
    path: "/anugrah-homes",
  },
  {
    name: "Skyline Aero Homes",
    path: "/skyline-aero-homes",
  },
  {
    name: "Contact Us",
    path: "/contact",
  },
];

const currentYear = new Date().getFullYear();

function Footer() {
  return (
    <footer className="overflow-hidden bg-[#272922] text-white">

      {/* =====================================================
          MAIN FOOTER
      ====================================================== */}
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-20">

        <div className="grid gap-12 lg:grid-cols-[1.35fr_0.7fr_0.7fr_1fr]">

          {/* =================================================
              BRAND
          ================================================== */}
          <div className="max-w-md">

            {/* Logo */}
            <Link
              to="/"
              className="group inline-flex items-center gap-3"
            >
              <img
                src={logo}
                alt="Jattari Growth Destination logo"
                className="h-14 w-16 shrink-0 object-contain transition-transform duration-300 group-hover:scale-105"
              />

              <div className="leading-none">
                <p className="text-base font-extrabold tracking-tight">
                  JATTARI
                </p>

                <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#D28B65]">
                  Growth Destination
                </p>
              </div>
            </Link>

            {/* Description */}
            <p className="mt-7 max-w-sm text-sm leading-7 text-white/50">
              Discover Jattari's growth story through Jewar Airport,
              Film City, local infrastructure, education and emerging
              residential opportunities.
            </p>

            {/* Location */}
            <div className="mt-7 flex items-start gap-3">
              <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-[#D28B65]">
                <MapPin size={17} />
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-white/30">
                  Location
                </p>

                <p className="mt-1 text-sm text-white/60">
                  Jattari, Aligarh,
                  <br />
                  Uttar Pradesh, India
                </p>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 ">
  <a
    href="https://www.facebook.com/anugrahhomesjattari1/"
    target="_blank"
    rel="noopener noreferrer"
    className="group flex h-10 w-10 items-center justify-center rounded-full border border-white bg-white transition-all duration-300 hover:bg-[#1877F2]"
  >
    <FaFacebookF size={17} className="text-[#1877F2] transition-colors group-hover:text-white" />
  </a>

  <a
    href="https://www.instagram.com/anugr_ahhomes/"
    target="_blank"
    rel="noopener noreferrer"
    className="group flex h-10 w-10 items-center justify-center rounded-full border border-white bg-white transition-all duration-300 hover:bg-[#E4405F]"
  >
    <FaInstagram size={19} className="text-[#E4405F] transition-colors group-hover:text-white" />
  </a>

  <a
    href="https://www.youtube.com/@AnugrahHomes-Jattar"
    target="_blank"
    rel="noopener noreferrer"
    className="group flex h-10 w-10 items-center justify-center rounded-full border border-white bg-white transition-all duration-300 hover:bg-[#FF0000]"
  >
    <FaYoutube size={19} className="text-[#FF0000] transition-colors group-hover:text-white" />
  </a>
</div>
          </div>

          {/* =================================================
              EXPLORE
          ================================================== */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#D28B65]">
              Explore
            </p>

            <h3 className="mt-4 text-lg font-semibold text-white">
              Discover Jattari
            </h3>

            <ul className="mt-6 space-y-3">

              {quickLinks.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="
                      group inline-flex items-center gap-2
                      text-sm text-white/50
                      transition duration-300
                      hover:text-[#D28B65]
                    "
                  >
                    <span
                      className="
                        h-1 w-1 rounded-full
                        bg-[#C87550]
                        opacity-0
                        transition duration-300
                        group-hover:opacity-100
                      "
                    />

                    {item.name}
                  </Link>
                </li>
              ))}

            </ul>
          </div>

          {/* =================================================
              PROJECTS
          ================================================== */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#D28B65]">
              Properties
            </p>

            <h3 className="mt-4 text-lg font-semibold text-white">
              Explore Projects
            </h3>

            <ul className="mt-6 space-y-3">

              {projectLinks.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="
                      group inline-flex items-center gap-2
                      text-sm text-white/50
                      transition duration-300
                      hover:text-[#D28B65]
                    "
                  >
                    <span
                      className="
                        h-1 w-1 rounded-full
                        bg-[#C87550]
                        opacity-0
                        transition duration-300
                        group-hover:opacity-100
                      "
                    />

                    {item.name}
                  </Link>
                </li>
              ))}

            </ul>
          </div>

          {/* =================================================
              CONTACT CARD
          ================================================== */}
          <div>

            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#D28B65]">
              Let's Connect
            </p>

            <h3 className="mt-4 text-lg font-semibold text-white">
              Looking for property?
            </h3>

            <p className="mt-4 text-sm leading-6 text-white/45">
              Tell us what you are looking for and explore suitable
              property options around Jattari.
            </p>

            {/* Contact Card */}
            <div
              className="
                mt-6
                rounded-[1.5rem]
                border border-white/10
                bg-white/5
                p-5
                backdrop-blur-sm
              "
            >

              {/* Phone */}
              <a
                href="tel:+919761427569"
                className="
                  group flex items-center gap-3
                  text-sm text-white/65
                  transition hover:text-white
                "
              >
                <span
                  className="
                    flex h-9 w-9 shrink-0
                    items-center justify-center
                    rounded-full
                    bg-[#C87550]/15
                    text-[#D28B65]
                  "
                >
                  <Phone size={15} />
                </span>

                <span>Get Property Assistance</span>
              </a>

              {/* Email */}
              <a
                href="mailto:info@jattari.com"
                className="
                  group mt-4 flex items-center gap-3
                  text-sm text-white/65
                  transition hover:text-white
                "
              >
                <span
                  className="
                    flex h-9 w-9 shrink-0
                    items-center justify-center
                    rounded-full
                    bg-[#C87550]/15
                    text-[#D28B65]
                  "
                >
                  <Mail size={15} />
                </span>

                <span>Send an Enquiry</span>
              </a>

            </div>

            {/* CTA */}
            <Link
              to="/contact"
              className="
                group mt-5
                inline-flex items-center gap-3
                rounded-full
                bg-[#C87550]
                px-6 py-3.5
                text-sm font-semibold text-white
                transition-all duration-300
                hover:-translate-y-1
                hover:bg-[#D28B65]
                hover:shadow-lg
                hover:shadow-[#C87550]/20
              "
            >
              Get Property Options

              
            </Link>

          </div>

        </div>

        {/* =====================================================
            FOOTER DIVIDER
        ====================================================== */}
        <div className="my-12 h-px bg-white/10" />

        {/* =====================================================
            BOTTOM FOOTER
        ====================================================== */}
        <div
          className="
            flex flex-col
            gap-5
            text-xs
            text-white/35
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >

          <p>
            © {currentYear} Jattari Growth Destination. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-5">

            <Link
              to="/"
              className="transition hover:text-white"
            >
              Privacy Policy
            </Link>

            <Link
              to="/"
              className="transition hover:text-white"
            >
              Terms
            </Link>

            <span className="hidden h-1 w-1 rounded-full bg-white/20 sm:block" />

          </div>

        </div>

      </div>

      {/* =====================================================
          BOTTOM BRAND STRIP
      ====================================================== */}
      <div className="border-t border-white/5 bg-black/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-4 text-center sm:flex-row sm:px-8 lg:px-12 sm:text-left">

          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/20">
            Jewar Airport • Film City • Jattari
          </p>

          <p className="text-[10px] uppercase tracking-[0.18em] text-white/20">
            Connected to Tomorrow
          </p>

        </div>
      </div>

    </footer>
  );
}

export default Footer;
