import React from "react";

export default function ProjectCard({ imageUrl, title, description }) {
  return (
    <div
      className="project-card"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    >
      <div className="project-card-content">
        <h2>{title}</h2>
        <p>{description}</p>
        <a href="#">CASE STUDY</a>
      </div>
    </div>
  );
}
