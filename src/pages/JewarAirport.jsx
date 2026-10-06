import { useState } from "react";
import { Link } from "react-router-dom";

import {
  ArrowRight,
  ArrowUpRight,
  Plane,
  MapPin,
  Route,
  TrainFront,
  BusFront,
  Building2,
  Globe2,
  Leaf,
  ShieldCheck,
  Luggage,
  Sun,
  Factory,
  Hotel,
  BriefcaseBusiness,
  Landmark,
  Clock3,
  ChevronDown,
  Send,
  CheckCircle2,
  Navigation,
  Package,
} from "lucide-react";

const airportStats = [
  {
    value: "DXN",
    label: "IATA Airport Code",
    icon: Plane,
  },
  {
    value: "12M",
    label: "Phase 1 Passengers / Year",
    icon: Building2,
  },
  {
    value: "3.9 KM",
    label: "Phase 1 Runway",
    icon: Route,
  },
  {
    value: "70M",
    label: "Planned Phase 4 Capacity",
    icon: Globe2,
  },
];

const developmentPhases = [
  {
    number: "01",
    status: "Operational",
    title: "Phase One",
    capacity: "12 Million Passengers",
    description:
      "The first development stage brings one passenger terminal, one runway and a dedicated cargo ecosystem together to establish DXN as a new gateway for the NCR and Western Uttar Pradesh.",
  },
  {
    number: "02",
    status: "Expansion",
    title: "Phase Two",
    capacity: "30 Million Passengers",
    description:
      "Future expansion is planned to increase passenger capacity and strengthen the airport's multimodal connectivity through additional infrastructure and transit links.",
  },
  {
    number: "03",
    status: "Growth",
    title: "Phase Three",
    capacity: "50 Million Passengers",
    description:
      "The airport's larger development vision includes additional terminal and runway infrastructure along with stronger cargo, logistics and aerotropolis activity.",
  },
  {
    number: "04",
    status: "Long Term",
    title: "Phase Four",
    capacity: "70 Million Passengers",
    description:
      "The masterplan ultimately envisions a major aviation hub capable of handling up to 70 million passengers annually as the full four-phase development is completed.",
  },
];

const connectivity = [
  {
    icon: Route,
    title: "Yamuna Expressway",
    text:
      "The airport is directly connected to the Yamuna Expressway, creating a strategic road link toward Noida, Greater Noida and Agra.",
  },
  {
    icon: BusFront,
    title: "Regional Bus Network",
    text:
      "Bus connectivity is being developed to connect the airport with major cities and towns across the surrounding region.",
  },
  {
    icon: TrainFront,
    title: "Future Rail Links",
    text:
      "Multiple proposed and developing rail connections are intended to integrate the airport with the wider NCR and national railway network.",
  },
  {
    icon: Navigation,
    title: "Jattariâ€“Aligarh Corridor",
    text:
      "Official airport connectivity planning includes an NIAâ€“Aligarh route through Tappal, Jattari and Kher, strengthening the airport's regional catchment.",
  },
];

const facilities = [
  {
    icon: Luggage,
    title: "Smart Passenger Journey",
    text:
      "Modern passenger-processing systems are designed to make check-in, security and boarding more efficient.",
  },
  {
    icon: ShieldCheck,
    title: "Security Infrastructure",
    text:
      "Dedicated aviation-security systems support safe and controlled passenger movement across the airport campus.",
  },
  {
    icon: Sun,
    title: "Sustainable Design",
    text:
      "The airport has been planned around energy efficiency and sustainability principles with a long-term net-zero ambition.",
  },
  {
    icon: Leaf,
    title: "Green Operations",
    text:
      "Sustainability is integrated into the airport's infrastructure, mobility and operational planning.",
  },
  {
    icon: Package,
    title: "Cargo & Logistics",
    text:
      "Dedicated cargo infrastructure supports the airport's wider role in logistics, trade and regional economic activity.",
  },
  {
    icon: Building2,
    title: "Passenger Amenities",
    text:
      "Retail, food and beverage, lounges, mobility services and other passenger-oriented facilities are part of the airport ecosystem.",
  },
];

