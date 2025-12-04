import React from "react";
import Image from "next/image";

interface Project {
  title: string;
  description: string;
  image?: string;
  tags: string[];
  link?: string;
  github?: string;
  category: "web" | "game" | "tool" | "other";
  durationDays?: number; // ระยะเวลาที่ใช้ทำ (วัน)
}

const projects: Project[] = [
  {
    title: "Likedee.com - เว็บปั๊มไลค์ ปั๊มติดตาม",
    description: "เว็บไซต์เครื่องมือการตลาดโซเชียลมีเดีย All-In-One สำหรับปั๊มไลค์ ปั๊มติดตาม และบริการโซเชียลมีเดียอื่นๆ พร้อมระบบจัดการคำสั่งซื้อและการชำระเงินอัตโนมัติ",
    image: "https://scontent.fbkk29-4.fna.fbcdn.net/v/t39.30808-6/518284643_122107937330941884_5215435152373039810_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=Z-iIOctSSv8Q7kNvwGaDCZD&_nc_oc=AdkkTwBHpqO_UqWLBhfWbI2UEyMWpI5qumMt2UNZfnV5vihgFws7nbpvWBj5ED3l6yh7fs7P7sN3WQLxXBjkPQtq&_nc_zt=23&_nc_ht=scontent.fbkk29-4.fna&_nc_gid=zphooehBfeqsDWWRC0C4-Q&oh=00_AfnjMSIy8alHrPi7vXgO6QzBqqtRA1Hv9HJr1dQilvcOgA&oe=69379A81",
    tags: ["Next.js", "TypeScript", "MySQL", "Payment Gateway", "API Integration"],
    category: "web",
    link: "https://likedee.com/",
    durationDays: 14,
  },
//   {
//     title: "FiveM Server Management System",
//     description:
//       "ดูแลระบบหลังบ้านของเซิร์ฟเวอร์ FiveM พร้อมแก้ไขปัญหา สร้างระบบให้กับเซิร์ฟเวอร์หลายตัว",
//     // image: "https://cdn.cruz-dev.com/image-1747616282869.png",
//     tags: ["Lua", "MySQL", "Discord.js", "REST API"],
//     category: "game",
//     link: "https://example.com",
//     durationDays: 150,
//   },
//   {
//     title: "E-commerce Platform for Gaming Tools",
//     description:
//       "แพลตฟอร์มขายของออนไลน์สำหรับเครื่องมือเกม พร้อมระบบชำระเงินที่ปลอดภัย ระบบลิขสิทธิ์ และแดชบอร์ดสำหรับผู้ดูแลระบบ",
//     image: "https://cdn.cruz-dev.com/image-1747609951699.png",
//     tags: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
//     category: "web",
//     link: "https://example.com",
//   },
//   {
//     title: "Licensing & Security System",
//     description:
//       "ระบบลิขสิทธิ์และความปลอดภัยสำหรับป้องกันทรัพย์สินทางปัญญา พร้อมระบบ Obfuscation และการจัดการสิทธิ์",
//     tags: ["Lua", "Node.js", "MySQL", "Security"],
//     category: "tool",
//   },
//   {
//     title: "In-Game UI Framework",
//     description:
//       "ไลบรารี UI components สำหรับ FiveM ที่ใช้งานซ้ำได้ พร้อมแอนิเมชัน การออกแบบที่ตอบสนอง และคุณสมบัติการเข้าถึง",
//     tags: ["Lua", "HTML/CSS", "JavaScript", "NUI"],
//     category: "game",
//   },
//   {
//     title: "Server-Website API Integration",
//     description:
//       "ระบบเชื่อมต่อข้อมูลระหว่างเซิร์ฟเวอร์เกมและเว็บไซต์ พร้อมการซิงค์ข้อมูลแบบเรียลไทม์",
//     tags: ["Lua", "REST API", "MySQL", "WebSocket"],
//     category: "web",
//   },
//   {
//     title: "Analytics & Reporting Dashboard",
//     description:
//       "แดชบอร์ดวิเคราะห์ข้อมูลและรายงานแบบเรียลไทม์ พร้อมการแสดงผลข้อมูลที่ปรับแต่งได้และการส่งออกข้อมูล",
//     tags: ["React", "Chart.js", "WebSocket", "MongoDB"],
//     category: "web",
//   },
];

const categoryColors: Record<Project["category"], string> = {
  web: "from-blue-500/20 via-cyan-500/10 to-transparent",
  game: "from-purple-500/20 via-pink-500/10 to-transparent",
  tool: "from-amber-500/20 via-orange-500/10 to-transparent",
  other: "from-slate-500/20 via-gray-500/10 to-transparent",
};

const categoryLabels: Record<Project["category"], string> = {
  web: "Web App",
  game: "Game Dev",
  tool: "Dev Tool",
  other: "Other",
};

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="mx-auto max-w-6xl px-6 py-16 text-white md:px-0"
    >
      <div className="flex flex-col gap-4 text-center md:text-left">
        <p className="text-sm uppercase tracking-[0.4em] text-slate-400">
          Showcase
        </p>
        <h2 className="text-3xl font-semibold md:text-4xl">Featured Projects</h2>
        <p className="text-base text-slate-300 md:max-w-3xl">
          A collection of projects showcasing problem-solving, technical depth,
          and attention to user experience across different domains.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.title}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-xl shadow-black/30 transition duration-300 hover:-translate-y-1 hover:border-white/20"
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br ${categoryColors[project.category]} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
            />

            {/* Project Image */}
            {project.image && (
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span
                    className={`inline-block rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm`}
                  >
                    {categoryLabels[project.category]}
                  </span>
                </div>
              </div>
            )}

            <div className="relative p-6">
              {!project.image && (
                <div className="mb-4 flex items-center justify-between">
                  <span
                    className={`rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-200`}
                  >
                    {categoryLabels[project.category]}
                  </span>
                  <div className="flex gap-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-lg border border-white/10 bg-white/5 p-2 text-slate-400 transition hover:border-white/20 hover:text-white"
                        aria-label="View on GitHub"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.18 5.18 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                          <path d="M9 18c-4.51 2-5-2-7-2" />
                        </svg>
                      </a>
                    )}
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-lg border border-white/10 bg-white/5 p-2 text-slate-400 transition hover:border-white/20 hover:text-white"
                        aria-label="View project"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                          <polyline points="15 3 21 3 21 9" />
                          <line x1="10" x2="21" y1="14" y2="3" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              )}

              <h3 className="mb-2 text-xl font-semibold text-white">
                {project.title}
              </h3>
              {project.durationDays && (
                <div className="mb-3 flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-slate-400"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  <span className="text-xs text-slate-400">
                    ระยะเวลาที่ใช้: {project.durationDays} วัน
                  </span>
                </div>
              )}
              <p className="mb-4 text-sm leading-relaxed text-slate-300">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links at bottom if image exists */}
              {project.image && (
                <div className="flex gap-3 pt-4 border-t border-white/10">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 transition hover:border-white/20 hover:text-white hover:bg-white/10"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.18 5.18 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                        <path d="M9 18c-4.51 2-5-2-7-2" />
                      </svg>
                      <span>GitHub</span>
                    </a>
                  )}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 transition hover:border-white/20 hover:text-white hover:bg-white/10"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" x2="21" y1="14" y2="3" />
                      </svg>
                      <span>ดูผลงาน</span>
                    </a>
                  )}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

