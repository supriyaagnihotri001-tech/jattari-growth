import { Link } from "react-router-dom";
import {
  ArrowRight,
  Building2,
  Clapperboard,
  MapPin,
  Plane,
  Route,
} from "lucide-react";
import airportImage from "../assets/Images/airport.png";
import filmCityImage from "../assets/Images/filmcity.png";
import connectivityImage from "../assets/Images/connectivity.png";

const developments = [
  {
    icon: Plane,
    title: "Noida International Airport",
    description:
      "The airport at Jewar is a major aviation project for the NCR and western Uttar Pradesh. Its development is intended to add passenger and cargo capacity and strengthen regional access.",
    image: airportImage,
  },
  {
    icon: Clapperboard,
    title: "International Film City",
    description:
      "The planned Film City in the YEIDA region is intended to support film, media, production and related creative industries near the airport growth corridor.",
    image: filmCityImage,
  },
  {
    icon: Route,
    title: "Regional connectivity",
    description:
      "The Yamuna Expressway and other planned regional links connect the Jewar area with nearby towns, Greater Noida and destinations toward Agra and Aligarh.",
    image: connectivityImage,
  },
];

export default function JewarDevelopment() {
  return (
    <main className="overflow-hidden bg-[#F5F2EA] text-[#272922]">
      <section className="relative isolate overflow-hidden bg-[#292e29] px-5 pb-16 pt-28 text-white sm:px-8 lg:px-12 lg:pb-24 lg:pt-36">
        <div className="pointer-events-none absolute inset-0 -z-10 ">
          <img src={airportImage} alt="" className="h-full w-full object-cover" />
        </div>
        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-[#20251f] via-[#20251f]/40 to-[#20251f]/15" />
        <div className="mx-auto max-w-7xl">
         
          <h1 className="max-w-4xl text-5xl font-bold leading-[1.02] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
            A new growth corridor around Jewar.
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
            Explore how the airport, planned Film City and regional transport
            links are shaping development around Jewar and the wider Yamuna
            region.
          </p>
          <Link
            to="/jewar-airport"
            className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#C87550] px-6 py-3.5 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-[#B95F3D]"
          >
            Airport details 
          </Link>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
           
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">
              What is changing around Jewar?
            </h2>
            <p className="mt-5 leading-8 text-[#696b63]">
              Jewar is part of a wider development area supported by large
              transport and employment projects. These initiatives may bring
              new business activity and demand for local services over time;
              their timing and impact depend on project delivery and regional
              planning.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {developments.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  className="overflow-hidden rounded-[28px] border border-[#ddd5c7] bg-[#fbf9f4]"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="h-56 w-full object-cover"
                  />
                  <div className="p-6 sm:p-7">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#e8dfcd] text-[#8b6a34]">
                      <Icon size={21} />
                    </div>
                    <h3 className="mt-5 text-xl font-semibold">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-[#707168]">
                      {item.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e8dfcd] text-[#8b6a34]">
              <Building2 size={22} />
            </div>
            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
              How this connects to Jattari
            </h2>
          </div>
          <div>
            <p className="leading-8 text-[#696b63]">
              Jattari sits within the broader regional network linking Jewar,
              Tappal and Aligarh. Airport access, the Yamuna Expressway and
              surrounding infrastructure form part of the area’s wider
              connectivity story. Jattari also has its own local services and
              residential projects.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                to="/jattari-growth"
                className="inline-flex items-center gap-2 rounded-full bg-[#292e29] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#C87550]"
              >
                Explore Jattari growth 
              </Link>
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 rounded-full border border-[#d5c8b7] px-6 py-3.5 text-sm font-bold text-[#292e29] transition hover:border-[#C87550]"
              >
                View projects
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
