import { useState } from "react";
import { Link } from "react-router-dom";
import growthCorridorImage from "../assets/Images/corridor.png";
import growthRegionImage from "../assets/Images/growth.png";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Plane,
  Clapperboard,
  Route,
  MapPin,
  Building2,
  GraduationCap,
  ShoppingBag,
  TrendingUp,
  Landmark,
  Home,
  Trees,
  CheckCircle2,
  PhoneCall,
  Navigation,
  Sparkles,
  ChevronDown,
} from "lucide-react";

const growthHighlights = [
  {
    icon: Plane,
    
    title: "Noida International Airport",
    text: "Jewar Airport is transforming the wider region through new aviation, logistics and connectivity opportunities.",
  },
  {
    icon: Clapperboard,
   
    title: "International Film City",
    text: "The planned Film City in the YEIDA region is adding another major development layer to the surrounding corridor.",
  },
  {
    icon: Route,
   
    title: "Better Connectivity",
    text: "Road and regional transport connections are strengthening access between Jattari, Tappal, Aligarh and the wider NCR region.",
  },
  {
    icon: Building2,
    
    title: "Urban Expansion",
    text: "Growing infrastructure, housing and commercial activity are creating new possibilities around Jattari.",
  },
];

const reasons = [
  {
    icon: MapPin,
    title: "Strategic Location",
    text: "Jattari sits within an important regional movement corridor connecting Aligarh, Tappal and the Jewar side of the NCR.",
  },
  {
    icon: Plane,
    title: "Airport Proximity",
    text: "The operational Noida International Airport is bringing greater visibility and connectivity to the wider area.",
  },
  {
    icon: Route,
    title: "Regional Connectivity",
    text: "Existing and improving road connections make Jattari relevant for people travelling between nearby cities and growth centres.",
  },
  {
    icon: Building2,
    title: "Development Potential",
    text: "Infrastructure-led growth can create demand for residential, commercial and supporting local services.",
  },
  {
    icon: GraduationCap,
    title: "Everyday Infrastructure",
    text: "Schools, coaching centres, retail stores and essential services support the area's day-to-day living environment.",
  },
  {
    icon: Trees,
    title: "Balanced Lifestyle",
    text: "Jattari offers a less congested setting while remaining connected to important regional destinations.",
  },
];

const corridorPoints = [
  {
    icon: Plane,
    title: "Jewar Airport",
    text: "A major aviation gateway for the region.",
  },
  {
    icon: Clapperboard,
    title: "Film City",
    text: "A planned entertainment and media development in the YEIDA region.",
  },
  {
    icon: Route,
    title: "Yamuna Expressway",
    text: "A key regional road connection supporting movement across the corridor.",
  },
  {
    icon: Landmark,
    title: "Aligarh",
    text: "An established education, business and residential centre nearby.",
  },
];

const infrastructure = [
  {
    icon: GraduationCap,
    title: "Education",
    text: "Schools, coaching centres and educational institutions contribute to the local ecosystem.",
  },
  {
    icon: ShoppingBag,
    title: "Retail & Essentials",
    text: "Local markets, grocery stores and everyday services make residential life more convenient.",
  },
  {
    icon: Home,
    title: "Residential Growth",
    text: "Increasing infrastructure activity can support new residential opportunities around the region.",
  },
  {
    icon: Building2,
    title: "Commercial Activity",
    text: "Population growth and improved connectivity can support shops, offices and local businesses.",
  },
];

const faqs = [
  {
    question: "Why is Jattari becoming important?",
    answer:
      "Jattari is located within a developing regional corridor influenced by the Noida International Airport, planned Film City, improved connectivity and nearby urban centres.",
  },
  {
    question: "Is Jattari directly part of the Film City project?",
    answer:
      "The International Film City is planned in the YEIDA region at Sector 21. Jattari should be viewed as part of the wider regional growth and connectivity ecosystem rather than as the Film City project site itself.",
  },
  {
    question: "How does Jewar Airport affect Jattari?",
    answer:
      "The airport improves the strategic importance of the wider area by strengthening regional aviation connectivity and supporting associated infrastructure and economic activity.",
  },
  {
    question: "What kind of development can grow around Jattari?",
    answer:
      "Residential communities, commercial activity, local services and supporting infrastructure can benefit from increasing connectivity and regional development.",
  },
  {
    question: "Is Jattari suitable for property buyers?",
    answer:
      "Jattari may be relevant for buyers looking at long-term regional growth. However, every property should be independently checked for ownership, approvals, land use, title and applicable documentation before purchase.",
  },
];

