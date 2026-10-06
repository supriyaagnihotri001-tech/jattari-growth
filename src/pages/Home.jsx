import { Link } from "react-router-dom";
import { motion } from "framer-motion";
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
    number: "01",
    icon: Plane,
    title: "Jewar Airport",
    text: "A major aviation and connectivity anchor shaping the wider region.",
  },
  {
    number: "02",
    icon: Clapperboard,
    title: "Film City",
    text: "A major entertainment and development story around the Yamuna region.",
  },
  {
    number: "03",
    icon: Route,
    title: "Connectivity",
    text: "Road and regional connectivity linking Jattari with surrounding growth centres.",
  },
  {
    number: "04",
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
    title: "Residential Plots",
    text: "Explore plotted-development options around Jattari.",
  },
  {
    title: "Investment",
    text: "Compare locations and requirements before making a decision.",
  },
  {
    title: "Site Visit",
    text: "Request assistance in exploring suitable property options.",
  },
];

export default function Home() {
  return (
    <main className="overflow-hidden bg-[#F7F4EC] text-[#272922]">

      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative min-h-[850px] overflow-hidden px-5 pb-20 pt-28 sm:px-8 lg:px-12">

        {/* Decorative background shapes */}
        <div className="pointer-events-none absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full border border-[#B99552]/20" />
        <div className="pointer-events-none absolute -right-10 top-16 h-[360px] w-[360px] rounded-full bg-[#DCE3D4]/70 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-[-100px] h-[300px] w-[300px] rounded-full bg-[#E9DFC9] blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl">

          {/* Small top label */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3"
          >
            <span className="h-2 w-2 rounded-full bg-[#B99552]" />

            <span className="text-xs font-bold uppercase tracking-[0.28em] text-[#8D7041]">
              Jattari / Aligarh / Uttar Pradesh
            </span>
          </motion.div>

          <div className="mt-10 grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">

            {/* LEFT */}
            <div className="relative z-20">

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl text-[clamp(3.4rem,7vw,7.8rem)] font-medium leading-[0.9] tracking-[-0.07em]"
              >
                A new horizon,
                <br />
                rooted in{" "}
                <span className="relative inline-block text-[#B99552]">
                  Jattari
                  <span className="absolute -bottom-2 left-1/2 h-1 w-16 -translate-x-1/2 rounded-full bg-[#B99552]/40" />
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="mt-8 max-w-xl text-base leading-7 text-black/55 sm:text-lg"
              >
                A town with its own rhythm, connected to a region in motion.
                Get to know the places, everyday essentials and changing
                connections shaping Jattari's next chapter.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.35 }}
                className="mt-9 flex flex-col gap-3 sm:flex-row"
              >
                <a
                  href="#airport"
                  className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#272922] px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#B99552]"
                >
                  Explore the Location
                  <ArrowRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </a>

                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-3 rounded-full border border-[#272922]/15 bg-white/50 px-7 py-4 text-sm font-semibold backdrop-blur-md transition hover:border-[#B99552] hover:bg-white"
                >
                  Find Property Options
                  <ArrowUpRight size={17} />
                </Link>
              </motion.div>

            </div>

            {/* RIGHT VISUAL */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="relative mx-auto h-[520px] w-full max-w-[560px]"
            >

              {/* Main image */}
              <div className="absolute right-0 top-0 h-[430px] w-[88%] overflow-hidden rounded-[3rem] rounded-bl-[9rem] bg-[#DCE3D4] shadow-2xl shadow-black/10">

                <div
                  className="absolute inset-0 bg-cover bg-center transition duration-1000 hover:scale-105"
                  style={{
                    backgroundImage:
                      "url('/images/jattari-hero.jpg')",
                  }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#272922]/45 via-transparent to-transparent" />

                <div className="absolute bottom-7 left-7">
                  <div className="flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold backdrop-blur-md">
                    <MapPin size={14} className="text-[#B99552]" />
                    Jattari, Aligarh
                  </div>
                </div>
              </div>

              {/* Airport floating card */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute bottom-4 left-0 z-20 w-[235px] rounded-[1.7rem] bg-white p-5 shadow-2xl shadow-black/10"
              >
                <div className="flex items-center justify-between">
                  <div className="rounded-xl bg-[#F1E8D5] p-3 text-[#927238]">
                    <Plane size={20} />
                  </div>

                  <span className="text-[10px] font-bold uppercase tracking-widest text-black/30">
                    Regional link 01
                  </span>
                </div>

                <p className="mt-5 text-xl font-semibold">
                  Jewar Airport
                </p>

                <p className="mt-2 text-xs leading-5 text-black/45">
                  A new gateway connecting the wider region.
                </p>
              </motion.div>

              {/* Film City floating card */}
              <motion.div
                animate={{
                  y: [0, 8, 0],
                }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute right-[-8px] top-24 z-20 rounded-2xl bg-[#DCE3D4] px-5 py-4 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-white p-2 text-[#718064]">
                    <Clapperboard size={17} />
                  </div>

                  <div>
                    <p className="text-xs font-bold">
                      Film City
                    </p>

                    <p className="mt-0.5 text-[10px] text-black/40">
                      A changing landscape
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Decorative number */}
              <div className="absolute bottom-0 right-8 text-[8rem] font-semibold leading-none tracking-[-0.1em] text-[#272922]/[0.045]">
                01
              </div>

            </motion.div>

          </div>

          {/* Bottom strip */}
          <div className="mt-14 grid border-y border-black/10 sm:grid-cols-3">

            <div className="border-b border-black/10 py-5 sm:border-b-0 sm:border-r sm:pr-6">
              <p className="text-xs uppercase tracking-widest text-black/35">
                Regional Anchor
              </p>
              <p className="mt-2 font-semibold">
                Jewar Airport
              </p>
            </div>

            <div className="border-b border-black/10 py-5 sm:border-b-0 sm:px-6 sm:border-r">
              <p className="text-xs uppercase tracking-widest text-black/35">
                New Possibilities
              </p>
              <p className="mt-2 font-semibold">
                Film City
              </p>
            </div>

            <div className="py-5 sm:pl-6">
              <p className="text-xs uppercase tracking-widest text-black/35">
                Location
              </p>
              <p className="mt-2 font-semibold">
                Jattari â€¢ Aligarh
              </p>
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
            >
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#B99552]">
                The Bigger Picture
              </span>

              <h2 className="mt-5 text-4xl font-medium leading-tight tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                More than a location.
                <br />
                <span className="text-[#8B806A]">
                  A connected story.
                </span>
              </h2>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="lg:pt-10"
            >
              <p className="max-w-3xl text-lg leading-8 text-black/55">
                Jattari sits within a wider network of places, infrastructure,
                education and residential development. Its story becomes more
                interesting when you look beyond the town itself.
              </p>

              <p className="mt-5 max-w-3xl text-lg leading-8 text-black/55">
                From the airport and Film City to local schools, markets and
                residential projects, this platform brings the important parts
                of the region together in one place.
              </p>
            </motion.div>

          </div>

        </div>
      </section>

      {/* =====================================================
          JEWAR AIRPORT â€” HERO FEATURE
      ====================================================== */}
      <section
        id="airport"
        className="relative overflow-hidden bg-[#E8EFE4] px-5 py-24 sm:px-8 lg:px-12 lg:py-32"
      >

        <div className="mx-auto max-w-7xl">

          <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative min-h-[520px] overflow-hidden rounded-[3rem] bg-[#CBD7C5]"
            >

              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('/images/jewar-airport.jpg')",
                }}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#273126]/60 to-transparent" />

              <div className="absolute left-7 top-7 rounded-full bg-white/85 px-5 py-2 text-xs font-bold uppercase tracking-widest text-[#52604D] backdrop-blur-md">
                The biggest highlight
              </div>

              <div className="absolute bottom-8 left-8 right-8 flex items-end justify-between">

                <div>
                  <div className="mb-3 inline-flex rounded-full bg-white p-3 text-[#718064]">
                    <Plane size={20} />
                  </div>

                  <h3 className="text-3xl font-semibold text-white">
                    Jewar Airport
                  </h3>
                </div>

                <span className="hidden text-8xl font-bold leading-none text-white/10 sm:block">
                  01
                </span>

              </div>

            </motion.div>

            {/* Content */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >

              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#718064]">
                Growth Anchor
              </p>

              <h2 className="mt-5 text-5xl font-medium leading-[0.95] tracking-[-0.06em] sm:text-6xl">
                The airport
                <br />
                changes the
                <span className="text-[#B99552]">
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
                  <p className="text-2xl font-semibold text-[#718064]">
                    âœˆ
                  </p>
                  <p className="mt-4 text-sm font-semibold">
                    Regional Connectivity
                  </p>
                </div>

                <div className="rounded-2xl bg-white/70 p-5">
                  <p className="text-2xl font-semibold text-[#B99552]">
                    â†—
                  </p>
                  <p className="mt-4 text-sm font-semibold">
                    Development Story
                  </p>
                </div>

              </div>

              <Link
                to="/jewar-airport"
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#272922] px-7 py-4 text-sm font-semibold text-white transition hover:-translate-y-1 hover:bg-[#B99552]"
              >
                Explore Jewar Airport
                <ArrowRight size={17} />
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
                Growth Story 02
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

          <div className="relative overflow-hidden rounded-[3rem] bg-[#D9D2C5]">

            <div className="grid min-h-[550px] lg:grid-cols-[1.2fr_0.8fr]">

              <div
                className="relative min-h-[430px] bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('/images/film-city.jpg')",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#D9D2C5]/20" />

                <div className="absolute bottom-8 left-8">
                  <div className="rounded-full bg-white/90 p-4 text-[#B96E4B]">
                    <Clapperboard size={22} />
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-between p-8 sm:p-12 lg:p-14">

                <div>

                  <p className="text-7xl font-semibold leading-none text-[#B96E4B]/20">
                    02
                  </p>

                  <h3 className="mt-8 text-3xl font-medium leading-tight sm:text-4xl">
                    Entertainment becomes
                    <span className="text-[#B96E4B]">
                      {" "}economic energy.
                    </span>
                  </h3>

                  <p className="mt-6 text-base leading-7 text-black/50">
                    The Film City development is part of the broader regional
                    growth narrative around Jewar and the Yamuna corridor.
                  </p>

                </div>

                <Link
                  to="/film-city"
                  className="mt-10 inline-flex w-fit items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-semibold shadow-sm transition hover:-translate-y-1"
                >
                  Discover Film City
                  <ArrowUpRight size={17} />
                </Link>

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

            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#D9B878]">
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
                  className="group bg-[#272922] p-7 transition duration-500 hover:bg-[#33362D]"
                >

                  <div className="flex items-start justify-between">

                    <div className="rounded-xl bg-white/10 p-3 text-[#D9B878] transition group-hover:bg-[#D9B878] group-hover:text-[#272922]">
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

                  <div className="mt-7 h-px w-8 bg-[#D9B878] transition-all duration-500 group-hover:w-full" />

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

            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#B99552]">
              Featured Residential Project
            </span>

            <h2 className="mt-5 max-w-4xl text-4xl font-medium tracking-[-0.05em] sm:text-5xl lg:text-6xl">
              Anugrah Homes
              <span className="text-[#B99552]">
                {" "}â€” Jattari
              </span>
            </h2>

          </div>

          <div className="grid overflow-hidden rounded-[3rem] bg-white shadow-xl shadow-black/5 lg:grid-cols-[1fr_0.85fr]">

            <div
              className="min-h-[500px] bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('/images/anugrah-homes.jpg')",
              }}
            />

            <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-14">

              <div className="flex items-center gap-3 text-[#B99552]">
                <Sparkles size={19} />
                <span className="text-xs font-bold uppercase tracking-widest">
                  Our Featured Option
                </span>
              </div>

              <h3 className="mt-6 text-3xl font-medium sm:text-4xl">
                A residential opportunity positioned around the Jattariâ€“Jewar
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
                    className="rounded-full bg-[#F1E8D5] px-4 py-2 text-xs font-semibold text-[#80622F]"
                  >
                    {item}
                  </span>
                ))}

              </div>

              <Link
                to="/anugrah-homes"
                className="mt-9 inline-flex w-fit items-center gap-3 rounded-full bg-[#272922] px-7 py-4 text-sm font-semibold text-white transition hover:-translate-y-1 hover:bg-[#B99552]"
              >
                Explore Anugrah Homes
                <ArrowRight size={17} />
              </Link>

            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          SKYLINE
      ====================================================== */}
      <section className="bg-[#F0E8DB] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">

        <div className="mx-auto max-w-7xl">

          <div className="grid items-center gap-14 lg:grid-cols-2">

            <div>

              <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#80622F]">
                Featured Township
              </span>

              <h2 className="mt-5 text-5xl font-medium tracking-[-0.06em] sm:text-6xl">
                Skyline
                <br />
                <span className="text-[#80622F]">
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

              <Link
                to="/skyline-aero-homes"
                className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#272922] px-7 py-4 text-sm font-semibold text-white transition hover:-translate-y-1"
              >
                Explore Skyline Aero Homes
                <ArrowRight size={17} />
              </Link>

            </div>

            <div className="relative">

              <div className="overflow-hidden rounded-[3rem]">

                <div
                  className="min-h-[500px] bg-cover bg-center transition duration-700 hover:scale-105"
                  style={{
                    backgroundImage:
                      "url('/images/skyline-aero-homes.jpg')",
                  }}
                />

              </div>

              <div className="absolute -bottom-6 -left-4 rounded-2xl bg-white p-5 shadow-xl sm:left-6">

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
          EDUCATION
      ====================================================== */}
      <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-32">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">

            <div>

              <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#7D8B72]">
                Life in Jattari
              </span>

              <h2 className="mt-5 text-4xl font-medium tracking-[-0.05em] sm:text-5xl">
                Education
                <br />
                close to home.
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
                  className="group flex items-center justify-between rounded-[1.5rem] border border-black/10 bg-white p-5 transition duration-300 hover:-translate-x-1 hover:border-[#B99552]"
                >

                  <div className="flex items-center gap-5">

                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#E8EFE4] text-sm font-bold text-[#718064]">
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

                  <ArrowUpRight
                    size={19}
                    className="mr-1 text-black/20 transition group-hover:text-[#B99552]"
                  />

                </motion.div>
              ))}

            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          LOCAL LIFE
      ====================================================== */}
      <section className="bg-[#DCE3D4] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">

        <div className="mx-auto max-w-7xl">

          <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end">

            <div>

              <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#718064]">
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

                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F1E8D5] text-[#80622F]">
                    <Icon size={21} />
                  </div>

                  <h3 className="mt-7 text-xl font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-black/45">
                    {item.text}
                  </p>

                  <div className="mt-7 h-1 w-8 rounded-full bg-[#B99552] transition-all duration-500 group-hover:w-16" />

                </div>
              );
            })}

          </div>

        </div>
      </section>

      {/* =====================================================
          LOCAL STORE SPOTLIGHT
      ====================================================== */}
      <section className="bg-[#F7F4EC] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#80622F]">
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
                  <span className="inline-flex items-center gap-2 rounded-full bg-[#E8EFE4] px-3 py-1.5 text-xs font-semibold text-[#59694D]">
                    <span className="h-2 w-2 rounded-full bg-[#718064]" />
                    Local store guide
                  </span>
                  <h3 className="mt-5 text-2xl font-semibold sm:text-3xl">
                    Patanjali Arogya Kendra
                  </h3>
                  <p className="mt-2 text-sm text-black/45">
                    Grocery · Natural care · Ayurvedic products
                  </p>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F1E8D5] text-[#80622F]">
                  <ShoppingBag size={22} />
                </div>
              </div>

              <div className="mt-8 flex gap-4 border-t border-black/10 pt-6">
                <MapPin className="mt-0.5 shrink-0 text-[#B99552]" size={19} />
                <p className="text-sm leading-6 text-black/60">
                  Ground Floor, Usarah Road,
                  <br />
                  Jattari, Aligarh, Uttar Pradesh 202137
                </p>
              </div>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="tel:+919761427569"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#272922] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#80622F]"
                >
                  <PhoneCall size={16} />
                  Call store
                </a>
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=28.0233337,77.656476"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-black/15 px-5 py-3 text-sm font-semibold transition hover:border-[#B99552] hover:bg-[#F7F4EC]"
                >
                  <Navigation size={16} />
                  Directions
                </a>
              </div>
            </div>

            <div className="bg-[#F1F3EC] p-7 sm:p-10">
              <div className="flex items-center gap-3">
                <Clock3 size={19} className="text-[#718064]" />
                <div>
                  <p className="font-semibold">Plan your visit</p>
                  <p className="mt-1 text-sm text-black/45">Listed hours: 9:00 AM – 9:00 PM daily</p>
                </div>
              </div>

              <details className="group mt-6 border-y border-black/10 py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-semibold">
                  View weekly hours
                  <span className="text-xl leading-none text-[#80622F] transition group-open:rotate-45">+</span>
                </summary>
                <div className="mt-4 grid grid-cols-2 gap-y-2 text-sm text-black/55">
                  <span>Monday – Sunday</span>
                  <span className="text-right">9:00 AM – 9:00 PM</span>
                </div>
              </details>

              <div className="mt-6 flex gap-3">
                <CreditCard size={18} className="mt-0.5 shrink-0 text-[#718064]" />
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
      <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-32">

        <div className="mx-auto max-w-7xl">

          <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">

            <div>

              <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#B99552]">
                Connected Region
              </span>

              <h2 className="mt-5 text-4xl font-medium tracking-[-0.05em] sm:text-5xl">
                Jattari sits within a wider network.
              </h2>

              <p className="mt-6 leading-7 text-black/50">
                Explore the surrounding cities and destinations that help
                explain the broader geographic context of Jattari.
              </p>

            </div>

            <div className="flex flex-wrap gap-3">

              {nearbyCities.map((city, index) => (
                <motion.div
                  key={city}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.35,
                    delay: index * 0.05,
                  }}
                  className="rounded-full border border-black/10 bg-white px-6 py-3 text-sm font-semibold transition hover:-translate-y-1 hover:border-[#B99552] hover:shadow-md"
                >
                  <span className="mr-2 text-[#B99552]">
                    â€¢
                  </span>
                  {city}
                </motion.div>
              ))}

            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          PROPERTY DISCOVERY
      ====================================================== */}
      <section className="bg-[#F0E8DB] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">

        <div className="mx-auto max-w-7xl">

          <div className="text-center">

            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#80622F]">
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

          <div className="mt-12 grid gap-4 md:grid-cols-3">

            {propertyOptions.map((item, index) => (
              <div
                key={item.title}
                className="rounded-[1.7rem] bg-white p-7 transition duration-500 hover:-translate-y-2 hover:shadow-xl"
              >

                <span className="text-5xl font-semibold text-[#B99552]/20">
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
                  className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#80622F]"
                >
                  Get Options
                  <ArrowRight size={16} />
                </Link>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ====================================================== */}
      <section className="relative overflow-hidden bg-[#B99552] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">

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
  );
}
