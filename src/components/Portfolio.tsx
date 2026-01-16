"use client";

import React from "react";
import Image from "next/image";
import { FolderGit2, Star, GitFork, ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

interface Project {
  title: string;
  description: string;
  image?: string;
  tags: string[];
  link?: string;
  github?: string;
  category: "web" | "game" | "tool" | "other";
  stats?: {
    stars: number;
    forks: number;
  };
  status: "public" | "private" | "archived";
}

const projects: Project[] = [
  {
    title: "likedee-platform",
    description: "All-in-one social media marketing platform with automated order processing and payment gateway integration.",
    image: "https://scontent.fbkk29-4.fna.fbcdn.net/v/t39.30808-6/518284643_122107937330941884_5215435152373039810_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=Z-iIOctSSv8Q7kNvwGaDCZD&_nc_oc=AdkkTwBHpqO_UqWLBhfWbI2UEyMWpI5qumMt2UNZfnV5vihgFws7nbpvWBj5ED3l6yh7fs7P7sN3WQLxXBjkPQtq&_nc_zt=23&_nc_ht=scontent.fbkk29-4.fna&_nc_gid=zphooehBfeqsDWWRC0C4-Q&oh=00_AfnjMSIy8alHrPi7vXgO6QzBqqtRA1Hv9HJr1dQilvcOgA&oe=69379A81",
    tags: ["PHP", "MySQL", "Laravel", "Stripe"],
    category: "web",
    link: "https://likedee.com/",
    stats: { stars: 124, forks: 30 },
    status: "public"
  },
  {
    title: "gtopoker-ai",
    description: "AI-powered poker player for the GTO Poker platform.",
    image: "https://scontent.fbkk29-4.fna.fbcdn.net/v/t39.30808-6/518284643_122107937330941884_5215435152373039810_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=Z-iIOctSSv8Q7kNvwGaDCZD&_nc_oc=AdkkTwBHpqO_UqWLBhfWbI2UEyMWpI5qumMt2UNZfnV5vihgFws7nbpvWBj5ED3l6yh7fs7P7sN3WQLxXBjkPQtq&_nc_zt=23&_nc_ht=scontent.fbkk29-4.fna&_nc_gid=zphooehBfeqsDWWRC0C4-Q&oh=00_AfnjMSIy8alHrPi7vXgO6QzBqqtRA1Hv9HJr1dQilvcOgA&oe=69379A81",
    tags: ["Next.js", "Supabase", "Stripe, CoinPayment"],
    category: "web",
    link: "https://gtopoker.ai/",
    stats: { stars: 300, forks: 201 },
    status: "public"
  },
  {
    title: "Observe-custom",
    description: "Custom Product for observe production.",
    image: "https://scontent.fbkk29-4.fna.fbcdn.net/v/t39.30808-6/518284643_122107937330941884_5215435152373039810_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=Z-iIOctSSv8Q7kNvwGaDCZD&_nc_oc=AdkkTwBHpqO_UqWLBhfWbI2UEyMWpI5qumMt2UNZfnV5vihgFws7nbpvWBj5ED3l6yh7fs7P7sN3WQLxXBjkPQtq&_nc_zt=23&_nc_ht=scontent.fbkk29-4.fna&_nc_gid=zphooehBfeqsDWWRC0C4-Q&oh=00_AfnjMSIy8alHrPi7vXgO6QzBqqtRA1Hv9HJr1dQilvcOgA&oe=69379A81",
    tags: ["Next.js", "MySQL", "Tmweasy"],
    category: "web",
    link: "https://observe-custom.com/",
    stats: { stars: 300, forks: 201 },
    status: "public"
  },
  {
    title: "Fivem license api",
    description: "License API for fivem product.",
    image: "https://scontent.fbkk29-4.fna.fbcdn.net/v/t39.30808-6/518284643_122107937330941884_5215435152373039810_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=Z-iIOctSSv8Q7kNvwGaDCZD&_nc_oc=AdkkTwBHpqO_UqWLBhfWbI2UEyMWpI5qumMt2UNZfnV5vihgFws7nbpvWBj5ED3l6yh7fs7P7sN3WQLxXBjkPQtq&_nc_zt=23&_nc_ht=scontent.fbkk29-4.fna&_nc_gid=zphooehBfeqsDWWRC0C4-Q&oh=00_AfnjMSIy8alHrPi7vXgO6QzBqqtRA1Hv9HJr1dQilvcOgA&oe=69379A81",
    tags: ["Node.js", "MySQL", "Rest API", "JWT"],
    category: "tool",
    stats: { stars: 300, forks: 201 },
    status: "public"
  },
  // {
  //   title: "fivem-server-core",
  //   description: "High-performance FiveM server framework with custom resource management and cheat detection.",
  //   tags: ["Lua", "C#", "SQL", "Redis"],
  //   category: "game",
  //   stats: { stars: 89, forks: 12 },
  //   status: "private"
  // },
  // {
  //   title: "ecommerce-gaming-tools",
  //   description: "Digital marketplace for gaming assets featuring instant delivery and license key generation.",
  //   tags: ["React", "Node.js", "MongoDB", "JWT"],
  //   category: "web",
  //   link: "https://example.com",
  //   stats: { stars: 45, forks: 8 },
  //   status: "archived"
  // },
  // {
  //   title: "secure-licensing-api",
  //   description: "RESTful API for software licensing, obfuscation services, and hardware-id locking.",
  //   tags: ["TypeScript", "Express", "Docker", "Security"],
  //   category: "tool",
  //   stats: { stars: 210, forks: 45 },
  //   status: "private"
  // },
  // {
  //   title: "fivem-ui-library",
  //   description: "React-based UI component library for in-game interfaces, optimized for NUI performance.",
  //   tags: ["React", "Tailwind", "Storybook"],
  //   category: "game",
  //   stats: { stars: 340, forks: 80 },
  //   status: "public"
  // },
  // {
  //   title: "server-analytics-dashboard",
  //   description: "Real-time analytics dashboard for game servers monitoring player metrics and economy health.",
  //   tags: ["Next.js", "Tremor", "PostgreSQL"],
  //   category: "web",
  //   stats: { stars: 67, forks: 5 },
  //   status: "private"
  // },
];

const categoryColors: Record<Project["category"], string> = {
  web: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  game: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  tool: "bg-amber-500/10 text-amber-400 border-amber-500/20",
  other: "bg-slate-500/10 text-slate-400 border-slate-500/20",
};

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="mx-auto max-w-6xl px-6 py-20 md:px-12"
    >
      <div className="flex flex-col gap-4 text-center md:text-left mb-12">
        <div className="inline-flex items-center gap-2 justify-center md:justify-start text-sm uppercase tracking-[0.2em] text-slate-500 font-mono">
          <FolderGit2 size={16} />
          <span>Repositories</span>
        </div>
        <h2 className="text-3xl font-bold text-white md:text-5xl font-mono terminal-cursor">
          <span className="text-green-500">root@dev:~/repos$</span> ls -la
        </h2>
        <p className="text-base text-slate-400 md:max-w-3xl font-mono">
          <span className="text-slate-600">{"//"}</span> Selected repositories demonstrating technical capabilities in web, game, and tool development.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group flex flex-col justify-between rounded-xl border border-white/10 bg-[#0c0c0c] p-6 transition-all hover:border-purple-500/30 hover:shadow-lg hover:shadow-purple-500/5"
          >
            <div>
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-2 text-sm font-medium">
                  <span className={`px-2 py-0.5 rounded-full border text-[10px] uppercase tracking-wider ${categoryColors[project.category]}`}>
                    {project.category}
                  </span>
                  <span className={`px-2 py-0.5 rounded-full border border-white/5 bg-white/5 text-[10px] uppercase tracking-wider text-slate-500`}>
                    {project.status}
                  </span>
                </div>
                <div className="flex gap-2">
                  {project.github && (
                    <a href={project.github} className="text-slate-400 hover:text-white transition-colors">
                      <Github size={18} />
                    </a>
                  )}
                  {project.link && (
                    <a href={project.link} className="text-slate-400 hover:text-purple-400 transition-colors">
                      <ArrowUpRight size={18} />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="text-lg font-bold text-slate-200 font-mono group-hover:text-purple-400 transition-colors">
                {project.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-400 mb-6">
                {project.description}
              </p>
            </div>

            <div className="space-y-4">
              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="flex items-center gap-1 text-xs text-slate-500 font-mono">
                    <span className="h-1.5 w-1.5 rounded-full bg-purple-500/50" />
                    {tag}
                  </span>
                ))}
              </div>

              {/* Stats */}
              <div className="flex items-center gap-4 text-xs text-slate-600 border-t border-white/5 pt-4 font-mono">
                {project.tags[0] && (
                  <span className="flex items-center gap-1">
                    <span className="h-2 w-2 rounded-full bg-yellow-400" />
                    {project.tags[0]}
                  </span>
                )}
                {project.stats && (
                  <>
                    <span className="flex items-center gap-1 hover:text-slate-300 transition-colors">
                      <Star size={12} /> {project.stats.stars}
                    </span>
                    <span className="flex items-center gap-1 hover:text-slate-300 transition-colors">
                      <GitFork size={12} /> {project.stats.forks}
                    </span>
                  </>
                )}
                <span className="ml-auto text-[10px] text-slate-700">Updated now</span>
              </div>
            </div>

          </motion.article>
        ))}
      </div>
    </section>
  );
}

