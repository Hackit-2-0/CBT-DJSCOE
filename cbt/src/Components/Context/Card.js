import React from "react";

const cardStyles = {
  borderRadius: 3,
  width: "420px",
  height: "250px",
  cursor: "pointer",
  userSelect: "none",
  position: "absolute",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  top: 0,
  border: "1px solid #333",
  borderRadius: "2.5px",
  background: "rgba(34,124,226,1)",
  color: "#fff",
  boxShadow: "2px 2px 5px 2px #000"
};

const Card = ({ zIndex = 0, children }) => (
  <div style={{ ...cardStyles, zIndex }}>{children}</div>
);

export default Card;
