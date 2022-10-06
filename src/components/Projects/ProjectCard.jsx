import React from "react";

export default function ProjectCard({
  imageUrl,
  title,
  description,
  toolsUsed,
  links,
}) {
  return (
    <>
      <div className="project-card">
        <div className="project-card_img">
          <img src={imageUrl} alt="NBA stats Project Image" />
        </div>
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
            <a href={links.github} target="_blank">
              CODE
            </a>
            <a href={links.live} target="_blank">
              LIVE
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
