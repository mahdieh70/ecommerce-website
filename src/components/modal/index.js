import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { ModalContent } from "./modalContent";

const Modal = ({ isShow, onClose, title, children }) => {
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
            <div
              onClick={onClose}
              style={{
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0,0,0,.2)",
                position: "fixed",
                top: 0,
                left: 0,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                zIndex: 1000,
              }}
            >
              <ModalContent
                // onClose={() => {
                //   onClose();
                // }}
                title={title}
              >
                {children}
              </ModalContent>
            </div>,
            test
          )
        : null}
    </>
  );
};

export default Modal;
