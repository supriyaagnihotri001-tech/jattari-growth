import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Building2,
  CheckCircle2,
  ChevronDown,
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
    number: "01",
    icon: Home,
    title: "Residential Properties",
    text: "Explore residential plot opportunities for families, future homes and long-term property planning.",
  },
  {
    number: "02",
    icon: Building2,
    title: "Commercial Opportunities",
    text: "Discover commercial property options positioned around emerging roads, markets and growth corridors.",
  },
  {
    number: "03",
    icon: Landmark,
    title: "Authority & Planned Areas",
    text: "Understand planned development zones and the documentation relevant to property selection.",
  },
  {
    number: "04",
    icon: WalletCards,
    title: "Investment Guidance",
    text: "Compare locations, connectivity and development drivers before making an investment decision.",
  },
  {
    number: "05",
    icon: Navigation,
    title: "Site Visit Assistance",
    text: "Get practical support in understanding the location, surroundings, approach roads and available options.",
  },
  {
    number: "06",
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
    link: "/jattari",
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
    number: "01",
    title: "Tell Us Your Requirement",
    text: "Share your preferred location, property type, budget and purpose.",
  },
  {
    number: "02",
    title: "Shortlist Options",
    text: "Compare suitable properties according to location and requirement.",
  },
  {
    number: "03",
    title: "Visit & Verify",
    text: "Visit the site and review the surrounding area and available documentation.",
  },
  {
    number: "04",
    title: "Documentation",
    text: "Review the relevant property documents and transaction requirements.",
  },
  {
    number: "05",
    title: "Move Forward",
    text: "Proceed with the property that matches your requirements after due verification.",
  },
];

const faqs = [
  {
    question: "What type of properties can I explore?",
    answer:
      "The platform can be used to explore residential plots, commercial opportunities and other property options in the Jewar and Jattari growth region.",
  },
  {
    question: "Why is the Jewar region attracting attention?",
    answer:
      "The region is experiencing major infrastructure and economic development around Noida International Airport, Yamuna Expressway, Film City and related industrial and commercial corridors.",
  },
  {
    question: "Do you provide site visit assistance?",
    answer:
      "Yes. Visitors can submit an enquiry to discuss suitable properties and arrange a site visit based on their requirements.",
  },
  {
    question: "Can I get documentation guidance?",
    answer:
      "Yes. Documentation and transaction support can be discussed with the property team. Buyers should independently verify all legal and ownership documents before purchasing.",
  },
  {
    question: "Is every property automatically legally approved?",
    answer:
      "No property should be assumed to be approved solely from a website listing. Buyers should verify ownership, land use, authority status, registry records and other applicable documents before making a purchase.",
  },
];

