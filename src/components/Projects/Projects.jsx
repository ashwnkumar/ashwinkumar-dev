import React from "react";
import ProjectCard from "./ProjectCard";
import projects from "./projects.json";

function Projects() {
  return (
    <div
      id="projects"
      className="flex flex-col items-center space-y-10 md:space-y-20 py-10 md:py-20 bg-custDark1"
    >
      <p className="text-4xl md:text-5xl text-custLight">My Projects</p>
      <div className="flex flex-col md:flex-row items-center justify-center space-y-10 md:space-y-0 md:space-x-16 text-custLight">
        {projects &&
          projects.map((item, index) => (
            <ProjectCard
              key={index} // Add a unique key for each ProjectCard
              title={item.title}
              image={item.image}
              desc={item.desc}
              link={item.link}
              code={item.code}
            />
          ))}
      </div>
    </div>
  );
}

export default Projects;
