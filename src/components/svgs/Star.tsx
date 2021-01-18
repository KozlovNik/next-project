import React from "react";
import WithSvgState, { SvgProps } from "../hocs/WithSvgState";

const Star: React.FC<SvgProps> = ({
  color,
  width = 17,
  ...rest
}) => {
  return (
    <svg
      {...rest}
      width={width}
      height="17"
      viewBox={`0 0 18 17`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.77143 6.5L8.70382 0.863849C8.79776 0.589878 9.18697 0.594896 9.27381 0.871198L11.0429 6.5H17.0836C17.3735 6.5 17.4948 6.87046 17.261 7.04192L12.346 10.6463L14.2179 16.6024C14.3055 16.8812 13.9832 17.108 13.7504 16.9313L8.84746 13.2119L3.77146 16.9343C3.53457 17.108 3.21499 16.8729 3.31027 16.595L5.37373 10.5766L0.71051 7.03901C0.481485 6.86526 0.604357 6.5 0.891827 6.5H6.77143Z"
        fill={color}
      />
    </svg>
  );
};

export default WithSvgState(Star);
