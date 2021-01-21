import { useState } from "react";

let buttonStyles = {
  border: "none",
  minWidth: 150,
  height: 35,
  fontSize: 16,
  color: "#fff",
  borderRadius: 5,
  cursor: "pointer",
  fontWeight: 300,
};

const Button: React.FC<React.HTMLProps<HTMLButtonElement>> = ({
  className,
  onClick,
  children,
  ...rest
}) => {
  const [color, setColor] = useState("#D66565");
  return (
    <button
      onMouseEnter={() => setColor("#af4343")}
      onMouseLeave={() => setColor("#D66565")}
      className={className}
      style={{ ...buttonStyles, backgroundColor: color, ...rest.style }}
    >
      {children}
    </button>
  );
};

export default Button;