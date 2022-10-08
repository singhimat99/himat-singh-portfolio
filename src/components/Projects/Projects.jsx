import React from "react";
import "./Projects.css";
import { projectsData } from "./ProjectsData";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section className="projects-page" id="projects">
      <div className="projects_content">
        <div className="projects_content-title">
          <h3>{"<Projects/>"}</h3>
          <h4>My Latest Work</h4>
        </div>
        <div className="projects_content-all-projects">
          {projectsData.map((project) => {
            return <ProjectCard key={project.id} {...project} />;
          })}
        </div>
      </div>
    </section>
  );
}
