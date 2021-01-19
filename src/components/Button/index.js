import React from "react";

const Button = ({ name, type }) => {
  return (
    <button
      type={type}
      style={{
        border: "none",
        backgroundColor: "#D90416",
        color: "#fff",
        height: "50px",

        fontSize: "16px",
        borderRadius: "10px",
        fontFamily: "SulSans, Helvetica, sans-serif",
        fontWeight: "bold",
      }}
    >
      {name}
    </button>
  );
};

export default Button;
