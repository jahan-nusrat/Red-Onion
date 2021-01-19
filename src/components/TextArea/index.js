import React from "react";

const TextArea = (props) => {
  const { label, rows, value } = props;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        margin: "15px 0px",
        fontFamily: "SulSans, Helvetica, sans-serif",
        fontWeight: "bold",
      }}
    >
      <label>{label}:</label>
      <textarea
        {...props}
        rows={rows}
        value={value}
        style={{
          border: "1px solid #E1E3E6",
          backgroundColor: "#fff",
          borderRadius: "10px",
          fontFamily: "Roboto",
          fontSize: "18px",
          paddingLeft: "15px",
          paddingTop: "5px",
          color: "#A4A4A4",
        }}
      />
    </div>
  );
};

export default TextArea;
