import React from "react";

const Image = (props) => {
  const { label, options, onChange, value } = props;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        margin: "10px 0px",
        fontFamily: "SulSans, Helvetica, sans-serif",
        fontWeight: "bold",
        width: "50%",
      }}
    >
      <label>{label}:</label>
      <select
        {...props}
        value={value}
        onChange={onChange}
        style={{
          border: "1px solid #E1E3E6",
          color: "#E1E3E6",
          backgroundColor: "#fff",

          height: "40px",
          borderRadius: "10px",

          fontSize: "18px",
          paddingLeft: "15px",
        }}
      >
        {options.map((option) => (
          <option value={option.id}>{option.name}</option>
        ))}
      </select>
    </div>
  );
};

export default Image;
