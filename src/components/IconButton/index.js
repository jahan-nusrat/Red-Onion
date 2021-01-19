import React from "react";

import IconButton from "@material-ui/core/IconButton";

const ButtonIcon = ({ Component, ...props }) => {
  return (
    <IconButton {...props}>
      <Component />
    </IconButton>
  );
};

export default ButtonIcon;
