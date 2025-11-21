import React from "react";

const experiences = [
  {
    company: "Freelance Developer",
    position: "Full Stack Developer",
    date: "2025 - Present",
    location: "Remote",
    logo: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/24ed9392232693.5e45b4885aef5.jpg",
    description: [
      "Provided freelance development services for FiveM-related projects, focusing on building and maintaining game and server-side systems using Lua.",
      "Designed and implemented licensing systems and secure permission controls to protect client intellectual property.",
      "Integrated external APIs to extend in-game functionalities and enhance user convenience for various clients.",
      "Conducted data analysis and generated reports to help clients optimize business strategies and improve product offerings."
    ],
  },
  {
    company: "Observe Production ( Fivem Shop )",
    position: "Full Stack Developer",
    date: "2025 - Present",
    location: "Remote",
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
      "Managed cloud systems and logging to maintain server stability and security."
    ],
      
  },
  {
    company: "Cruz Developer ( Fivem Shop )",
    position: "Full Stack Developer",
    date: "2022 - 2025",
    location: "Remote",
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
    <section id="experience" className="max-w-5xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-semibold mb-10">Work Experience</h2>
      <div className="space-y-10">
        {experiences.map((exp, idx) => (
          <div key={idx} className="relative pl-6 border-l-4 border-primary">
            <div className="absolute w-3 h-3 bg-primary rounded-full -left-1.5 top-1.5"></div>
            <div className="flex items-center gap-4 mb-2">
              <img
                src={exp.logo}
                alt={`${exp.company} logo`}
                className="w-12 h-12 object-contain rounded-lg"
              />
              <h3 className="text-xl font-bold">{exp.company}</h3>
            </div>
            <p className="text-base font-medium">{exp.position}</p>
            <p className="text-sm text-muted-foreground">{exp.location}</p>
            <p className="text-sm text-muted-foreground mb-2">{exp.date}</p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              {exp.description.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