function SectionLabel({ children }) {
  return (
    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#cbb98f] bg-[#eee7d8] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.22em] text-[#80652f]">
      <span className="h-1.5 w-1.5 rounded-full bg-[#a47732]" />
      {children}
    </div>
  );
}

function GrowthCard({ item }) {
  const Icon = item.icon;

  return (
    <div className="group rounded-[28px] border border-[#ded5c5] bg-[#fbf9f3] p-6 transition-all duration-300 hover:-translate-y-2 hover:border-[#b99552] hover:shadow-[0_20px_50px_rgba(73,62,42,0.10)]">
      <div className="mb-8 flex items-start">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e8e1d2] text-[#8b6b35] transition-colors group-hover:bg-[#b99552] group-hover:text-white">
          <Icon size={21} strokeWidth={1.7} />
        </div>

      </div>

      <h3 className="mb-3 text-xl font-semibold tracking-tight text-[#292b25]">
        {item.title}
      </h3>

      <p className="text-sm leading-7 text-[#6d6d64]">{item.text}</p>
    </div>
  );
}

function HeroCylinderImage({ src, alt, className, duration }) {
  return (
    <div className={"relative overflow-hidden [perspective:1000px] " + className}>
      <motion.div
        animate={{ rotateY: 360 }}
        transition={{ duration, ease: "linear", repeat: Infinity }}
        style={{ transformStyle: "preserve-3d" }}
        className="absolute inset-0"
      >
        <img
          src={src}
          alt={alt}
          className="absolute inset-0 h-full w-full object-cover"
          style={{ backfaceVisibility: "hidden" }}
        />
        <img
          src={src}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
          style={{ transform: "rotateY(180deg)", backfaceVisibility: "hidden" }}
        />
      </motion.div>
    </div>
  );
}

