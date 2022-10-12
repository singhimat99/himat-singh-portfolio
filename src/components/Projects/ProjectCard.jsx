import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import ProjectModal from "./ProjectModal";

export default function ProjectCard({ logoUrl, modalInfo }) {
  const [isOpen, setIsOpen] = useState(false);
  const BACKGROUND_IMAGE = {
    backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.5),  rgba(0, 0, 0, 0.5)), url(${logoUrl})`,
  };
  return (
    <>
      <div className="project-card" style={BACKGROUND_IMAGE}>
        <button
          className="view-project-btn"
          onClick={() => {
            setIsOpen(true);
          }}
        >
          {" "}
          <FaEye /> view project
        </button>
        <ProjectModal
          open={isOpen}
          onClose={() => {
            setIsOpen(false);
          }}
          modalInfo={modalInfo}
        />
      </div>
    </>
  );
}
// <div className="project-card">
//   <div className="project-card_img">
//     <img src={imageUrl} alt="NBA stats Project Image" />
//   </div>
//   <div className="project-card-content">
//     <h2>{title}</h2>
//     <p>{description}</p>
//     <div className="toolsUsed">
//       {toolsUsed.map((tool, i) => {
//         return (
//           <div className="single-skill" key={i}>
//             {tool}
//           </div>
//         );
//       })}
//     </div>
//     <div className="project-buttons">
//       <a href={links.github} target="_blank">
//         code
//       </a>
//       <a href={links.live} target="_blank">
//         live
//       </a>
//     </div>
//   </div>
// </div>