function Aboutus() {
  const [openFaq, setOpenFaq] = useState(0);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <main className="overflow-hidden bg-[#F5F2EA] text-[#272922]">

      {/* =========================================================
          HERO
      ========================================================== */}
      <section className="relative overflow-hidden pt-24 lg:pt-28">

        {/* Decorative background */}
        <div className="absolute -right-40 top-10 h-[500px] w-[500px] rounded-full bg-[#DCE3D4] opacity-70 blur-3xl" />

        <div className="absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full bg-[#EBD7C8] opacity-60 blur-3xl" />

        <div className="relative mx-auto grid max-w-[1400px] items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-12 lg:py-20">

          {/* Hero Content */}
          <div>

            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-[#C8B99A] bg-white/60 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#806331] backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-[#C87550]" />
              About Our Approach
            </div>

            <h1 className="max-w-3xl text-5xl font-black leading-[0.95] tracking-[-0.05em] sm:text-6xl lg:text-7xl xl:text-[84px]">
              Property.
              <span className="block text-[#C87550]">
                People.
              </span>
              <span className="block">
                Possibilities.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-7 text-[#66685F] sm:text-lg">
              A property journey should begin with the right information,
              location understanding and documentation — not just a sales
              conversation.
            </p>

            <p className="mt-4 max-w-xl text-sm leading-6 text-[#77786D]">
              Our focus is to connect buyers with property opportunities across
              the rapidly developing Jewar–Jattari region while keeping
              transparency and informed decision-making at the centre.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <button
                onClick={() => scrollToSection("who-we-are")}
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#272922] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#C87550]"
              >
                Discover More
                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-[#C8B99A] bg-white/60 px-6 py-3.5 text-sm font-bold transition hover:border-[#C87550] hover:text-[#C87550]"
              >
                Talk to Our Team
                <ArrowUpRight size={17} />
              </Link>
            </div>

          </div>

          {/* Hero Visual */}
          <div className="relative">

            <div className="absolute -right-4 -top-5 z-20 rounded-2xl border border-white/80 bg-white/90 p-4 shadow-xl backdrop-blur sm:right-5">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-[#F1E6D8] p-3 text-[#C87550]">
                  <BadgeCheck size={21} />
                </div>

                <div>
                  <p className="text-xs font-black uppercase tracking-wider">
                    Buyer First
                  </p>

                  <p className="text-xs text-[#77786D]">
                    Transparency matters
                  </p>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[42px] border-[10px] border-white shadow-[0_30px_80px_rgba(39,41,34,0.16)]">

              <img
                src="/Images/Heroimg.png"
                alt="Jewar and Jattari real estate growth region"
                className="h-[470px] w-full object-cover sm:h-[570px]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#272922]/80 via-transparent to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">

                <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/70">
                  Jewar • Jattari • Growth Corridor
                </p>

                <h2 className="mt-2 max-w-lg text-2xl font-black text-white sm:text-3xl">
                  Helping buyers understand the opportunity before they invest.
                </h2>

              </div>

            </div>

            {/* Floating card */}
            <div className="absolute -bottom-7 -left-3 max-w-[260px] rounded-2xl border border-[#E4DCCF] bg-white p-4 shadow-2xl sm:-left-8">
              <div className="flex gap-3">

                <div className="rounded-xl bg-[#DCE3D4] p-3">
                  <MapPin size={20} />
                </div>

                <div>
                  <p className="text-xs font-black uppercase tracking-wider text-[#8A7A5A]">
                    Focus Region
                  </p>

                  <p className="mt-1 text-sm font-bold">
                    Jewar & Jattari Growth Belt
                  </p>
                </div>

              </div>
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
            ["FAQ", "faq"],
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
      ========================================================== */}
      <section
        id="who-we-are"
        className="scroll-mt-20 px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
      >

        <div className="mx-auto grid max-w-[1400px] gap-14 lg:grid-cols-[0.75fr_1.25fr]">

          <div>

            <p className="text-xs font-black uppercase tracking-[0.25em] text-[#C87550]">
              Who We Are
            </p>

            <h2 className="mt-4 text-4xl font-black leading-tight tracking-tight sm:text-5xl">
              Real estate guidance
              <span className="block text-[#8C6E3F]">
                built around clarity.
              </span>
            </h2>

          </div>

          <div>

            <p className="text-lg leading-8 text-[#62645B]">
              We focus on property opportunities in and around the Jewar and
              Jattari growth corridor, helping buyers understand locations,
              property categories, connectivity and the factors that matter
              before making a decision.
            </p>

            <p className="mt-6 text-base leading-7 text-[#77786D]">
              Our approach is centred around transparent communication,
              property information, site-level understanding and practical
              buying support. Whether someone is looking for a future home,
              investment property or a commercial opportunity, the objective is
              to make the property journey easier to understand.
            </p>

            <div className="mt-9 grid gap-4 sm:grid-cols-2">

              <div className="rounded-3xl border border-[#DDD6C8] bg-white p-6">
                <SearchCheck
                  size={24}
                  className="text-[#C87550]"
                />

                <h3 className="mt-5 text-lg font-black">
                  Verify Before You Decide
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#77786D]">
                  Location and documentation checks are an important part of
                  responsible property buying.
                </p>
              </div>

              <div className="rounded-3xl border border-[#DDD6C8] bg-white p-6">
                <Eye
                  size={24}
                  className="text-[#C87550]"
                />

                <h3 className="mt-5 text-lg font-black">
                  Understand the Bigger Picture
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#77786D]">
                  Look beyond the plot and understand roads, infrastructure,
                  development and surrounding activity.
                </p>
              </div>

            </div>

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

              <h2 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">
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
        className="scroll-mt-20 bg-[#E7E5D9] px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
      >

        <div className="mx-auto max-w-[1400px]">

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

                    <ArrowUpRight
                      size={18}
                      className="text-[#AAA18F] transition group-hover:text-[#C87550]"
                    />

                  </div>

                  <h3 className="mt-8 text-xl font-black">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#74766D]">
                    {item.text}
                  </p>

                  <div className="mt-6 flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#9A6E48]">
                    Explore
                    <ArrowRight
                      size={14}
                      className="transition-transform group-hover:translate-x-1"
                    />
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
        className="scroll-mt-20 bg-[#272922] px-5 py-20 text-white sm:px-8 lg:px-12 lg:py-28"
      >

        <div className="mx-auto max-w-[1400px]">

          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">

            <div>

              <p className="text-xs font-black uppercase tracking-[0.25em] text-[#D9A47D]">
                Simple Process
              </p>

              <h2 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">
                From first
                <span className="text-[#D9A47D]">
                  {" "}conversation
                </span>
                <br />
                to property decision.
              </h2>

              <p className="mt-6 max-w-md text-sm leading-6 text-white/50">
                A structured process helps buyers understand the property,
                location and documentation before moving forward.
              </p>

            </div>

            <div className="grid gap-3">

              {processSteps.map((step, index) => (

                <div
                  key={step.number}
                  className="group flex gap-5 rounded-2xl border border-white/10 bg-white/[0.05] p-5 transition hover:bg-white/[0.09]"
                >

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#D9A47D] font-black text-[#272922]">
                    {step.number}
                  </div>

                  <div>

                    <h3 className="text-lg font-black">
                      {step.title}
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-white/50">
                      {step.text}
                    </p>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>

      {/* =========================================================
          FAQ
      ========================================================== */}
      <section
        id="faq"
        className="scroll-mt-20 px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
      >

        <div className="mx-auto grid max-w-[1100px] gap-12 lg:grid-cols-[0.7fr_1.3fr]">

          <div>

            <p className="text-xs font-black uppercase tracking-[0.25em] text-[#C87550]">
              FAQ
            </p>

            <h2 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">
              Common
              <span className="block text-[#8C6E3F]">
                questions.
              </span>
            </h2>

            <p className="mt-5 text-sm leading-6 text-[#77786D]">
              Some useful things to understand before exploring property
              opportunities in the region.
            </p>

          </div>

          <div className="space-y-3">

            {faqs.map((faq, index) => {

              const isOpen = openFaq === index;

              return (
                <div
                  key={faq.question}
                  className={`overflow-hidden rounded-2xl border transition ${
                    isOpen
                      ? "border-[#C8B99A] bg-white shadow-sm"
                      : "border-[#DDD6C8] bg-white/50"
                  }`}
                >

                  <button
                    onClick={() =>
                      setOpenFaq(isOpen ? -1 : index)
                    }
                    className="flex w-full items-center justify-between gap-4 p-5 text-left"
                  >

                    <span className="text-sm font-black sm:text-base">
                      {faq.question}
                    </span>

                    <ChevronDown
                      size={18}
                      className={`shrink-0 transition-transform ${
                        isOpen
                          ? "rotate-180 text-[#C87550]"
                          : ""
                      }`}
                    />

                  </button>

                  <div
                    className={`grid transition-all duration-300 ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >

                    <div className="overflow-hidden">

                      <p className="px-5 pb-5 text-sm leading-6 text-[#707168]">
                        {faq.answer}
                      </p>

                    </div>

                  </div>

                </div>
              );
            })}

          </div>

        </div>

      </section>

      {/* =========================================================
          CONTACT / LEAD CTA
      ========================================================== */}
      <section className="px-5 pb-20 sm:px-8 lg:px-12 lg:pb-28">

        <div className="mx-auto max-w-[1400px]">

          <div className="overflow-hidden rounded-[40px] bg-[#272922] text-white">

            <div className="grid lg:grid-cols-[0.85fr_1.15fr]">

              <div className="p-8 sm:p-12 lg:p-16">

                <p className="text-xs font-black uppercase tracking-[0.25em] text-[#D9A47D]">
                  Let's Connect
                </p>

                <h2 className="mt-5 text-4xl font-black leading-tight sm:text-5xl">
                  Looking for property
                  <span className="block text-[#D9A47D]">
                    in the growth corridor?
                  </span>
                </h2>

                <p className="mt-6 max-w-md text-sm leading-6 text-white/55">
                  Tell us what you are looking for and start a conversation
                  about suitable property options in Jewar, Jattari and nearby
                  growth areas.
                </p>

                <div className="mt-8 space-y-3 text-sm text-white/70">

                  <div className="flex items-center gap-3">
                    <MapPin size={17} />
                    Jewar & Jattari Region
                  </div>

                  <div className="flex items-center gap-3">
                    <Plane size={17} />
                    Noida International Airport Corridor
                  </div>

                  <div className="flex items-center gap-3">
                    <PhoneCall size={17} />
                    Property consultation & site visit
                  </div>

                </div>

              </div>

              <div className="bg-white p-7 text-[#272922] sm:p-10 lg:p-12">

                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="grid gap-5"
                >

                  <div className="grid gap-5 sm:grid-cols-2">

                    <div>

                      <label className="mb-2 block text-xs font-black uppercase tracking-wider text-[#77786D]">
                        Name
                      </label>

                      <input
                        type="text"
                        placeholder="Your name"
                        className="w-full rounded-xl border border-[#DDD6C8] bg-[#F8F6F0] px-4 py-3.5 text-sm outline-none transition focus:border-[#C87550]"
                      />

                    </div>

                    <div>

                      <label className="mb-2 block text-xs font-black uppercase tracking-wider text-[#77786D]">
                        Phone
                      </label>

                      <input
                        type="tel"
                        placeholder="+91"
                        className="w-full rounded-xl border border-[#DDD6C8] bg-[#F8F6F0] px-4 py-3.5 text-sm outline-none transition focus:border-[#C87550]"
                      />

                    </div>

                  </div>

                  <div>

                    <label className="mb-2 block text-xs font-black uppercase tracking-wider text-[#77786D]">
                      Email
                    </label>

                    <input
                      type="email"
                      placeholder="you@example.com"
                      className="w-full rounded-xl border border-[#DDD6C8] bg-[#F8F6F0] px-4 py-3.5 text-sm outline-none transition focus:border-[#C87550]"
                    />

                  </div>

                  <div>

                    <label className="mb-2 block text-xs font-black uppercase tracking-wider text-[#77786D]">
                      Requirement
                    </label>

                    <select
                      className="w-full rounded-xl border border-[#DDD6C8] bg-[#F8F6F0] px-4 py-3.5 text-sm outline-none focus:border-[#C87550]"
                    >
                      <option>Residential Plot</option>
                      <option>Commercial Property</option>
                      <option>Investment Property</option>
                      <option>Site Visit</option>
                      <option>General Enquiry</option>
                    </select>

                  </div>

                  <div>

                    <label className="mb-2 block text-xs font-black uppercase tracking-wider text-[#77786D]">
                      Message
                    </label>

                    <textarea
                      rows="4"
                      placeholder="Tell us about your requirement..."
                      className="w-full resize-none rounded-xl border border-[#DDD6C8] bg-[#F8F6F0] px-4 py-3.5 text-sm outline-none transition focus:border-[#C87550]"
                    />

                  </div>

                  <button
                    type="submit"
                    className="mt-1 inline-flex items-center justify-center gap-3 rounded-xl bg-[#C87550] px-6 py-4 text-sm font-black text-white transition hover:bg-[#272922]"
                  >
                    Send Enquiry
                    <Send size={17} />
                  </button>

                  <p className="text-center text-[11px] text-[#999A91]">
                    Please verify property ownership, approvals and relevant
                    documents independently before purchase.
                  </p>

                </form>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================== */}
      <section className="border-t border-[#DDD6C8] bg-[#F5F2EA] px-5 py-16 sm:px-8 lg:px-12">

        <div className="mx-auto flex max-w-[1400px] flex-col justify-between gap-8 sm:flex-row sm:items-center">

          <div>

            <p className="text-xs font-black uppercase tracking-[0.25em] text-[#C87550]">
              Explore More
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
              Discover the growth story around Jattari.
            </h2>

          </div>

          <div className="flex flex-col gap-3 sm:flex-row">

            <Link
              to="/jewar-airport"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-[#C8B99A] px-6 py-3.5 text-sm font-bold transition hover:bg-[#272922] hover:text-white"
            >
              Jewar Airport
              <ArrowUpRight size={17} />
            </Link>

            <Link
              to="/jattari"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-[#272922] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#C87550]"
            >
              Explore Jattari
              <ArrowRight size={17} />
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}

export default Aboutus;
