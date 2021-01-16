import { useState, useRef, forwardRef } from "react";
import classNames from "classnames";

interface GenericOwnProps {
  width: number | string;
  className?: string;
  initialColor?: string;
  hoverColor?: string;
  onClick?: () => void;
}

export interface GenericProps extends GenericOwnProps {
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  color: string;
}

const GenericSvg = (Svg: any) => {
  return (props: GenericOwnProps) => {
    const {
      initialColor = "#787878",
      hoverColor = "#D66565",
      onClick = () => {},
      ...rest
    } = props;
    const [color, setColor] = useState(initialColor);

    const onMouseEnter = () => {
      setColor(hoverColor);
    };

    const onMouseLeave = () => {
      setColor(initialColor);
    };

    return (
      <Svg
        {...rest}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        color={color}
      />
    );
  };
};

export default GenericSvg;
