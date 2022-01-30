import { useState } from "react";

interface OwnProps {
  width?: number | string;
  height?: number | string;
  className?: string;
  initialColor?: string;
  hoverColor?: string;
  onClick?: () => void;
}

export interface SvgProps extends OwnProps {
  onMouseEnter: (e: React.MouseEvent<SVGSVGElement>) => void;
  onMouseLeave: (e: React.MouseEvent<SVGSVGElement>) => void;
  color: string;
}

const WithSvgState =
  (WrappedComponent: React.FC<SvgProps>) => (props: OwnProps) => {
    const {
      initialColor = "#787878",
      hoverColor = "#D66565",
      onClick,
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
      <WrappedComponent
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        color={color}
        {...rest}
      />
    );
  };

export default WithSvgState;
