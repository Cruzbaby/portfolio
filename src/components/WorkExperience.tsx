"use client";

import React from "react";
import Image from "next/image";
import { GitCommit, GitBranch, Calendar, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const experiences = [
  {
    company: "Freelance Developer",
    position: "Full Stack Developer",
    date: "2025 - Present",
    location: "Remote",
    status: "active",
    commitHash: "7f3a2b1",
    logo:
      "https://mir-s3-cdn-cf.behance.net/project_modules/fs/24ed9392232693.5e45b4885aef5.jpg",
    description: [
      "Provided freelance development services for FiveM-related projects, focusing on building and maintaining game and server-side systems using Lua.",
      "Designed and implemented licensing systems and secure permission controls to protect client intellectual property.",
      "Integrated external APIs to extend in-game functionalities and enhance user convenience for various clients.",
      "Conducted data analysis and generated reports to help clients optimize business strategies and improve product offerings.",
    ],
  },
  {
    company: "Observe Production ( Software House )",
    position: "Full Stack Developer",
    date: "2025 - Present",
    location: "Remote",
    status: "active",
    commitHash: "a1b2c3d",
    logo: "https://cdn.cruz-dev.com/image-1760814661206.png",
    description: [
      "Worked as an outsourced developer, designing and developing systems for FiveM using Lua, focusing on stability and performance for both game and server-side operations.",
      "Structured licensing systems and secure permission mechanisms to effectively prevent intellectual property infringement for the shop.",
      "Integrated APIs with external services to enhance in-game features and provide an all-in-one convenience for users.",
      "Analyzed sales and user data, creating in-depth reports to continually refine and improve business strategies for the shop.",
    ],
  },
  {
    company: "MiTH Community ( FiveM Server )",
    position: "Full Stack Developer",
    date: "2022 - 2025",
    location: "Work from home",
    status: "closed",
    commitHash: "9e8d7c6",
    logo: "https://cdn.cruz-dev.com/image-1747616282869.png",
    description: [
      "Maintained and developed FiveM server systems using Lua, from creating new features to fixing bugs.",
      "Designed and developed server management systems with Lua for convenience and efficiency.",
      "Optimized server performance to smoothly and stably support a large number of players.",
      "Developed APIs to connect data between the server and the website.",
      "Created licensing systems and code obfuscation techniques to protect work from unauthorized use.",
      "Collaborated on business planning and development, working with the team to expand project capabilities.",
      "Designed user-friendly UI/UX for both in-game and website applications.",
      "Analyzed usage data and generated reports to help improve systems and user experience.",
      "Managed cloud systems and logging to maintain server stability and security.",
    ],
  },
  {
    company: "Cruz Developer ( Fivem Shop ) ",
    position: "Full Stack Developer",
    date: "2022 - 2025",
    location: "Remote",
    status: "closed",
    commitHash: "5f4e3d2",
    logo: "https://cdn.cruz-dev.com/image-1747609951699.png",
    description: [
      "Engineered custom systems for FiveM using Lua, enhancing gameplay and server-side stability.",
      "Diagnosed and resolved complex bugs across game logic and backend operations.",
      "Built a secure licensing infrastructure to safeguard proprietary assets and prevent unauthorized use.",
      "Developed a responsive e-commerce platform to distribute gaming tools and services efficiently.",
      "Integrated APIs to synchronize game features with external services, streamlining user experience.",
      "Utilized obfuscation techniques to improve source code confidentiality and limit tampering.",
      "Architected backend systems with structured credential management and cloud logging pipelines.",
      "Transformed a solo freelance initiative into a collaborative business venture.",
      "Directed the visual design and interaction flow for in-game UI and sales dashboards.",
      "Monitored sales and user analytics to guide product decisions and identify growth opportunities.",
    ],
  },
];

export default function WorkExperience() {
  return (
    <section
      id="experience"
      className="mx-auto max-w-6xl px-6 py-20 md:px-12"
    >
      <div className="flex flex-col gap-4 text-center md:text-left mb-16">
        <div className="inline-flex items-center gap-2 justify-center md:justify-start text-sm uppercase tracking-[0.2em] text-slate-500 font-mono">
          <GitBranch size={16} />
          <span>History</span>
        </div>
        <h2 className="text-3xl font-bold text-white md:text-5xl font-mono terminal-cursor">
          <span className="text-green-500">root@dev:~/work$</span> git log --oneline
        </h2>
      </div>

      <div className="relative">
        {/* Main Branch Line */}
        <div className="absolute left-8 top-0 h-full w-0.5 bg-gradient-to-b from-emerald-500 via-emerald-500/20 to-transparent hidden md:block" />

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative md:pl-24"
            >
              {/* Commit Dot */}
              <div className="absolute left-[26px] top-6 hidden h-4 w-4 rounded-full border-4 border-[#030014] bg-emerald-500 md:block z-10" />

              <div className="group relative rounded-xl border border-white/10 bg-[#0c0c0c] p-6 transition-all hover:border-emerald-500/30 hover:bg-emerald-500/5">
                <div className="flex flex-col gap-6 md:flex-row md:items-start md:gap-8">

                  {/* Logo Area */}
                  <div className="shrink-0">
                    <div className="relative h-16 w-16 overflow-hidden rounded-lg border border-white/10 bg-black/40 shadow-lg">
                      <Image
                        src={exp.logo}
                        alt={`${exp.company} logo`}
                        fill
                        sizes="64px"
                        className="object-cover transition-transform group-hover:scale-110"
                      />
                    </div>
                  </div>

                  {/* Content Area */}
                  <div className="flex-1 space-y-4">
                    <div className="flex flex-col justify-between gap-2 md:flex-row md:items-center">
                      <div>
                        <h3 className="text-xl font-bold text-white font-mono flex items-center gap-3">
                          {exp.company}
                          <span className="rounded bg-white/10 px-2 py-0.5 text-xs text-slate-400 font-mono border border-white/5">
                            {exp.commitHash}
                          </span>
                        </h3>
                        <p className="text-emerald-400 font-medium mt-1">{exp.position}</p>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-slate-400 font-mono">
                        <span className="flex items-center gap-1">
                          <Calendar size={14} /> {exp.date}
                        </span>
                      </div>
                    </div>

                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-500/50 shrink-0" />
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
