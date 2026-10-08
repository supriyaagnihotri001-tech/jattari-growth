import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import corridorImage from "../assets/Images/corridor.png";
import propertyShowcaseImage from "../assets/Images/Anugrahimg2.webp";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Building2,
  CheckCircle2,
  FileCheck2,
  Handshake,
  Home,
  Landmark,
  MapPin,
  Navigation,
  Plane,
  Route,
  SearchCheck,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  WalletCards,
  Workflow,
  PhoneCall,
  Send,
  Eye,
  BriefcaseBusiness,
  Factory,
  Clapperboard,
  GraduationCap,
  Globe,
  Hospital,
  Heart,
  ShoppingBag,
} from "lucide-react";

const trustPoints = [
  {
    icon: ShieldCheck,
    title: "Property Verification",
    text: "Property information and documentation should be reviewed carefully before any purchase decision.",
  },
  {
    icon: FileCheck2,
    title: "Documentation Support",
    text: "Get guidance through property documents, registry-related processes and transaction requirements.",
  },
  {
    icon: Users,
    title: "Expert Guidance",
    text: "Understand location, property type and investment considerations before selecting a property.",
  },
  {
    icon: Handshake,
    title: "Customer-First Approach",
    text: "The focus is on clear communication, practical guidance and support throughout the buying journey.",
  },
];

const services = [
  {
    
    icon: Home,
    title: "Residential Properties",
    text: "Explore residential plot opportunities for families, future homes and long-term property planning.",
  },
  {
   
    icon: Building2,
    title: "Commercial Opportunities",
    text: "Discover commercial property options positioned around emerging roads, markets and growth corridors.",
  },
  {
   
    icon: Landmark,
    title: "Authority & Planned Areas",
    text: "Understand planned development zones and the documentation relevant to property selection.",
  },
  {
    
    icon: WalletCards,
    title: "Investment Guidance",
    text: "Compare locations, connectivity and development drivers before making an investment decision.",
  },
  {
    
    icon: Navigation,
    title: "Site Visit Assistance",
    text: "Get practical support in understanding the location, surroundings, approach roads and available options.",
  },
  {
   
    icon: FileCheck2,
    title: "Buying Support",
    text: "Receive assistance from initial enquiry and property selection through documentation and transaction stages.",
  },
];

const growthDrivers = [
  {
    icon: Plane,
    title: "Noida International Airport",
    text: "A major aviation gateway shaping the development and connectivity story of the wider Jewar region.",
    link: "/jewar-airport",
  },
  {
    icon: Clapperboard,
    title: "Film City",
    text: "A planned media and entertainment ecosystem adding another major development driver to the region.",
    link: "/about",
  },
  {
    icon: Route,
    title: "Yamuna Expressway",
    text: "A major regional transport corridor connecting Jewar with Noida, Greater Noida and Agra.",
    link: "/jewar-airport",
  },
  {
    icon: Factory,
    title: "Industrial Growth",
    text: "Industrial, logistics and commercial development are expanding the economic footprint around the corridor.",
    link: "/jattari-growth",
  },
];

const buyerTypes = [
  {
    icon: Users,
    title: "Homebuyers",
    text: "For families looking for a location to build a future home or plan their next property move.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Investors",
    text: "For buyers evaluating property through location, infrastructure and long-term development factors.",
  },
  {
    icon: ShieldCheck,
    title: "Defence Personnel",
    text: "Dedicated assistance for serving and retired defence personnel exploring property opportunities.",
  },
  {
    icon: Globe,
    title: "NRIs & Remote Buyers",
    text: "Location guidance and documentation support for buyers who cannot visit frequently.",
  },
];

const processSteps = [
  {
    
    title: "Tell Us Your Requirement",
    text: "Share your preferred location, property type, budget and purpose.",
  },
  {
    
    title: "Shortlist Options",
    text: "Compare suitable properties according to location and requirement.",
  },
  {
    
    title: "Visit & Verify",
    text: "Visit the site and review the surrounding area and available documentation.",
  },
  {
    
    title: "Documentation",
    text: "Review the relevant property documents and transaction requirements.",
  },
  {
  
    title: "Move Forward",
    text: "Proceed with the property that matches your requirements after due verification.",
  },
];

