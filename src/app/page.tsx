// src/app/page.tsx
import Image from 'next/image';
// import Tabs from "@ /components/Tabs";
import Expertise from "@/components/Expertise";
import SkillsSection from "@/components/skill";
import WorkExperience from "@/components/WorkExperience";


export default function Home() {
  return (
    <main className="text-white min-h-screen px-10 py-20 font-sans" >
      <div className="max-w-5xl mx-auto space-y-20">
      {/* 1. แนะนำตัว */}
      <section className="text-center">
        <div className="w-40 h-40 mx-auto rounded-full overflow-hidden">
          <Image
            src="/profile.jpg"
            alt="My Profile"
            width={160}
            height={160}
            className="object-cover"
          />
        </div>
        <h1 className="text-5xl font-bold mt-6 ">Pasavit Jarananon</h1>

        <div className="relative m-auto border-3 border-gray-700 rounded-lg mt-10 w-3/4">
          <span className="absolute -top-3 left-4 px-3 font-semibold text-lg title bg-black bg-opacity-90">
            About
          </span>
          <div className="p-6">
            <p className="text-lg">
              Hello, you can call me auto. I study and train myself about programming because I am passionate about programming. I am a fast learner and always like to challenge myself with something new.
            </p>
          </div>
        </div>
      </section>

      {/* <Tabs activeTab={activeTab} setActiveTab={setActiveTab} /> */}

      <Expertise />

      <SkillsSection />

      <WorkExperience />

      </div>
    </main>
  );
}
