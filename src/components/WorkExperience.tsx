import React from "react";
import Image from "next/image";

const experiences = [
  {
    company: "Freelance Developer",
    position: "Full Stack Developer",
    date: "2025 - Present",
    location: "Remote",
    status: "ดำเนินการในปัจจุบัน",
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
    company: "Observe Production ( Fivem Shop )",
    position: "Full Stack Developer",
    date: "2025 - Present",
    location: "Remote",
    status: "ดำเนินการในปัจจุบัน",
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
    status: "ปิดกิจการไปแล้ว",
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
    status: "ปิดกิจการไปแล้ว",
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

const statusStyles: Record<
  string,
  {
    badge: string;
  }
> = {
  ดำเนินการในปัจจุบัน: {
    badge: "border border-emerald-400/40 bg-emerald-500/15 text-emerald-200",
  },
  ไม่ได้ทำแล้ว: {
    badge: "border border-amber-400/40 bg-amber-500/10 text-amber-200",
  },
  ปิดกิจการไปแล้ว: {
    badge: "border border-rose-400/40 bg-rose-500/10 text-rose-200",
  },
};

export default function WorkExperience() {
  return (
    <section
      id="experience"
      className="mx-auto max-w-6xl px-6 py-16 text-white md:px-0"
    >
      <div className="flex flex-col gap-4 text-center md:text-left">
        <p className="text-sm uppercase tracking-[0.4em] text-slate-400">
          Timeline
        </p>
        <h2 className="text-3xl font-semibold md:text-4xl">Work Experience</h2>
        <p className="text-base text-slate-300 md:max-w-3xl">
          Practical experience delivering end-to-end solutions, from gameplay
          systems and backend services to analytics dashboards.
        </p>
      </div>

      <div className="relative mt-12">
        <div className="absolute left-5 top-0 hidden h-full w-px bg-gradient-to-b from-transparent via-white/20 to-transparent md:block" />

        <div className="space-y-10">
          {experiences.map((exp) => (
            <article
              key={exp.company}
              className="relative rounded-3xl border border-white/10 bg-white/5 p-6 pl-10 shadow-xl shadow-black/30 md:pl-16"
            >
              <div className="absolute left-4 top-10 hidden md:block">
                <div className="relative h-4 w-4 -translate-x-1/2">
                  <span className="absolute inset-0 rounded-full border border-white/30 bg-black/80" />
                  <span className="absolute inset-0 animate-ping rounded-full bg-white/20" />
                </div>
              </div>

              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div className="flex items-center gap-4">
                  <div className="relative h-14 w-14 overflow-hidden rounded-2xl border border-white/10 bg-black/40">
                    <Image
                      src={exp.logo}
                      alt={`${exp.company} logo`}
                      fill
                      sizes="56px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-white">
                      {exp.company}
                    </p>
                    <p className="text-sm text-slate-400">{exp.position}</p>
                  </div>
                </div>
                <div className="text-right text-sm text-slate-400">
                  <p>{exp.date}</p>
                  <p>{exp.location}</p>
                  {exp.status && (
                    <span
                      className={`mt-2 inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-medium ${statusStyles[exp.status]?.badge ?? "border border-white/20 bg-white/5 text-slate-200"}`}
                    >
                      {exp.status}
                    </span>
                  )}
                </div>
              </div>

              <ul className="mt-6 grid gap-3 text-sm text-slate-200 md:grid-cols-2">
                {exp.description.map((item) => (
                  <li
                    key={`${exp.company}-${item}`}
                    className="flex items-start gap-2"
                  >
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/70" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
