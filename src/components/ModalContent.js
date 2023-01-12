import React from "react";
import "./ModalContent.css";

const ModalContent = ({ onClose }) => {
  return (
    <div className="modal">
      <div>I'm a modal dialog</div>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default ModalContent;
