"use client";
import React, { useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

interface TabData {
  title: string;
  id: string;
  content: React.ReactNode;
}

const TAB_DATA: TabData[] = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Html</li>
        <li>css</li>
        <li>Typescript</li>
        <li>Javascript</li>
        <li>Tailwind.css</li>
        <li>React.js</li>
        <li>Next.Js</li>
        <li>Git</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>School: Cambridge English Grammar High School</li>
        <li>Collage: Dagree Collage</li>
        <li>Diploma: GIAIC</li>
      </ul>
    ),
  },
  {
    title: "experience",
    id: "experience",
    content: (
      <ul className="list-disc pl-2">
        <li>No Experience</li>
      </ul>
    ),
  },
];

const About: React.FC = () => {
  const [tab, setTab] = useState("skills");

  const handleTabChange = (id: string) => {
    setTab(id);
  };

  return (
    <section id="about" className="text-white">
      <div className="gap-8 items-center py-8 px-4 xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-16">
        <Image alt="" src="/images/about3.webp" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-white texxt-base md:text-lg">
                    I am a Full Stack web developer with a passion for creating
                    interactive and responsive web application. I have experience
                    working with Html, Css, Javascipt, Typescipt, Next.js, Tailwind.css
                    and GitHub. I am a quick learner and I am always looking to 
                    expand my knowledge and skill set. I am a Team player and I am 
                    excited to work with others to create amazing web application. 
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              Experience
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;