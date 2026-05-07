import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, type ReactNode, type CSSProperties } from "react";
import heroVideo from "@/assets/hero-bg.mp4";
import phone from "@/assets/m-phone.png";

const IMG = {
  birthdays:      "https://images.unsplash.com/photo-1577998474517-7eeeed4e448a?auto=format&fit=crop&w=800&q=80",
  datenight:      "https://images.unsplash.com/photo-1639244132045-94c307ff4bfc?auto=format&fit=crop&w=800&q=80",
  graduations:    "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80",
  proposals:      "https://images.unsplash.com/photo-1542810185-a9c0362dcff4?auto=format&fit=crop&w=800&q=80",
  gatherings:     "https://images.unsplash.com/photo-1519671282429-b44660ead0a7?auto=format&fit=crop&w=800&q=80",
  velvet:         "https://images.unsplash.com/photo-1616669944447-d65d41a222bd?auto=format&fit=crop&w=800&q=80",
  garden:         "https://images.unsplash.com/photo-1744330311965-ca7342d73512?auto=format&fit=crop&w=800&q=80",
  skyline:        "https://images.unsplash.com/photo-1621275471769-e6aa344546d5?auto=format&fit=crop&w=800&q=80",
  featuredTonight:"https://images.unsplash.com/photo-1669524472809-fabe465ec45e?auto=format&fit=crop&w=800&q=80",
  exclusivity:    "https://images.unsplash.com/photo-1777915392856-e1e5c46de326?auto=format&fit=crop&w=800&q=80",
};
import avatar1 from "@/assets/avatar-1.jpg";
import avatar2 from "@/assets/avatar-2.jpg";
import avatar3 from "@/assets/avatar-3.jpg";
import { Button } from "@/components/ui/button";
import {
  Sparkles,
  Star,
  ArrowUpRight,
  Heart,
  Zap,
  MapPin,
  UserRound,
  CheckCircle2,
  Headphones,
  Clock,
} from "lucide-react";
import milaLogo from "@/assets/mila-logo.png";
import commercialRegister from "@/assets/commercial-register.png";
import vatLogo from "@/assets/vat-logo.png";
import btnAppStore from "@/assets/btn-app-store.png";
import btnGooglePlay from "@/assets/btn-google-play.png";
import googlePlayLogo from "@/assets/google-play-logo.png";
import appleLogo from "@/assets/apple-logo.png";

export const Route = createFileRoute("/")({
  component: Index,
});

const moments = [
  { label: "Birthdays",   img: IMG.birthdays,   tag: "01", hue: "var(--accent-sun)" },
  { label: "Date Nights", img: IMG.datenight,   tag: "02", hue: "var(--brand-300)" },
  { label: "Graduations", img: IMG.graduations, tag: "03", hue: "var(--accent-sky)" },
  { label: "Proposals",   img: IMG.proposals,   tag: "04", hue: "var(--accent-violet)" },
  { label: "Gatherings",  img: IMG.gatherings,  tag: "05", hue: "var(--accent-mint)" },
];

const venues = [
  { tag: "Luxury",   name: "The Velvet Room",  sub: "Fine Dining",  img: IMG.velvet,  city: "Riyadh",  price: "$$$" },
  { tag: "Family",   name: "Garden Lane Café", sub: "Café & Brunch", img: IMG.garden,  city: "Al Olaya", price: "$$" },
  { tag: "Romantic", name: "Skyline Terrace",  sub: "Rooftop Bar",  img: IMG.skyline, city: "KAFD",     price: "$$$" },
];

const steps = [
  { n: "01", title: "Pick a vibe", desc: "Choose what you're celebrating — birthday, date night, you name it.", time: "10 sec", icon: Sparkles },
  { n: "02", title: "Match a place", desc: "We surface curated venues that already get it. Photos, prices, perks.", time: "20 sec", icon: MapPin },
  { n: "03", title: "Tap to book", desc: "Confirmed in seconds. Walk in. Everything's set.", time: "15 sec", icon: Zap },
];

const testimonials = [
  { quote: "Booked an anniversary dinner during my lunch break. It felt curated, not generic.", name: "Lana K.", role: "Anniversary" },
  { quote: "I planned my surprise proposal in 4 minutes. Four. Minutes.", name: "Marco D.", role: "Proposal" },
  { quote: "Whole birthday for 14 friends — venue, cake, decor — all in the app.", name: "Aïsha R.", role: "Birthday 30th" },
];

const APP_STORE_URL = "https://apps.apple.com/sa/app/mila-celebrations/id6458788746";
const GOOGLE_PLAY_URL = "https://play.google.com/store/apps/details?id=com.MilaCompany.Mila&hl=en";
const INSTAGRAM_URL = "https://www.instagram.com/mila.celebrations";
const TIKTOK_URL = "https://www.tiktok.com/@mila.celebrations";
const LINKEDIN_URL = "https://www.linkedin.com/company/mila-celebration/posts/?feedView=all";

