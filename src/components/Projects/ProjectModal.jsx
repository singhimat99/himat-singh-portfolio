import React from "react";

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
          <h4>{modalInfo.title}</h4>
          <button onClick={onClose}>X</button>
        </div>
      </div>
    </>
  );
}
