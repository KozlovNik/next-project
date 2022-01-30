import React from "react";
import WithSvgState, { SvgProps } from "../hocs/WithSvgState";

const ForwardArrow: React.FC<SvgProps> = ({ color, width = 31, ...rest }) => (
  <svg
    width={width}
    height="60"
    viewBox="0 0 31 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <path d="M3 2L27 30.5L3 57" stroke={color} strokeWidth="6" />
  </svg>
);

export default WithSvgState(ForwardArrow);