function JattariGrowth() {
  const [openFaq, setOpenFaq] = useState(0);
  const [showApproachDetails, setShowApproachDetails] = useState(false);

  return (
    <main className="overflow-hidden bg-[#F5F2EA] text-[#272922]">
      {/* HERO */}
                  <section className="bg-white px-5 pb-20 pt-28 sm:px-8 lg:px-12 lg:pb-28 lg:pt-36">
        <div className="mx-auto grid max-w-[1400px] items-center gap-12 lg:grid-cols-[0.95fr_1.25fr] lg:gap-16">
          <div className="grid grid-cols-[1.05fr_0.95fr] items-center gap-4 sm:gap-6">
            <HeroCylinderImage src={growthCorridorImage} alt="Regional road in the Jattari growth corridor" className="mt-12 h-[300px] w-full rounded-[1.5rem] sm:mt-16 sm:h-[430px] sm:rounded-[2rem]" duration={16} />
            <div className="flex flex-col gap-4 sm:gap-6">
              <HeroCylinderImage src={growthRegionImage} alt="Development and growth around Jattari" className="h-[205px] w-full rounded-[1.5rem] sm:h-[300px] sm:rounded-[2rem]" duration={20} />
              <div className="rounded-[1.5rem] border border-[#DDD6C8] bg-[#F5F2EA] p-4 shadow-[0_16px_45px_rgba(39,41,34,0.06)] sm:rounded-[2rem] sm:p-6">
                <p className="text-center text-2xl font-black tracking-tight text-[#9B773B] sm:text-4xl">Jattari</p>
                <div className="mx-auto mt-3 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#9B773B] sm:h-12 sm:w-12"><TrendingUp size={22} /></div>
                <p className="mt-3 text-center text-xs font-bold text-[#272922] sm:text-sm">A connected growth story</p>
                <p className="mt-1 text-center text-[10px] leading-4 text-[#77786D] sm:text-xs">Airport · roads · regional development</p>
              </div>
            </div>
          </div>
          <div>
            <h1 className="max-w-3xl text-4xl font-black leading-[1.08] tracking-[-0.05em] text-[#202027] sm:text-5xl lg:text-6xl">Where Jattari meets <span className="text-[#9B773B]">tomorrow.</span></h1>
            <p className="mt-6 text-base leading-7 text-[#777C89] sm:text-lg sm:leading-8">Discover the infrastructure, connectivity and regional developments shaping Jattari into an emerging growth destination near the Jewar–Aligarh corridor.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#272922] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#9B773B]">Explore Opportunities </Link>
              <a href="#growth" className="inline-flex items-center justify-center gap-2 rounded-full border border-[#D5C8B7] px-6 py-3.5 text-sm font-bold text-[#272922] transition hover:border-[#9B773B] hover:text-[#80652F]">Discover Jattari</a>
            </div>
          </div>
        </div>
      </section>
      {/* GROWTH SNAPSHOT */}
      <section
        id="growth"
        className="relative isolate overflow-hidden border-b border-[#ddd3c1] bg-[#eee8dc] py-20 sm:py-24"
        style={{
          backgroundImage: `linear-gradient(rgba(245, 242, 234, 0.48), rgba(245, 242, 234, 0.58)), url(${growthCorridorImage})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <h2 className="max-w-xl text-4xl font-semibold leading-tight tracking-[-0.04em] text-[#292b25] sm:text-5xl">
                Four forces changing the Jattari story.
              </h2>
            </div>

            <p className="max-w-2xl text-base leading-8 text-[#686960] lg:ml-auto">
              Jattari's growth story is not based on a single project. It is
              shaped by a combination of airport connectivity, regional
              infrastructure, planned developments and expanding local
              activity.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {growthHighlights.map((item) => (
              <GrowthCard key={item.number} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* WHY JATTARI */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              
              <h2 className="text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl">
                A local town connected to a much larger regional story.
              </h2>

              <p className="mt-6 max-w-lg leading-8 text-[#6b6c65]">
                The importance of Jattari is increasingly linked with what is
                happening around it. As infrastructure improves across the
                region, its location becomes an important part of the wider
                development conversation.
              </p>

              <button
                type="button"
                aria-expanded={showApproachDetails}
                aria-controls="jattari-approach-details"
                onClick={() => setShowApproachDetails((open) => !open)}
                className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#80652f] transition hover:gap-3"
              >
                {showApproachDetails ? "Show less" : "Learn more about our approach"}
                <ChevronDown
                  size={16}
                  className={`transition-transform ${showApproachDetails ? "rotate-180" : ""}`}
                />
              </button>

              {showApproachDetails && (
                <div
                  id="jattari-approach-details"
                  className="mt-5 max-w-lg rounded-2xl border border-[#ded6c8] bg-white/70 p-5 text-sm leading-7 text-[#6b6c65]"
                >
                  <h3 className="font-semibold text-[#303129]">
                    How we look at Jattari’s growth
                  </h3>
                  <p className="mt-2">
                    We explain Jattari in the context of its connections with
                    nearby towns and the wider Jewar region. Road access,
                    everyday services and regional infrastructure all help
                    shape how people live, travel and consider property here.
                  </p>
                  <p className="mt-3">
                    Our approach is to share clear location information and
                    practical property details, while distinguishing current
                    connectivity from projects that are still developing. This
                    helps families and buyers make informed decisions based on
                    their own needs and independent checks.
                  </p>
                </div>
              )}
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {reasons.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-[24px] border border-[#ded6c8] bg-white/55 p-6 transition hover:-translate-y-1 hover:bg-white hover:shadow-[0_15px_40px_rgba(72,61,41,0.08)]"
                  >
                    <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-[#e8e1d2] text-[#8d6d38]">
                      <Icon size={20} strokeWidth={1.7} />
                    </div>

                    <h3 className="mb-2 font-semibold text-[#303129]">
                      {item.title}
                    </h3>

                    <p className="text-sm leading-7 text-[#707168]">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* AIRPORT */}
      <section className="bg-[#29302a] py-20 text-white sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              

              <h2 className="max-w-2xl text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-6xl">
                Jewar Airport is changing the regional map.
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-white/65">
                Noida International Airport is now operational, creating a
                major new aviation gateway for the wider region. Its influence
                extends beyond the airport boundary through connectivity,
                movement and associated economic activity.
              </p>

              <div className="mt-9 grid gap-3 sm:grid-cols-2">
                {[
                  "Operational international airport",
                  "Regional road connectivity",
                  "New economic activity",
                  "Greater destination visibility",
                ].map((point) => (
                  <div
                    key={point}
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.06] p-4"
                  >
                    <CheckCircle2
                      size={18}
                      className="shrink-0 text-[#d5bc7f]"
                    />
                    <span className="text-sm text-white/80">{point}</span>
                  </div>
                ))}
              </div>

              <Link
                to="/jewar-airport"
                className="mt-9 inline-flex items-center gap-2 rounded-full bg-[#d3b875] px-6 py-3.5 text-sm font-bold text-[#272922] transition hover:bg-white"
              >
                Explore Jewar Airport
               
              </Link>
            </div>

            <div className="relative">
              <div className="overflow-hidden rounded-[36px] border border-white/10 bg-white/5">
                <img
                  src="/Images/Heroimg.png"
                  alt="Jewar Airport and regional development"
                  className="h-[430px] w-full object-cover opacity-90"
                />
              </div>

              <div className="absolute -bottom-5 -left-4 rounded-2xl border border-white/10 bg-[#353d36] px-5 py-4 shadow-xl sm:left-5">
                <p className="mt-1 text-2xl font-semibold">12M</p>
                <p className="text-xs text-white/50">passengers annually</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FILM CITY */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="relative order-2 lg:order-1">
              <div className="rounded-[34px] bg-[#e6ddcc] p-4">
                <div className="relative overflow-hidden rounded-[27px]">
                  <img
                    src="/Images/Heroimg.png"
                    alt="Film City and Jattari growth region"
                    className="h-[430px] w-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#1f251f]/70 via-transparent to-transparent" />

                  <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                    <div>
                      
                      <p className="mt-1 text-2xl font-semibold text-white">
                        International Film City
                      </p>
                    </div>

                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-[#282b25]">
                      <Clapperboard size={20} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              
              <h2 className="max-w-2xl text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-6xl">
                Film City adds another dimension to the region.
              </h2>

              <p className="mt-6 max-w-2xl leading-8 text-[#696b62]">
                The International Film City is planned in Sector 21 of the
                YEIDA region, close to Noida International Airport. While the
                project site is separate from Jattari, its development is part
                of the wider regional transformation that makes the surrounding
                corridor increasingly significant.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "Entertainment and media ecosystem",
                  "New employment and business possibilities",
                  "Supporting hospitality and services",
                  "Greater regional visibility",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-sm font-medium text-[#46483f]"
                  >
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#e7dfcf] text-[#8d6d38]">
                      <CheckCircle2 size={15} />
                    </span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONNECTIVITY */}
      <section className="border-y border-[#ddd3c1] bg-[#eee8dc] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="text-center">
            
            <h2 className="mx-auto max-w-3xl text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-6xl">
              Jattari sits inside a growing network.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-8 text-[#6c6d65]">
              Growth becomes meaningful when places become easier to reach.
              Jattari's regional relevance is closely connected with the
              movement between nearby towns, highways and major development
              centres.
            </p>
          </div>

          <div className="relative mt-16">
            <div className="absolute left-[12%] right-[12%] top-16 hidden h-px bg-[#c6b99e] lg:block" />

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {corridorPoints.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="relative rounded-[28px] border border-[#d9cfbd] bg-[#f8f5ed] p-6 text-center"
                  >
                    <div className="relative z-10 mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full border-4 border-[#eee8dc] bg-[#b99552] text-white">
                      <Icon size={22} strokeWidth={1.7} />
                    </div>

                    <h3 className="mt-2 text-lg font-semibold">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-[#72736b]">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* LOCAL INFRASTRUCTURE */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
             

              <h2 className="text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl">
                Growth is not only about highways and buildings.
              </h2>

              <p className="mt-6 leading-8 text-[#6d6e66]">
                A successful growth destination also needs everyday
                infrastructure. Education, retail, housing and local services
                help create a more complete living environment.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {infrastructure.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="group rounded-[26px] border border-[#ddd5c6] bg-[#fbf9f4] p-7 transition hover:border-[#b99552] hover:shadow-[0_20px_45px_rgba(73,62,42,0.08)]"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e9e2d3] text-[#8d6c35]">
                        <Icon size={21} strokeWidth={1.7} />
                      </div>

                    </div>

                    <h3 className="mt-7 text-xl font-semibold">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-[#707168]">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* PROPERTY POTENTIAL */}
      <section className="bg-[#e4ddcf] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch">
            <div>
              
              <h2 className="max-w-2xl text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-6xl">
                What does regional growth mean for property?
              </h2>

              <p className="mt-6 max-w-2xl leading-8 text-[#66685f]">
                Infrastructure-led development can influence how people live,
                travel and invest. For property buyers, the important question
                is not simply what is being announced, but how connectivity,
                infrastructure and demand develop over time.
              </p>

              <div className="mt-9 grid gap-3 sm:grid-cols-2">
                {[
                  "Improved accessibility",
                  "Growing local services",
                  "New residential demand",
                  "Commercial opportunities",
                  "Long-term regional visibility",
                  "Multiple buyer profiles",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-2xl border border-[#d3c7b2] bg-[#f7f3ea]/70 p-4"
                  >
                    <TrendingUp
                      size={17}
                      className="shrink-0 text-[#96743b]"
                    />
                    <span className="text-sm font-medium text-[#4f5149]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex h-full flex-col justify-center rounded-[34px] border border-[#d0c3ad] bg-[#f7f3ea] p-8 sm:p-10">
             

              <h3 className="mt-8 text-2xl font-semibold">
                Think beyond today's price.
              </h3>

              <p className="mt-4 leading-8 text-[#696a62]">
                A property decision should consider location, documentation,
                infrastructure, access, future development and actual demand —
                not just projected appreciation.
              </p>

              <div className="mt-8 border-t border-[#ded5c5] pt-7">
                
                <p className="mt-3 text-lg font-medium leading-8 text-[#363830]">
                  “Look at the complete growth ecosystem, not just one
                  headline.”
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GROWTH TIMELINE */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="text-center">
           

            <h2 className="text-4xl font-semibold tracking-[-0.04em] sm:text-6xl">
              From local town to growth corridor.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-8 text-[#6b6c63]">
              Jattari's story can be understood through the gradual connection
              of local infrastructure with larger regional development.
            </p>
          </div>

          <div className="relative mt-16">
            <div className="absolute bottom-0 left-5 top-0 w-px bg-[#d3c7b3] sm:left-1/2" />

            {[
              {
               
                title: "Local Foundation",
                text: "Jattari already serves as a local centre for surrounding communities through education, retail and everyday services.",
              },
              {
                
                title: "Connectivity Improves",
                text: "Better regional road and transport connections strengthen movement between Jattari and nearby cities.",
              },
              {
                
                title: "Airport Era",
                text: "The operational Noida International Airport adds a major new aviation gateway to the wider region.",
              },
              {
               
                title: "Regional Ecosystem",
                text: "Airport-linked development, planned projects and urban expansion can create a broader ecosystem of opportunity.",
              },
            ].map((item, index) => (
              <div
                key={item.year}
                className={`relative mb-10 flex items-center gap-8 last:mb-0 sm:gap-12 ${
                  index % 2 === 0
                    ? "sm:flex-row"
                    : "sm:flex-row-reverse"
                }`}
              >
                <div className="hidden flex-1 sm:block" />

                <div className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-4 border-[#F5F2EA] bg-[#b99552] text-xs font-bold text-white">
                  {item.year}
                </div>

                <div className="flex-1 rounded-[24px] border border-[#ddd5c7] bg-[#fbf9f4] p-6 shadow-sm">
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#707168]">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-[#ddd3c1] bg-[#eee8dc] py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
              Understanding Jattari's growth.
            </h2>
          </div>

          <div className="mt-12 space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <div
                  key={faq.question}
                  className="overflow-hidden rounded-[22px] border border-[#d8cfbe] bg-[#f8f5ed]"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? -1 : index)}
                    className="flex w-full items-center justify-between gap-5 px-6 py-5 text-left"
                  >
                    <span className="font-semibold text-[#33352e]">
                      {faq.question}
                    </span>

                    <ChevronDown
                      size={19}
                      className={`shrink-0 text-[#8b6d39] transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="border-t border-[#e1d8c8] px-6 pb-6 pt-4">
                      <p className="text-sm leading-7 text-[#6d6e65]">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* LEAD CTA */}
      <section className="bg-[#e4ddcf] py-20 text-[#272922] sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.75fr] lg:items-center">
            <div>
              <h2 className="max-w-3xl text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-6xl">
                Want to understand the opportunity on the ground?
              </h2>

              <p className="mt-6 max-w-2xl leading-8 text-[#66685f]">
                Explore property options, understand the surrounding
                development and plan a site visit before making a decision.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#d5b978] px-6 py-3.5 text-sm font-bold text-[#292e29] transition hover:bg-white"
                >
                  Request a Site Visit
                  
                </Link>

                <a
                  href="tel:+919999999999"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[#272922]/15 bg-white/40 px-6 py-3.5 text-sm font-semibold text-[#272922] transition hover:bg-white/75"
                >
                  <PhoneCall size={17} />
                  Talk to Us
                </a>
              </div>
            </div>

            <div className="rounded-[30px] border border-[#272922]/10 bg-white/45 p-7 backdrop-blur-sm">
             

              <div className="mt-6 space-y-4">
                {[
                  "Verify property ownership",
                  "Check land use and approvals",
                  "Review title and registry documents",
                  "Understand actual road access",
                  "Visit the property personally",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 border-b border-[#272922]/10 pb-4 last:border-0 last:pb-0"
                  >
                    <CheckCircle2
                      size={18}
                      className="mt-0.5 shrink-0 text-[#d5bd83]"
                    />
                    <span className="text-sm leading-6 text-[#55574f]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

    
    </main>
  );
}

export default JattariGrowth;
