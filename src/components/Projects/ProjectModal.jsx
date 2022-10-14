import React from "react";
import { CgWebsite } from "react-icons/cg";
import { BiCodeCurly } from "react-icons/bi";

export default function ProjectModal({ open, modalInfo, onClose }) {
  if (!open) return null;

  const BACKGROUND_IMAGE = {
    backgroundImage: `url(${modalInfo.imageUrl})`,
  };
  return (
    <>
      <div className="modal-overlay" onClick={onClose} />
      <div className="project-modal-wrapper">
        <div className="project-modal-img">
          <img src={modalInfo.imageUrl} alt="project-image" />
        </div>
        <div className="project-modal-content">
          <h3>Project</h3>
          <h4>{modalInfo.title}</h4>
          <div className="modal-toolsUsed">
            {modalInfo.toolsUsed.map((tool, i) => {
              return (
                <div className="single-tool" key={i}>
                  {tool}
                </div>
              );
            })}
          </div>
          <h5>about</h5>
          <div className="modal-about-content">
            <p>{modalInfo.description}</p>
            <br />
            <p>{modalInfo.whatILearned}</p>
          </div>
          <div className="modal-links">
            <a href={modalInfo.links.live} target="_blank">
              <CgWebsite />
              demo
            </a>
            <a href={modalInfo.links.github} target="_blank">
              <BiCodeCurly />
              code
            </a>
          </div>
          <button onClick={onClose}>X</button>
        </div>
      </div>
    </>
  );
}
