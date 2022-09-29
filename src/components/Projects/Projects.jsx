import React from "react";
import "./Projects.css";
import { projectsData } from "./ProjectsData";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section className="projects-page" id="projects">
      <div className="projects_content">
        <div className="projects_content-title">
          <h1>{"<Projects/>"}</h1>
          <h3>My latest work</h3>
        </div>
        <div className="projects_content-all-projects">
          {projectsData.map((project) => {
            return (
              <ProjectCard
                key={project.id}
                imageUrl={project.imageUrl}
                title={project.title}
                description={project.description}
                toolsUsed={project.toolsUsed}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
