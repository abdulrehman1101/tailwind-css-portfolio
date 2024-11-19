"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

interface ProjectData{
  id: number;
  title: string;
  description: string;
  image: string;
  url: string;
  tag: string[]
}

const projectsData: ProjectData[] = [
  {
    id: 1,
    title: "Coffe Clone Website",
    description: "Project 1 description",
    image: "images/lap1.jpg",
    url: "",
    tag: ["All", "Web","Mobile"],
  },
  {
    id: 2,
    title: "Facebook Clone",
    description: "Project 2 description",
    image: "images/about3.webp",
    url: "",
    tag: ["All", "Web"],
  },
  {
    id: 3,
    title: "Todo App",
    description: "Project 3 Todo app",
    image: "images/about2.webp",
    url: "",

    tag: ["All", "Web"],
  },
  {
    id: 4,
    title: "Calculator",
    description: "Project 4 Calculator",
    image: "images/about4.jpeg",
    url: "",

    tag: ["All", "Mobile"],
  },
  {
    id: 5,
    title: "Clothing Website",
    description: "Project 5 shoping Website",
    image: "images/aboutt.webp",
    url: "",

    tag: ["All", "Web"],
  },
  {
    id: 6,
    title: "Food Website",
    description: "Project 6 Food  Website",
    image: "images/about.jpeg",
    url: "",
    tag: ["All", "Web"],
  },
];
const ProjectsSection: React.FC = () => {
  const [tag, setTag] = useState<string>("All");

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );
  
   console.log("Selected Tag", tag);
   console.log("Filtered Projects:", filteredProjects);
   

  const handleTagChange = (newTag: string) => {
    setTag(newTag);
  };

  return (
    <>
      <h2 id="projects" className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="flex flex-row justify-center items-center gap-2 text-white my-6">
        <ProjectTag
          name="All"
          onClick={handleTagChange}
          isSelected={tag === "All"}
        />
        <ProjectTag
          name="Web"
          onClick={handleTagChange}
          isSelected={tag === "Web"}
        />
        <ProjectTag
          name="Mobile"
          onClick={handleTagChange}
          isSelected={tag == "Mobile"}
        />
      </div>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            url={project.url}
            description={project.description}
            imgUrl={project.image}
          />
        ))}
      </div>
    </>
  );
};

export default ProjectsSection;