const economicImpact = [
  {
    icon: Factory,
    title: "Industrial Growth",
    text:
      "Improved air and road connectivity can support manufacturing, logistics and business activity across the wider Yamuna corridor.",
  },
  {
    icon: Hotel,
    title: "Hospitality & Tourism",
    text:
      "Better accessibility creates opportunities for hotels, hospitality, tourism and destination-oriented businesses.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Employment",
    text:
      "Airport operations and surrounding infrastructure can create direct and indirect employment across multiple sectors.",
  },
  {
    icon: Landmark,
    title: "Real Estate",
    text:
      "Large infrastructure projects often increase demand for residential, commercial and plotted development in surrounding growth corridors.",
  },
];

const nearbyPlaces = [
  {
    name: "Noida",
    time: "Road connectivity",
    description:
      "A major NCR business and technology destination connected toward the airport through the Yamuna Expressway corridor.",
  },
  {
    name: "Greater Noida",
    time: "Regional hub",
    description:
      "An important urban and industrial centre positioned close to the airport and Yamuna development zone.",
  },
  {
    name: "Agra",
    time: "Tourism corridor",
    description:
      "The Yamuna Expressway provides an established road connection toward Agra and the surrounding tourism belt.",
  },
  {
    name: "Aligarh",
    time: "Jattari route",
    description:
      "Airport connectivity planning includes an NIAâ€“Aligarh route passing through Tappal, Jattari and Kher.",
  },
];

const faqs = [
  {
    question: "What is the official name of Jewar Airport?",
    answer:
      "The official name is Noida International Airport. It is located in Jewar, Gautam Buddha Nagar, Uttar Pradesh, and is commonly referred to as Jewar Airport.",
  },
  {
    question: "What is the airport code?",
    answer:
      "The IATA airport code is DXN. The ICAO code is VIND.",
  },
  {
    question: "Is Jewar Airport operational?",
    answer:
      "Yes. Noida International Airport commenced commercial flight operations on 15 June 2026, with IndiGo operating the first commercial service. International operations are being developed as the airport expands its network.",
  },
  {
    question: "How does Jewar Airport connect with Jattari?",
    answer:
      "The airport's regional connectivity planning includes an NIAâ€“Aligarh route that passes through Tappal, Jattari and Kher, making Jattari part of the wider airport access corridor.",
  },
  {
    question: "What is the Phase 1 passenger capacity?",
    answer:
      "The first phase has been designed for a capacity of approximately 12 million passengers per year.",
  },
  {
    question: "How many phases are planned for the airport?",
    answer:
      "The airport masterplan is structured around four development phases, with the long-term plan targeting up to 70 million passengers annually.",
  },
];

