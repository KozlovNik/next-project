import WithSvgState, { SvgProps } from "../hocs/WithSvgState";

const Basket: React.FC<SvgProps> = ({ color, width = 20, ...rest }) => {
  return (
    <svg
      {...rest}
      width={width}
      height="19"
      viewBox="0 0 20 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.124023"
        y="3.47775"
        width="4"
        height="2.32634"
        transform="rotate(-48.6948 0.124023 3.47775)"
        fill={color}
      />
      <rect
        x="2.30371"
        y="5.51416"
        width="4"
        height="15.2583"
        transform="rotate(-48.6948 2.30371 5.51416)"
        fill={color}
      />
      <path
        d="M18.1009 16.7114L14.6986 16.0602L16.9637 13.4393L18.1009 16.7114Z"
        fill={color}
      />
    </svg>
  );
};

export default WithSvgState(Basket);
