"use client";

import React from "react";
import "../app/globals.css";
import Image from "next/image";
import { Server, Layout, Settings, Terminal } from "lucide-react";
import { motion } from "framer-motion";

const expertiseData = [
  {
    title: "Backend Development",
    subtitle:
      "Designing resilient APIs, worker queues, and serverless workloads that scale with demand.",
    icon: <Server size={32} strokeWidth={1.5} />,
    tags: ["Node.js", "tRPC", "SQL", "Security"],
    color: "text-pink-400",
    lineCount: 12,
  },
  {
    title: "Frontend Development",
    subtitle:
      "Crafting polished interfaces with accessible interactions, fluid animations, and component systems.",
    icon: <Layout size={32} strokeWidth={1.5} />,
    tags: ["Next.js", "Tailwind", "GSAP", "UX audits"],
    color: "text-sky-400",
    lineCount: 15,
  },
  {
    title: "Engineering Ops",
    subtitle:
      "Automating delivery pipelines, observability, and developer tooling for faster iteration.",
    icon: <Settings size={32} strokeWidth={1.5} />,
    tags: ["CI/CD", "Monitoring", "Cloudflare", "Enablement"],
    color: "text-amber-400",
    lineCount: 9,
  },
];

const Expertise = () => {
  return (
    <section
      id="expertise"
      className="relative mx-auto mt-20 max-w-6xl px-6 py-20 md:px-12"
    >
      <div className="space-y-4 md:text-left">
        <div className="inline-flex items-center gap-2 rounded bg-purple-500/10 px-3 py-1 text-xs font-medium text-purple-400 font-mono border border-purple-500/20">
          <Terminal size={12} />
          <span>~/services</span>
        </div>
        <h2 className="text-3xl font-bold text-white md:text-4xl font-mono terminal-cursor">
          <span className="text-green-500">root@dev:~/services$</span> cat expertise.ts
        </h2>
        <p className="max-w-2xl text-base text-slate-400 font-mono">
          <span className="text-slate-600">{"//"}</span> A blend of engineering depth and product intuition. I help teams ship faster without sacrificing maintainability.
        </p>
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-3">
        {expertiseData.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative overflow-hidden rounded-lg border border-white/10 bg-[#0c0c0c] font-mono shadow-xl transition-all hover:border-purple-500/30 hover:shadow-purple-500/10"
          >
            {/* IDE Window Header */}
            <div className="flex items-center justify-between border-b border-white/5 bg-white/5 px-4 py-3">
              <div className="flex items-center gap-2">
                <div className="h-2.5 w-2.5 rounded-full bg-red-500/60" />
                <div className="h-2.5 w-2.5 rounded-full bg-amber-500/60" />
                <div className="h-2.5 w-2.5 rounded-full bg-emerald-500/60" />
              </div>
              <div className="text-[10px] text-slate-500">
                {item.title.replace(/\s+/g, '').toLowerCase()}.ts
              </div>
            </div>

            <div className="p-6 relative">
              {/* Line Numbers */}
              <div className="absolute left-4 top-6 flex flex-col gap-1 text-[10px] text-slate-700 select-none font-mono text-right w-4">
                {Array.from({ length: item.lineCount || 10 }).map((_, i) => (
                  <span key={i}>{i + 1}</span>
                ))}
              </div>

              <div className="pl-8">
                <div className={`mb-4 flex h-10 w-10 items-center justify-center rounded-md bg-white/5 ${item.color}`}>
                  {item.icon}
                </div>

                <h3 className="mb-2 text-lg font-bold text-slate-200">
                  {item.title}
                </h3>

                <p className="mb-6 text-sm leading-relaxed text-slate-400">
                  <span className="text-purple-400">return</span> "{item.subtitle}"
                </p>

                <div className="flex flex-wrap gap-2">
                  {item.tags.map(tag => (
                    <span key={tag} className="text-xs text-slate-500">
                      <span className="text-blue-400">#</span>{tag}
                    </span>
                  ))}
                </div>
                <div className="mt-4 text-xs text-slate-600">{"}"};</div>
              </div>
            </div>

            <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-purple-500/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
          </motion.div>
        ))}
      </div>

      <div className="mt-10 text-white font-mono text-xl font-bold">{"}"}</div>

      <Image
        src="/Code.webp"
        alt="Code background"
        width={720}
        height={240}
        className="pointer-events-none absolute -bottom-20 left-1/2 w-[80%] -translate-x-1/2 opacity-5 blur-sm"
      />
    </section>
  );
};

export default Expertise;