function JewarAirport() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <>
      
    <main className="overflow-hidden bg-[#F5F2EA] text-[#272922]">

      {/* =========================================================
          HERO
      ========================================================== */}
      <section className="relative isolate min-h-[720px] overflow-hidden bg-gradient-to-br from-[#F2F8FF] via-[#ECF5FF] to-[#E7F8F7] px-5 pb-16 pt-28 sm:px-8 lg:px-12 lg:pb-20 lg:pt-32">
        <div className="pointer-events-none absolute -left-40 top-20 h-[440px] w-[440px] rounded-full bg-[#DDEBFF]/80 blur-3xl" />
        <div className="pointer-events-none absolute -right-32 top-6 h-[520px] w-[520px] rounded-full bg-[#CFF5F0]/70 blur-3xl" />
        <div className="pointer-events-none absolute right-[12%] top-[14%] h-[440px] w-[440px] rounded-full border border-[#49C7D8]/15" />
        <div className="pointer-events-none absolute right-[16%] top-[19%] h-[350px] w-[350px] rounded-full border border-[#49C7D8]/15" />

        <img
          src="/Images/Heroimg.png"
          alt="Jewar Airport and the growing Jattari region"
          className="pointer-events-none absolute inset-y-0 right-0 z-0 h-full w-full object-contain object-right opacity-20 sm:opacity-40 lg:w-[64%] lg:opacity-100"
        />
        <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-r from-[#F2F8FF] via-[#F2F8FF]/90 to-[#F2F8FF]/10 lg:via-[#F2F8FF]/85 lg:to-transparent" />
        <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-[#F2F8FF]/45 via-transparent to-[#F2F8FF]/20" />

        <div className="relative z-10 mx-auto flex min-h-[540px] max-w-7xl items-center">
          <div className="max-w-[690px]">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#1762EA]/15 bg-white/70 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-[#1762EA] backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-[#08B7D6]" />
              Now Operational · DXN
            </div>

            <h1 className="text-[clamp(3.4rem,6.6vw,6.6rem)] font-extrabold leading-[0.92] tracking-[-0.065em] text-[#102A58]">
              Jewar Airport
              <br />
              <span className="bg-gradient-to-r from-[#165DEB] via-[#1682F2] to-[#08B7D6] bg-clip-text text-transparent">
                Connecting the
              </span>
              <br />
              growth corridor.
            </h1>
            <svg aria-hidden="true" viewBox="0 0 340 18" className="mt-3 h-4 w-64 text-[#F5B728] sm:w-[340px]">
              <path d="M2 10c28-14 40 14 68 0s40 14 68 0 40 14 68 0 40 14 68 0 40 14 64 0" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="5" />
            </svg>

            <p className="mt-6 max-w-[570px] text-base leading-7 text-[#536780] sm:text-lg sm:leading-8">
              Noida International Airport is reshaping connectivity across
              Jewar, the Yamuna corridor and Western Uttar Pradesh, opening a
              new gateway for the wider region.
            </p>

            <a
              href="#airport-overview"
              className="mt-8 inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#165DEB] to-[#08B7D6] px-8 py-4 text-sm font-bold text-white shadow-[0_14px_35px_rgba(21,93,235,0.22)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_42px_rgba(21,93,235,0.28)]"
            >
              Explore Airport
              <ArrowRight size={17} />
            </a>
          </div>
        </div>
      </section>
      {/* =========================================================
          STAT STRIP
      ========================================================== */}

      <section className="px-5 pb-20 sm:px-8 lg:px-12 lg:pb-28">

        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[2.5rem] bg-[#272922] sm:grid-cols-2 lg:grid-cols-4">

          {airportStats.map((item, index) => {

            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className={`group p-7 transition duration-300 hover:bg-[#33352F] ${
                  index !== airportStats.length - 1
                    ? "border-b border-white/10 lg:border-b-0 lg:border-r"
                    : ""
                }`}
              >

                <div className="flex items-start justify-between">

                  <div className="rounded-xl bg-white/10 p-3 text-[#D28B65] transition group-hover:bg-[#D28B65] group-hover:text-[#272922]">
                    <Icon size={19} />
                  </div>

                  <span className="text-xs text-white/20">
                    0{index + 1}
                  </span>

                </div>

                <p className="mt-8 text-3xl font-medium tracking-tight text-white sm:text-4xl">
                  {item.value}
                </p>

                <p className="mt-2 text-sm text-white/45">
                  {item.label}
                </p>

              </div>
            );

          })}

        </div>

      </section>


      {/* =========================================================
          OVERVIEW
      ========================================================== */}

      <section
        id="airport-overview"
        className="border-y border-black/5 bg-[#EEE8DC] px-5 py-24 sm:px-8 lg:px-12 lg:py-32"
      >

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr]">

            <div>

              <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#B95F3D]">
                The Big Picture
              </span>

              <h2 className="mt-5 text-5xl font-medium leading-[0.95] tracking-[-0.06em] sm:text-6xl lg:text-7xl">
                More than
                <br />
                an airport.
              </h2>

            </div>

            <div>

              <p className="text-xl leading-8 text-black/65 sm:text-2xl sm:leading-9">
                Noida International Airport is being developed as a major
                aviation and multimodal gateway for the Delhi NCR and Western
                Uttar Pradesh.
              </p>

              <p className="mt-7 max-w-3xl leading-7 text-black/50">
                Located in Jewar along the Yamuna Expressway, the airport is
                designed to connect passengers, businesses, cargo and
                surrounding growth corridors. Its development is planned in
                multiple phases, allowing the infrastructure to expand as
                demand grows.
              </p>

              <div className="mt-10 grid gap-3 sm:grid-cols-2">

                {[
                  ["Official Name", "Noida International Airport"],
                  ["IATA / ICAO", "DXN / VIND"],
                  ["Location", "Jewar, Gautam Buddha Nagar"],
                  ["Phase 1", "One runway + one terminal"],
                ].map(([label, value]) => (

                  <div
                    key={label}
                    className="rounded-2xl bg-white/65 p-5"
                  >

                    <p className="text-xs font-bold uppercase tracking-widest text-black/30">
                      {label}
                    </p>

                    <p className="mt-2 font-semibold">
                      {value}
                    </p>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          WHY IT MATTERS
      ========================================================== */}

      <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-32">

        <div className="mx-auto max-w-7xl">

          <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-end">

            <div>

              <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#B95F3D]">
                Why DXN Matters
              </span>

              <h2 className="mt-5 max-w-4xl text-4xl font-medium tracking-[-0.05em] sm:text-5xl lg:text-6xl">
                A new layer of
                <span className="text-[#C87550]">
                  {" "}connectivity.
                </span>
              </h2>

            </div>

            <p className="max-w-md leading-7 text-black/45">
              Airport infrastructure changes more than travel. It can alter
              how people, businesses, logistics and new developments connect
              with a region.
            </p>

          </div>

          <div className="mt-14 grid gap-px overflow-hidden rounded-[2.5rem] bg-black/10 md:grid-cols-2 lg:grid-cols-4">

            {[
              {
                number: "01",
                title: "Travel",
                text: "A new gateway for passengers across NCR and Western Uttar Pradesh.",
              },
              {
                number: "02",
                title: "Business",
                text: "Improved access can strengthen regional business and commercial activity.",
              },
              {
                number: "03",
                title: "Logistics",
                text: "Cargo infrastructure creates opportunities for faster regional movement of goods.",
              },
              {
                number: "04",
                title: "Growth",
                text: "New infrastructure can accelerate development around connected corridors.",
              },
            ].map((item) => (

              <div
                key={item.number}
                className="group bg-[#272922] p-7 text-white transition duration-500 hover:bg-[#34362F]"
              >

                <div className="flex items-start justify-between">

                  <span className="text-sm text-white/25">
                    {item.number}
                  </span>

                  <ArrowUpRight
                    size={19}
                    className="text-[#D28B65] transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                  />

                </div>

                <h3 className="mt-16 text-2xl font-medium">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-white/45">
                  {item.text}
                </p>

                <div className="mt-7 h-px w-8 bg-[#D28B65] transition-all duration-500 group-hover:w-full" />

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =========================================================
          DEVELOPMENT TIMELINE
      ========================================================== */}

      <section className="bg-[#272922] px-5 py-24 text-white sm:px-8 lg:px-12 lg:py-32">

        <div className="mx-auto max-w-7xl">

          <div className="max-w-3xl">

            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#D28B65]">
              Long-Term Vision
            </span>

            <h2 className="mt-5 text-4xl font-medium tracking-[-0.05em] sm:text-5xl lg:text-6xl">
              Four phases.
              <br />
              <span className="text-[#D28B65]">
                One larger vision.
              </span>
            </h2>

            <p className="mt-6 leading-7 text-white/45">
              The airport masterplan is structured as a phased expansion,
              allowing passenger, cargo and supporting infrastructure to grow
              progressively.
            </p>

          </div>

          <div className="mt-16 grid gap-4 lg:grid-cols-4">

            {developmentPhases.map((phase, index) => (

              <div
                key={phase.number}
                className={`relative overflow-hidden rounded-[2rem] border p-6 ${
                  index === 0
                    ? "border-[#D28B65]/50 bg-[#D28B65]/10"
                    : "border-white/10 bg-white/[0.03]"
                }`}
              >

                <div className="flex items-center justify-between">

                  <span className="text-sm font-bold text-[#D28B65]">
                    {phase.number}
                  </span>

                  <span className="rounded-full border border-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white/40">
                    {phase.status}
                  </span>

                </div>

                <h3 className="mt-12 text-2xl font-medium">
                  {phase.title}
                </h3>

                <p className="mt-2 text-sm font-semibold text-[#D28B65]">
                  {phase.capacity}
                </p>

                <p className="mt-5 text-sm leading-6 text-white/45">
                  {phase.description}
                </p>

                <div className="mt-7 h-px bg-white/10" />

                <p className="mt-5 text-xs uppercase tracking-widest text-white/25">
                  Development Stage
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =========================================================
          CONNECTIVITY
      ========================================================== */}

      <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-32">

        <div className="mx-auto max-w-7xl">

          <div className="grid items-start gap-14 lg:grid-cols-[0.8fr_1.2fr]">

            <div className="lg:sticky lg:top-28">

              <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#B95F3D]">
                Connected Region
              </span>

              <h2 className="mt-5 text-5xl font-medium leading-[0.95] tracking-[-0.06em] sm:text-6xl">
                The airport
                <br />
                sits at a
                <br />
                <span className="text-[#C87550]">
                  crossroads.
                </span>
              </h2>

              <p className="mt-7 max-w-md leading-7 text-black/50">
                Roads, buses, future rail links and regional routes are
                creating a wider network around DXN.
              </p>

              <div className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#EEE8DC] px-5 py-3 text-sm font-semibold">
                <MapPin size={17} className="text-[#C87550]" />
                Jewar Â· Uttar Pradesh
              </div>

            </div>

            <div className="grid gap-4 sm:grid-cols-2">

              {connectivity.map((item, index) => {

                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="group rounded-[2rem] border border-black/5 bg-white p-7 shadow-sm transition duration-500 hover:-translate-y-1 hover:shadow-xl"
                  >

                    <div className="flex items-start justify-between">

                      <div className="rounded-xl bg-[#F5F2EA] p-3 text-[#C87550] transition group-hover:bg-[#C87550] group-hover:text-white">
                        <Icon size={21} />
                      </div>

                      <span className="text-xs text-black/20">
                        0{index + 1}
                      </span>

                    </div>

                    <h3 className="mt-10 text-xl font-semibold">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-black/50">
                      {item.text}
                    </p>

                    <div className="mt-7 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#B95F3D]">
                      Explore connection
                      <ArrowRight size={14} />
                    </div>

                  </div>
                );

              })}

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          AIRPORT + JATTARI
      ========================================================== */}

      <section className="px-5 pb-24 sm:px-8 lg:px-12 lg:pb-32">

        <div className="mx-auto max-w-7xl">

          <div className="relative overflow-hidden rounded-[3rem] bg-[#DCE7E5] p-7 sm:p-10 lg:p-14">

            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/50 blur-3xl" />

            <div className="relative grid items-center gap-12 lg:grid-cols-[1fr_0.8fr]">

              <div>

                <div className="inline-flex items-center gap-2 rounded-full bg-white/60 px-4 py-2 text-xs font-bold uppercase tracking-widest text-[#55716B]">
                  <Route size={14} />
                  Airport Â· Jattari Corridor
                </div>

                <h2 className="mt-7 max-w-3xl text-4xl font-medium leading-[0.98] tracking-[-0.05em] sm:text-5xl lg:text-6xl">
                  Jattari is part of
                  <br />
                  the wider
                  <span className="text-[#B95F3D]">
                    {" "}DXN story.
                  </span>
                </h2>

                <p className="mt-6 max-w-2xl leading-7 text-black/55">
                  The official airport connectivity network includes a route
                  between NIA and Aligarh through Tappal, Jattari and Kher.
                  That makes Jattari an important local point within the
                  airport's broader regional access story.
                </p>

                <Link
                  to="/jattari"
                  className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#272922] px-7 py-4 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-[#C87550]"
                >
                  Explore Jattari Growth
                  <ArrowRight size={17} />
                </Link>

              </div>

              <div className="relative">

                <div className="rounded-[2.5rem] bg-[#272922] p-7 text-white shadow-2xl">

                  <div className="flex items-center justify-between">

                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#C87550]">
                      <Navigation size={23} />
                    </div>

                    <span className="text-xs uppercase tracking-[0.2em] text-white/30">
                      Regional Route
                    </span>

                  </div>

                  <div className="mt-10 space-y-5">

                    {["Noida International Airport", "Tappal", "Jattari", "Kher", "Aligarh"].map(
                      (place, index) => (

                        <div
                          key={place}
                          className="flex items-center gap-4"
                        >

                          <div className="relative flex flex-col items-center">

                            <span
                              className={`h-3 w-3 rounded-full ${
                                index === 2
                                  ? "bg-[#D28B65]"
                                  : "bg-white/30"
                              }`}
                            />

                            {index !== 4 && (
                              <span className="absolute top-3 h-8 w-px bg-white/10" />
                            )}

                          </div>

                          <span
                            className={`text-sm ${
                              index === 2
                                ? "font-bold text-[#D28B65]"
                                : "text-white/55"
                            }`}
                          >
                            {place}
                          </span>

                        </div>

                      )
                    )}

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          FACILITIES
      ========================================================== */}

      <section className="bg-[#EEE8DC] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">

        <div className="mx-auto max-w-7xl">

          <div className="max-w-3xl">

            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#B95F3D]">
              Passenger Experience
            </span>

            <h2 className="mt-5 text-4xl font-medium tracking-[-0.05em] sm:text-5xl lg:text-6xl">
              Designed for a
              <span className="text-[#C87550]">
                {" "}modern journey.
              </span>
            </h2>

          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

            {facilities.map((item, index) => {

              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group rounded-[2rem] bg-white p-7 transition duration-500 hover:-translate-y-1 hover:shadow-xl"
                >

                  <div className="flex items-start justify-between">

                    <div className="rounded-xl bg-[#F5F2EA] p-3 text-[#C87550] transition group-hover:bg-[#C87550] group-hover:text-white">
                      <Icon size={21} />
                    </div>

                    <span className="text-xs text-black/20">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                  </div>

                  <h3 className="mt-10 text-xl font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-black/50">
                    {item.text}
                  </p>

                </div>
              );

            })}

          </div>

        </div>

      </section>


      {/* =========================================================
          ECONOMIC IMPACT
      ========================================================== */}

      <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-32">

        <div className="mx-auto max-w-7xl">

          <div className="grid items-end gap-8 lg:grid-cols-[1fr_0.65fr]">

            <div>

              <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#B95F3D]">
                Beyond Aviation
              </span>

              <h2 className="mt-5 text-4xl font-medium tracking-[-0.05em] sm:text-5xl lg:text-6xl">
                Where connectivity
                <br />
                becomes
                <span className="text-[#C87550]">
                  {" "}opportunity.
                </span>
              </h2>

            </div>

            <p className="leading-7 text-black/50">
              The airport's significance extends beyond flights. Improved
              accessibility can support a broader ecosystem of logistics,
              hospitality, employment, business and real-estate development.
            </p>

          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            {economicImpact.map((item) => {

              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-[2rem] border border-black/5 bg-[#F5F2EA] p-7"
                >

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-[#C87550] shadow-sm">
                    <Icon size={21} />
                  </div>

                  <h3 className="mt-9 text-xl font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-black/50">
                    {item.text}
                  </p>

                </div>
              );

            })}

          </div>

        </div>

      </section>


      {/* =========================================================
          NEARBY DESTINATIONS
      ========================================================== */}

      <section className="bg-[#272922] px-5 py-24 text-white sm:px-8 lg:px-12 lg:py-32">

        <div className="mx-auto max-w-7xl">

          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">

            <div>

              <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#D28B65]">
                Regional Reach
              </span>

              <h2 className="mt-5 text-4xl font-medium tracking-[-0.05em] sm:text-5xl lg:text-6xl">
                Connected to
                <br />
                a bigger map.
              </h2>

            </div>

            <p className="max-w-md leading-7 text-white/40">
              DXN sits within a wider network of cities, industrial areas,
              tourism destinations and developing corridors.
            </p>

          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            {nearbyPlaces.map((place, index) => (

              <div
                key={place.name}
                className="group rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 transition duration-500 hover:bg-white/[0.07]"
              >

                <div className="flex items-center justify-between">

                  <MapPin
                    size={19}
                    className="text-[#D28B65]"
                  />

                  <span className="text-xs text-white/20">
                    0{index + 1}
                  </span>

                </div>

                <h3 className="mt-12 text-2xl font-medium">
                  {place.name}
                </h3>

                <p className="mt-2 text-xs font-bold uppercase tracking-widest text-[#D28B65]">
                  {place.time}
                </p>

                <p className="mt-4 text-sm leading-6 text-white/40">
                  {place.description}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =========================================================
          FAQ
      ========================================================== */}

      <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-32">

        <div className="mx-auto max-w-5xl">

          <div className="text-center">

            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#B95F3D]">
              Frequently Asked
            </span>

            <h2 className="mt-5 text-4xl font-medium tracking-[-0.05em] sm:text-5xl">
              Questions about
              <span className="text-[#C87550]">
                {" "}Jewar Airport.
              </span>
            </h2>

          </div>

          <div className="mt-12 space-y-3">

            {faqs.map((faq, index) => {

              const isOpen = openFaq === index;

              return (
                <div
                  key={faq.question}
                  className={`overflow-hidden rounded-2xl border transition ${
                    isOpen
                      ? "border-[#C87550]/30 bg-[#EEE8DC]"
                      : "border-black/5 bg-white"
                  }`}
                >

                  <button
                    type="button"
                    onClick={() =>
                      setOpenFaq(isOpen ? -1 : index)
                    }
                    className="flex w-full items-center justify-between gap-5 px-6 py-5 text-left"
                  >

                    <span className="font-semibold">
                      {faq.question}
                    </span>

                    <ChevronDown
                      size={19}
                      className={`shrink-0 transition duration-300 ${
                        isOpen ? "rotate-180 text-[#C87550]" : ""
                      }`}
                    />

                  </button>

                  <div
                    className={`grid transition-all duration-300 ${
                      isOpen
                        ? "grid-rows-[1fr]"
                        : "grid-rows-[0fr]"
                    }`}
                  >

                    <div className="overflow-hidden">

                      <p className="px-6 pb-6 text-sm leading-7 text-black/50">
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
          LEAD / ENQUIRY
      ========================================================== */}

      <section className="px-5 pb-24 sm:px-8 lg:px-12 lg:pb-32">

        <div className="mx-auto max-w-7xl">

          <div className="overflow-hidden rounded-[3rem] bg-[#C87550] text-white">

            <div className="grid lg:grid-cols-[0.8fr_1.2fr]">

              {/* CTA */}
              <div className="p-8 sm:p-12 lg:p-14">

                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-widest">
                  <Clock3 size={14} />
                  Plan Your Visit
                </div>

                <h2 className="mt-8 text-4xl font-medium leading-[0.95] tracking-[-0.05em] sm:text-5xl">
                  Want to understand
                  <br />
                  the Jewar growth
                  <br />
                  corridor?
                </h2>

                <p className="mt-6 max-w-md leading-7 text-white/75">
                  Share your details and our team can help you understand the
                  airport, connectivity and nearby development opportunities.
                </p>

                <div className="mt-9 space-y-4">

                  {[
                    "Airport connectivity information",
                    "Jattari growth corridor guidance",
                    "Property & site visit enquiry",
                  ].map((item) => (

                    <div
                      key={item}
                      className="flex items-center gap-3 text-sm"
                    >

                      <CheckCircle2
                        size={17}
                        className="shrink-0"
                      />

                      {item}

                    </div>

                  ))}

                </div>

              </div>


              {/* FORM */}
              <div className="bg-white p-7 text-[#272922] sm:p-10 lg:p-12">

                <div className="mb-8">

                  <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#B95F3D]">
                    Enquiry Form
                  </p>

                  <h3 className="mt-3 text-3xl font-medium tracking-tight">
                    Tell us what you need.
                  </h3>

                </div>

                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="space-y-5"
                >

                  <div className="grid gap-5 sm:grid-cols-2">

                    <div>

                      <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-black/40">
                        Name
                      </label>

                      <input
                        type="text"
                        placeholder="Your name"
                        className="w-full rounded-xl border border-black/10 bg-[#F8F6F1] px-4 py-3.5 text-sm outline-none transition placeholder:text-black/25 focus:border-[#C87550]"
                      />

                    </div>

                    <div>

                      <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-black/40">
                        Phone
                      </label>

                      <input
                        type="tel"
                        placeholder="+91"
                        className="w-full rounded-xl border border-black/10 bg-[#F8F6F1] px-4 py-3.5 text-sm outline-none transition placeholder:text-black/25 focus:border-[#C87550]"
                      />

                    </div>

                  </div>

                  <div>

                    <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-black/40">
                      Email
                    </label>

                    <input
                      type="email"
                      placeholder="you@example.com"
                      className="w-full rounded-xl border border-black/10 bg-[#F8F6F1] px-4 py-3.5 text-sm outline-none transition placeholder:text-black/25 focus:border-[#C87550]"
                    />

                  </div>

                  <div>

                    <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-black/40">
                      Enquiry Type
                    </label>

                    <select
                      className="w-full rounded-xl border border-black/10 bg-[#F8F6F1] px-4 py-3.5 text-sm outline-none focus:border-[#C87550]"
                    >
                      <option>Airport Information</option>
                      <option>Jattari Growth</option>
                      <option>Property Enquiry</option>
                      <option>Site Visit</option>
                      <option>Other</option>
                    </select>

                  </div>

                  <div>

                    <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-black/40">
                      Message
                    </label>

                    <textarea
                      rows="4"
                      placeholder="Tell us what you would like to know..."
                      className="w-full resize-none rounded-xl border border-black/10 bg-[#F8F6F1] px-4 py-3.5 text-sm outline-none transition placeholder:text-black/25 focus:border-[#C87550]"
                    />

                  </div>

                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-3 rounded-xl bg-[#272922] px-6 py-4 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#C87550]"
                  >
                    Send Enquiry
                    <Send size={16} />
                  </button>

                </form>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          FINAL CTA
      ========================================================== */}

      <section className="px-5 pb-24 sm:px-8 lg:px-12 lg:pb-32">

        <div className="mx-auto max-w-7xl">

          <div className="relative overflow-hidden rounded-[3rem] bg-[#EEE8DC] px-7 py-16 text-center sm:px-12 lg:px-20 lg:py-24">

            <div className="absolute left-1/2 top-0 h-56 w-56 -translate-x-1/2 rounded-full bg-white/70 blur-3xl" />

            <div className="relative">

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-[#C87550] shadow-lg">
                <Plane size={26} />
              </div>

              <h2 className="mx-auto mt-8 max-w-4xl text-4xl font-medium leading-[0.95] tracking-[-0.06em] sm:text-5xl lg:text-7xl">
                The airport is here.
                <br />
                <span className="text-[#C87550]">
                  What comes next?
                </span>
              </h2>

              <p className="mx-auto mt-7 max-w-2xl leading-7 text-black/50">
                Explore how Jewar Airport, Film City, regional infrastructure
                and Jattari are becoming part of one larger growth corridor.
              </p>

              <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">

                <Link
                  to="/jattari"
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-[#272922] px-7 py-4 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-[#C87550]"
                >
                  Explore Jattari
                  <ArrowRight size={17} />
                </Link>

                <Link
                  to="/film-city"
                  className="inline-flex items-center justify-center gap-3 rounded-full border border-black/10 bg-white px-7 py-4 text-sm font-bold transition hover:-translate-y-1"
                >
                  Explore Film City
                  <ArrowUpRight size={17} />
                </Link>

              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
      
    </>
  );
}

export default JewarAirport;
