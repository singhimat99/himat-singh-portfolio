import React from "react";

export default function ProjectCard({
  imageUrl,
  title,
  description,
  toolsUsed,
}) {
  return (
    <>
      <div className="project-card">
        <img src={imageUrl} alt="NBA stats Project Image" />
        <div className="project-card-content">
          <h2>{title}</h2>
          <p>{description}</p>
          <div className="toolsUsed">
            {toolsUsed.map((tool, i) => {
              return (
                <div className="single-skill" key={i}>
                  {tool}
                </div>
              );
            })}
          </div>
          <div className="project-buttons">
            <a href="#">CODE</a>
            <a href="#">LIVE</a>
          </div>
        </div>
      </div>
    </>
  );
}
