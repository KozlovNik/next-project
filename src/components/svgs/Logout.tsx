import WithSvgState, { SvgProps } from "../hocs/WithSvgState";

const Logout: React.FC<SvgProps> = ({ color, width = 22, ...rest }) => {
  return (
    <svg
      {...rest}
      width={width}
      height="27"
      viewBox="0 0 19 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M14.5 1V7M14.5 26V21" stroke={color} />
      <path
        d="M9.5 14H13.5H17.5M17.5 14L13.5 18M17.5 14L14 10.5"
        stroke={color}
      />
      <path
        d="M15 1H6C3.23858 1 1 3.23858 1 6V21C1 23.7614 3.23858 26 6 26H15"
        stroke={color}
      />
    </svg>
  );
};

export default WithSvgState(Logout);
