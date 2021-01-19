import React from "react";

import "./style.css";

const CheckBox = (props) => {
  const { label, onChange, value } = props;
  return (
    <div
      style={{
        height: "40px",
        display: "flex",
        flexDirection: "row",
        margin: "10px 0px",
        fontFamily: "SulSans, Helvetica, sans-serif",
        fontWeight: "bold",
        alignItems: "center",
        alignContent: "center",
      }}
    >
      <label style={{ margin: "0px" }}>{label}:</label>
      <input
        onChange={onChange}
        value={value}
        type={"checkbox"}
        style={{
          border: "1px solid #E1E3E6",
          color: "#E1E3E6",
          backgroundColor: "#fff",

          borderRadius: "10px",

          fontSize: "18px",
          marginLeft: "5px",
        }}
      />
    </div>
  );
};

export default CheckBox;
