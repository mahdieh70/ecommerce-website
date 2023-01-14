import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import "./modal.css";

const Modal = ({ isShow, onClose, children, width }) => {
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
              <div className="overlay" />
              <div
                // onClick={onClose}
                style={{
                  position: "fixed",
                  height: "100%",
                  width: "100%",
                  overflow: "auto",
                }}
              >
                <div
                  style={{ width: width ? width : 600 }}
                  className="modal-area"
                >
                  <i
                    onClick={() => {
                      onClose();
                    }}
                    className="fa-solid fa-xmark closeModal"
                  />

                  {children}
                </div>
              </div>
            </div>,
            test
          )
        : null}
    </>
  );
};

export default Modal;
