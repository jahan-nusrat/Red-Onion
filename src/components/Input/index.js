import React from "react";

const Input = (props) => {
  const { value, label, type, onChange } = props;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        margin: "10px 0px",
        fontFamily: "SulSans, Helvetica, sans-serif",
        fontWeight: "bold",
      }}
    >
      <label>{label}:</label>
      <input
        {...props}
        value={value}
        type={type}
        onChange={onChange}
        style={{
          border: "1px solid #E1E3E6",
          color: "#A4A4A4",
          backgroundColor: "#fff",

          height: "40px",
          borderRadius: "10px",

          fontSize: "18px",
          paddingLeft: "15px",
        }}
      />
    </div>
  );
};

export default Input;
