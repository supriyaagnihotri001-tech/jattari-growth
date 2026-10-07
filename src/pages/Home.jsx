import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import airportImage from "../assets/Images/airport.png";
import anugrahHomesImage from "../assets/Images/Anugrahimg.png";
import skylineAeroHomesImage from "../assets/Images/skylinehomesimg1.png";
import goldenCityImage from "../assets/Images/goldencity.png";
import patanjaliImage from "../assets/Images/patanjali.png";
import terminalCityImage from "../assets/Images/terminalcity.avif";
import filmCityImage from "../assets/Images/filmcity.png";


import {
  ArrowRight,
  ArrowUpRight,
  Plane,
  Clapperboard,
  GraduationCap,
  MapPin,
  Route,
  Building2,
  ShoppingBag,
  Trees,
  Sparkles,
  PhoneCall,
  Clock3,
  Navigation,
  CreditCard,
} from "lucide-react";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const growthPoints = [
  {
   
    icon: Plane,
    title: "Jewar Airport",
    text: "A major aviation and connectivity anchor shaping the wider region.",
  },
  {
    
    icon: Clapperboard,
    title: "Film City",
    text: "A major entertainment and development story around the Yamuna region.",
  },
  {
    
    icon: Route,
    title: "Connectivity",
    text: "Road and regional connectivity linking Jattari with surrounding growth centres.",
  },
  {
    
    icon: Building2,
    title: "Township Growth",
    text: "A growing residential landscape with multiple plotted-development options.",
  },
];

const education = [
  {
    number: "01",
    name: "Rajeev Gandhi Computer Saksharta Mission",
    location: "Opp. Central Bank of India, Jattari",
  },
  {
    number: "02",
    name: "Diamond Academy",
    location: "Jattari",
  },
  {
    number: "03",
    name: "Gurukul Academy",
    location: "Jattari",
  },
];

const nearbyCities = [
  "Palwal",
  "Aligarh",
  "Khair",
  "Jewar",
  "Greater Noida",
  "Mathura",
  "Agra",
];

const localLife = [
  {
    icon: ShoppingBag,
    title: "Daily Essentials",
    text: "Local grocery, shopping and everyday services around the town.",
  },
  {
    icon: GraduationCap,
    title: "Education",
    text: "Schools, academies and coaching institutions for local families.",
  },
  {
    icon: Trees,
    title: "Green Lifestyle",
    text: "A developing town environment with residential and open spaces.",
  },
  {
    icon: MapPin,
    title: "Strategic Location",
    text: "Positioned within a wider network of important regional destinations.",
  },
];

const propertyOptions = [
  {
    title: "Anugrah Homes",
    text: "Explore a residential community in the Jattari growth corridor.",
    image: anugrahHomesImage,
  },
  {
    title: "Skyline Aero Homes",
    text: "Discover a township near Jewar Airport and Yamuna Expressway.",
    image: skylineAeroHomesImage,
  },
  {
    title: "Golden City",
    text: "See another residential option around the Jattari region.",
    image: goldenCityImage,
  },
  {
    title: "Terminal City",
    text: "Explore a destination connected to the Film City growth story.",
    image: terminalCityImage,
  },
];

