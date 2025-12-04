// src/app/page.tsx
import Image from "next/image";
import Expertise from "@/components/Expertise";
import SkillsSection from "@/components/skill";
import WorkExperience from "@/components/WorkExperience";
import Portfolio from "@/components/Portfolio";

const highlightChips = [
  "Full-stack developer",
  "API integrations",
  "Game modding",
  "Cloud-first mindset",
];

const heroStats = [
  { label: "Years experience", value: "4+" },
  { label: "Projects shipped", value: "35" },
  { label: "Client satisfaction", value: "98%" },
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#030014] text-gray-100">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-purple-600/40 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-sky-500/30 blur-[120px]" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col gap-24 px-6 py-16 md:px-12">
        <section className="grid items-center gap-12 md:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.25em] text-slate-200/80">
              Broken Brain
            </span>

            <div className="space-y-6">
              <h1 className="text-4xl font-semibold leading-tight text-white md:text-5xl">
                Pasavit Jarananon crafts immersive digital experiences spanning
                web apps, automation, and game ecosystems.
              </h1>
              <p className="text-lg text-slate-300">
                Passionate about solving complex problems with clean code,
                thoughtful UX, and reliable infrastructure. I blend creativity
                with engineering rigor to ship products people trust.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {highlightChips.map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200"
                >
                  {chip}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="#experience"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-purple-500 via-fuchsia-500 to-orange-400 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-500/30 transition hover:brightness-110"
              >
                View experience
              </a>
              <a
                href="https://www.instagram.com/pasavit_/"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white/80 transition hover:border-white hover:text-white"
              >
                Contact me
              </a>
            </div>

            <div className="grid gap-6 rounded-2xl border border-white/10 bg-white/5 p-6 text-center sm:grid-cols-3">
              {heroStats.map(({ label, value }) => (
                <div key={label}>
                  <p className="text-3xl font-semibold text-white">{value}</p>
                  <p className="text-xs uppercase tracking-widest text-slate-400">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto max-w-sm rounded-[32px] border border-white/10 bg-white/5 p-6 text-center shadow-2xl shadow-purple-500/20">
            <div className="absolute -top-5 right-6 rounded-full border border-emerald-400/40 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-200">
              Building now
            </div>
            <div className="relative mx-auto h-64 w-64 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
              <Image
                src="/profile.jpg"
                alt="Pasavit Jarananon"
                fill
                className="object-cover"
                sizes="256px"
                priority
              />
            </div>
            <div className="mt-6 space-y-1">
              <p className="text-xl font-semibold text-white">
                Pasavit Jarananon
              </p>
              <p className="text-sm text-slate-300">
                Full Stack & FiveM Specialist
              </p>
            </div>
            <div className="mt-5 grid grid-cols-2 gap-3 text-left text-xs text-slate-300">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                <p className="text-[11px] uppercase tracking-widest text-slate-400">
                  Focus
                </p>
                <p className="text-sm text-white">Game systems</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                <p className="text-[11px] uppercase tracking-widest text-slate-400">
                  Stack
                </p>
                <p className="text-sm text-white">TS · Lua · Cloud</p>
              </div>
            </div>
          </div>
        </section>

        <Expertise />
        <SkillsSection />
        <WorkExperience />
        <Portfolio />
      </div>
    </main>
  );
}
