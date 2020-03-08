import React from "react";

const buttonStyles = {
  display: "inline-block",
  padding: "8px 20px",
  background: "rgba(255,136,0,0.8)",
  cursor: "pointer",
  border: "none",
  borderRadius: 5,
  outline: "none",
  marginTop: "10px",
  width: "420px",
  fontWeight: "500px",
  color: "#fffff"
};

const Button = ({ children, onClick }) => (
  <button onClick={onClick} style={{ ...buttonStyles }}>
    {children}
  </button>
);

export default Button;
