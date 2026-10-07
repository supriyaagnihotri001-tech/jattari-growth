import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Navigation,
  Phone,
  Send,
  Sparkles,
} from "lucide-react";

const projectOptions = [
  "Anugrah Homes",
  "Skyline Aero Homes",
  "Film City / Upcoming Project",
  "Other Jattari Property",
  "Jattari Growth Enquiry",
];

const enquiryTypes = [
  "Property Enquiry",
  "Site Visit",
  "Investment Enquiry",
  "Project Information",
  "General Enquiry",
];

const faqs = [
  {
    question: "How can I enquire about a property?",
    answer:
      "Fill out the enquiry form with your name, phone number and preferred project. Our team can then connect with you regarding the available information and next steps.",
  },
  {
    question: "Can I schedule a site visit?",
    answer:
      "Yes. Select 'Site Visit' in the enquiry type and mention your preferred project. Our team can coordinate the visit based on availability.",
  },
  {
    question: "Which projects can I enquire about?",
    answer:
      "You can enquire about Anugrah Homes, Skyline Aero Homes, upcoming projects such as Film City, or other property opportunities around Jattari.",
  },
  {
    question: "Can I get information about Jattari's growth?",
    answer:
      "Yes. You can use the contact form for a Jattari Growth enquiry or explore our dedicated Jattari Growth page for information about connectivity and regional development.",
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

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    project: "",
    enquiryType: "",
    preferredDate: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    let updatedValue = value;

    if (name === "phone") {
      updatedValue = value.replace(/\D/g, "").slice(0, 10);
    }

    setFormData((prev) => ({
      ...prev,
      [name]: updatedValue,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    const name = formData.name.trim();
    const phone = formData.phone.trim();
    const email = formData.email.trim();
    const today = new Date().toISOString().split("T")[0];

    if (!name) {
      newErrors.name = "Please enter your full name.";
    } else if (name.length < 2) {
      newErrors.name = "Name must be at least 2 characters.";
    } else if (!/^[A-Za-zÀ-ÖØ-öø-ÿ\s.'-]+$/.test(name)) {
      newErrors.name = "Please enter a valid name.";
    }

    if (!phone) {
      newErrors.phone = "Please enter your phone number.";
    } else if (!/^\d{10}$/.test(phone)) {
      newErrors.phone = "Phone number must be exactly 10 digits.";
    } else if (!/^[6-9]/.test(phone)) {
      newErrors.phone = "Please enter a valid Indian mobile number.";
    }

    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.project) {
      newErrors.project = "Please select a project.";
    }

    if (!formData.enquiryType) {
      newErrors.enquiryType = "Please select an enquiry type.";
    }

    if (formData.preferredDate && formData.preferredDate < today) {
      newErrors.preferredDate = "Please select today or a future date.";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);

      const firstErrorField = Object.keys(validationErrors)[0];
      document.getElementById(firstErrorField)?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });

      return;
    }

    setErrors({});

    console.log("Contact Enquiry:", formData);

    setSubmitted(true);
  };

  return (
    <main className="overflow-hidden bg-[#F5F2EA] text-[#272922]">
      {/* =========================================================
          HERO
      ========================================================== */}
      <section className="relative overflow-hidden border-b border-[#ddd3c1]">
        <div className="absolute inset-0">
          <img
            src="/Images/Heroimg.png"
            alt="Contact Jattari property team"
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#f5f2ea] via-[#f5f2ea]/95 to-[#f5f2ea]/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#f5f2ea] via-transparent to-transparent" />
        </div>

        <div className="relative mx-auto flex min-h-[610px] max-w-7xl items-center px-5 py-28 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <SectionLabel>Get In Touch</SectionLabel>

            <h1 className="text-5xl font-semibold leading-[0.98] tracking-[-0.055em] sm:text-6xl lg:text-8xl">
              Let's talk about
              <span className="block text-[#9b773b]">your next move.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-[#64665e] sm:text-lg">
              Looking for a property in Jattari? Interested in Anugrah Homes,
              Skyline Aero Homes or future opportunities? Send us your enquiry
              and our team will help you take the next step.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#enquiry"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#292c26] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#9b773b]"
              >
                Send An Enquiry
                
              </a>

              <a
                href="tel:+919999999999"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#c4b594] bg-[#f8f5ed]/80 px-6 py-3.5 text-sm font-semibold text-[#514a3c] backdrop-blur-sm transition hover:bg-white"
              >
                <Phone size={17} />
                Call Our Team
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CONTACT SNAPSHOT
      ========================================================== */}
      <section className="border-b border-[#ddd3c1] bg-[#eee8dc] py-14">
        <div className="mx-auto grid max-w-7xl gap-4 px-5 sm:px-8 md:grid-cols-2 lg:grid-cols-4 lg:px-12">
          <a
            href="tel:+919999999999"
            className="group rounded-[24px] border border-[#d8cfbf] bg-[#f8f5ed] p-6 transition hover:-translate-y-1 hover:border-[#b99552]"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#e7dfcf] text-[#896a36]">
              <Phone size={19} />
            </div>

            <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.18em] text-[#9b783e]">
              Call Us
            </p>

            <p className="mt-2 font-semibold text-[#33352e]">
              +91 99999 99999
            </p>
          </a>

          <a
            href="mailto:info@example.com"
            className="group rounded-[24px] border border-[#d8cfbf] bg-[#f8f5ed] p-6 transition hover:-translate-y-1 hover:border-[#b99552]"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#e7dfcf] text-[#896a36]">
              <Mail size={19} />
            </div>

            <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.18em] text-[#9b783e]">
              Email
            </p>

            <p className="mt-2 break-all font-semibold text-[#33352e]">
              info@example.com
            </p>
          </a>

          <div className="rounded-[24px] border border-[#d8cfbf] bg-[#f8f5ed] p-6">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#e7dfcf] text-[#896a36]">
              <MapPin size={19} />
            </div>

            <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.18em] text-[#9b783e]">
              Location
            </p>

            <p className="mt-2 font-semibold text-[#33352e]">
              Jattari, Aligarh, Uttar Pradesh
            </p>
          </div>

          <div className="rounded-[24px] border border-[#d8cfbf] bg-[#f8f5ed] p-6">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#e7dfcf] text-[#896a36]">
              <Clock3 size={19} />
            </div>

            <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.18em] text-[#9b783e]">
              Availability
            </p>

            <p className="mt-2 font-semibold text-[#33352e]">
              Contact us for timings
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          ENQUIRY FORM
      ========================================================== */}
      <section
        id="enquiry"
        className="scroll-mt-20 py-20 sm:py-28"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
            {/* LEFT CONTENT */}
            <div className="lg:sticky lg:top-28">
              <SectionLabel>Property Enquiry</SectionLabel>

              <h2 className="text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl">
                Tell us what you're looking for.
              </h2>

              <p className="mt-6 leading-8 text-[#6c6d65]">
                Share a few details and our team can understand your
                requirement better. Whether you are searching for a home,
                exploring an investment or planning a site visit, start here.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  {
                    icon: CheckCircle2,
                    text: "Discuss available property options",
                  },
                  {
                    icon: CalendarDays,
                    text: "Plan a site visit",
                  },
                  {
                    icon: Building2,
                    text: "Get project information",
                  },
                  {
                    icon: Navigation,
                    text: "Understand the location",
                  },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.text}
                      className="flex items-center gap-3"
                    >
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#e7dfcf] text-[#8e6d38]">
                        <Icon size={15} />
                      </div>

                      <span className="text-sm font-medium text-[#4e5048]">
                        {item.text}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="mt-9 rounded-[26px] border border-[#ddd4c5] bg-[#eee8dc] p-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#292e29] text-[#d5b978]">
                    <MessageCircle size={19} />
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#96743c]">
                      Prefer WhatsApp?
                    </p>

                    <p className="mt-1 text-sm font-semibold text-[#3c3e36]">
                      Message our team directly
                    </p>
                  </div>
                </div>

                <a
                  href="https://wa.me/919999999999"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#80632f]"
                >
                  Start a conversation
                 
                </a>
              </div>
            </div>

            {/* FORM */}
            <div className="rounded-[34px] border border-[#d9d0c0] bg-[#fbf9f4] p-6 shadow-[0_20px_60px_rgba(70,59,40,0.07)] sm:p-9 lg:p-10">
              {submitted ? (
                <div className="flex min-h-[550px] flex-col items-center justify-center text-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#e3dfd1] text-[#80652f]">
                    <CheckCircle2 size={38} strokeWidth={1.5} />
                  </div>

                  <p className="mt-7 text-xs font-bold uppercase tracking-[0.2em] text-[#9b783e]">
                    Enquiry Received
                  </p>

                  <h3 className="mt-3 text-3xl font-semibold tracking-tight text-[#30322c]">
                    Thank you for reaching out.
                  </h3>

                  <p className="mt-4 max-w-md text-sm leading-7 text-[#6c6d65]">
                    Your enquiry has been captured on this page. Connect the
                    form to your backend, EmailJS, Formspree or another service
                    to send and store enquiries.
                  </p>

                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setErrors({});
                      setFormData({
                        name: "",
                        phone: "",
                        email: "",
                        project: "",
                        enquiryType: "",
                        preferredDate: "",
                        message: "",
                      });
                    }}
                    className="mt-7 rounded-full border border-[#c6b797] px-6 py-3 text-sm font-semibold text-[#665434] transition hover:bg-[#292e29] hover:text-white"
                  >
                    Send Another Enquiry
                  </button>
                </div>
              ) : (
                <>
                  <div className="mb-8">
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9b783e]">
                      Start Here
                    </p>

                    <h3 className="mt-2 text-2xl font-semibold tracking-tight">
                      Property Enquiry Form
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-[#73746c]">
                      Fields marked with * are required.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* NAME + PHONE */}
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="name"
                          className="mb-2 block text-xs font-bold uppercase tracking-[0.12em] text-[#55574f]"
                        >
                          Full Name *
                        </label>

                        <input
                          id="name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Enter your name"
                          className={`w-full rounded-2xl border ${errors.name ? "border-red-400" : "border-[#d8d0c1]"} bg-[#f8f5ed] px-4 py-3.5 text-sm text-[#292c26] outline-none transition placeholder:text-[#aaa79e] focus:border-[#a9854a] focus:bg-white`}
                        />
                        {errors.name && (
                          <p className="mt-2 text-xs font-medium text-red-500">
                            {errors.name}
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="phone"
                          className="mb-2 block text-xs font-bold uppercase tracking-[0.12em] text-[#55574f]"
                        >
                          Phone Number *
                        </label>

                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Enter phone number"
                          className={`w-full rounded-2xl border ${errors.phone ? "border-red-400" : "border-[#d8d0c1]"} bg-[#f8f5ed] px-4 py-3.5 text-sm text-[#292c26] outline-none transition placeholder:text-[#aaa79e] focus:border-[#a9854a] focus:bg-white`}
                        />
                        {errors.phone && (
                          <p className="mt-2 text-xs font-medium text-red-500">
                            {errors.phone}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* EMAIL + PROJECT */}
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="email"
                          className="mb-2 block text-xs font-bold uppercase tracking-[0.12em] text-[#55574f]"
                        >
                          Email Address
                        </label>

                        <input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Enter email address"
                          className={`w-full rounded-2xl border ${errors.email ? "border-red-400" : "border-[#d8d0c1]"} bg-[#f8f5ed] px-4 py-3.5 text-sm text-[#292c26] outline-none transition placeholder:text-[#aaa79e] focus:border-[#a9854a] focus:bg-white`}
                        />
                        {errors.email && (
                          <p className="mt-2 text-xs font-medium text-red-500">
                            {errors.email}
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="project"
                          className="mb-2 block text-xs font-bold uppercase tracking-[0.12em] text-[#55574f]"
                        >
                          Interested Project *
                        </label>

                        <select
                          id="project"
                          name="project"
                          value={formData.project}
                          onChange={handleChange}
                          className={`w-full appearance-none rounded-2xl border ${errors.project ? "border-red-400" : "border-[#d8d0c1]"} bg-[#f8f5ed] px-4 py-3.5 text-sm text-[#292c26] outline-none transition focus:border-[#a9854a] focus:bg-white`}
                        >
                          <option value="">Select a project</option>

                          {projectOptions.map((project) => (
                            <option key={project} value={project}>
                              {project}
                            </option>
                          ))}
                        </select>
                        {errors.project && (
                          <p className="mt-2 text-xs font-medium text-red-500">
                            {errors.project}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* ENQUIRY TYPE + DATE */}
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="enquiryType"
                          className="mb-2 block text-xs font-bold uppercase tracking-[0.12em] text-[#55574f]"
                        >
                          Enquiry Type *
                        </label>

                        <select
                          id="enquiryType"
                          name="enquiryType"
                          value={formData.enquiryType}
                          onChange={handleChange}
                          className={`w-full appearance-none rounded-2xl border ${errors.enquiryType ? "border-red-400" : "border-[#d8d0c1]"} bg-[#f8f5ed] px-4 py-3.5 text-sm text-[#292c26] outline-none transition focus:border-[#a9854a] focus:bg-white`}
                        >
                          <option value="">Select enquiry type</option>

                          {enquiryTypes.map((type) => (
                            <option key={type} value={type}>
                              {type}
                            </option>
                          ))}
                        </select>
                        {errors.enquiryType && (
                          <p className="mt-2 text-xs font-medium text-red-500">
                            {errors.enquiryType}
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="preferredDate"
                          className="mb-2 block text-xs font-bold uppercase tracking-[0.12em] text-[#55574f]"
                        >
                          Preferred Site Visit Date
                        </label>

                        <input
                          id="preferredDate"
                          name="preferredDate"
                          type="date"
                           min={new Date().toISOString().split("T")[0]}
                          value={formData.preferredDate}
                          onChange={handleChange}
                          className={`w-full rounded-2xl border ${errors.preferredDate ? "border-red-400" : "border-[#d8d0c1]"} bg-[#f8f5ed] px-4 py-3.5 text-sm text-[#292c26] outline-none transition focus:border-[#a9854a] focus:bg-white`}
                        />
                        {errors.preferredDate && (
                          <p className="mt-2 text-xs font-medium text-red-500">
                            {errors.preferredDate}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* MESSAGE */}
                    <div>
                      <label
                        htmlFor="message"
                        className="mb-2 block text-xs font-bold uppercase tracking-[0.12em] text-[#55574f]"
                      >
                        Your Requirement
                      </label>

                      <textarea
                        id="message"
                        name="message"
                        rows="5"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us what type of property you are looking for..."
                        className="w-full resize-none rounded-2xl border border-[#d8d0c1] bg-[#f8f5ed] px-4 py-3.5 text-sm leading-7 text-[#292c26] outline-none transition placeholder:text-[#aaa79e] focus:border-[#a9854a] focus:bg-white"
                      />
                    </div>

                    {/* SUBMIT */}
                    <button
                      type="submit"
                      className="group flex w-full items-center justify-center gap-3 rounded-full bg-[#292e29] px-6 py-4 text-sm font-bold text-white transition hover:bg-[#9b773b]"
                    >
                      Send Property Enquiry
                      <Send
                        size={17}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </button>

                    <p className="text-center text-[11px] leading-5 text-[#929188]">
                      By submitting this form, you agree to be contacted
                      regarding your enquiry.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          LOCATION
      ========================================================== */}
      <section className="border-y border-[#ddd3c1] bg-[#eee8dc] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
            <div>
              <SectionLabel>Visit Us</SectionLabel>

              <h2 className="text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl">
                Come see the location for yourself.
              </h2>

              <p className="mt-6 leading-8 text-[#6d6e65]">
                A property is best understood on the ground. Explore the
                surrounding roads, neighbourhood, infrastructure and project
                location before making your decision.
              </p>

              <div className="mt-8 space-y-5">
                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#e1d8c8] text-[#896a36]">
                    <MapPin size={19} />
                  </div>

                  <div>
                    <p className="font-semibold text-[#35372f]">
                      Jattari, Aligarh
                    </p>
                    <p className="mt-1 text-sm text-[#77786f]">
                      Uttar Pradesh, India
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#e1d8c8] text-[#896a36]">
                    <Navigation size={19} />
                  </div>

                  <div>
                    <p className="font-semibold text-[#35372f]">
                      Site Visit
                    </p>
                    <p className="mt-1 text-sm text-[#77786f]">
                      Contact our team to coordinate your visit.
                    </p>
                  </div>
                </div>
              </div>

              <Link
                to="/jattari-growth"
                className="mt-8 inline-flex items-center gap-2 rounded-full border border-[#bdaa87] bg-[#f8f5ed] px-6 py-3.5 text-sm font-bold text-[#665333] transition hover:bg-[#292e29] hover:text-white"
              >
                Explore Jattari
                
              </Link>
            </div>

            {/* MAP STYLE CARD */}
            <a
              href="https://www.google.com/maps/search/?api=1&query=Jattari%2C%20Aligarh%2C%20Uttar%20Pradesh"
              target="_blank"
              rel="noreferrer"
              aria-label="Open Jattari, Aligarh, Uttar Pradesh in Google Maps"
              className="group relative block min-h-[420px] overflow-hidden rounded-[34px] border border-[#d3c8b7] bg-[#ded7c9] transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="absolute inset-0 opacity-60">
                <div className="absolute left-[8%] top-[15%] h-px w-[85%] rotate-[12deg] bg-[#b8ad99]" />
                <div className="absolute left-[2%] top-[45%] h-px w-[100%] rotate-[-8deg] bg-[#b8ad99]" />
                <div className="absolute left-[15%] top-[72%] h-px w-[85%] rotate-[7deg] bg-[#b8ad99]" />

                <div className="absolute left-[35%] top-[-10%] h-[130%] w-px rotate-[22deg] bg-[#b8ad99]" />
                <div className="absolute left-[70%] top-[-10%] h-[130%] w-px rotate-[-18deg] bg-[#b8ad99]" />

                <div className="absolute left-[20%] top-[20%] h-24 w-36 rounded-full border border-[#c0b5a1]" />
                <div className="absolute bottom-[12%] right-[15%] h-32 w-48 rounded-full border border-[#c0b5a1]" />
              </div>

              <div className="absolute inset-0 bg-gradient-to-br from-[#f1ebdf]/50 via-transparent to-[#cfc5b3]/50" />

              <div className="absolute left-[47%] top-[43%] flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full border-4 border-[#f1eadc] bg-[#292e29] text-[#d7bc7c] shadow-xl">
                  <MapPin size={23} fill="currentColor" />
                </div>

                <div className="mt-3 rounded-full border border-[#d0c4b1] bg-[#f8f5ed] px-4 py-2 text-xs font-bold text-[#4c4e46] shadow-md">
                  Jattari
                </div>
              </div>

              <div className="absolute left-[12%] top-[18%] rounded-full bg-[#f8f5ed]/85 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.12em] text-[#80755f] backdrop-blur">
                Aligarh
              </div>

              <div className="absolute right-[10%] top-[27%] rounded-full bg-[#f8f5ed]/85 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.12em] text-[#80755f] backdrop-blur">
                Tappal
              </div>

              <div className="absolute bottom-[18%] right-[11%] rounded-full bg-[#f8f5ed]/85 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.12em] text-[#80755f] backdrop-blur">
                Jewar Region
              </div>

              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between gap-3 rounded-2xl border border-white/50 bg-[#f8f5ed]/90 p-4 backdrop-blur">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#92713b]">
                    Location
                  </p>

                  <p className="mt-1 text-sm font-semibold text-[#373930]">
                    Jattari · Aligarh · Uttar Pradesh
                  </p>
                </div>

                <span className="inline-flex shrink-0 items-center gap-2 text-xs font-bold text-[#665333] transition group-hover:text-[#B95F3D]">
                  Open in Google Maps
                  
                </span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================
          PROJECT LINKS
      ========================================================== */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="text-center">
            <SectionLabel>Explore Before You Enquire</SectionLabel>

            <h2 className="text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
              Know the projects.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-8 text-[#6c6d64]">
              Explore our current projects and regional development pages before
              discussing your requirements with our team.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            <Link
              to="/anugrah-homes"
              className="group rounded-[28px] border border-[#ddd5c7] bg-[#fbf9f4] p-7 transition hover:-translate-y-2 hover:border-[#b99552] hover:shadow-lg"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e7dfcf] text-[#8c6c36]">
                  <Building2 size={21} />
                </div>

              
              </div>

              <h3 className="mt-7 text-xl font-semibold">
                Anugrah Homes
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#707168]">
                Explore our current residential project and its Jattari
                positioning.
              </p>
            </Link>

            <Link
              to="/skyline-aero-homes"
              className="group rounded-[28px] border border-[#ddd5c7] bg-[#fbf9f4] p-7 transition hover:-translate-y-2 hover:border-[#b99552] hover:shadow-lg"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e7dfcf] text-[#8c6c36]">
                  <Navigation size={21} />
                </div>

               
              </div>

              <h3 className="mt-7 text-xl font-semibold">
                Skyline Aero Homes
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#707168]">
                Discover another current residential opportunity within the
                wider growth corridor.
              </p>
            </Link>

            <Link
              to="/projects"
              className="group rounded-[28px] border border-[#ddd5c7] bg-[#fbf9f4] p-7 transition hover:-translate-y-2 hover:border-[#b99552] hover:shadow-lg"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e7dfcf] text-[#8c6c36]">
                  <Sparkles size={21} />
                </div>

              
              </div>

              <h3 className="mt-7 text-xl font-semibold">
                All Projects
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#707168]">
                Explore current, upcoming and wider property opportunities.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================
          FAQ
      ========================================================== */}
      <section className="border-t border-[#ddd3c1] bg-[#eee8dc] py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <div className="text-center">
            <SectionLabel>Frequently Asked</SectionLabel>

            <h2 className="text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
              Questions before you contact us.
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
                    onClick={() =>
                      setOpenFaq(isOpen ? -1 : index)
                    }
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

      {/* =========================================================
          FINAL CTA
      ========================================================== */}
      <section className="bg-[#292e29] py-20 text-white sm:py-24">
        <div className="mx-auto max-w-5xl px-5 text-center sm:px-8">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-[#d6bc7d]">
            <MessageCircle size={23} />
          </div>

          <SectionLabel light>Start A Conversation</SectionLabel>

          <h2 className="mx-auto max-w-4xl text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-6xl">
            Have a property question?
            <span className="block text-[#d5bb7b]">
              We're here to help.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-white/60">
            Whether you are buying your first property, looking for an
            investment opportunity or simply exploring Jattari, reach out to
            our team.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="#enquiry"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#d5b978] px-7 py-4 text-sm font-bold text-[#292e29] transition hover:bg-white"
            >
              Send An Enquiry
              <Send size={17} />
            </a>

            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-7 py-4 text-sm font-bold text-white transition hover:bg-white/10"
            >
              <MessageCircle size={17} />
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================
          DISCLAIMER
      ========================================================== */}
      <section className="bg-[#f0ebe1] py-7">
        <div className="mx-auto max-w-5xl px-5 text-center sm:px-8">
          <p className="text-xs leading-6 text-[#85857d]">
            Project availability, pricing, specifications and development
            information may change over time. Please verify current project
            information and all applicable property documents with the
            concerned team before making any purchase decision.
          </p>
        </div>
      </section>
    </main>
  );
}

export default Contact;
