import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, ExternalLink, MapPin } from "lucide-react";
import palwal from "../data/destinations/palwal";
import aligarh from "../data/destinations/aligarh";
import khair from "../data/destinations/khair";
import jewar from "../data/destinations/jewar";
import greaterNoida from "../data/destinations/greater-noida";
import mathura from "../data/destinations/mathura";
import agra from "../data/destinations/agra";

const destinationBySlug = {
  palwal,
  aligarh,
  khair,
  jewar,
  "greater-noida": greaterNoida,
  mathura,
  agra,
};

export default function DestinationDetail() {
  const { slug } = useParams();
  const city = destinationBySlug[slug];

  if (!city) {
    return (
      <main className="grid min-h-[60vh] place-items-center bg-[#F5F2EA] px-5 text-center text-[#272922]">
        <div>
          <h1 className="text-4xl font-bold">Destination not found</h1>
          <Link to="/" className="mt-6 inline-flex items-center gap-2 font-semibold text-[#B95F3D]">
            <ArrowLeft size={17} /> Back to home
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="overflow-hidden bg-[#F5F2EA] text-[#272922]">
      <section className="px-5 pb-14 pt-28 sm:px-8 lg:px-12 lg:pb-20 lg:pt-36">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          <div>
            <Link to="/" className="inline-flex items-center gap-2 text-sm font-semibold text-[#8A7259] hover:text-[#B95F3D]">
              <ArrowLeft size={16} /> All nearby destinations
            </Link>
            <p className="mt-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#9B783E]">
              <MapPin size={15} /> {city.region}
            </p>
            <h1 className="mt-4 text-5xl font-extrabold leading-[1.02] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
              {city.name}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[#6D6E66]">
              {city.intro}
            </p>
          </div>
          <div className="overflow-hidden rounded-[2rem] shadow-[0_24px_60px_rgba(50,43,33,0.15)]">
            <img src={city.image} alt={`${city.name}, ${city.region}`} className="h-[300px] w-full object-cover sm:h-[420px]" />
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.65fr_1.35fr] lg:gap-16">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9B783E]">City overview</p>
            <h2 className="mt-4 text-3xl font-bold tracking-[-0.04em] sm:text-4xl">A closer look at {city.name}</h2>
          </div>
          <p className="text-base leading-8 text-[#6D6E66]">{city.overview}</p>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold tracking-[-0.04em] sm:text-4xl">Famous places and local highlights</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {city.highlights.map((item, index) => (
              <article key={item.title} className="rounded-[24px] border border-[#ded5c5] bg-[#FBF9F4] p-6 sm:p-7">
                <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#B98552]">0{index + 1}</span>
                <h3 className="mt-4 text-xl font-bold">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#6D6E66]">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {city.projects && (
        <section className="bg-[#292e29] px-5 py-16 text-white sm:px-8 lg:px-12 lg:py-20">
          <div className="mx-auto max-w-7xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#D99A78]">Residential projects around Jattari</p>
            <h2 className="mt-4 text-3xl font-bold tracking-[-0.04em] sm:text-4xl">Anugrah Homes and Skyline Aero Homes</h2>
            <p className="mt-4 max-w-3xl leading-7 text-white/65">
              These residential projects are included as local property options in the wider Jewar and Jattari growth context. Visit each project website for its own current details.
            </p>
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {city.projects.map((project) => (
                <a key={project.title} href={project.href} target="_blank" rel="noopener noreferrer" className="group overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.06] transition hover:bg-white/10">
                  <img src={project.image} alt={project.title} loading="lazy" className="h-56 w-full object-cover transition duration-500 group-hover:scale-[1.02]" />
                  <div className="p-6">
                    <h3 className="flex items-center justify-between gap-3 text-xl font-bold">
                      {project.title}<ExternalLink size={17} className="shrink-0 text-[#D99A78]" />
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-white/65">{project.text}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-[#EAE3D6] px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.65fr_1.35fr] lg:gap-16">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9B783E]">Local food</p>
            <h2 className="mt-4 text-3xl font-bold tracking-[-0.04em] sm:text-4xl">Tastes to look out for</h2>
          </div>
          <div className="flex flex-wrap content-start gap-3">
            {city.foods.map((food) => (
              <span key={food} className="rounded-full border border-[#d2c5ae] bg-white/70 px-5 py-3 text-sm font-semibold text-[#5F5546]">{food}</span>
            ))}
            <p className="basis-full pt-2 text-sm leading-6 text-[#777064]">Food availability varies by locality and season; these are regional dishes and specialities associated with the area.</p>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold tracking-[-0.04em] sm:text-4xl">Explore {city.name}</h2>
          <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {city.gallery.map((image, index) => (
              <img key={image} src={image} alt={`${city.name} local view ${index + 1}`} loading="lazy" className="h-56 w-full rounded-[22px] object-cover sm:h-64" />
            ))}
          </div>
          <div className="mt-10 flex flex-col gap-4 border-t border-[#d8cfbf] pt-7 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-xl font-bold">Learn more about the Jattari region</h3>
              <p className="mt-1 text-sm text-[#777064]">Explore local development and property options.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link to="/jattari-growth" className="inline-flex items-center gap-2 rounded-full bg-[#292e29] px-5 py-3 text-sm font-bold text-white hover:bg-[#C87550]">Jattari growth <ArrowRight size={16} /></Link>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-[#cbbda8] px-5 py-3 text-sm font-bold text-[#292e29] hover:border-[#C87550]">Contact us</Link>
            </div>
          </div>
          <div className="mt-8 border-t border-[#d8cfbf] pt-5">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#8b8172]">Information sources</p>
            <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
              {city.sources.map((source) => (
                <a key={source.href} href={source.href} target="_blank" rel="noopener noreferrer" className="text-xs font-semibold text-[#876934] underline decoration-[#cbbda8] underline-offset-4 hover:text-[#B95F3D]">{source.label}</a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
