import React from "react";
import "./Projects.css";
import projectImage from "../images/nba_stats_project_screenshot.png";

export default function Projects() {
  return (
    <section className="projects-page" id="projects">
      <div className="projects_content">
        <div className="projects_content-title">
          <h1>{"<projects>"}</h1>
          <p>Here are the projects I built while learning to code!</p>
        </div>
        <div className="projects_content-all-projects">
          <div className="project-card">
            <div className="project-card-content">
              <h2>NBA Statistics</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Repellendus deleniti facilis voluptatum dignissimos architecto
                provident quos deserunt exercitationem, natus nostrum.
              </p>
              <a href="#">CASE STUDY</a>
            </div>
          </div>
          <div className="project-card">
            <div className="project-card-content">
              <h2>NBA Statistics</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Repellendus deleniti facilis voluptatum dignissimos architecto
                provident quos deserunt exercitationem, natus nostrum.
              </p>
              <a href="#">CASE STUDY</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
