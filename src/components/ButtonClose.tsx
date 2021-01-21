const wrapperStyles = {
  display: "inline-block",
  cursor: "pointer",
  width: 21,
  height: 21,
  position: "relative" as const,
};

const buttonStyles = {
  position: "absolute" as const,
  height: 20,
  width: 2,
  top: 0,
  left: 10,
  backgroundColor: "white",
};

const first = {
  ...buttonStyles,
  transform: "rotate(45deg)",
};

const second = {
  ...buttonStyles,
  transform: "rotate(-45deg)",
};

interface ButtonCloseProps {
  onClick?: () => void;
  color?: string;
}

const ButtonClose: React.FC<ButtonCloseProps> = ({
  onClick,
  color: backgroundColor = "#fff",
}) => {
  return (
    <div onClick={onClick} style={wrapperStyles}>
      <span style={{ ...first, backgroundColor }} />
      <span style={{ ...second, backgroundColor }} />
    </div>
  );
};

export default ButtonClose;
