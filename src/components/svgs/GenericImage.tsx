import { useState } from "react";
import classNames from "classnames";

export interface GenericProps {
  color: string;
  handleMouseEnter: () => {};
  handleMouseLeave: () => {};
  width: string;
  handleClick: () => void | null;
  className?: string;
}

const GenericSvg = (Svg: any) => {
  return ({
    initialColor = "#787878",
    hoverColor = "#D66565",
    width,
    handleClick,
    className,
  }: {
    width: number;
    initialColor?: string;
    hoverColor?: string;
    handleClick?: () => void;
    className?: string;
  }) => {
    const [color, setColor] = useState(initialColor);

    const handleMouseEnter = () => {
      setColor(hoverColor);
    };

    const handleMouseLeave = () => {
      setColor(initialColor);
    };

    return (
      <Svg
        handleMouseEnter={handleMouseEnter}
        handleMouseLeave={handleMouseLeave}
        color={color}
        width={width}
        handleClick={handleClick}
        className={className}
      />
    );
  };
};

export default GenericSvg;
