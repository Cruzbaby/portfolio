import React from "react";
import Image from "next/image";
import "../app/globals.css";

const skills = {
  Languages: [
    {
      name: "TypeScript",
      imgSrc:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },
    {
      name: "JavaScript",
      imgSrc:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "Python",
      imgSrc:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },
    {
      name: "SQL",
      imgSrc:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    },
    {
      name: "C++",
      imgSrc:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
    },
    {
      name: "HTML",
      imgSrc:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "CSS",
      imgSrc:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      name: "LUA",
      imgSrc:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/lua/lua-original.svg",
    },
    {
      name: "MQL5",
      imgSrc:
        "https://upload.wikimedia.org/wikipedia/commons/b/b1/MQL5_Community_Logo.png",
    },
  ],
  Databases: [
    {
      name: "PostgreSQL",
      imgSrc:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    },
    {
      name: "MongoDB",
      imgSrc:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    },
    {
      name: "MySQL",
      imgSrc:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    },
    {
      name: "Firebase",
      imgSrc:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
    },
    {
      name: "MariaDB",
      imgSrc:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mariadb/mariadb-original.svg",
    },
  ],
  Frameworks: [
    {
      name: "React",
      imgSrc:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Next.js",
      imgSrc:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    },
    {
      name: "Tailwind",
      imgSrc: "https://cdn.cruz-dev.com/image-1748574007625.png",
    },
    {
      name: "VueJs",
      imgSrc:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
    },
    {
      name: "Express",
      imgSrc:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    },
    {
      name: "Node.js",
      imgSrc:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "Discord.js",
      imgSrc:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/discordjs/discordjs-original.svg",
    },
  ],
  Tools: [
    {
      name: "Git",
      imgSrc:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
    {
      name: "ClickUp",
      imgSrc: "https://cdn.cruz-dev.com/image-1748573866928.png",
    },
    {
      name: "Trollo",
      imgSrc: "https://cdn.cruz-dev.com/image-1748573972541.png",
    },
    {
      name: "Figma",
      imgSrc:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    },
    {
      name: "Cloudflare",
      imgSrc:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cloudflare/cloudflare-original.svg",
    },
    {
      name: "Firebase",
      imgSrc:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
    },
    {
      name: "Google Cloud",
      imgSrc:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
    },
    {
      name: "OpenAI API",
      imgSrc: "https://cdn.cruz-dev.com/image-1748573818239.png",
    },
    {
      name: "Gemini API",
      imgSrc:
        "https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/gemini-color.png",
    },
  ],
};

const categoryIcons: Record<string, React.ReactNode> = {
  Languages: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5 text-white"
    >
      <path d="m18 16 4-4-4-4"></path>
      <path d="m6 8-4 4 4 4"></path>
      <path d="m14.5 4-5 16"></path>
    </svg>
  ),
  Databases: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5 text-white"
    >
      <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
      <path d="M3 5V19A9 3 0 0 0 21 19V5"></path>
      <path d="M3 12A9 3 0 0 0 21 12"></path>
    </svg>
  ),
  Frameworks: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5 text-white"
    >
      <polyline points="4 17 10 11 4 5"></polyline>
      <line x1="12" x2="20" y1="19" y2="19"></line>
    </svg>
  ),
  Tools: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5 text-white"
    >
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
    </svg>
  ),
};

export default function SkillsGrid() {
  return (
    <section
      id="skill"
      className="relative mx-auto max-w-6xl rounded-3xl border border-white/10 bg-black/30 px-6 py-14"
    >
      <div className="flex flex-col gap-4 text-center md:text-left">
        <p className="text-sm uppercase tracking-[0.4em] text-slate-400">
          Toolkit
        </p>
        <h2 className="text-3xl font-semibold text-white md:text-4xl">
          My Skills
        </h2>
        <p className="text-base text-slate-300 md:max-w-3xl">
          A curated stack that covers product thinking, system design, and
          production-ready delivery across web and game ecosystems.
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {Object.entries(skills).map(([category, items]) => (
          <article
            key={category}
            className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/30"
          >
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3 text-white">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                  {categoryIcons[category]}
                </span>
                <div>
                  <h3 className="text-lg font-semibold">{category}</h3>
                  <p className="text-xs uppercase tracking-widest text-slate-400">
                    Hands-on experience
                  </p>
                </div>
              </div>
              <span className="text-xs uppercase tracking-widest text-slate-500">
                {items.length} tools
              </span>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-3 sm:grid-cols-4">
              {items.map(({ name, imgSrc }) => (
                <div
                  key={name}
                  className="group flex flex-col items-center gap-2 rounded-2xl border border-transparent bg-white/0 p-3 text-center transition hover:border-white/20 hover:bg-white/5"
                >
                  <div className="relative h-10 w-10">
                    <Image
                      src={imgSrc}
                      alt={name}
                      fill
                      sizes="40px"
                      className="object-contain"
                    />
                  </div>
                  <span className="text-xs text-slate-200">{name}</span>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}