function Aboutus() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <main className="overflow-hidden bg-[#F5F2EA] text-[#272922]">

      {/* =========================================================
          ABOUT INTRO
      ========================================================== */}
      <section className="bg-white px-5 pb-20 pt-28 sm:px-8 lg:px-12 lg:pb-28 lg:pt-36">
        <div className="mx-auto grid max-w-[1400px] items-center gap-12 lg:grid-cols-[0.95fr_1.25fr] lg:gap-16">
          <div className="grid grid-cols-[1.05fr_0.95fr] items-center gap-4 sm:gap-6">
            <motion.img
              src={corridorImage}
              alt="Open land and regional road in the Jewar growth corridor"
              initial={{ opacity: 0, x: 72 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mt-14 h-[300px] w-full rounded-[1.5rem] object-cover sm:mt-16 sm:h-[430px] sm:rounded-[2rem]"
            />

            <div className="flex flex-col gap-4 sm:gap-6">
              <motion.img
                src={propertyShowcaseImage}
                alt="Anugrah Homes residential entrance"
                initial={{ opacity: 0, y: -64 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
                className="h-[205px] w-full rounded-[1.5rem] object-cover sm:h-[300px] sm:rounded-[2rem]"
              />

              <div className="rounded-[1.5rem] border border-[#DDD6C8] bg-white p-4 shadow-[0_16px_45px_rgba(39,41,34,0.06)] sm:rounded-[2rem] sm:p-6">
                <p className="text-center text-3xl font-black tracking-tight text-[#D9AA18] sm:text-5xl">
                  Local
                </p>
                <div className="mx-auto mt-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#F5F2EA] text-[#C87550] sm:h-12 sm:w-12">
                  <BadgeCheck size={22} />
                </div>
                <p className="mt-3 text-center text-xs font-bold text-[#272922] sm:text-sm">
                  Guidance you can trust
                </p>
                <p className="mt-1 text-center text-[10px] leading-4 text-[#77786D] sm:text-xs">
                  Support from search to site visit
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="mb-4 flex items-center gap-3 text-sm font-bold uppercase tracking-wide text-[#D9AA18]">
              About Us
              <span className="h-px w-12 bg-[#C87550]" />
            </div>

            <h1 className="max-w-3xl text-4xl font-black leading-[1.08] tracking-[-0.05em] text-[#202027] sm:text-5xl lg:text-6xl">
              Your Trusted Property Partner in Jewar
            </h1>

            <p className="mt-6 text-base leading-7 text-[#777C89] sm:text-lg sm:leading-8">
              We help homebuyers and investors explore property opportunities
              across Jewar and Jattari with clear information, local context and
              practical guidance at every step.
            </p>

            <p className="mt-5 text-base leading-7 text-[#777C89] sm:text-lg sm:leading-8">
              From residential plots and communities to emerging commercial
              options, we help you compare locations, understand connectivity
              and plan a site visit that fits your requirements.
            </p>

            <p className="mt-5 text-base leading-7 text-[#777C89] sm:text-lg sm:leading-8">
              Our local perspective covers the wider Jewar growth corridor,
              including Noida International Airport, the Yamuna Expressway and
              planned regional developments. We encourage informed decisions,
              careful document review and transparent communication throughout
              your property journey.
            </p>

            <div className="mt-8 grid gap-5 border-b border-[#DDD6C8] pb-7 sm:grid-cols-2 sm:gap-8">
              <div className="flex items-center gap-3 text-[#565963]">
                <Building2 className="shrink-0 text-[#C87550]" size={30} />
                <span className="font-bold">Property options across the corridor</span>
              </div>
              <div className="flex items-center gap-3 text-[#565963]">
                <Users className="shrink-0 text-[#C87550]" size={30} />
                <span className="font-bold">Experienced local guidance</span>
              </div>
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <button
                onClick={() => scrollToSection("who-we-are")}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#272922] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#C87550]"
              >
                Discover More
                <ArrowRight size={17} />
              </button>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#D5C8B7] px-6 py-3.5 text-sm font-bold text-[#272922] transition hover:border-[#C87550] hover:text-[#B95F3D]"
              >
                Talk to Our Team
                <ArrowUpRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* =========================================================
          QUICK NAV
      ========================================================== */}
      <section className="border-y border-[#DDD6C8] bg-white/60">

        <div className="mx-auto flex max-w-[1400px] flex-wrap justify-center gap-2 px-5 py-4 sm:gap-3 lg:px-12">

          {[
            ["Who We Are", "who-we-are"],
            ["What We Offer", "services"],
            ["Why Us", "why-us"],
            ["Growth Region", "growth-region"],
            ["Process", "process"],
          ].map(([label, id]) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className="rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#65675E] transition hover:bg-[#272922] hover:text-white"
            >
              {label}
            </button>
          ))}

        </div>

      </section>

      {/* =========================================================
          WHO WE ARE
          Gate opening reveal animation
      ========================================================== */}
      <section
        id="who-we-are"
        className="scroll-mt-20 px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
      >
        <div className="mx-auto max-w-[1400px]">
          {/* Heading */}
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-black uppercase tracking-[0.25em] text-[#C87550]">
              Who We Are
            </p>

            <h2 className="mt-4 text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Real estate guidance
              <span className="block text-[#8C6E3F]">
                built around clarity.
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#77786D] sm:text-lg">
              Step inside our approach — where local knowledge, property
              understanding and practical guidance come together.
            </p>
          </div>

          {/* =====================================================
              GATE REVEAL
          ====================================================== */}
          <div className="relative mx-auto mt-14 h-[620px] max-w-[1180px] overflow-hidden rounded-[2rem] bg-[#1F211D] shadow-[0_30px_80px_rgba(39,41,34,0.18)] sm:h-[680px] lg:h-[720px]">
            {/* Content behind the closed gate */}
            <div className="absolute inset-0 bg-[#E9E4D8]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#fff8e9_0%,#e9e4d8_48%,#d9d3c5_100%)]" />

              <div className="relative z-10 flex h-full flex-col justify-center px-6 py-10 sm:px-10 lg:px-16">
                <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
                  {/* Image 1 */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.94, y: 35 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{ duration: 0.8, delay: 0.55, ease: "easeOut" }}
                    className="relative overflow-hidden rounded-[2rem] border-4 border-white/70 shadow-2xl"
                  >
                    <img
                      src={corridorImage}
                      alt="Jewar and Jattari growth corridor"
                      className="h-[260px] w-full object-cover sm:h-[330px] lg:h-[390px]"
                    />

                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-5 pt-16 text-white">
                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/70">
                        Our region
                      </p>
                      <p className="mt-1 text-xl font-black">
                        Jewar & Jattari Growth Corridor
                      </p>
                    </div>
                  </motion.div>

                  {/* Image 2 + content */}
                  <div className="grid gap-5 sm:grid-cols-[0.9fr_1.1fr] lg:grid-cols-1">
                    <motion.div
                      initial={{ opacity: 0, x: 35 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.35 }}
                      transition={{ duration: 0.8, delay: 0.72, ease: "easeOut" }}
                      className="overflow-hidden rounded-[2rem] border-4 border-white/70 shadow-xl"
                    >
                      <img
                        src={propertyShowcaseImage}
                        alt="Anugrah Homes residential entrance"
                        className="h-[190px] w-full object-cover sm:h-[250px] lg:h-[220px]"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 25 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.35 }}
                      transition={{ duration: 0.7, delay: 0.85, ease: "easeOut" }}
                      className="rounded-[2rem] border border-[#D5CCBC] bg-white/85 p-6 shadow-lg backdrop-blur-sm"
                    >
                      <p className="text-xs font-black uppercase tracking-[0.2em] text-[#C87550]">
                        Inside our approach
                      </p>

                      <p className="mt-3 text-xl font-black text-[#272922]">
                        Better information.
                        <br />
                        Better decisions.
                      </p>

                      <p className="mt-3 text-sm leading-6 text-[#77786D]">
                        We help buyers understand location, property categories,
                        connectivity and the practical factors that matter before
                        making a decision.
                      </p>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>

            {/* Gate top branding */}
            <motion.div
              initial={{ opacity: 1 }}
              whileInView={{ opacity: 0, y: -20 }}
              viewport={{ once: true, amount: 0.45 }}
              transition={{ duration: 0.45, delay: 1.15 }}
              className="pointer-events-none absolute left-1/2 top-8 z-40 -translate-x-1/2 text-center text-white"
            >
              <div className="rounded-full border border-white/25 bg-black/20 px-5 py-2 backdrop-blur-sm">
                <span className="text-[10px] font-black uppercase tracking-[0.3em]">
                  Discover More
                </span>
              </div>
            </motion.div>

            {/* LEFT GATE DOOR */}
            <motion.div
              initial={{ x: "0%" }}
              whileInView={{ x: "-100%" }}
              viewport={{ once: true, amount: 0.45 }}
              transition={{
                duration: 1.55,
                delay: 0.25,
                ease: [0.76, 0, 0.24, 1],
              }}
              className="absolute inset-y-0 left-0 z-30 w-1/2 origin-left overflow-hidden border-r border-black/30 bg-[#5A4937] shadow-[12px_0_35px_rgba(0,0,0,0.28)]"
            >
              {/* Gate texture */}
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.08),transparent_18%,rgba(0,0,0,0.18)_50%,transparent_82%,rgba(255,255,255,0.06))]" />

              {/* Gate frame */}
              <div className="absolute inset-4 rounded-[1.5rem] border-2 border-[#C5A66C]/60 sm:inset-7">
                <div className="absolute inset-3 rounded-xl border border-[#D6BC88]/30" />

                <div className="absolute inset-x-0 top-1/2 h-px bg-[#D6BC88]/30" />
                <div className="absolute left-1/2 top-0 h-full w-px bg-[#D6BC88]/25" />

                <div className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-[#D6BC88]/50 bg-[#4A3B2D]/80" />
              </div>

              {/* Door handle */}
              <div className="absolute right-5 top-1/2 z-10 h-16 w-4 -translate-y-1/2 rounded-full bg-[#D9AA18] shadow-lg sm:right-8">
                <div className="absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FFF1B8]" />
              </div>

              <div className="absolute bottom-10 left-6 right-6 text-white sm:left-10 sm:right-10">
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/55">
                  Anugrah Homes
                </p>
                <p className="mt-2 text-2xl font-black sm:text-4xl">
                  Who
                </p>
              </div>
            </motion.div>

            {/* RIGHT GATE DOOR */}
            <motion.div
              initial={{ x: "0%" }}
              whileInView={{ x: "100%" }}
              viewport={{ once: true, amount: 0.45 }}
              transition={{
                duration: 1.55,
                delay: 0.25,
                ease: [0.76, 0, 0.24, 1],
              }}
              className="absolute inset-y-0 right-0 z-30 w-1/2 origin-right overflow-hidden border-l border-black/30 bg-[#5A4937] shadow-[-12px_0_35px_rgba(0,0,0,0.28)]"
            >
              {/* Gate texture */}
              <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_18%,rgba(0,0,0,0.18)_50%,transparent_82%,rgba(255,255,255,0.07))]" />

              {/* Gate frame */}
              <div className="absolute inset-4 rounded-[1.5rem] border-2 border-[#C5A66C]/60 sm:inset-7">
                <div className="absolute inset-3 rounded-xl border border-[#D6BC88]/30" />

                <div className="absolute inset-x-0 top-1/2 h-px bg-[#D6BC88]/30" />
                <div className="absolute left-1/2 top-0 h-full w-px bg-[#D6BC88]/25" />

                <div className="absolute inset-x-5 top-1/2 h-1 -translate-y-1/2 rounded-full bg-[#D9AA18]/60 blur-[1px]" />
              </div>

              <div className="absolute bottom-10 left-6 right-6 text-right text-white sm:left-10 sm:right-10">
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/55">
                  Property Guidance
                </p>
                <p className="mt-2 text-2xl font-black sm:text-4xl">
                  We Are
                </p>
              </div>
            </motion.div>

            {/* Center gate line / glow */}
            <motion.div
              initial={{ opacity: 1 }}
              whileInView={{ opacity: 0 }}
              viewport={{ once: true, amount: 0.45 }}
              transition={{ duration: 0.45, delay: 1.1 }}
              className="pointer-events-none absolute left-1/2 top-1/2 z-40 h-[82%] w-px -translate-x-1/2 -translate-y-1/2 bg-[#D9AA18]/70 shadow-[0_0_30px_rgba(217,170,24,0.5)]"
            />

            {/* Small helper text */}
            <motion.p
              initial={{ opacity: 1, y: 0 }}
              whileInView={{ opacity: 0, y: 15 }}
              viewport={{ once: true, amount: 0.45 }}
              transition={{ duration: 0.45, delay: 1.05 }}
              className="pointer-events-none absolute bottom-6 left-1/2 z-40 -translate-x-1/2 text-center text-[10px] font-bold uppercase tracking-[0.25em] text-white/60"
            >
              Opening our story
            </motion.p>
          </div>

          {/* Information cards after the reveal */}
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="rounded-3xl border border-[#DDD6C8] bg-white p-6"
            >
              <SearchCheck size={24} className="text-[#C87550]" />

              <h3 className="mt-5 text-lg font-black">
                Verify Before You Decide
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#77786D]">
                Location and documentation checks are an important part of
                responsible property buying.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="rounded-3xl border border-[#DDD6C8] bg-white p-6"
            >
              <Eye size={24} className="text-[#C87550]" />

              <h3 className="mt-5 text-lg font-black">
                Understand the Bigger Picture
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#77786D]">
                Look beyond the plot and understand roads, infrastructure,
                development and surrounding activity.
              </p>
            </motion.div>
          </div>
        </div>
      </section>


      {/* =========================================================
          TRUST STATS
      ========================================================== */}
      <section className="px-5 pb-20 sm:px-8 lg:px-12">

        <div className="mx-auto grid max-w-[1400px] gap-4 sm:grid-cols-2 lg:grid-cols-4">

          {[
            {
              value: "100+",
              label: "Happy Families",
              icon: Users,
            },
            {
              value: "300+",
              label: "Verified Properties",
              icon: BadgeCheck,
            },
            {
              value: "500+",
              label: "Projects Completed",
              icon: Building2,
            },
            {
              value: "99%",
              label: "Customer Satisfaction",
              icon: Heart,
            },
          ].map((item, index) => {

            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="group rounded-[28px] border border-[#DDD5C6] bg-white p-7 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >

                <div className="flex items-start justify-between">

                  <div className="rounded-2xl bg-[#F1E5D8] p-3 text-[#C87550]">
                    <Icon size={22} />
                  </div>

                  <span className="text-xs font-black text-[#B7AE9D]">
                    0{index + 1}
                  </span>

                </div>

                <p className="mt-9 text-3xl font-black">
                  {item.value}
                </p>

                <p className="mt-2 text-sm text-[#77786D]">
                  {item.label}
                </p>

              </div>
            );
          })}

        </div>

      </section>

      {/* =========================================================
          TRUST FEATURES
      ========================================================== */}
      <section
        id="why-us"
        className="scroll-mt-20 bg-[#272922] px-5 py-20 text-white sm:px-8 lg:px-12 lg:py-28"
      >

        <div className="mx-auto max-w-[1400px]">

          <div className="max-w-3xl">

            <p className="text-xs font-black uppercase tracking-[0.25em] text-[#D9A47D]">
              Why Choose Our Approach
            </p>

            <h2 className="mt-4 text-4xl font-black leading-tight tracking-tight sm:text-5xl">
              Property decisions
              <span className="block text-[#D9A47D]">
                need more than a brochure.
              </span>
            </h2>

            <p className="mt-6 text-base leading-7 text-white/55 sm:text-lg">
              A good property experience should combine location knowledge,
              documentation awareness, communication and post-enquiry support.
            </p>

          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">

            {trustPoints.map((item, index) => {

              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group rounded-[28px] border border-white/10 bg-white/[0.05] p-6 transition duration-300 hover:-translate-y-2 hover:bg-white/[0.09]"
                >

                  <div className="flex items-start justify-between">

                    <div className="rounded-2xl bg-white/10 p-3">
                      <Icon size={22} />
                    </div>

                    <span className="text-xs font-black text-white/25">
                      0{index + 1}
                    </span>

                  </div>

                  <h3 className="mt-8 text-xl font-black">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-white/50">
                    {item.text}
                  </p>

                </div>
              );
            })}

          </div>

        </div>

      </section>

      {/* =========================================================
          SERVICES
      ========================================================== */}
      <section
        id="services"
        className="scroll-mt-20 px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
      >

        <div className="mx-auto max-w-[1400px]">

          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">

            <div>

              <p className="text-xs font-black uppercase tracking-[0.25em] text-[#C87550]">
                What We Offer
              </p>

              <h2 className="mt-4 text-4xl font-black leading-tight transition-transform duration-300 hover:-translate-y-1 sm:text-5xl">
                One place for
                <span className="block text-[#8C6E3F]">
                  multiple property needs.
                </span>
              </h2>

            </div>

            <p className="max-w-2xl text-base leading-7 text-[#6B6D64] lg:justify-self-end lg:text-lg">
              From residential plots and commercial opportunities to site
              visits and documentation guidance, the property journey can be
              supported from multiple angles.
            </p>

          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

            {services.map((item) => {

              const Icon = item.icon;

              return (
                <div
                  key={item.number}
                  className="group relative overflow-hidden rounded-[28px] border border-[#DDD6C8] bg-white p-7 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >

                  <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#F3E8DB] transition-transform duration-500 group-hover:scale-150" />

                  <div className="relative">

                    <div className="flex items-start justify-between">

                      <div className="rounded-2xl bg-[#F3E8DB] p-3 text-[#C87550]">
                        <Icon size={22} />
                      </div>

                      <span className="text-sm font-black text-[#B6AD9B]">
                        {item.number}
                      </span>

                    </div>

                    <h3 className="mt-10 text-xl font-black">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-[#707168]">
                      {item.text}
                    </p>

                  </div>

                </div>
              );
            })}

          </div>

        </div>

      </section>

      {/* =========================================================
          GROWTH REGION
      ========================================================== */}
      <section
        id="growth-region"
        className="relative isolate overflow-hidden scroll-mt-20 bg-[#E7E5D9] px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
      >

        <img
          src={corridorImage}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover opacity-[0.28]"
        />
        <div className="pointer-events-none absolute inset-0 z-0 bg-[#E7E5D9]/35" />

        <div className="relative z-10 mx-auto max-w-[1400px]">

          <div className="max-w-3xl">

            <p className="text-xs font-black uppercase tracking-[0.25em] text-[#9B6A43]">
              The Region
            </p>

            <h2 className="mt-4 text-4xl font-black leading-tight tracking-tight sm:text-5xl">
              Why the Jewar–Jattari
              <span className="text-[#C87550]">
                {" "}corridor matters.
              </span>
            </h2>

            <p className="mt-6 text-base leading-7 text-[#686A61] sm:text-lg">
              The property story here is connected to a larger regional
              transformation involving aviation, highways, industry,
              entertainment, education and commercial development.
            </p>

          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">

            {growthDrivers.map((item, index) => {

              const Icon = item.icon;

              return (
                <Link
                  key={item.title}
                  to={item.link}
                  className="group rounded-[28px] border border-[#D3CCBC] bg-[#F8F6F0] p-6 transition duration-300 hover:-translate-y-2 hover:bg-white hover:shadow-xl"
                >

                  <div className="flex items-center justify-between">

                    <div className="rounded-2xl bg-[#272922] p-3 text-white">
                      <Icon size={21} />
                    </div>

                  

                  </div>

                  <h3 className="mt-8 text-xl font-black">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#74766D]">
                    {item.text}
                  </p>

                  <div className="mt-6 flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#9A6E48]">
                    Explore
                    
                  </div>

                </Link>
              );
            })}

          </div>

        </div>

      </section>

      {/* =========================================================
          BUYER TYPES
      ========================================================== */}
      <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">

        <div className="mx-auto max-w-[1400px]">

          <div className="text-center">

            <p className="text-xs font-black uppercase tracking-[0.25em] text-[#C87550]">
              Who We Help
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
              Different buyers.
              <span className="text-[#8C6E3F]">
                {" "}Different goals.
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#77786D]">
              Property requirements are different for every buyer. The right
              guidance starts by understanding what you actually need.
            </p>

          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            {buyerTypes.map((item) => {

              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-[28px] border border-[#DED7CA] bg-white p-7 text-center transition hover:-translate-y-1 hover:shadow-lg"
                >

                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F1E4D8] text-[#C87550]">
                    <Icon size={23} />
                  </div>

                  <h3 className="mt-6 text-lg font-black">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#74766D]">
                    {item.text}
                  </p>

                </div>
              );
            })}

          </div>

        </div>

      </section>

      {/* =========================================================
          VISION
      ========================================================== */}
      <section className="px-5 pb-20 sm:px-8 lg:px-12 lg:pb-28">

        <div className="mx-auto overflow-hidden rounded-[40px] bg-[#D9E0D2]">

          <div className="grid lg:grid-cols-[1fr_0.8fr]">

            <div className="p-8 sm:p-12 lg:p-16">

              <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-xs font-black uppercase tracking-wider text-[#66705E]">
                <Target size={14} />
                Vision & Commitment
              </div>

              <h2 className="mt-6 text-4xl font-black leading-tight tracking-tight sm:text-5xl">
                Build trust first.
                <span className="block text-[#7C6242]">
                  Build value next.
                </span>
              </h2>

              <p className="mt-6 max-w-xl text-base leading-7 text-[#62685B]">
                Our long-term vision is to create a property experience where
                buyers can make decisions with better information, clearer
                communication and practical support.
              </p>

              <div className="mt-8 space-y-3">

                {[
                  "Transparent documentation guidance",
                  "Customer-first communication",
                  "Location-focused property advice",
                  "Dedicated after-sales support",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-xl bg-white/60 p-3 text-sm font-bold"
                  >
                    <CheckCircle2
                      size={17}
                      className="text-[#758267]"
                    />
                    {item}
                  </div>
                ))}

              </div>

            </div>

            <div className="relative min-h-[420px] overflow-hidden bg-[#AEBBA7]">

              <img
                src="/Images/Heroimg.png"
                alt="Future growth around Jewar and Jattari"
                className="absolute inset-0 h-full w-full object-cover opacity-60 mix-blend-multiply"
              />

              <div className="absolute inset-0 bg-gradient-to-br from-[#7D8B72]/60 to-[#272922]/70" />

              <div className="absolute bottom-8 left-8 right-8">

                <div className="rounded-3xl border border-white/20 bg-white/10 p-6 text-white backdrop-blur-md">

                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/60">
                    Our focus
                  </p>

                  <p className="mt-3 text-2xl font-black">
                    Better information.
                    <br />
                    Better decisions.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =========================================================
          PROCESS
      ========================================================== */}
      <section
        id="process"
        className="scroll-mt-20 bg-[#eee8dc] px-5 py-20 text-[#292923] sm:px-8 lg:px-12 lg:py-28"
      >

        <div className="mx-auto max-w-[1400px]">

          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">

            <div>

              <p className="text-xs font-black uppercase tracking-[0.25em] text-[#B95F3D]">
                Simple Process
              </p>

              <h2 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">
                From first
                <span className="text-[#B95F3D]">
                  {" "}conversation
                </span>
                <br />
                to property decision.
              </h2>

              <p className="mt-6 max-w-md text-sm leading-6 text-[#6b6c65]">
                A structured process helps buyers understand the property,
                location and documentation before moving forward.
              </p>

            </div>

            <div className="grid gap-3">

              {processSteps.map((step, index) => (

                <div
                  key={step.title}
                  className="group flex gap-5 rounded-2xl border border-[#ded5c5] bg-[#f8f5ed] p-5 text-[#292923] shadow-sm transition hover:-translate-y-0.5 hover:bg-white hover:shadow-md"
                >

                  <span className="mt-0.5 w-8 shrink-0 text-sm font-black tracking-wider text-[#B95F3D]">
                    0{index + 1}
                  </span>

                  <div>

                    <h3 className="text-lg font-black">
                      {step.title}
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-[#6b6c65]">
                      {step.text}
                    </p>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>


    </main>
  );
}

export default Aboutus;