export default function Home() {
  return (
    <>
     
      <main className="overflow-hidden bg-[#F5F2EA] text-[#272922]">

      {/* =====================================================
          HERO
      ====================================================== */}
      <section
        id="home"
        className="relative min-h-screen overflow-hidden bg-[#F5F2EA] px-5 pb-16 pt-28 sm:px-8 lg:px-10"
      >
        {/* Soft warm background glow */}
        <div className="pointer-events-none absolute -left-40 top-24 h-[420px] w-[420px] rounded-full bg-[#EAE3D6] blur-3xl opacity-70" />
        <div className="pointer-events-none absolute -right-40 top-10 h-[520px] w-[520px] rounded-full bg-[#EFE7DC] blur-3xl opacity-70" />
        <div className="pointer-events-none absolute bottom-0 left-1/3 h-[220px] w-[520px] rounded-full bg-[#F0EAE0] blur-3xl" />

        <img
          src="/Images/Heroimg1.png"
          alt="Jattari growth corridor"
          className="pointer-events-none absolute inset-y-0 right-0 z-0 h-full w-full object-contain object-right opacity-20 sm:opacity-35 lg:w-[64%] lg:opacity-100"
        />
        <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-r from-[#F5F2EA] via-[#F5F2EA]/90 to-[#F5F2EA]/20 lg:from-[#F5F2EA] lg:via-[#F5F2EA]/85 lg:to-transparent" />
        <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-[#F5F2EA]/60 via-transparent to-[#F5F2EA]/20" />
        <div className="relative z-10 mx-auto max-w-[1440px]">
          {/* Hero top location label */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#E9E1D5] text-[#C76F4B]">
              <MapPin size={14} />
            </span>

            <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#8C8173] sm:text-xs">
              Jattari / Aligarh / Uttar Pradesh
            </span>
          </motion.div>

          <div className="mt-8 grid items-center gap-12 lg:min-h-[650px] lg:grid-cols-1">
            {/* =================================================
                LEFT CONTENT
            ================================================== */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="relative z-20"
            >
              <motion.h1
                variants={fadeUp}
                className="max-w-[720px] text-[clamp(3.2rem,6.8vw,6.9rem)] font-extrabold leading-[0.94] tracking-[-0.065em] text-[#292923]"
              >
                Jattari's next
                <br />
                <span className="bg-gradient-to-r from-[#B95F3D] via-[#C87550] to-[#D28B65] bg-clip-text text-transparent">
                  growth story
                </span>
                <br />
                starts here.
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="mt-7 max-w-[590px] text-base leading-7 text-[#766F66] sm:text-lg sm:leading-8"
              >
                Connected to Jewar Airport, powered by Film City, and surrounded
                by growing opportunities in real estate, education and modern
                living.
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="mt-8 flex flex-col gap-3 sm:flex-row"
              >
                <a
                  href="#airport"
                  className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#C87550] px-7 py-4 text-sm font-bold text-white shadow-[0_14px_35px_rgba(150,85,55,0.2)] transition duration-300 hover:-translate-y-1 hover:bg-[#B95F3D] hover:shadow-[0_18px_42px_rgba(150,85,55,0.25)]"
                >
                  Explore Jattari
                 
                </a>

                <a
                  href="#growth"
                  className="group inline-flex items-center justify-center gap-3 rounded-full border border-[#D5C8B7] bg-[#FFFEFB] px-7 py-4 text-sm font-bold text-[#3A3832] transition duration-300 hover:-translate-y-1 hover:border-[#C87550] hover:shadow-lg"
                >
                  View Growth Story
                  
                </a>
              </motion.div>

            </motion.div>


          </div>

          {/* =================================================
              WHY JATTARI STRIP
          ================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mt-8 overflow-hidden rounded-[2rem] border border-[#D5C8B7] bg-[#FFFEFB] shadow-[0_12px_40px_rgba(90,65,40,0.06)] lg:mt-2"
          >
            <div className="grid lg:grid-cols-[1.2fr_repeat(5,1fr)]">
                  <div className="border-b border-[#E9E1D5] p-6 sm:p-7 lg:border-b-0 lg:border-r">
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#8C8173]">
                  Why Jattari?
                </p>
                <h2 className="mt-3 max-w-[230px] text-2xl font-extrabold leading-tight tracking-[-0.03em] text-[#292923]">
                  A location full of possibilities.
                </h2>
              </div>

              {[
                {
                  icon: Plane,
                  title: "Airport Connectivity",
                  text: "Jewar International Airport nearby",
                },
                {
                  icon: Clapperboard,
                  title: "Film City",
                  text: "Entertainment & job opportunities",
                },
                {
                  icon: GraduationCap,
                  title: "Education",
                  text: "Local education institutions",
                },
                {
                  icon: Building2,
                  title: "Townships",
                  text: "Modern residential projects",
                },
                {
                  icon: MapPin,
                  title: "Strategic Location",
                  text: "Connected to major cities",
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="border-b border-[#E9E1D5] p-5 last:border-b-0 sm:p-6 lg:border-b-0 lg:border-r lg:last:border-r-0"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#E9E1D5] text-[#C87550]">
                      <Icon size={19} />
                    </div>

                    <h3 className="mt-4 text-sm font-bold text-[#292923]">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-xs leading-5 text-[#8C8173]">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          PROPERTY DISCOVERY
      ====================================================== */}
      <section className="bg-[#F5F2EA] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">

        <div className="mx-auto max-w-7xl">

          <div className="text-center">

            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#B95F3D]">
              Explore Property
            </span>

            <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-medium tracking-[-0.05em] sm:text-5xl">
              Looking for property around Jattari?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-black/50">
              Tell us what you are looking for and explore suitable options
              based on your requirement.
            </p>

          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {propertyOptions.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: index * 0.12, ease: "easeOut" }}
                className="overflow-hidden rounded-[1.7rem] bg-white transition duration-500 hover:-translate-y-2 hover:shadow-xl"
              >
                <img
                  src={item.image}
                  alt={`${item.title} property option`}
                  className="h-48 w-full object-cover"
                />

                <div className="p-7">
                  <span className="text-5xl font-semibold text-[#C87550]/20">
                    0{index + 1}
                  </span>

                  <h3 className="mt-6 text-2xl font-medium">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-black/45">
                    {item.text}
                  </p>

                  <Link
                    to="/contact"
                    className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#B95F3D]"
                  >
                    Get Options
                  </Link>
                </div>
              </motion.div>
            ))}

          </div>

        </div>
      </section>

      {/* =====================================================
          EDUCATION
      ====================================================== */}
      <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-32">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">

            <div>

              <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#8C8173]">
                Life in Jattari
              </span>

              <h2 className="mt-5 text-4xl font-medium tracking-[-0.05em] sm:text-5xl">
                Education
                <br />
                <span className="text-[#B95F3D]">close to home.</span>
              </h2>

              <p className="mt-6 max-w-md leading-7 text-black/50">
                Jattari's local education ecosystem adds an important
                family-oriented side to the location.
              </p>

            </div>

            <div className="space-y-3">

              {education.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: 25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  className="group flex items-center justify-between rounded-[1.5rem] border border-black/10 bg-white p-5 transition duration-300 hover:-translate-x-1 hover:border-[#C87550]"
                >

                  <div className="flex items-center gap-5">

                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#E9E1D5] text-sm font-bold text-[#766F66]">
                      {item.number}
                    </span>

                    <div>

                      <h3 className="font-semibold">
                        {item.name}
                      </h3>

                      <p className="mt-1 text-sm text-black/40">
                        {item.location}
                      </p>

                    </div>

                  </div>

                 

                </motion.div>
              ))}

            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          LOCAL LIFE
      ====================================================== */}
      <section className="relative overflow-hidden bg-[#D5C8B7] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">

        <svg
          aria-hidden="true"
          viewBox="0 0 240 180"
          className="pointer-events-none absolute -right-5 -top-8 z-0 h-48 w-64 text-[#B96E4B]/20 sm:h-60 sm:w-80"
          fill="none"
        >
          <path d="M126 0c31 24 57 56 76 94-35-17-62-46-76-94Z" fill="currentColor" />
          <path d="M169 0c27 17 49 43 66 74-30-13-54-38-66-74Z" fill="currentColor" />
          <path d="M91 12c34 30 59 67 75 111-39-20-64-57-75-111Z" fill="currentColor" />
        </svg>
        <svg
          aria-hidden="true"
          viewBox="0 0 240 180"
          className="pointer-events-none absolute -bottom-8 -left-5 z-0 h-48 w-64 -scale-x-100 -scale-y-100 text-[#B96E4B]/20 sm:h-60 sm:w-80"
          fill="none"
        >
          <path d="M126 0c31 24 57 56 76 94-35-17-62-46-76-94Z" fill="currentColor" />
          <path d="M169 0c27 17 49 43 66 74-30-13-54-38-66-74Z" fill="currentColor" />
          <path d="M91 12c34 30 59 67 75 111-39-20-64-57-75-111Z" fill="currentColor" />
        </svg>

        <div className="relative z-10 mx-auto max-w-7xl">

          <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end">

            <div>

              <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#766F66]">
                Everyday Jattari
              </span>

              <h2 className="mt-5 text-4xl font-medium tracking-[-0.05em] sm:text-5xl lg:text-6xl">
                The things that
                <br />
                make a place liveable.
              </h2>

            </div>

            <p className="max-w-md text-sm leading-6 text-black/45">
              Beyond major infrastructure, Jattari also has the everyday
              services and facilities that make local life practical.
            </p>

          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            {localLife.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group rounded-[1.7rem] bg-white p-7 transition duration-500 hover:-translate-y-2 hover:shadow-xl"
                >

                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#E9E1D5] text-[#B95F3D]">
                    <Icon size={21} />
                  </div>

                  <h3 className="mt-7 text-xl font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-black/45">
                    {item.text}
                  </p>

                  <div className="mt-7 h-1 w-8 rounded-full bg-[#C87550] transition-all duration-500 group-hover:w-16" />

                </div>
              );
            })}

          </div>

        </div>
      </section>

      {/* =====================================================
          LOCAL STORE SPOTLIGHT
      ====================================================== */}
      <section className="bg-[#F5F2EA] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#B95F3D]">
              A local useful-to-know
            </span>
            <h2 className="mt-4 text-4xl font-medium tracking-[-0.05em] sm:text-5xl">
              Everyday essentials, close to home.
            </h2>
            <p className="mt-4 max-w-xl leading-7 text-black/50">
              A quick guide to one of Jattari's local stores, with the practical
              details you need before you visit.
            </p>
          </div>

          <div className="grid overflow-hidden rounded-[2rem] border border-black/10 bg-white shadow-sm lg:grid-cols-[1.1fr_0.9fr]">
            <div className="p-7 sm:p-10">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <span className="inline-flex items-center gap-2 rounded-full bg-[#E9E1D5] px-3 py-1.5 text-xs font-semibold text-[#766F66]">
                    <span className="h-2 w-2 rounded-full bg-[#766F66]" />
                    Local store guide
                  </span>
                  <h3 className="mt-5 text-2xl font-semibold sm:text-3xl">
                    Patanjali Arogya Kendra
                  </h3>
                  <p className="mt-2 text-sm text-black/45">
                    Grocery ? Natural care ? Ayurvedic products
                  </p>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E9E1D5] text-[#B95F3D]">
                  <ShoppingBag size={22} />
                </div>
              </div>

              <div className="mt-8 flex gap-4 border-t border-black/10 pt-6">
                <MapPin className="mt-0.5 shrink-0 text-[#C87550]" size={19} />
                <p className="text-sm leading-6 text-black/60">
                  Ground Floor, Usarah Road,
                  <br />
                  Jattari, Aligarh, Uttar Pradesh 202137
                </p>
              </div>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="tel:+919761427569"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#272922] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#B95F3D]"
                >
                  <PhoneCall size={16} />
                  Call store
                </a>
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=28.0233337,77.656476"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-black/15 px-5 py-3 text-sm font-semibold transition hover:border-[#C87550] hover:bg-[#F5F2EA]"
                >
                  <Navigation size={16} />
                  Directions
                </a>
              </div>
            </div>

            <div className="bg-[#F5F2EA] p-7 sm:p-10">
              <img
                src={patanjaliImage}
                alt="Patanjali Arogya Kendra"
                className="mb-7 h-56 w-full rounded-2xl object-cover"
              />

              <div className="flex items-center gap-3">
                <Clock3 size={19} className="text-[#766F66]" />
                <div>
                  <p className="font-semibold">Plan your visit</p>
                  <p className="mt-1 text-sm text-black/45">Listed hours: 9:00 AM ? 9:00 PM daily</p>
                </div>
              </div>

              <details className="group mt-6 border-y border-black/10 py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-semibold">
                  View weekly hours
                  <span className="text-xl leading-none text-[#B95F3D] transition group-open:rotate-45">+</span>
                </summary>
                <div className="mt-4 grid grid-cols-2 gap-y-2 text-sm text-black/55">
                  <span>Monday ? Sunday</span>
                  <span className="text-right">9:00 AM ? 9:00 PM</span>
                </div>
              </details>

              <div className="mt-6 flex gap-3">
                <CreditCard size={18} className="mt-0.5 shrink-0 text-[#766F66]" />
                <div>
                  <p className="text-sm font-semibold">Payment methods listed</p>
                  <p className="mt-1 text-sm text-black/50">Cash, credit card and debit card</p>
                </div>
              </div>

              <p className="mt-6 text-xs leading-5 text-black/35">
                Store details are based on its Patanjali Ayurved listing. Please
                call ahead to confirm current hours and availability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          NEARBY CITIES / LOCATION
      ====================================================== */}
      <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="relative isolate mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-[#292e29] px-6 py-10 text-white sm:px-10 sm:py-14 lg:px-14 lg:py-16">
          <div className="pointer-events-none absolute -right-24 -top-28 -z-10 h-80 w-80 rounded-full bg-[#C87550]/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-40 left-1/3 -z-10 h-80 w-80 rounded-full bg-[#D5C8B7]/10 blur-3xl" />

          <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#D99A78]">
                Connected Region
              </span>

              <h2 className="mt-5 max-w-xl text-4xl font-medium leading-tight tracking-[-0.05em] sm:text-5xl lg:text-6xl">
                Jattari is connected to a wider region.
              </h2>

              <p className="mt-6 max-w-lg leading-7 text-white/60">
                Explore the surrounding cities and destinations that shape the
                broader geographic context of Jattari.
              </p>

              <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-4 py-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#C87550] text-white">
                  <MapPin size={18} />
                </span>
                <span>
                  <span className="block text-[10px] font-semibold uppercase tracking-[0.18em] text-white/45">
                    Regional hub
                  </span>
                  <span className="mt-0.5 block text-sm font-semibold">
                    Jattari, Aligarh
                  </span>
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
              {nearbyCities.map((city, index) => (
                <motion.div
                  key={city}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="group flex min-h-24 items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.06] p-4 transition duration-300 hover:-translate-y-1 hover:border-[#D99A78]/60 hover:bg-white/10 sm:min-h-28 sm:flex-col sm:items-start sm:justify-between sm:p-5"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#D99A78]/15 text-[#D99A78] transition-colors group-hover:bg-[#D99A78] group-hover:text-[#292e29]">
                    <MapPin size={17} />
                  </span>
                  <span className="text-sm font-semibold text-white/90 sm:text-base">
                    {city}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FAMOUS TERMINAL CITY PROPERTIES
      ====================================================== */}
      <section className="bg-[#EEE8DC] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#B95F3D]">
                Homes &amp; Communities
              </span>
              <h2 className="mt-5 max-w-3xl text-4xl font-medium tracking-[-0.05em] sm:text-5xl lg:text-6xl">
                Famous <span className="text-[#B95F3D]">Properties</span>
              </h2>
            </div>
            <p className="max-w-md text-base leading-7 text-black/55">
              Explore residential destinations shaping the Jattari growth corridor.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Anugrah Homes",
                image: anugrahHomesImage,
                alt: "Anugrah Homes property",
              },
              {
                name: "Skyline Aero Homes",
                image: skylineAeroHomesImage,
                alt: "Skyline Aero Homes property",
              },
              {
                name: "Golden City",
                image: goldenCityImage,
                alt: "Golden City property",
              },
            ].map((property) => (
              <Link
                key={property.name}
                to="/projects"
                className="group relative isolate flex min-h-[390px] items-end overflow-hidden rounded-[2rem] bg-[#292923] shadow-[0_18px_45px_rgba(54,45,34,0.12)]"
              >
                <img
                  src={property.image}
                  alt={property.alt}
                  className="absolute inset-0 z-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="relative z-20 flex w-full items-end justify-between gap-4 p-6 text-white sm:p-8">
                  <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                    {property.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          JEWAR AIRPORT � HERO FEATURE
      ====================================================== */}
      <section
        id="airport"
        className="relative overflow-hidden bg-[#E9E1D5] px-5 py-24 sm:px-8 lg:px-12 lg:py-32"
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 240 180"
          className="pointer-events-none absolute -right-5 -top-8 z-0 h-44 w-60 text-[#C87550]/15 sm:h-56 sm:w-72"
          fill="none"
        >
          <path d="M126 0c31 24 57 56 76 94-35-17-62-46-76-94Z" fill="currentColor" />
          <path d="M169 0c27 17 49 43 66 74-30-13-54-38-66-74Z" fill="currentColor" />
          <path d="M91 12c34 30 59 67 75 111-39-20-64-57-75-111Z" fill="currentColor" />
        </svg>
        <svg
          aria-hidden="true"
          viewBox="0 0 240 180"
          className="pointer-events-none absolute -bottom-8 -left-5 z-0 h-44 w-60 -scale-x-100 -scale-y-100 text-[#C87550]/15 sm:h-56 sm:w-72"
          fill="none"
        >
          <path d="M126 0c31 24 57 56 76 94-35-17-62-46-76-94Z" fill="currentColor" />
          <path d="M169 0c27 17 49 43 66 74-30-13-54-38-66-74Z" fill="currentColor" />
          <path d="M91 12c34 30 59 67 75 111-39-20-64-57-75-111Z" fill="currentColor" />
        </svg>

        <div className="relative z-10 mx-auto max-w-7xl">

          <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative min-h-[520px] overflow-hidden rounded-[3rem] bg-[#D5C8B7]"
            >

              <img
                src={airportImage}
                alt="Airport terminal, representing the region's biggest growth highlight"
                className="absolute inset-0 h-full w-full object-cover object-center"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#292923]/60 to-transparent" />

              <div className="absolute left-7 top-7 rounded-full bg-white/85 px-5 py-2 text-xs font-bold uppercase tracking-widest text-[#766F66] backdrop-blur-md">
                The biggest highlight
              </div>

              <div className="absolute bottom-8 left-8 right-8 flex items-end justify-between">

                <div>
                  <div className="mb-3 inline-flex rounded-full bg-white p-3 text-[#766F66]">
                    <Plane size={20} />
                  </div>

                  <h3 className="text-3xl font-semibold text-white">
                    Jewar Airport
                  </h3>
                </div>


              </div>

            </motion.div>

            {/* Content */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >

              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#766F66]">
                Growth Anchor
              </p>

              <h2 className="mt-5 text-5xl font-medium leading-[0.95] tracking-[-0.06em] sm:text-6xl">
                The airport
                <br />
                changes the
                <span className="text-[#C87550]">
                  {" "}conversation.
                </span>
              </h2>

              <p className="mt-7 text-base leading-7 text-black/55 sm:text-lg">
                Noida International Airport at Jewar is a major piece of
                infrastructure in the wider region. Its connectivity story is
                central to how nearby locations are being viewed and developed.
              </p>

              <div className="mt-9 grid grid-cols-2 gap-3">

                <div className="rounded-2xl bg-white/70 p-5">
                 
                  <p className="mt-4 text-sm font-semibold">
                    Regional Connectivity
                  </p>
                </div>

                <div className="rounded-2xl bg-white/70 p-5">
                 
                  <p className="mt-4 text-sm font-semibold">
                    Development Story
                  </p>
                </div>

              </div>

              <Link
                to="/jewar-airport"
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#272922] px-7 py-4 text-sm font-semibold text-white transition hover:-translate-y-1 hover:bg-[#C87550]"
              >
                Explore Jewar Airport
                
              </Link>

            </motion.div>

          </div>

        </div>
      </section>

      {/* =====================================================
          FILM CITY
      ====================================================== */}
      <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-32">

        <div className="mx-auto max-w-7xl">

          <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">

            <div>
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#B96E4B]">
                Growth Story 
              </span>

              <h2 className="mt-5 text-5xl font-medium tracking-[-0.06em] sm:text-6xl lg:text-7xl">
                Film City
              </h2>
            </div>

            <p className="max-w-md text-sm leading-6 text-black/45">
              Entertainment, infrastructure and regional development come
              together in the wider Film City story.
            </p>

          </div>

          <div className="relative overflow-hidden rounded-[3rem] bg-[#D5C8B7]">

            <svg
              aria-hidden="true"
              viewBox="0 0 240 180"
              className="pointer-events-none absolute -right-5 -top-8 z-0 h-52 w-64 text-[#B96E4B]/15 sm:h-60 sm:w-80"
              fill="none"
            >
              <path d="M126 0c31 24 57 56 76 94-35-17-62-46-76-94Z" fill="currentColor" />
              <path d="M169 0c27 17 49 43 66 74-30-13-54-38-66-74Z" fill="currentColor" />
              <path d="M91 12c34 30 59 67 75 111-39-20-64-57-75-111Z" fill="currentColor" />
            </svg>
            <svg
              aria-hidden="true"
              viewBox="0 0 240 180"
              className="pointer-events-none absolute -bottom-8 -left-5 z-0 h-52 w-64 -scale-x-100 -scale-y-100 text-[#B96E4B]/15 sm:h-60 sm:w-80"
              fill="none"
            >
              <path d="M126 0c31 24 57 56 76 94-35-17-62-46-76-94Z" fill="currentColor" />
              <path d="M169 0c27 17 49 43 66 74-30-13-54-38-66-74Z" fill="currentColor" />
              <path d="M91 12c34 30 59 67 75 111-39-20-64-57-75-111Z" fill="currentColor" />
            </svg>

            <div className="relative z-10 grid min-h-[550px] lg:grid-cols-[1.2fr_0.8fr]">

              <div className="relative min-h-[430px] overflow-hidden bg-cover bg-center">
                <img
                  src={filmCityImage}
                  alt="Film City development"
                  className="absolute inset-0 h-full w-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#D5C8B7]/20" />

                <div className="absolute bottom-8 left-8">
                  <div className="rounded-full bg-white/90 p-4 text-[#B96E4B]">
                    <Clapperboard size={22} />
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-between p-8 sm:p-12 lg:p-14">

                <div>
                  <span className="inline-flex items-center gap-2 rounded-full border border-[#B96E4B]/20 bg-white/60 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#A75D3E]">
                    <span className="h-2 w-2 rounded-full bg-[#C87550]" />
                    Upcoming Regional Project
                  </span>

                  <h3 className="mt-6 text-3xl font-medium leading-tight sm:text-4xl">
                    A future home for
                    <span className="text-[#B96E4B]">
                      {" "}film and media.
                    </span>
                  </h3>

                  <p className="mt-5 text-base leading-7 text-black/55">
                    The upcoming Film City is planned as an entertainment and
                    media destination for the Yamuna region, bringing the
                    creative industries closer to Jattari and Jewar.
                  </p>

                  <p className="mt-4 text-base leading-7 text-black/55">
                    As the project develops, it could encourage new creative
                    businesses, skilled work and supporting services—adding
                    another dimension to the region’s growth story.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {["Film", "Television", "Digital Media"].map((sector) => (
                      <span
                        key={sector}
                        className="rounded-full border border-[#B96E4B]/20 bg-white/50 px-3 py-1.5 text-xs font-semibold text-[#766F66]"
                      >
                        {sector}
                      </span>
                    ))}
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          GROWTH RADAR
      ====================================================== */}
      <section className="bg-[#272922] px-5 py-24 text-white sm:px-8 lg:px-12 lg:py-32">

        <div className="mx-auto max-w-7xl">

          <div className="max-w-3xl">

            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#D28B65]">
              Why Jattari?
            </span>

            <h2 className="mt-5 text-4xl font-medium tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              Four reasons to
              <br />
              look closer.
            </h2>

          </div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-14 grid gap-px overflow-hidden rounded-[2rem] bg-white/10 md:grid-cols-2 lg:grid-cols-4"
          >

            {growthPoints.map((item) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.number}
                  variants={fadeUp}
                  className="group bg-[#272922] p-7 transition duration-500 hover:bg-[#3A3832]"
                >

                  <div className="flex items-start justify-between">

                    <div className="rounded-xl bg-white/10 p-3 text-[#D28B65] transition group-hover:bg-[#D28B65] group-hover:text-[#272922]">
                      <Icon size={20} />
                    </div>

                    <span className="text-xs text-white/20">
                      {item.number}
                    </span>

                  </div>

                  <h3 className="mt-9 text-xl font-medium">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-white/45">
                    {item.text}
                  </p>

                  <div className="mt-7 h-px w-8 bg-[#D28B65] transition-all duration-500 group-hover:w-full" />

                </motion.div>
              );
            })}

          </motion.div>

        </div>
      </section>

      {/* =====================================================
          ANUGRAH HOMES
      ====================================================== */}
      <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-32">

        <div className="mx-auto max-w-7xl">

          <div className="mb-12">

            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#C87550]">
              Featured Residential Project
            </span>

            <h2 className="mt-5 max-w-4xl text-4xl font-medium tracking-[-0.05em] sm:text-5xl lg:text-6xl">
              Anugrah Homes
              <span className="text-[#C87550]">
                {" "} Jattari
              </span>
            </h2>

          </div>

          <div className="grid overflow-hidden rounded-[3rem] bg-white shadow-xl shadow-black/5 lg:grid-cols-[1fr_0.85fr]">

            <a
              href="https://www.anugrahhomes.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit the official Anugrah Homes website"
              className="group block min-h-[500px] overflow-hidden"
            >
              <img
                src={anugrahHomesImage}
                alt="Anugrah Homes residential property"
                className="h-full min-h-[500px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </a>

            <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-14">

              <div className="flex items-center gap-3 text-[#C87550]">
                <Sparkles size={19} />
                <span className="text-xs font-bold uppercase tracking-widest">
                  Our Featured Option
                </span>
              </div>

              <h3 className="mt-6 text-3xl font-medium sm:text-4xl">
                A residential opportunity positioned around the JattariJewar
                growth corridor.
              </h3>

              <p className="mt-6 leading-7 text-black/50">
                Anugrah Homes presents plotted-development options with a
                location story centred around Jewar Airport, Film City and
                regional connectivity.
              </p>

              <div className="mt-8 flex flex-wrap gap-2">

                {[
                  "Residential Plots",
                  "Prime Location",
                  "Modern Amenities",
                  "Site Visit",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-[#E9E1D5] px-4 py-2 text-xs font-semibold text-[#B95F3D]"
                  >
                    {item}
                  </span>
                ))}

              </div>

              <a
                href="https://www.anugrahhomes2.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-9 inline-flex w-fit items-center gap-3 rounded-full bg-[#272922] px-7 py-4 text-sm font-semibold text-white transition hover:-translate-y-1 hover:bg-[#C87550]"
              >
                Explore Anugrah Homes
              </a>

            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          SKYLINE
      ====================================================== */}
      <section className="bg-[#F5F2EA] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">

        <div className="mx-auto max-w-7xl">

          <div className="grid items-center gap-14 lg:grid-cols-2">

            <div>

              <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#B95F3D]">
                Featured Township
              </span>

              <h2 className="mt-5 text-5xl font-medium tracking-[-0.06em] sm:text-6xl">
                Skyline
                <br />
                <span className="text-[#B95F3D]">
                  Aero Homes.
                </span>
              </h2>

              <p className="mt-7 max-w-xl text-lg leading-8 text-black/50">
                A residential township option positioned around the Jewar
                Airport and Yamuna Expressway growth corridor.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-3">

                {[
                  "Residential Plots",
                  "Wide Roads",
                  "Green Parks",
                  "Security",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl bg-white/60 p-4 text-sm font-semibold"
                  >
                    {item}
                  </div>
                ))}

              </div>

              <a
                href="https://www.skylineaerohomes.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#272922] px-7 py-4 text-sm font-semibold text-white transition hover:-translate-y-1"
              >
                Explore Skyline Aero Homes
              </a>

            </div>

            <div className="relative">

              <div className="overflow-hidden rounded-[3rem]">
                <a
                  href="https://www.skylineaerohomes.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit the official Skyline Aero Homes website"
                  className="group block min-h-[500px]"
                >
                  <img
                    src={skylineAeroHomesImage}
                    alt="Skyline Aero Homes residential property"
                    className="h-[500px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </a>
              </div>

              <div className="pointer-events-none absolute -bottom-6 -left-4 rounded-2xl bg-white p-5 shadow-xl sm:left-6">

                <p className="text-xs uppercase tracking-widest text-black/30">
                  Location
                </p>

                <p className="mt-2 font-semibold">
                  Near Jewar Airport
                </p>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          INTRO
      ====================================================== */}
      <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-32">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative isolate min-h-[380px] overflow-hidden rounded-[2rem] bg-[#272922] p-8 shadow-[0_24px_60px_rgba(40,38,32,0.18)] sm:p-10 lg:min-h-[460px]"
            >
              <img
                src={airportImage}
                alt="Airport terminal at dusk"
                className="absolute inset-0 z-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#171a1b]/90 via-[#171a1b]/55 to-[#171a1b]/10" />

              <div className="relative z-20 flex min-h-[316px] flex-col justify-end sm:min-h-[380px] lg:min-h-[380px]">
                <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#F0B98D]">
                  The Bigger Picture
                </span>

                <h2 className="mt-5 text-4xl font-medium leading-tight tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
                  More than a location.
                  <br />
                  <span className="text-[#F0B98D]">
                    A connected story.
                  </span>
                </h2>
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="lg:pt-10 lg:pl-4"
            >
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#B95F3D]">
                One connected growth corridor
              </span>

              <h3 className="mt-5 max-w-3xl text-3xl font-medium leading-tight tracking-[-0.04em] sm:text-4xl lg:text-5xl">
                Regional momentum,
                <span className="text-[#B95F3D]"> rooted in local life.</span>
              </h3>

              <p className="mt-6 max-w-3xl text-base leading-8 text-black/55 sm:text-lg">
                Jattari is part of a wider growth corridor shaped by new
                connectivity, planned developments and nearby urban centres.
                Looking at the region as a whole helps show how these places
                relate to one another.
              </p>

              <p className="mt-4 max-w-3xl text-base leading-8 text-black/55 sm:text-lg">
                Jewar Airport is an important upcoming connectivity anchor, while
                the planned Film City adds an entertainment and media dimension
                to the area. Around Jattari, schools, local markets and residential
                communities remain part of everyday life.
              </p>

              <p className="mt-4 max-w-3xl text-base leading-8 text-black/55 sm:text-lg">
                This section brings those regional and local stories together to
                make it easier to understand the opportunities developing around
                Jattari.
              </p>
            </motion.div>

          </div>

        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ====================================================== */}
      <section className="relative overflow-hidden bg-[#C87550] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">

        <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full border border-white/20" />
        <div className="absolute -right-10 -top-20 h-[300px] w-[300px] rounded-full border border-white/15" />

        <div className="relative z-10 mx-auto max-w-7xl">

          <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">

            <div className="max-w-3xl">

              <span className="text-xs font-bold uppercase tracking-[0.3em] text-black/45">
                Start Your Search
              </span>

              <h2 className="mt-5 text-4xl font-medium leading-[0.95] tracking-[-0.06em] sm:text-5xl lg:text-7xl">
                Jattari is changing.
                <br />
                Explore it early.
              </h2>

              <p className="mt-6 max-w-xl leading-7 text-black/55">
                Explore the airport, Film City, local facilities and property
                opportunities that make the region worth discovering.
              </p>

            </div>

            <Link
              to="/contact"
              className="inline-flex w-fit items-center gap-3 rounded-full bg-[#272922] px-7 py-4 text-sm font-semibold text-white transition hover:-translate-y-1 hover:bg-white hover:text-[#272922]"
            >
              <PhoneCall size={17} />
              Get Property Options
            </Link>

          </div>

        </div>
      </section>

      </main>
    </>
  );
}
