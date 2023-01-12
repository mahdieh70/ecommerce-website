import React from "react";
import "./ModalContent.css";

const ModalContent = ({ onClose, title, children }) => {
  return (
    <div style={{ backgroundColor: "white", borderRadius: 8, width: "60%" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingInline: "10px",
          marginTop: 10,
        }}
      >
        <div
          onClick={onClose}
          style={{ width: 20, height: 20, cursor: "pointer" }}
        >
          <i className="fa-solid fa-xmark" />
        </div>

        <p style={{ fontSize: 16 }}>{title}</p>
      </div>
      <div>{children}</div>
    </div>
  );
};

export { ModalContent };
