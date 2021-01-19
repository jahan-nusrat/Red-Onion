import React from "react";

const Image = (props) => {
  const { type, onChange } = props;
  return (
    <input
      {...props}
      type={type}
      onChange={onChange}
      style={{ margin: "10px 0px" }}
    />
  );
};

export default Image;
