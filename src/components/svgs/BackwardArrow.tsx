import React from "react";
import GenericImage, { GenericProps } from "./GenericImage";
import styles from "./Arrows.module.css";

const BackwardArrow = ({
  color,
  handleMouseEnter,
  handleMouseLeave,
  handleClick,
  className,
}: GenericProps) => {
  return (
    <div>
      <svg
        width="31"
        height="60"
        viewBox="0 0 31 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onMouseEnter={() => {
          handleMouseEnter();
        }}
        onMouseLeave={() => {
          handleMouseLeave();
        }}
        className={className}
        onClick={() => {
          if (handleClick) handleClick();
        }}
      >
        <path d="M28 2L4 30.5L28 57" stroke={color} strokeWidth="6" />
      </svg>
    </div>
  );
};

export default GenericImage(BackwardArrow);
