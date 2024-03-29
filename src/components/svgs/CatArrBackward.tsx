import React from "react";
import WithSvgState, { SvgProps } from "../hocs/WithSvgState";

const CatArrForward: React.FC<SvgProps> = ({ className, ...rest }) => (
  <svg
    width="50"
    height="50"
    viewBox="0 0 50 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...rest}
  >
    <path d="M34 12L17 25.4727L34 38" stroke="#4F4E4E" />
    <circle cx="25" cy="25" r="24.5" stroke="#4F4E4E" />
  </svg>
);

export default WithSvgState(CatArrForward);
