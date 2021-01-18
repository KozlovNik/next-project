import React from "react";
import WithSvgState, { SvgProps } from "../hocs/WithSvgState";

const CatArrForward: React.FC<SvgProps> = ({ className, ...rest }) => {
  return (
    <svg
      width="50"
      height="50"
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...rest}
    >
      <path d="M16 12L33 25.4727L16 38" stroke="#4F4E4E" />
      <circle r="24.5" transform="matrix(-1 0 0 1 25 25)" stroke="#4F4E4E" />
    </svg>
  );
};

export default WithSvgState(CatArrForward);
