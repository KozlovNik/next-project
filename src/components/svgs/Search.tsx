import WithSvgState, { SvgProps } from "../hocs/WithSvgState";

const Search: React.FC<SvgProps> = ({ color, width, ...rest }) => (
  <svg
    {...rest}
    width={width}
    height="27"
    viewBox="0 0 23 27"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="11.5" cy="11.5" r="10.5" stroke={color} />
    <path d="M18.1411 20.0683L22.2307 25.7078" stroke={color} />
  </svg>
);

export default WithSvgState(Search);
