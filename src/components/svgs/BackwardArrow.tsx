import React from "react";
import GenericImage, { GenericProps } from "./GenericImage";

const BackwardArrow: React.FC<GenericProps> = ({
  color,
  width = 31,
  ...rest
}) => {
  return (
    <svg
      {...rest}
      width={width}
      height="60"
      viewBox="0 0 31 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M28 2L4 30.5L28 57" stroke={color} strokeWidth="6" />
    </svg>
  );
};

export default GenericImage(BackwardArrow);
