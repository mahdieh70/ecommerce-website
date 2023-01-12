import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { ModalContent } from "./modalContent";
import "./modal.css";

const Modal = ({
  isShow,
  onClose,
  title,
  image,
  price,
  category,
  description,
  children,
}) => {
  const test = document.querySelector("body");

  useEffect(() => {
    if (isShow) {
      test.style.overflow = "hidden";
    } else if (!isShow) {
      test.style.overflow = "unset";
    }
  }, [isShow]);

  return (
    <>
      {isShow
        ? createPortal(
            <div className="portal-root">
              <div className="overlay" onClick={onClose} />
              <div className="modal-area">
                <ModalContent
                  onClose={() => {
                    onClose();
                  }}
                  title={title}
                  image={image}
                  price={price}
                  category={category}
                  description={description}
                >
                  {children}
                </ModalContent>
              </div>
            </div>,
            test
          )
        : null}
    </>
  );
};

export default Modal;
