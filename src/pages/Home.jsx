import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import airportImage from "../assets/Images/airport.png";
import connectivityImage from "../assets/Images/connectivity.png";
import anugrahHomesImage from "../assets/Images/Anugrahimg.png";
import skylineAeroHomesImage from "../assets/Images/skylinehomesimg1.png";
import goldenCityImage from "../assets/Images/goldencity.png";
import patanjaliImage from "../assets/Images/patanjali.png";
import terminalCityImage from "../assets/Images/terminalcity.avif";
import filmCityImage from "../assets/Images/filmcity.png";
import dailyEssentialsImage from "../assets/Images/dailyessentials.png";
import educationImage from "../assets/Images/education.png";
import greenLifeImage from "../assets/Images/greenlife.png";
import strategicLocationImage from "../assets/Images/strategiclocation.png";
import rajeevComputerImage from "../assets/Images/rajeevcomputer.png";
import diamondAcademyImage from "../assets/Images/diamond.png";
import gurukulAcademyImage from "../assets/Images/gurukul.png";


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
} from "lucide-react";

const HERO_PHRASES = ["growth story", "bright future", "new horizons"];

const HERO_IMAGES = [
  "/Images/Heroimg1.png",
  "/Images/Heroimg.png",
  "/Images/Anugrahimg.webp",
  connectivityImage,
];

function HeroImageRotator() {
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    setImageIndex((current) => (current + 1) % HERO_IMAGES.length);

    const intervalId = window.setInterval(() => {
      setImageIndex((current) => (current + 1) % HERO_IMAGES.length);
    }, 3000);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <div
      className="pointer-events-none absolute inset-y-0 right-0 z-0 h-full w-full overflow-hidden lg:w-[64%]"
      style={{ perspective: 1200 }}
    >
      <motion.img
        key={HERO_IMAGES[imageIndex]}
        src={HERO_IMAGES[imageIndex]}
        alt="Jattari growth corridor"
        initial={{ opacity: 0, rotateY: 75, x: -36 }}
        animate={{ opacity: 1, rotateY: 0, x: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 0.75, 0.25, 1] }}
        style={{ transformOrigin: "right center", objectPosition: "right top", backfaceVisibility: "hidden" }}
        className="h-full w-full object-contain object-right opacity-20 sm:opacity-35 lg:opacity-100"
      />
    </div>
  );
}

function TypewriterText() {
  const [text, setText] = useState(HERO_PHRASES[0]);

  useEffect(() => {
    let phraseIndex = 0;
    let characterIndex = HERO_PHRASES[0].length;
    let deleting = true;
    let timer;

    const tick = () => {
      const phrase = HERO_PHRASES[phraseIndex];

      if (deleting) {
        characterIndex -= 1;
        setText(phrase.slice(0, characterIndex));
        if (characterIndex === 0) {
          deleting = false;
          phraseIndex = (phraseIndex + 1) % HERO_PHRASES.length;
          timer = window.setTimeout(tick, 350);
        } else {
          timer = window.setTimeout(tick, 45);
        }
        return;
      }

      characterIndex += 1;
      setText(phrase.slice(0, characterIndex));
      if (characterIndex === phrase.length) {
        deleting = true;
        timer = window.setTimeout(tick, 1500);
      } else {
        timer = window.setTimeout(tick, 90);
      }
    };

    timer = window.setTimeout(tick, 0);
    return () => window.clearTimeout(timer);
  }, []);

  return <span className="hero-typewriter" aria-live="off">{text}</span>;
}

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
  {  name: "Rajeev Gandhi Computer Saksharta Mission", location: "Opp. Central Bank of India, Jattari", image: rajeevComputerImage, href: "/contact#enquiry" },
  {  name: "Diamond Academy", location: "Jattari", image: diamondAcademyImage, href: "/contact#enquiry" },
  {  name: "Gurukul Academy", location: "Jattari", image: gurukulAcademyImage, href: "/contact#enquiry" },
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
    image: dailyEssentialsImage,
  },
  {
    icon: GraduationCap,
    title: "Education",
    text: "Schools, academies and coaching institutions for local families.",
    image: educationImage,
  },
  {
    icon: Trees,
    title: "Green Lifestyle",
    text: "A developing town environment with residential and open spaces.",
    image: greenLifeImage,
  },
  {
    icon: MapPin,
    title: "Strategic Location",
    text: "Positioned within a wider network of important regional destinations.",
    image: strategicLocationImage,
  },
];

