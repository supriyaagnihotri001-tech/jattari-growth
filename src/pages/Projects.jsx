import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  CalendarClock,
  CheckCircle2,
  Clapperboard,
  Compass,
  Home,
  Navigation,
  Plane,
  Sparkles,
  TrendingUp,
} from "lucide-react";

const upcomingProjects = [
  {
   
    status: "Upcoming",
    icon: Clapperboard,
    title: "Film City",
    subtitle: "A major regional development opportunity",
    description:
      "The International Film City planned in the YEIDA region is one of the major developments shaping the wider Jewar growth corridor. Its location near Noida International Airport adds another important dimension to the region's future.",
    location: "YEIDA Region · Near Noida International Airport",
    highlights: [
      "Entertainment & media ecosystem",
      "Regional economic activity",
      "New business opportunities",
      "Airport-led development",
    ],
    link: "/about",
  },
];

const currentProjects = [
  {
   
    status: "Current Project",
    title: "Anugrah Homes",
    subtitle: "Residential development in Jattari",
    description:
      "Anugrah Homes is one of our current residential property projects, created around the growing demand for well-connected homes and plots in the Jattari region.",
    location: "Jattari, Aligarh, Uttar Pradesh",
    icon: Home,
    image: "/Images/Anugrahimg.webp",
    url: "https://www.anugrahhomes.com/",
    highlights: [
      "Residential opportunity",
      "Jattari location",
      "Growth corridor",
      "Site visit available",
    ],
  },
  {
    number: "02",
    status: "Current Project",
    title: "Skyline Aero Homes",
    subtitle: "Residential opportunity near the airport growth corridor",
    description:
      "Skyline Aero Homes is another current project positioned around the changing real-estate landscape of the wider Jattari and Jewar-side growth region.",
    location: "Jattari Growth Corridor",
    icon: Plane,
    image: "/Images/skylinehomesimg1.jpg",
    url: "https://www.skylineaerohomes.com/",
    highlights: [
      "Airport-led growth region",
      "Residential opportunity",
      "Regional connectivity",
      "Investment perspective",
    ],
  },
];

const exploreProperties = [
  {
    icon: Home,
    title: "Residential Plots",
    text: "Explore residential plot opportunities for building a future home or evaluating long-term property options.",
  },
  {
    icon: Building2,
    title: "Residential Projects",
    text: "Discover organised residential developments located around the Jattari growth corridor.",
  },
  {
    icon: TrendingUp,
    title: "Investment Opportunities",
    text: "Understand property options from the perspective of location, connectivity and long-term regional development.",
  },
  {
    icon: Compass,
    title: "Jattari Properties",
    text: "Explore the wider property landscape across Jattari and its surrounding development corridor.",
  },
];

const projectFactors = [
  {
    
    title: "Location",
    text: "Understand where the project is situated and how it connects to nearby towns, highways and development centres.",
  },
  {
   
    title: "Connectivity",
    text: "Consider road access and proximity to important regional destinations before making a property decision.",
  },
  {
    
    title: "Development",
    text: "Look at the infrastructure and development taking place around the property, not only the project itself.",
  },
  {
    
    title: "Documentation",
    text: "Always independently verify ownership, title, approvals, land use and other relevant property documents.",
  },
];

function SectionLabel({ children, light = false }) {
  return (
    <div
      className={`mb-5 inline-flex items-center gap-2 rounded-full px-4 py-2 text-[11px] font-bold uppercase tracking-[0.22em] ${
        light
          ? "border border-white/15 bg-white/10 text-[#dbc58f]"
          : "border border-[#cbb98f] bg-[#eee7d8] text-[#80652f]"
      }`}
    >
      <span
        className={`h-1.5 w-1.5 rounded-full ${
          light ? "bg-[#d5b875]" : "bg-[#a47732]"
        }`}
      />
      {children}
    </div>
  );
}

function ProjectTag({ children }) {
  return (
    <span className="rounded-full border border-[#ddd2be] bg-[#f8f5ed] px-3 py-1.5 text-[11px] font-semibold text-[#696454]">
      {children}
    </span>
  );
}

