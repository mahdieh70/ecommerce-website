import React, { useState } from "react";
import { createPortal } from "react-dom";
import ModalContent from "./ModalContent";


const Modal = () => {
  const [showModal, setShowModal] = useState(false);
  return <div>
   
    {showModal && createPortal(<ModalContent onClose={() => setShowModal(false)} />, document.body)}</div>;
};

export default Modal;
