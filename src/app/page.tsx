"use client";

import Image from "next/image";
import Expertise from "@/components/Expertise";
import SkillsSection from "@/components/skill";
import WorkExperience from "@/components/WorkExperience";
import Portfolio from "@/components/Portfolio";
import Contributions from "@/components/Contributions";
import CircuitBackground from "@/components/CircuitBackground";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

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

const TypewriterText = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      let currentIndex = 0;
      const interval = setInterval(() => {
        if (currentIndex <= text.length) {
          setDisplayedText(text.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(interval);
        }
      }, 30); // Typing speed
      return () => clearInterval(interval);
    }, delay * 1000);

    return () => clearTimeout(timeout);
  }, [text, delay]);

  return <span>{displayedText}</span>;
};

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050505] text-gray-200 font-mono selection:bg-green-500/30">
      <div className="fixed inset-0 z-50 pointer-events-none scanlines opacity-50" />
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-purple-600/40 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-sky-500/30 blur-[120px]" />
      </div>

      {/* Circuit Board Background */}
      <CircuitBackground />

      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-green-900/40 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-emerald-900/30 blur-[120px]" />
      </div>

      {/* Subtle Floating Code Elements (Lower opacity) */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-20">
        <div className="absolute top-[20%] left-[10%] text-slate-700/20 font-mono text-xs rotate-[-12deg]">{`if (isAwake) { code(); }`}</div>
        <div className="absolute top-[40%] right-[15%] text-purple-900/20 font-mono text-sm rotate-[6deg]">{`<Component />`}</div>
        <div className="absolute bottom-[30%] left-[20%] text-blue-900/20 font-mono text-xs rotate-[15deg]">{`git commit -m "update"`}</div>
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col gap-24 px-6 py-16 md:px-12">
        <section className="grid items-center gap-12 md:grid-cols-[1.15fr_0.85fr] mt-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 rounded-md border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400 font-mono">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
              <span>System.ready()</span>
            </div>

            <div className="space-y-6">
              <h1 className="text-4xl font-bold leading-tight text-white md:text-6xl font-mono terminal-cursor">
                <span className="text-green-500">root@dev:~$</span> <TypewriterText text="./init_profile.sh" delay={0.5} />
              </h1>
              <div className="text-xl md:text-2xl font-bold text-white pl-4 border-l-2 border-green-500/30">
                &gt; Pasavit Jarananon
              </div>
              <p className="text-lg text-slate-300 md:max-w-xl leading-relaxed">
                <span className="text-slate-500">{"//"}</span> Crafts immersive digital experiences spanning
                web apps, automation, and game ecosystems.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {highlightChips.map((chip, index) => (
                <motion.span
                  key={chip}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + index * 0.1 }}
                  className="rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-slate-300 font-mono hover:border-purple-500/50 hover:bg-purple-500/10 transition-colors cursor-default"
                >
                  "{chip}"
                </motion.span>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 font-mono text-sm">
              <a
                href="#experience"
                className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded bg-green-600/20 border border-green-500/50 px-6 py-3 text-green-400 transition-all hover:bg-green-500/30 hover:shadow-[0_0_15px_rgba(74,222,128,0.2)]"
              >
                <span>execute(Experience)</span>
              </a>
              <a
                href="https://www.instagram.com/pasavit_/"
                className="inline-flex items-center justify-center rounded border border-white/10 bg-white/5 px-6 py-3 text-slate-300 transition-all hover:border-white/30 hover:bg-white/10 hover:text-white"
              >
                <span>connect(Socials)</span>
              </a>
            </div>

            <div className="grid gap-4 rounded-xl border border-white/10 bg-black/40 p-6 backdrop-blur-sm sm:grid-cols-3">
              {heroStats.map(({ label, value }) => (
                <div key={label}>
                  <p className="text-3xl font-bold text-white font-mono">{value}</p>
                  <p className="text-[10px] uppercase tracking-wider text-slate-500 mt-1">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Terminal Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mx-auto w-full max-w-sm"
          >
            <div className="relative rounded-lg border border-white/10 bg-[#0c0c0c] shadow-2xl shadow-purple-500/10 overflow-hidden">
              {/* Terminal Header */}
              <div className="flex items-center gap-2 bg-white/5 px-4 py-3 border-b border-white/5">
                <div className="h-3 w-3 rounded-full bg-red-500/80" />
                <div className="h-3 w-3 rounded-full bg-amber-500/80" />
                <div className="h-3 w-3 rounded-full bg-emerald-500/80" />
                <div className="ml-2 text-xs text-slate-500 font-mono">user@molly-dev:~</div>
              </div>

              <div className="p-6 text-center space-y-6">
                <div className="relative mx-auto h-48 w-48 overflow-hidden rounded-full border-2 border-purple-500/30 ring-4 ring-purple-500/10">
                  <Image
                    src="/profile.jpg"
                    alt="Pasavit Jarananon"
                    fill
                    className="object-cover"
                    sizes="256px"
                    priority
                  />
                </div>

                <div className="space-y-2">
                  <div className="inline-block rounded bg-purple-500/20 px-3 py-1 text-xs text-purple-300 font-mono mb-2">
                    v2.5.0-stable
                  </div>
                  <h2 className="text-xl font-bold text-white">Pasavit Jarananon</h2>
                  <p className="text-sm text-slate-400 font-mono">
                    Full Stack & Virtual World Architect
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 text-left">
                  <div className="bg-white/5 p-3 rounded border border-white/5">
                    <p className="text-[10px] text-slate-500 font-mono mb-1">current_focus</p>
                    <p className="text-sm text-emerald-400 font-mono">REQ</p>
                  </div>
                  <div className="bg-white/5 p-3 rounded border border-white/5">
                    <p className="text-[10px] text-slate-500 font-mono mb-1">tech_stack</p>
                    <p className="text-sm text-blue-400 font-mono">TS . Lua . Cloud</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        <Expertise />
        <SkillsSection />
        <WorkExperience />
        {/* <Contributions /> */}
        <Portfolio />
      </div>
    </main>
  );
}