function StoreButtons({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const cls =
    tone === "dark"
      ? "bg-brand-900 text-white hover:bg-brand-800"
      : "bg-white text-brand-900 hover:bg-white/90";
  return (
    <div className="flex flex-wrap gap-3">
      <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" className={`group inline-flex items-center gap-3 rounded-[8px] px-5 py-3 ${cls} transition shadow-[var(--shadow-soft)]`}>
        <img src={appleLogo} alt="" aria-hidden className="h-5 w-5 object-contain" />
        <span className="text-left leading-tight">
          <span className="block text-[10px] uppercase tracking-wider opacity-70">Download on</span>
          <span className="block text-sm font-semibold">App Store</span>
        </span>
      </a>
      <a href={GOOGLE_PLAY_URL} target="_blank" rel="noopener noreferrer" className={`group inline-flex items-center gap-3 rounded-[8px] px-5 py-3 ${cls} transition shadow-[var(--shadow-soft)]`}>
        <img src={googlePlayLogo} alt="" aria-hidden className="h-5 w-5 object-contain" />
        <span className="text-left leading-tight">
          <span className="block text-[10px] uppercase tracking-wider opacity-70">Get it on</span>
          <span className="block text-sm font-semibold">Google Play</span>
        </span>
      </a>
    </div>
  );
}

function Logo({ light = false }: { light?: boolean }) {
  return (
    <div className="flex items-center gap-2">
      <img
        src={milaLogo}
        alt="Mila"
        className={`h-9 w-auto ${light ? "brightness-0 invert" : ""}`}
      />
    </div>
  );
}

function Marquee({ items }: { items: string[] }) {
  const row = [...items, ...items];
  return (
    <div className="relative overflow-hidden border-y border-brand-200 bg-brand-100">
      <div className="flex gap-8 py-2.5 animate-[marquee_40s_linear_infinite] whitespace-nowrap">
        {row.map((t, i) => (
          <span key={i} className="font-display text-base md:text-lg text-brand-800 inline-flex items-center gap-8">
            {t}
            <span className="text-brand-400">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function Reveal({
  children,
  as: Tag = "div",
  delay = 0,
  className = "",
  y = 24,
  style,
  ...rest
}: {
  children: ReactNode;
  as?: any;
  delay?: number;
  className?: string;
  y?: number;
  style?: CSSProperties;
  [key: string]: any;
}) {
  const ref = useRef<HTMLElement | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            el.classList.add("is-visible");
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <Tag
      ref={ref as any}
      className={`reveal ${className}`}
      style={{ transitionDelay: `${delay}ms`, ["--reveal-y" as any]: `${y}px`, ...(style || {}) } as CSSProperties}
      {...rest}
    >
      {children}
    </Tag>
  );
}

function Index() {
  const stickerWords = [
    "birthdays",
    "date nights",
    "proposals",
    "graduations",
    "anniversaries",
    "girls night",
    "celebrations",
  ];
  return (
    <main className="min-h-screen text-foreground overflow-hidden">
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes floaty {
          0%,100% { transform: translateY(0) rotate(var(--r,0deg)); }
          50% { transform: translateY(-10px) rotate(var(--r,0deg)); }
        }
        .floaty { animation: floaty 6s ease-in-out infinite; }

        @keyframes blob {
          0%,100% { transform: translate(0,0) scale(1); }
          33% { transform: translate(20px,-15px) scale(1.08); }
          66% { transform: translate(-15px,10px) scale(0.95); }
        }
        .blob { animation: blob 14s ease-in-out infinite; }

        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .spin-slow { animation: spin-slow 18s linear infinite; }

        .reveal {
          opacity: 0;
          transform: translateY(var(--reveal-y, 24px));
          transition: opacity 0.8s cubic-bezier(0.22,1,0.36,1),
                      transform 0.8s cubic-bezier(0.22,1,0.36,1);
          will-change: opacity, transform;
        }
        .reveal.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        @keyframes hero-rise {
          from { opacity: 0; transform: translateY(28px); filter: blur(6px); }
          to { opacity: 1; transform: translateY(0); filter: blur(0); }
        }
        .hero-rise {
          opacity: 0;
          animation: hero-rise 1.1s cubic-bezier(0.22,1,0.36,1) both;
          will-change: opacity, transform, filter;
        }

        @keyframes phone-rise {
          0% { opacity: 0; transform: translateY(100%) rotate(-8deg); }
          100% { opacity: 1; transform: translateY(22%) rotate(-8deg); }
        }
        .phone-rise {
          opacity: 0;
          animation: phone-rise 1.6s cubic-bezier(0.22,1,0.36,1) 2s both;
          will-change: opacity, transform;
        }
        .phone-glow {
          filter: drop-shadow(0 25px 35px rgba(0,0,0,0.25)) drop-shadow(0 10px 15px rgba(0,0,0,0.15));
        }

        @media (prefers-reduced-motion: reduce) {
          .reveal { opacity: 1; transform: none; transition: none; }
          .floaty, .blob, .spin-slow { animation: none; }
          .hero-rise { opacity: 1; animation: none; }
          article { transition: none !important; }
          article img { transition: none !important; }
        }
      `}</style>

      {/* NAV */}
      <header className="relative z-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between gap-3 sm:gap-6">
          <Logo />
          <nav className="hidden md:flex items-center gap-10 text-[15px] font-medium text-brand-900">
            <a href="#" className="relative text-brand-600">
              Home
              <span className="absolute -bottom-2 left-0 right-0 h-[2px] rounded-full bg-brand-600" />
            </a>
            <a href="https://milacelebrations.com/en" target="_blank" rel="noopener noreferrer" className="hover:text-brand-600 transition-colors">Event Supplies</a>
            <a href="https://milacelebrations.com/en/categories" target="_blank" rel="noopener noreferrer" className="hover:text-brand-600 transition-colors">Categories</a>
            <a href="https://milacelebrations.com/en/items" target="_blank" rel="noopener noreferrer" className="hover:text-brand-600 transition-colors">Products</a>
<a href="https://milacelebrations.com/en/blogs" target="_blank" rel="noopener noreferrer" className="hover:text-brand-600 transition-colors">Blogs</a>
          </nav>
          <div className="flex items-center gap-3 sm:gap-6 text-brand-900">
            <button className="hidden sm:inline-flex items-center gap-2 text-[15px] font-medium hover:text-brand-600 transition-colors">
              <UserRound className="h-5 w-5" strokeWidth={1.75} />
              Sign In
            </button>
            <div className="hidden sm:flex items-center gap-2 text-[15px]">
              <button className="font-medium underline underline-offset-4 decoration-1">En</button>
              <span className="text-brand-300">|</span>
              <button className="text-muted-foreground hover:text-brand-900 transition-colors">Ar</button>
            </div>
            <button aria-label="Wishlist" className="hover:text-brand-600 transition-colors">
              <Heart className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={1.75} />
            </button>
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-2 rounded-full bg-brand-900 text-white px-5 py-2.5 text-[14px] font-medium hover:bg-brand-700 transition-colors shadow-sm"
            >
              Download App
            </a>
          </div>
        </div>
      </header>

      {/* HERO — rounded card, soft faded background */}
      <section className="px-4 md:px-6">
        <div className="relative max-w-[1400px] mx-auto rounded-[2.5rem] overflow-hidden text-brand-900 border border-brand-200">
          {/* Background image, faded */}
          <div className="absolute inset-0 z-0">
            <video src={heroVideo} autoPlay muted playsInline preload="auto" className="absolute inset-0 h-full w-full object-cover opacity-40 bg-background" />
            <div className="absolute inset-0 bg-[linear-gradient(135deg,color-mix(in_oklab,var(--brand-500)_30%,transparent)_0%,color-mix(in_oklab,var(--accent-blush)_25%,transparent)_50%,color-mix(in_oklab,var(--accent-mint)_25%,transparent)_100%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(50%_40%_at_85%_20%,_var(--accent-sun)_0%,_transparent_70%),radial-gradient(40%_35%_at_10%_85%,_var(--brand-300)_0%,_transparent_70%)] opacity-25" />
            {/* Readability scrim — soft vignette behind copy */}
            <div className="absolute inset-0 bg-[radial-gradient(70%_70%_at_25%_55%,rgba(255,255,255,0.55)_0%,transparent_70%)]" />
          </div>

          <div className="relative z-10 px-5 sm:px-6 md:px-12 lg:px-16 pt-10 sm:pt-14 md:pt-20 pb-12 sm:pb-16 md:pb-20 grid md:grid-cols-12 gap-8 md:gap-10 items-end">
            {/* Left: headline */}
            <div className="md:col-span-8">
              <span className="hero-rise inline-flex items-center gap-2 rounded-full bg-white/90 backdrop-blur px-4 py-1.5 text-xs font-medium text-brand-900 border border-white/80 shadow-sm" style={{ animationDelay: "80ms" }}>
                <span className="h-1.5 w-1.5 rounded-full bg-brand-500 animate-pulse" />
                The celebration booking app
              </span>

              <h1 className="hero-rise mt-6 sm:mt-7 font-display tracking-[-0.02em] text-[40px] sm:text-[56px] md:text-[64px] lg:text-[72px] font-extrabold leading-[1.1] md:leading-[1.15] lg:leading-[110px] text-brand-900 [text-shadow:0_1px_2px_rgba(255,255,255,0.5)]" style={{ animationDelay: "220ms" }}>
                Book your perfect{" "}
                <span className="italic text-brand-600">celebration</span>{" "}
                in seconds.
              </h1>

              <p className="hero-rise mt-6 text-lg text-brand-900 max-w-xl font-medium" style={{ animationDelay: "420ms" }}>
                From birthdays to date nights — discover and book ready-made experiences at top venues. No planning. Just moments.
              </p>

              {/* App store buttons */}
              <div className="hero-rise mt-9 flex flex-wrap items-center gap-3" style={{ animationDelay: "560ms" }}>
                <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-3 rounded-[8px] px-5 py-3 bg-brand-900 text-white hover:bg-brand-800 transition shadow-[var(--shadow-elegant)] ring-1 ring-white/20">
                  <img src={appleLogo} alt="" aria-hidden className="h-7 w-7 object-contain" />
                  <span className="text-left leading-tight">
                    <span className="block text-[10px] uppercase tracking-wider opacity-70">Download on the</span>
                    <span className="block text-base font-semibold">App Store</span>
                  </span>
                </a>
                <a href={GOOGLE_PLAY_URL} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-3 rounded-[8px] px-5 py-3 bg-brand-900 text-white hover:bg-brand-800 transition shadow-[var(--shadow-elegant)] ring-1 ring-white/20">
                  <img src={googlePlayLogo} alt="" aria-hidden className="h-7 w-7 object-contain" />
                  <span className="text-left leading-tight">
                    <span className="block text-[10px] uppercase tracking-wider opacity-70">Get it on</span>
                    <span className="block text-base font-semibold">Google Play</span>
                  </span>
                </a>
              </div>

              <p className="hero-rise mt-5 inline-flex items-center gap-2 text-sm text-brand-900/85 font-medium" style={{ animationDelay: "720ms" }}>
                <span className="text-brand-600">✦</span> Exclusive offers available only on the app
              </p>
            </div>

            {/* Right: stacked floating cards */}
            <div className="md:col-span-4 space-y-4 md:pl-6 w-full self-end">
              {/* Featured venue card */}
              <div className="relative rounded-[2rem] overflow-hidden shadow-[var(--shadow-elegant)] transition-transform duration-500 hover:-translate-y-1 hover:shadow-2xl floaty aspect-[4/5]">
                <img src={IMG.featuredTonight} alt="Skyline Proposal Experience" className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-900/40 via-transparent to-transparent" />

                {/* Glass info tile */}
                <div className="absolute inset-x-4 bottom-4 rounded-2xl bg-white/15 backdrop-blur-xl border border-white/25 px-5 py-4 text-white shadow-lg">
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <div className="text-[10px] uppercase tracking-[0.25em] text-white/80 font-semibold">Recently Booked</div>
                      <div className="font-display text-xl mt-1 leading-tight truncate">Skyline Proposal Experience</div>
                      <div className="text-xs text-white/75 mt-1">Riyadh · 2 minutes ago</div>
                    </div>
                    <div className="flex shrink-0 items-center gap-0.5 pt-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="h-3.5 w-3.5 fill-[var(--accent-sun)] text-[var(--accent-sun)]" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Live booking ticker */}
              <div className="rounded-2xl bg-white/80 backdrop-blur-xl border border-brand-200 px-4 py-3 flex items-center gap-3 text-brand-900">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inset-0 rounded-full bg-brand-500 animate-ping opacity-75" />
                  <span className="relative h-2.5 w-2.5 rounded-full bg-brand-500" />
                </span>
                <div className="text-xs">
                  <div className="font-semibold">Ahmed just booked a proposal</div>
                  <div className="text-brand-800/65">Skyline Terrace · 8 sec ago</div>
                </div>
              </div>
            </div>
          </div>

          {/* Phone mockup rising from bottom, masked by hero rounded corners */}
          <div className="phone-rise pointer-events-none absolute bottom-0 -right-2 lg:-right-6 z-10 hidden md:block w-[180px] lg:w-[220px]">
            <span aria-hidden className="absolute inset-0 -m-10 rounded-full bg-[var(--accent-sun)]/50 blur-3xl" />
            <span aria-hidden className="absolute inset-0 -m-6 rounded-[3rem] bg-brand-600/30 blur-2xl" />
            <img
              src={phone}
              alt="Mila app preview"
              className="relative w-full phone-glow"
            />
          </div>
        </div>

        {/* Marquee */}
        <div className="mt-10">
          <Marquee items={stickerWords} />
        </div>
      </section>

      {/* MOMENTS — asymmetric */}
      <section id="moments" className="relative max-w-[1400px] mx-auto px-5 sm:px-6 py-16 sm:py-20 md:py-28">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-10 md:mb-12">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.3em] text-brand-600">A moment for everything</span>
            <h2 className="mt-3 font-display text-[36px] sm:text-[44px] md:text-[56px] font-bold leading-[1.1] md:leading-[60px] tracking-tight">
              What are we<br />
              <span className="italic text-brand-500">celebrating?</span>
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <p className="max-w-sm text-brand-800/70">
              Every category is a hand-picked playbook of venues, menus and surprises designed for that exact kind of night.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-12 grid-rows-2 gap-4 md:gap-5 h-auto md:h-[680px]">
          {moments.map((m, i) => {
            const positions = [
              "col-span-12 md:col-span-5 md:row-span-2",
              "col-span-6 md:col-span-4 md:row-span-1",
              "col-span-6 md:col-span-3 md:row-span-1",
              "col-span-6 md:col-span-3 md:row-span-1",
              "col-span-6 md:col-span-4 md:row-span-1",
            ];
            return (
              <Reveal
                key={m.label}
                as="a"
                delay={i * 90}
                className={`group relative overflow-hidden rounded-[1.75rem] ${positions[i]} min-h-[220px] md:min-h-0 block transition-transform duration-500 hover:-translate-y-1`}
              >
                <img src={m.img} alt={m.label} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-900/85 via-brand-900/15 to-transparent" />
                <span className="absolute top-4 left-4 text-[10px] tracking-[0.25em] uppercase text-white/80">{m.tag}</span>
                <span
                  className="absolute top-4 right-4 h-9 w-9 rounded-full grid place-items-center text-brand-900 transition-transform duration-500 group-hover:rotate-[135deg] group-hover:scale-110"
                  style={{ background: m.hue }}
                >
                  <ArrowUpRight className="h-4 w-4" />
                </span>
                <div className="absolute inset-x-5 bottom-5 text-white transition-transform duration-500 group-hover:-translate-y-1">
                  <div className="font-display text-2xl md:text-3xl leading-tight">{m.label}</div>
                  <div className="mt-1 text-xs text-white/75">120+ venues ready</div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* VENUES */}
      <section id="venues" className="relative max-w-[1400px] mx-auto px-5 sm:px-6 py-16 sm:py-20 md:py-28">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-10 md:mb-12">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.3em] text-brand-600">Hand-picked spots</span>
            <h2 className="mt-3 font-display text-[36px] sm:text-[44px] md:text-[56px] font-bold leading-[1.1] md:leading-[60px] tracking-tight">
              Places that<br />
              <span className="italic text-brand-500">already get it.</span>
            </h2>
          </Reveal>
          <a href="#" className="text-sm font-medium text-brand-700 hover:text-brand-800 inline-flex items-center gap-1">
            see all in app <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {venues.map((v, i) => (
            <Reveal
              as="article"
              key={v.name}
              delay={i * 200}
              className="group relative rounded-[2rem] bg-white cursor-pointer
                shadow-[0_2px_16px_-4px_rgba(80,40,120,0.10)]
                transition-[transform,box-shadow] duration-[220ms] ease-[cubic-bezier(0.34,1.56,0.64,1)]
                hover:-translate-y-3
                hover:shadow-[0_20px_48px_-8px_rgba(80,40,120,0.22),0_4px_16px_-4px_rgba(80,40,120,0.10)]"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-t-[2rem]">
                <img
                  src={v.img}
                  alt={v.name}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover
                    transition-transform duration-[600ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)]
                    group-hover:scale-[1.07]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-900/80 via-brand-900/10 to-transparent
                  transition-opacity duration-[220ms] group-hover:from-brand-900/90" />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/95 text-xs font-medium text-brand-800">
                  {v.tag}
                </span>
                <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-brand-900/70 backdrop-blur text-xs text-white">
                  {v.price}
                </span>
                <div className="absolute inset-x-5 bottom-5 text-white
                  transition-transform duration-[220ms] ease-[cubic-bezier(0.34,1.56,0.64,1)]
                  group-hover:-translate-y-1">
                  <div className="text-[10px] uppercase tracking-[0.25em] text-white/80">{v.sub} · {v.city}</div>
                  <div className="mt-1 font-display text-3xl leading-tight">{v.name}</div>
                </div>
              </div>
              <div className="flex items-center p-5">
                <div className="text-sm text-brand-800/80 inline-flex items-center gap-1.5">
                  <Star className="h-4 w-4 fill-[var(--accent-sun)] text-[var(--accent-sun)]" /> 4.9 · 240+ celebrations
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* HOW — light panel */}
      <section id="how" className="relative bg-brand-100 text-brand-900 overflow-hidden">
        {/* Ambient gradient blobs */}
        <div className="absolute -top-40 -left-32 h-[480px] w-[480px] rounded-full bg-brand-300/40 blur-[120px]" />
        <div className="absolute -bottom-40 -right-32 h-[520px] w-[520px] rounded-full bg-[var(--accent-mint)]/40 blur-[120px]" />
        <div className="absolute inset-0 opacity-[0.08] [background-image:radial-gradient(var(--brand-400)_1px,transparent_1px)] [background-size:22px_22px]" />

        <div className="relative max-w-[1400px] mx-auto px-5 sm:px-6 py-16 sm:py-20 md:py-28">
          <Reveal className="max-w-3xl">
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-brand-600">
              <span className="h-px w-8 bg-brand-400" /> How Mila works
            </span>
            <h2 className="mt-4 font-display text-[36px] sm:text-[44px] md:text-[56px] font-bold leading-[1.1] md:leading-[60px]">
              From craving to{" "}
              <span className="italic text-brand-500">celebrating</span>
              <br />
              in under a minute.
            </h2>
            <p className="mt-6 text-brand-800/70 max-w-xl text-base sm:text-lg">
              Three taps. Zero spreadsheets. We turned the months-long planning circus into a 45-second flow.
            </p>
          </Reveal>

          <div className="relative mt-20">
            <div className="hidden md:block absolute top-12 left-[8%] right-[8%] h-px bg-gradient-to-r from-transparent via-brand-300 to-transparent" />

            <ol className="grid md:grid-cols-3 gap-8 md:gap-6">
              {steps.map((s, idx) => {
                const Icon = s.icon;
                return (
                  <Reveal as="li" key={s.n} delay={idx * 140} className="group relative">
                    <div className="relative flex md:justify-center">
                      <div className="relative h-24 w-24 rounded-full bg-white border border-brand-200 flex items-center justify-center shadow-[0_10px_40px_-15px_rgba(80,40,120,0.3)] transition-all duration-500 group-hover:border-brand-500 group-hover:-translate-y-1">
                        <span className="font-display text-4xl text-brand-700">{s.n}</span>
                        <span className="absolute -bottom-2 -right-2 h-9 w-9 rounded-full bg-brand-900 text-[var(--accent-sun)] flex items-center justify-center shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                          <Icon className="h-4 w-4" strokeWidth={2.25} />
                        </span>
                      </div>
                    </div>

                    <div className="mt-8 rounded-3xl bg-white border border-brand-200 p-7 transition-all duration-500 group-hover:shadow-[var(--shadow-soft)] group-hover:-translate-y-1 md:text-center">
                      <div className="flex items-center gap-2 md:justify-center text-[10px] uppercase tracking-[0.28em] text-brand-600 font-semibold">
                        <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
                        Step {s.n} · {s.time}
                      </div>
                      <h3 className="mt-3 font-display text-3xl text-brand-900">{s.title}</h3>
                      <p className="mt-3 text-brand-800/70 text-sm leading-relaxed md:max-w-[28ch] md:mx-auto">{s.desc}</p>
                    </div>
                  </Reveal>
                );
              })}
            </ol>
          </div>

          <Reveal delay={400} className="mt-16 flex flex-wrap items-center justify-between gap-6 rounded-3xl bg-white border border-brand-200 px-6 sm:px-8 py-6">
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {[avatar1, avatar2, avatar3].map((src, i) => (
                  <span key={i} className="h-10 w-10 rounded-full border-2 border-white overflow-hidden">
                    <img src={src} alt="" className="h-full w-full object-cover" />
                  </span>
                ))}
              </div>
              <div className="text-sm">
                <div className="font-semibold text-brand-900">Joined by 50,000+ celebrators</div>
                <div className="text-brand-800/60 text-xs">Average flow time: 45 seconds</div>
              </div>
            </div>
            <StoreButtons tone="dark" />
          </Reveal>
        </div>
      </section>


      <section className="px-5 sm:px-6 py-16 sm:py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-12 md:gap-16 lg:gap-24 items-center">
          <Reveal className="relative">
            <div className="relative rounded-[2rem] overflow-hidden shadow-[var(--shadow-soft)] aspect-[4/5]">
              <img
                src={IMG.exclusivity}
                alt="Friends celebrating at an exclusive venue"
                loading="lazy"
                width={1024}
                height={1280}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 right-6 md:-right-10 w-[384px] max-w-[calc(100%-3rem)] rounded-2xl bg-white p-6 shadow-[var(--shadow-elegant)] border border-brand-100">
              <div className="flex items-center gap-3">
                <span className="grid place-items-center h-10 w-10 rounded-full bg-brand-100 text-brand-700">
                  <Clock className="h-5 w-5" />
                </span>
                <div className="font-semibold text-brand-900">Instant Confirmation</div>
              </div>
              <p className="mt-3 text-sm text-brand-800/75 leading-relaxed">
                "I booked a surprise dinner for 12 people in under a minute. The experience was flawless from start to finish."
              </p>
              <div className="mt-3 text-[11px] uppercase tracking-[0.25em] text-brand-700 font-semibold">
                — Sarah J., Manhattan
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <span className="text-xs uppercase tracking-[0.3em] text-brand-600 font-semibold">Exclusivity</span>
            <h2 className="mt-4 font-display text-[36px] sm:text-[44px] md:text-[56px] font-bold leading-[1.1] md:leading-[60px] tracking-tight">
              Built for moments,{" "}
              <span className="italic text-brand-300">not for stress.</span>
            </h2>
            <p className="mt-6 text-brand-800/75 max-w-md leading-relaxed">
              Mila is more than a booking app; it's your personal concierge for life's most important milestones. We handle the discovery, negotiation, and logistics.
            </p>

            <div className="mt-10 grid sm:grid-cols-2 gap-8 max-w-lg">
              <div>
                <span className="grid place-items-center h-10 w-10 rounded-full bg-brand-100 text-brand-700">
                  <CheckCircle2 className="h-5 w-5" />
                </span>
                <div className="mt-4 font-semibold text-brand-900">Curated Experiences</div>
                <p className="mt-2 text-sm text-brand-800/70 leading-relaxed">
                  Only the top 5% of venues make it onto Mila. Quality is guaranteed.
                </p>
              </div>
              <div>
                <span className="grid place-items-center h-10 w-10 rounded-full bg-brand-100 text-brand-700">
                  <Headphones className="h-5 w-5" />
                </span>
                <div className="mt-4 font-semibold text-brand-900">Concierge Support</div>
                <p className="mt-2 text-sm text-brand-800/70 leading-relaxed">
                  24/7 priority support for every booking to ensure perfection.
                </p>
              </div>
            </div>

            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-brand-900 text-white px-6 py-3 text-sm font-medium hover:bg-brand-800 transition-colors shadow-sm"
            >
              Download to Explore
            </a>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 sm:px-6 pb-16 sm:pb-20">
        <div className="relative max-w-[1400px] mx-auto rounded-[1.75rem] sm:rounded-[2.5rem] overflow-hidden bg-brand-100 border border-brand-200">
          <div className="absolute inset-0 bg-[linear-gradient(135deg,var(--brand-100)_0%,var(--accent-blush)_45%,var(--accent-mint)_100%)] opacity-90" />
          
          <div className="absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-[var(--brand-300)]/50 blur-3xl blob" style={{ animationDelay: "-7s" }} />


          <div className="relative grid md:grid-cols-[1.3fr_1fr] gap-8 items-center px-6 sm:px-8 md:px-16 py-14 sm:py-20 text-brand-900">
            <Reveal>
              <span className="text-xs uppercase tracking-[0.3em] text-brand-600">Your moment, one tap away</span>
              <h2 className="mt-4 font-display text-[36px] sm:text-[44px] md:text-[56px] font-bold leading-[1.1] md:leading-[60px] tracking-tight">
                Download Mila.<br />
                <span className="italic text-brand-500">Book the moment.</span>
              </h2>
              <p className="mt-5 text-brand-800/75 max-w-md">
                The last group chat about "where should we go" you'll ever need. Open the app, tap the night you want, walk in.
              </p>
              <div className="mt-8"><StoreButtons tone="dark" /></div>
              <div className="mt-6 flex items-center gap-2 text-sm text-brand-800/75">
                <Zap className="h-4 w-4 text-brand-600" /> Instant confirmation · No account required to browse
              </div>
            </Reveal>
            <div className="relative h-[340px] sm:h-[420px] md:h-[520px]">
              <img src={phone} alt="Mila app preview" loading="lazy" className="absolute inset-0 m-auto h-full w-auto drop-shadow-2xl floaty" />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-brand-900 text-white">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-6 md:px-10 py-12 sm:py-16 grid md:grid-cols-3 gap-10 md:gap-12 items-start">
          <div>
            <Logo light />
            <div className="mt-8 space-y-1 text-[15px] text-white/85 leading-relaxed">
              <p>Mila Al-thakia for communication &amp;</p>
              <p>informations technology</p>
              <p>Saudi Arabia, Riyadh</p>
              <p className="pt-2">Contact us: <a href="mailto:info@mila.day" className="hover:text-[var(--accent-sun)]">info@mila.day</a></p>
            </div>
            <p className="mt-10 text-sm text-white/60">© {new Date().getFullYear()} . All rights reserved.</p>
          </div>

          <div className="text-center">
            <h3 className="font-display text-2xl font-semibold">Quick Links</h3>
            <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-[15px] text-white/90">
              <li><a href="#" className="hover:text-[var(--accent-sun)]">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[var(--accent-sun)]">Terms &amp; Conditions</a></li>
              <li><a href="#" className="hover:text-[var(--accent-sun)]">Contact Us</a></li>
            </ul>
            <div className="mt-8 flex items-center justify-center gap-4">
              {[
                { label: "Instagram", href: INSTAGRAM_URL, path: "M12 2.2c3.2 0 3.6 0 4.85.07 1.17.05 1.8.25 2.23.42.56.22.96.48 1.38.9.42.42.68.82.9 1.38.17.42.37 1.06.42 2.23.06 1.26.07 1.64.07 4.85s0 3.6-.07 4.85c-.05 1.17-.25 1.8-.42 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.17-1.06.37-2.23.42-1.26.06-1.64.07-4.85.07s-3.6 0-4.85-.07c-1.17-.05-1.8-.25-2.23-.42a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.17-.42-.37-1.06-.42-2.23C2.2 15.6 2.2 15.2 2.2 12s0-3.6.07-4.85c.05-1.17.25-1.8.42-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.17 1.06-.37 2.23-.42C8.4 2.2 8.8 2.2 12 2.2Zm0 1.8c-3.15 0-3.5 0-4.74.07-1.07.05-1.65.23-2.04.38-.51.2-.88.44-1.26.83-.39.38-.63.75-.83 1.26-.15.39-.33.97-.38 2.04C2.7 8.5 2.7 8.85 2.7 12s0 3.5.07 4.74c.05 1.07.23 1.65.38 2.04.2.51.44.88.83 1.26.38.39.75.63 1.26.83.39.15.97.33 2.04.38 1.24.07 1.59.07 4.74.07s3.5 0 4.74-.07c1.07-.05 1.65-.23 2.04-.38.51-.2.88-.44 1.26-.83.39-.38.63-.75.83-1.26.15-.39.33-.97.38-2.04.07-1.24.07-1.59.07-4.74s0-3.5-.07-4.74c-.05-1.07-.23-1.65-.38-2.04a3.4 3.4 0 0 0-.83-1.26 3.4 3.4 0 0 0-1.26-.83c-.39-.15-.97-.33-2.04-.38C15.5 4 15.15 4 12 4Zm0 3.05a4.95 4.95 0 1 1 0 9.9 4.95 4.95 0 0 1 0-9.9Zm0 1.8a3.15 3.15 0 1 0 0 6.3 3.15 3.15 0 0 0 0-6.3Zm5.15-2.05a1.16 1.16 0 1 1 0 2.32 1.16 1.16 0 0 1 0-2.32Z" },
                { label: "TikTok", href: TIKTOK_URL, path: "M16.5 3c.3 1.7 1.3 3 2.9 3.5.5.2 1 .3 1.6.3v3c-1.6 0-3-.4-4.5-1.2v6.7a5.7 5.7 0 1 1-5.7-5.7c.3 0 .6 0 .9.07v3.1a2.6 2.6 0 1 0 1.8 2.5V3h3Z" },
                { label: "LinkedIn", href: LINKEDIN_URL, path: "M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.5h4v11H3v-11Zm6 0h3.8v1.5h.05c.53-1 1.84-2.06 3.78-2.06 4.05 0 4.8 2.66 4.8 6.12V20.5h-4V16c0-1.6-.03-3.66-2.23-3.66-2.23 0-2.57 1.74-2.57 3.54v4.62H9v-11Z" },
              ].map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="grid h-10 w-10 place-items-center rounded-full border border-white/30 hover:border-[var(--accent-sun)] hover:text-[var(--accent-sun)] transition">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4"><path d={s.path} /></svg>
                </a>
              ))}
            </div>
            <div className="mt-8 border-t border-white/15 pt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-4 text-[14px] text-white/85">
              <div className="flex items-center gap-3">
                <img src={commercialRegister} alt="Saudi Commercial Register" className="h-10 w-10 object-contain" />
                <div className="text-left">
                  <div>Commercial Register</div>
                  <div className="font-semibold">7034008768</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <img src={vatLogo} alt="VAT" className="h-10 w-10 object-contain" />
                <div className="text-left">
                  <div>Tax Number</div>
                  <div className="font-semibold">311696590600003</div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="flex flex-col gap-4 w-full max-w-[220px]">
              <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" aria-label="Download on the App Store" className="block transition hover:opacity-90">
                <img src={btnAppStore} alt="Download on the App Store" className="w-full h-auto" />
              </a>
              <a href={GOOGLE_PLAY_URL} target="_blank" rel="noopener noreferrer" aria-label="Get it on Google Play" className="block transition hover:opacity-90">
                <img src={btnGooglePlay} alt="Get it on Google Play" className="w-full h-auto" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
