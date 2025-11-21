import React from "react";
import "../app/globals.css";

const skills = {
    Languages: [
        { name: "TypeScript", imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
        { name: "JavaScript", imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "Python", imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "SQL", imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
        { name: "C++", imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
        { name: "HTML", imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS", imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        { name: "LUA", imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/lua/lua-original.svg" },
        { name: "MQL5", imgSrc: "https://upload.wikimedia.org/wikipedia/commons/b/b1/MQL5_Community_Logo.png" },
      ],
    Databases: [
        { name: "PostgreSQL", imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
        { name: "MongoDB", imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "MySQL", imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
        { name: "Firebase", imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
        { name: "MariaDB", imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mariadb/mariadb-original.svg" },
    ],
    Frameworks: [
        { name: "React", imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Next.js", imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
        { name: "Tailwind", imgSrc: "https://cdn.cruz-dev.com/image-1748574007625.png" },
        { name: "VueJs", imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
        { name: "Express", imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
        { name: "Node.js", imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "Discord.js", imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/discordjs/discordjs-original.svg" },
    ],
    Tools: [
        { name: "Git", imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { name: "ClickUp", imgSrc: "https://cdn.cruz-dev.com/image-1748573866928.png" },
        { name: "Trollo", imgSrc: "https://cdn.cruz-dev.com/image-1748573972541.png" },
        { name: "Figma", imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
        { name: "Cloudflare", imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cloudflare/cloudflare-original.svg" },
        { name: "Firebase", imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
        { name: "Google Cloud", imgSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
        { name: "OpenAI API", imgSrc: "https://cdn.cruz-dev.com/image-1748573818239.png" },
        { name: "Gemini API", imgSrc: "https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/gemini-color.png" },
    ],
      
  };
  
  export default function SkillsGrid() {
    return (
        <section id="skill" className="relative max-w-7xl mx-auto px-4 py-12 ">
            <h2 className="text-3xl font-semibold mb-8 relative z-10">My Skills</h2>
            <div className="grid grid-cols-2 gap-8 max-w-6xl w-full mx-auto">
            {/* Languages - ซ้ายชิดซ้าย */}
            <div className="text-left items-start flex flex-col">
            <div className="flex items-center gap-2 mb-4"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-code-xml h-5 w-5"><path d="m18 16 4-4-4-4"></path><path d="m6 8-4 4 4 4"></path><path d="m14.5 4-5 16"></path></svg><h3 className="text-xl font-medium">Languages</h3></div>
            <div className="grid grid-cols-4 gap-ถ">
                {skills.Languages.map(({ name, imgSrc }) => (
                <div
                    key={name}
                    className="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-gray-500 transition-colors cursor-pointer"

                >
                    <div className="relative w-8 h-8">
                    <img src={imgSrc} alt={name} className="object-contain w-full h-full" />
                    </div>
                    <span className="text-sm text-center">{name}</span>
                </div>
                ))}
            </div>
            </div>
        
            {/* Databases - ขวาชิดขวา */}
            <div className="text-right items-end flex flex-col">
            <div className="flex items-center gap-2 mb-4"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-database h-5 w-5"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 21 19V5"></path><path d="M3 12A9 3 0 0 0 21 12"></path></svg><h3 className="text-xl font-medium">Databases</h3></div>          <div className="grid grid-cols-4 gap-4 justify-end">
                {skills.Databases.map(({ name, imgSrc }) => (
                <div
                    key={name}
                    className="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-gray-500 transition-colors cursor-pointer"

                >
                    <div className="relative w-8 h-8">
                    <img src={imgSrc} alt={name} className="object-contain w-full h-full" />
                    </div>
                    <span className="text-sm text-center">{name}</span>
                </div>
                ))}
            </div>
            </div>
        
            {/* Frameworks - ซ้ายชิดซ้าย */}
            <div className="text-left items-start flex flex-col">
            <div className="flex items-center gap-2 mb-4"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-terminal h-5 w-5"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" x2="20" y1="19" y2="19"></line></svg><h3 className="text-xl font-medium">Frameworks</h3></div>          <div className="grid grid-cols-4 gap-4">
                {skills.Frameworks.map(({ name, imgSrc }) => (
                <div
                    key={name}
                    className="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-gray-500 transition-colors cursor-pointer"

                >
                    <div className="relative w-8 h-8">
                    <img src={imgSrc} alt={name} className="object-contain w-full h-full" />
                    </div>
                    <span className="text-sm text-center">{name}</span>
                </div>
                ))}
            </div>
            </div>
        
            {/* Tools - ขวาชิดขวา */}
            <div className="text-right items-end flex flex-col">
            <div className="flex items-center gap-2 mb-4"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-wrench h-5 w-5"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg><h3 className="text-xl font-medium">Tools</h3></div>          <div className="grid grid-cols-4 gap-4 justify-end">
                {skills.Tools.map(({ name, imgSrc }) => (
                <div
                    key={name}
                    className="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-gray-500 transition-colors cursor-pointer"

                >
                    <div className="relative w-8 h-8">
                    <img src={imgSrc} alt={name} className="object-contain w-full h-full" />
                    </div>
                    <span className="text-sm text-center">{name}</span>
                </div>
                ))}
            </div>
            </div>
        
        </div>
    </section>
      
    );
  }
  