function Projects() {
  const [projectSlide, setProjectSlide] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setProjectSlide((current) => (current + 1) % currentProjects.length);
    }, 5000);
    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <main className="overflow-hidden bg-[#F5F2EA] text-[#272922]">
      {/* PROJECTS HERO */}
      <section className="relative isolate overflow-hidden bg-[#f5f2ea] px-5 pb-16 pt-28 sm:px-8 lg:px-12 lg:pb-24 lg:pt-32">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_82%_42%,rgba(214,153,116,0.22),transparent_48%),linear-gradient(125deg,#fffefa_0%,#f5f2ea_58%,#ece3d6_100%)]" />
        <div className="relative mx-auto grid max-w-[1400px] items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="relative z-10"
          >
            <div className="mb-5 flex items-center gap-3 text-sm font-bold uppercase tracking-[0.18em] text-[#B95F3D]">
              Our Projects <span className="h-px w-12 bg-[#C87550]" />
            </div>
            <h1 className="max-w-3xl text-4xl font-black leading-[1.04] tracking-[-0.055em] text-[#202027] sm:text-5xl lg:text-7xl">
              Find a place to <span className="text-[#B95F3D]">call your own.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-[#686c75] sm:text-lg sm:leading-8">
              Explore residential projects in Jattari and the wider growth corridor. Compare locations, learn about each project and plan your next step.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#current-projects" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#272922] px-6 py-3.5 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-[#C87550]">
                View Current Projects <ArrowRight size={17} />
              </a>
              <a href="#explore" className="inline-flex items-center justify-center gap-2 rounded-full border border-[#D5C8B7] bg-white/70 px-6 py-3.5 text-sm font-bold text-[#272922] transition hover:-translate-y-1 hover:border-[#C87550] hover:text-[#B95F3D]">
                Explore Properties <ArrowUpRight size={16} />
              </a>
            </div>
          </motion.div>

          <div className="relative mx-auto w-full max-w-[680px]">
            <div className="relative h-[360px] overflow-hidden rounded-[2rem] bg-[#d8d0c2] shadow-[0_30px_80px_rgba(69,56,38,0.18)] sm:h-[470px] sm:rounded-[2.5rem]">
              <AnimatePresence mode="wait" initial={false}>
                <motion.a
                  key={currentProjects[projectSlide].title}
                  href={currentProjects[projectSlide].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Explore ${currentProjects[projectSlide].title}`}
                  initial={{ opacity: 0, scale: 1.03 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.45 }}
                  className="absolute inset-0 block"
                >
                  <img src={currentProjects[projectSlide].image} alt={currentProjects[projectSlide].title} className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#171914]/85 via-[#171914]/10 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-9">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#f0c08a]">{currentProjects[projectSlide].status}</p>
                    <h2 className="mt-2 text-2xl font-bold sm:text-4xl">{currentProjects[projectSlide].title}</h2>
                    <p className="mt-2 text-sm text-white/80 sm:text-base">{currentProjects[projectSlide].location}</p>
                  </div>
                </motion.a>
              </AnimatePresence>
              <div className="absolute right-5 top-5 flex gap-2 sm:right-7 sm:top-7" aria-label="Choose featured project">
                {currentProjects.map((project, index) => (
                  <button
                    key={project.title}
                    type="button"
                    onClick={() => setProjectSlide(index)}
                    aria-label={`Show ${project.title}`}
                    aria-pressed={projectSlide === index}
                    className={`h-2.5 rounded-full transition-all ${projectSlide === index ? "w-8 bg-white" : "w-2.5 bg-white/55 hover:bg-white/80"}`}
                  />
                ))}
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between px-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#8c8173] sm:text-xs">
              <span>Jattari properties</span>
              <span>Explore current projects</span>
            </div>
          </div>
        </div>
      </section>
      {/* =========================================================
          FEATURED PROJECTS / STICKY SCROLL
      ========================================================== */}
      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:px-12">
          <div className="lg:sticky lg:top-28 lg:h-fit">
            <SectionLabel>Featured Projects</SectionLabel>

            <h2 className="max-w-xl text-4xl font-semibold leading-[1.08] tracking-[-0.05em] text-[#202027] sm:text-5xl lg:text-6xl">
              Property opportunities near Jewar Airport.
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-[#777C89] sm:text-lg">
              Explore residential projects in Jattari and the surrounding
              growth corridor. Scroll through each property to see its location,
              overview and official website.
            </p>

            <a
              href="#current-projects"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#E5B51B] px-7 py-4 text-sm font-bold text-white shadow-[0_12px_28px_rgba(190,148,18,0.22)] transition hover:-translate-y-1 hover:bg-[#D3A30B]"
            >
              View All Projects
              <ArrowRight size={18} />
            </a>
          </div>

          <div className="relative space-y-8 lg:space-y-10">
            {currentProjects.map((project, index) => (
              <div
                key={project.title}
                className="lg:sticky lg:top-28"
                style={{ top: `calc(7rem + ${index * 20}px)`, zIndex: index + 1 }}
              >
                <article className="grid overflow-hidden rounded-[2rem] border border-[#E3E5E9] bg-white shadow-[0_18px_50px_rgba(32,32,39,0.08)] md:grid-cols-[1fr_0.85fr]">
                  <div className="flex flex-col items-start p-6 sm:p-8 lg:p-9">
                    <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-[#30313A]">
                      <span className="inline-flex items-center gap-2">
                        <Navigation size={17} className="text-[#E5B51B]" />
                        {project.location}
                      </span>
                      <span className="text-[#777C89]">Township</span>
                    </div>

                    <h3 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-[#202027] sm:text-4xl">
                      {project.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-[#777C89] sm:text-base">
                      {project.description}
                    </p>

                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit ${project.title} official website`}
                      className="mt-7 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#E5B51B] text-white transition hover:-translate-y-1 hover:bg-[#D3A30B]"
                    >
                      <ArrowUpRight size={23} />
                    </a>
                  </div>

                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${project.title} official website`}
                    className="group relative min-h-[250px] overflow-hidden md:min-h-[320px]"
                  >
                    <img
                      src={project.image}
                      alt={`${project.title} property`}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </a>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* =========================================================
          UPCOMING PROJECT
      ========================================================== */}
      <section className="border-y border-[#ddd3c1] bg-[#e9e1d2] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="mb-12 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <SectionLabel>Coming Next</SectionLabel>

              <h2 className="text-4xl font-semibold tracking-[-0.04em] sm:text-6xl">
                Upcoming Project
              </h2>
            </div>

            <div className="flex items-center gap-2 text-sm font-semibold text-[#80652f]">
              <CalendarClock size={17} />
              Future Development
            </div>
          </div>

          {upcomingProjects.map((project) => {
            const Icon = project.icon;

            return (
              <div
                key={project.title}
                className="overflow-hidden rounded-[36px] border border-[#d2c5ae] bg-[#f8f5ed]"
              >
                <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
                  {/* Visual */}
                  <div className="relative min-h-[430px] overflow-hidden">
                    <img
                      src="/Images/Heroimg.png"
                      alt="Upcoming Film City development"
                      className="absolute inset-0 h-full w-full object-cover"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#1f241f]/80 via-[#1f241f]/10 to-transparent" />

                    <div className="absolute left-6 top-6">
                      <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-[#292d28]/70 px-4 py-2 text-xs font-bold text-white backdrop-blur-md">
                        <span className="h-2 w-2 rounded-full bg-[#d5bb78]" />
                        UPCOMING PROJECT
                      </span>
                    </div>

                    <div className="absolute bottom-7 left-7 right-7">
                      <p className="text-xs uppercase tracking-[0.2em] text-white/65">
                        {project.location}
                      </p>

                      <h3 className="mt-2 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-7 sm:p-10 lg:p-12">
                    <div className="flex items-start justify-between gap-5">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#e8dfcd] text-[#8b6a34]">
                        <Icon size={24} strokeWidth={1.7} />
                      </div>

                      <span className="text-xs font-bold tracking-[0.18em] text-[#b3a489]">
                        {project.number}
                      </span>
                    </div>

                    <p className="mt-8 text-sm font-semibold uppercase tracking-[0.14em] text-[#9b783e]">
                      {project.subtitle}
                    </p>

                    <p className="mt-4 text-sm leading-8 text-[#6c6d65]">
                      {project.description}
                    </p>

                    <div className="mt-7 space-y-3">
                      {project.highlights.map((highlight) => (
                        <div
                          key={highlight}
                          className="flex items-center gap-3"
                        >
                          <CheckCircle2
                            size={17}
                            className="shrink-0 text-[#a17d42]"
                          />
                          <span className="text-sm font-medium text-[#45473f]">
                            {highlight}
                          </span>
                        </div>
                      ))}
                    </div>

                    <Link
                      to={project.link}
                      className="mt-9 inline-flex items-center gap-2 rounded-full bg-[#292c26] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#9b773b]"
                    >
                      Explore Development
                      
                      
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* =========================================================
          CURRENT PROJECTS
      ========================================================== */}
      <section
        id="current-projects"
        className="scroll-mt-20 py-20 sm:py-28"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <SectionLabel>Available Now</SectionLabel>

            <h2 className="text-4xl font-semibold tracking-[-0.04em] sm:text-6xl">
              Our Current Projects
            </h2>

            <p className="mt-5 max-w-2xl leading-8 text-[#696b63]">
              Explore our current residential projects and understand their
              location, positioning and connection with the wider Jattari
              growth story.
            </p>
          </div>

          <div className="mt-12 grid gap-7 lg:grid-cols-2">
            {currentProjects.map((project) => {
              const Icon = project.icon;

              return (
                <a
                  key={project.title}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${project.title} website`}
                  className="group block cursor-pointer overflow-hidden rounded-[32px] border border-[#ddd5c7] bg-[#fbf9f4] transition duration-300 hover:-translate-y-2 hover:border-[#b99552] hover:shadow-[0_25px_60px_rgba(70,59,40,0.10)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C87550]"
                >
                  {/* Image */}
                  <div className="relative h-[310px] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#222720]/75 via-transparent to-transparent" />

                    <div className="absolute left-5 top-5">
                      <span className="rounded-full border border-white/20 bg-[#292d28]/70 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-white backdrop-blur">
                        {project.status}
                      </span>
                    </div>

                    <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.2em] text-white/60">
                          {project.location}
                        </p>

                        <h3 className="mt-1 text-3xl font-semibold text-white">
                          {project.title}
                        </h3>
                      </div>

                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/90 text-[#292c26]">
                        <Icon size={19} />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-7 sm:p-8">
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#9b783e]">
                      {project.subtitle}
                    </p>

                    <p className="mt-4 text-sm leading-7 text-[#6d6e66]">
                      {project.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.highlights.map((highlight) => (
                        <ProjectTag key={highlight}>{highlight}</ProjectTag>
                      ))}
                    </div>

                    <span className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#7e622f] transition group-hover:gap-3">
                      Visit Project Website
                      
                    </span>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          PROJECT COMPARISON / DISCOVERY
      ========================================================== */}
      <section className="bg-[#292e29] py-20 text-white sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <SectionLabel light>Choose Your Direction</SectionLabel>

              <h2 className="text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-6xl">
                Looking for the right property opportunity?
              </h2>

              <p className="mt-6 max-w-xl leading-8 text-white/60">
                Every buyer has a different goal. Explore current projects,
                understand the wider Jattari market or speak with us about
                finding a suitable property.
              </p>

              <Link
                to="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#d4b877] px-6 py-3.5 text-sm font-bold text-[#292e29] transition hover:bg-white"
              >
                Talk to Our Team
                
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[26px] border border-white/10 bg-white/[0.06] p-7">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-[#d6bb7d]">
                  <Home size={21} />
                </div>

                <h3 className="mt-6 text-xl font-semibold">
                  I want a property
                </h3>

                <p className="mt-3 text-sm leading-7 text-white/55">
                  Explore residential projects and property options suitable
                  for your requirements.
                </p>

                <Link
                  to="/contact"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#d8bd80]"
                >
                  Find a property
                  
                  
                </Link>
              </div>

              <div className="rounded-[26px] border border-white/10 bg-white/[0.06] p-7">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-[#d6bb7d]">
                  <TrendingUp size={21} />
                </div>

                <h3 className="mt-6 text-xl font-semibold">
                  I want to invest
                </h3>

                <p className="mt-3 text-sm leading-7 text-white/55">
                  Understand the growth corridor and evaluate opportunities
                  based on your own investment criteria.
                </p>

                <Link
                  to="/jattari-growth"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#d8bd80]"
                >
                  Explore growth
                  
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          EXPLORE ALL JATTARI
      ========================================================== */}
      <section
        id="explore"
        className="scroll-mt-20 border-b border-[#ddd3c1] bg-[#eee8dc] py-20 sm:py-28"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="text-center">
            <SectionLabel>Explore All Jattari</SectionLabel>

            <h2 className="mx-auto max-w-3xl text-4xl font-semibold tracking-[-0.04em] sm:text-6xl">
              More than individual projects.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-8 text-[#6b6c64]">
              Jattari is part of a wider regional growth story. Explore
              different types of property opportunities and understand what
              makes the location relevant.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {exploreProperties.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group rounded-[27px] border border-[#d8cfbf] bg-[#f8f5ed] p-6 transition duration-300 hover:-translate-y-2 hover:border-[#b99552] hover:shadow-[0_20px_45px_rgba(72,61,42,0.09)]"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e7dfcf] text-[#8b6b35]">
                      <Icon size={21} strokeWidth={1.7} />
                    </div>

                   
                  </div>

                  <h3 className="mt-7 text-lg font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[#707168]">
                    {item.text}
                  </p>

                  <Link
                    to="/contact"
                    className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-[#876934]"
                  >
                    Explore
                   
                  </Link>
                </div>
              );
            })}
          </div>

          <div className="mt-10 flex justify-center">
            <Link
              to="/jattari-growth"
              className="inline-flex items-center gap-2 rounded-full border border-[#bdaa87] bg-[#f8f5ed] px-6 py-3.5 text-sm font-bold text-[#695532] transition hover:bg-[#292e29] hover:text-white"
            >
              Explore Jattari Growth
             
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================
          HOW TO EVALUATE
      ========================================================== */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <SectionLabel>Before You Buy</SectionLabel>

              <h2 className="text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl">
                Evaluate the complete project story.
              </h2>

              <p className="mt-6 leading-8 text-[#6b6c63]">
                A good property decision requires more than looking at a
                brochure. Consider the location, connectivity, surrounding
                development and documentation before making a purchase.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {projectFactors.map((item) => (
                <div
                  key={item.number}
                  className="rounded-[25px] border border-[#ddd5c7] bg-[#fbf9f4] p-6"
                >
                  <span className="text-xs font-bold tracking-[0.18em] text-[#a17e43]">
                    {item.number}
                  </span>

                  <h3 className="mt-5 text-xl font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[#707168]">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================== */}
      <section className="relative overflow-hidden bg-[#e1d8c8] py-20 sm:py-28">
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border-[50px] border-[#cbbd9f]/30" />
        <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full border-[60px] border-[#c8b998]/20" />

        <div className="relative mx-auto max-w-5xl px-5 text-center sm:px-8">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#292e29] text-[#d5b978]">
            <Sparkles size={23} />
          </div>

          <SectionLabel>Let's Explore</SectionLabel>

          <h2 className="mx-auto max-w-4xl text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-6xl">
            Your next property opportunity could start with one conversation.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-[#686a61]">
            Tell us what you are looking for and we can help you understand
            available projects and property opportunities around Jattari.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#292e29] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#9b773b]"
            >
              Contact Us
              
            </Link>

            <Link
              to="/jattari-growth"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#bbaa87] bg-[#f6f2e9] px-7 py-4 text-sm font-bold text-[#5d513b] transition hover:bg-white"
            >
              Explore Jattari
              <Navigation size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================
          DISCLAIMER
      ========================================================== */}
      <section className="bg-[#f0ebe1] py-7">
        <div className="mx-auto max-w-5xl px-5 text-center sm:px-8">
          <p className="text-xs leading-6 text-[#85857d]">
            Project information, availability and development status may change
            over time. Buyers should independently verify property ownership,
            title, approvals, land use, access, registry records and other
            applicable documents before making any property purchase decision.
          </p>
        </div>
      </section>
    </main>
  );
}

export default Projects;
