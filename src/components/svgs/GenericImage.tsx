import { useState } from "react";

interface GenericOwnProps {
  width?: number | string;
  height?: number | string;
  className?: string;
  initialColor?: string;
  hoverColor?: string;
  onClick?: () => void;
}

export interface GenericProps extends GenericOwnProps {
  onMouseEnter: (e: React.MouseEvent<SVGSVGElement>) => void;
  onMouseLeave: (e: React.MouseEvent<SVGSVGElement>) => void;
  color: string;
}

const GenericSvg = (Svg: React.FC<GenericProps>) => {
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
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        color={color}
        {...rest}
      />
    );
  };
};

export default GenericSvg;
