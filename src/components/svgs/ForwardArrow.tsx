import React from "react";
import GenericImage, { GenericProps } from "./GenericImage";

const ForwardArrow: React.FC<GenericProps> = ({
  color,
  width = 31,
  ...rest
}) => {
  return (
    <div>
      <svg
        {...rest}
        width={width}
        height="60"
        viewBox="0 0 31 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M3 2L27 30.5L3 57" stroke={color} strokeWidth="6" />
      </svg>
    </div>
  );
};

export default GenericImage(ForwardArrow);