const propertyOptions = [
  {
    title: "Anugrah Homes",
    text: "Explore a residential community in the Jattari growth corridor.",
    image: anugrahHomesImage,
    url: "/contact#enquiry",
  },
  {
    title: "Skyline Aero Homes",
    text: "Discover a township near Jewar Airport and Yamuna Expressway.",
    image: skylineAeroHomesImage,
    url: "/contact#enquiry",
  },
  {
    title: "Golden City",
    text: "See another residential option around the Jattari region.",
    image: goldenCityImage,
    url: "/contact#enquiry",
  },
  {
    title: "Terminal City",
    text: "Explore a destination connected to the Film City growth story.",
    image: terminalCityImage,
    url: "/contact#enquiry",
  },
];

export default function Home() {
  return (
    <>
     
      <main data-home-page className="overflow-hidden bg-[#F5F2EA] text-[#272922]">

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

        <HeroImageRotator />
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
                aria-label="Jattari's next growth story starts here."
                className="max-w-[720px] text-[clamp(3.2rem,6.8vw,6.9rem)] font-extrabold leading-[0.94] tracking-[-0.065em] text-[#292923]"
              >
                Jattari's next
                <br />
                <span className="bg-gradient-to-r from-[#B95F3D] via-[#C87550] to-[#D28B65] bg-clip-text text-transparent">
                  <TypewriterText />
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
                  href="#airport"
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
            className="mt-8 overflow-hidden rounded-[2rem] border border-[#D5C8B7] bg-[#FFFEFB] shadow-[0_12px_40px_rgba(90,65,40,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_48px_rgba(90,65,40,0.14)] lg:mt-2"
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
      <section id="properties" className="scroll-mt-28 bg-[#F5F2EA] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">

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

          <div className="property-marquee mt-12" aria-label="Explore property options">
            <div className="property-marquee-track">
              {[false, true].map((isClone) => (
                <div
                  key={isClone ? "property-copy" : "property-cards"}
                  className="property-marquee-group"
                  aria-hidden={isClone || undefined}
                  inert={isClone || undefined}
                >
                  {propertyOptions.map((item) => {
                    const CardLink = item.external ? "a" : Link;
                    const linkProps = item.external
                      ? { href: item.url, target: "_blank", rel: "noopener noreferrer" }
                      : { to: item.url };

                    return (
                      <CardLink
                        key={`${isClone ? "copy-" : ""}${item.title}`}
                        {...linkProps}
                        aria-label={`${item.title} ? ${item.external ? "contact the official project team" : "ask us for property details"}`}
                        tabIndex={isClone ? -1 : undefined}
                        className="group block h-full w-[280px] shrink-0 overflow-hidden rounded-[1.7rem] bg-white transition duration-500 hover:-translate-y-2 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C87550] sm:w-[320px]"
                      >
                        <img
                          src={item.image}
                          alt={`${item.title} property option`}
                          className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />

                        <div className="p-7">

                          <h3 className="text-2xl font-medium">
                            {item.title}
                          </h3>

                          <p className="mt-3 text-sm leading-6 text-black/45">
                            {item.text}
                          </p>

                        </div>
                      </CardLink>
                    );
                  })}
                </div>
              ))}
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

              <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#8C8173]">
                Life in Jattari
              </span>

              <h2 className="mt-5 text-4xl font-medium tracking-[-0.05em] sm:text-5xl">
                Education
                <br />
                <span className="text-[#B95F3D]">close to home.</span>
              </h2>

              <p className="mt-6 max-w-md leading-7 text-black/50">
                Jattari offers families access to nearby schools, academies and computer learning opportunities. Institutions such as Diamond Academy, Gurukul Academy and Rajeev Gandhi Computer Saksharta Mission bring education and skill-building options closer to home. Together, these local choices add everyday convenience for students and families in the area.
              </p>

            </div>

            <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-8 sm:py-8">
              {education.map((item, index) => (
                <motion.article
                  key={item.name}
                  initial={{ opacity: 0, y: 28, rotate: (index - 2) * 6 }}
                  whileInView={{ opacity: 1, y: 0, rotate: (index - 2) * 6 }}
                  animate={{ x: [0, index % 2 === 0 ? 4 : -4, 0, index % 2 === 0 ? -4 : 4, 0] }}
                  whileHover={{ y: -12, rotate: 0, scale: 1.03 }}
                  viewport={{ once: true }}
                  transition={{
                    x: { duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: index * 0.25 },
                    default: { duration: 0.55, delay: index * 0.12 },
                  }}
                  style={{ zIndex: index + 1 }}
                  className={
                    "group relative w-full max-w-[260px] shrink-0 overflow-hidden rounded-[1.5rem] border-[5px] border-[#C87550] bg-white shadow-[0_18px_45px_rgba(63,48,35,0.16)] transition duration-300 hover:z-20 sm:w-[42%] sm:max-w-[210px] md:w-[30%] "
                  }
                >
                  <Link to={item.href} aria-label={"Ask about " + item.name} className="block h-full">
                  <div className="relative h-48 overflow-hidden sm:h-52">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                  </div>
                  <div className="min-h-[112px] p-4">
                    <h3 className="text-sm font-bold leading-snug text-[#292923]">
                      {item.name}
                    </h3>
                    <p className="mt-2 text-xs leading-5 text-[#766F66]">
                      {item.location}
                    </p>
                  </div>
                  
                  </Link>
                </motion.article>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          LOCAL LIFE
      ====================================================== */}
      <section className="relative overflow-hidden bg-[#E9E1D5] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-[#C87550]/10 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="mb-12 grid gap-6 lg:grid-cols-[1fr_0.65fr] lg:items-end">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#8C634D]">
                Everyday Jattari
              </span>
              <h2 className="mt-5 max-w-3xl text-4xl font-medium leading-[1.02] tracking-[-0.05em] sm:text-5xl lg:text-6xl">
                Local life, <span className="text-[#B95F3D]">made easy.</span>
              </h2>
            </div>
            <p className="max-w-md leading-7 text-[#645C52] lg:ml-auto">
              Get a feel for the places and everyday services that make up life
              around Jattari, from local essentials to green open spaces.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
            {(() => {
              const featured = localLife[0];
              const FeaturedIcon = featured.icon;

              return (
                <article className="group relative isolate flex min-h-[440px] flex-col justify-end overflow-hidden rounded-[2rem] bg-[#292923] sm:min-h-[560px]">
                  <img
                    src={featured.image}
                    alt={`${featured.title} in Jattari`}
                    className="absolute inset-0 z-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#1e211d]/90 via-[#1e211d]/25 to-transparent" />
                  <div className="relative z-20 p-7 sm:p-10">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/15 px-4 py-2 text-xs font-semibold text-white backdrop-blur-md">
                      <FeaturedIcon size={15} />
                      A closer look at Jattari
                    </span>
                    <h3 className="mt-5 text-3xl font-semibold text-white sm:text-4xl">
                      {featured.title}
                    </h3>
                    <p className="mt-3 max-w-lg text-sm leading-6 text-white/80 sm:text-base">
                      {featured.text}
                    </p>
                  </div>
                </article>
              );
            })()}

            <div className="grid gap-4">
              {localLife.slice(1).map((item, index) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.title}
                    className="group flex min-h-[155px] overflow-hidden rounded-[1.6rem] border border-[#d8cdbc] bg-[#F8F5ED] transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:min-h-[175px]"
                  >
                    <div className="relative w-[36%] shrink-0 overflow-hidden sm:w-[40%]">
                      <img
                        src={item.image}
                        alt={`${item.title} in Jattari`}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <span className="absolute left-3 top-3 rounded-full bg-[#F8F5ED]/90 px-2.5 py-1 text-[10px] font-bold text-[#8C634D] backdrop-blur">
                        0{index + 2}
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col justify-center p-4 sm:p-6">
                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#E9E1D5] text-[#B95F3D]">
                        <Icon size={17} />
                      </span>
                      <h3 className="mt-3 text-base font-semibold text-[#292923] sm:text-lg">
                        {item.title}
                      </h3>
                      <p className="mt-1.5 text-xs leading-5 text-[#766F66] sm:text-sm sm:leading-6">
                        {item.text}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
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

            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          GROWTH ANCHOR & STORY
      ====================================================== */}
      <section id="airport" className="relative overflow-hidden bg-[#E9E1D5] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="pointer-events-none absolute -right-24 -top-20 h-80 w-80 rounded-full bg-[#C87550]/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-20 h-80 w-80 rounded-full bg-white/40 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="mb-12 grid gap-6 lg:grid-cols-[1fr_0.7fr] lg:items-end">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#A75D3E]">
                Growth Anchor &amp; Story
              </span>
              <h2 className="mt-5 max-w-3xl text-4xl font-medium leading-[0.98] tracking-[-0.06em] sm:text-5xl lg:text-7xl">
                One region,
                <span className="text-[#B95F3D]"> multiple growth drivers.</span>
              </h2>
            </div>
            <p className="max-w-xl leading-7 text-black/55 lg:ml-auto">
              Jewar Airport and the upcoming Film City represent two different
              parts of the wider development story unfolding around Jattari.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {[
              {
                title: "Jewar Airport",
                eyebrow: "Regional Growth Anchor",
                image: airportImage,
                imageAlt: "Airport terminal near the Jewar growth corridor",
                icon: Plane,
                description: "Noida International Airport at Jewar is a major infrastructure project for the region. Its planned connectivity is central to how nearby locations are viewed and developed.",
                points: ["Regional connectivity", "Airport-led development"],
                link: "/jewar-airport",
                action: "Explore Jewar Airport",
              },
              {
                title: "Film City",
                eyebrow: "Upcoming Regional Project",
                image: filmCityImage,
                imageAlt: "Film City development in the Yamuna region",
                icon: Clapperboard,
                description: "The upcoming Film City is planned as an entertainment and media destination for the Yamuna region. As plans develop, it could support creative businesses, skilled work and related services.",
                points: ["Film & television", "Digital media"],
                link: "/jattari-growth",
                action: "Explore Growth Story",
              },
            ].map((story, index) => {
              const Icon = story.icon;

              return (
                <motion.article
                  key={story.title}
                  initial={{ opacity: 0, x: index === 0 ? -80 : 80 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.75, delay: index * 0.15, ease: "easeOut" }}
                  className="overflow-hidden rounded-[2rem] border border-black/5 bg-[#FFFEFB] shadow-[0_18px_50px_rgba(69,55,35,0.08)]"
                >
                  <div className="relative h-64 overflow-hidden sm:h-80">
                    <img
                      src={story.image}
                      alt={story.imageAlt}
                      className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#242621]/70 via-transparent to-transparent" />
                    <span className="absolute bottom-5 left-5 inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#635B4D] backdrop-blur">
                      <Icon size={15} className="text-[#B95F3D]" />
                      {story.eyebrow}
                    </span>
                  </div>

                  <div className="p-6 sm:p-8">
                    <h3 className="text-3xl font-semibold tracking-tight text-[#292923] sm:text-4xl">
                      {story.title}
                    </h3>
                    <p className="mt-4 text-base leading-7 text-black/55">
                      {story.description}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {story.points.map((point) => (
                        <span
                          key={point}
                          className="rounded-full bg-[#EEE8DC] px-3 py-1.5 text-xs font-semibold text-[#766F66]"
                        >
                          {point}
                        </span>
                      ))}
                    </div>
                    <Link
                      to={story.link}
                      className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#A75D3E] transition hover:gap-3"
                    >
                      {story.action}
                      <ArrowRight size={17} />
                    </Link>
                  </div>
                </motion.article>
              );
            })}
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
                href="https://www.anugrahhomes.com/"
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
