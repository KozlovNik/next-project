import WithSvgState, { SvgProps } from "../hocs/WithSvgState";

const Basket: React.FC<SvgProps> = ({ color, width = 14, ...rest }) => (
  <svg
    {...rest}
    width={width}
    height="22"
    viewBox="0 0 14 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13.5 3.5H9M0 3.5H4.5M4.5 3.5C4.5 3.5 4.63792 1 6.75 1C9 1 9 3.5 9 3.5M4.5 3.5H9"
      stroke={color}
    />
    <path
      d="M4.5 11V16M7.15 11V16M9.55 11V16M0.75 6V20C0.75 20.5523 1.19772 21 1.75 21H11.75C12.3023 21 12.75 20.5523 12.75 20V13.5V6H0.75Z"
      stroke={color}
    />
  </svg>
);

export default WithSvgState(Basket);
