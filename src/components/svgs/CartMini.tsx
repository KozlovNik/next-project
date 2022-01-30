import WithSvgState, { SvgProps } from "../hocs/WithSvgState";

const CartMini: React.FC<SvgProps> = ({ color, width = 19, ...rest }) => (
  <svg
    {...rest}
    width={width}
    height="21"
    viewBox="0 0 19 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.19971 8.60001H15.4797M7.91971 11H14.3997M8.27971 13.2449H13.6797"
      stroke={color}
    />
    <path
      d="M5.04 5.89796H18L14.76 16.5102H7.2L5.04 5.89796ZM5.04 5.89796L3.6 1H0"
      stroke={color}
    />
    <path
      d="M10.0797 19.3674C10.0797 20.2691 9.435 21 8.63971 21C7.84442 21 7.19971 20.2691 7.19971 19.3674C7.19971 18.4657 7.84442 17.7347 8.63971 17.7347C9.435 17.7347 10.0797 18.4657 10.0797 19.3674Z"
      fill={color}
    />
    <path
      d="M14.4005 19.3674C14.4005 20.2691 13.7558 21 12.9605 21C12.1652 21 11.5205 20.2691 11.5205 19.3674C11.5205 18.4657 12.1652 17.7347 12.9605 17.7347C13.7558 17.7347 14.4005 18.4657 14.4005 19.3674Z"
      fill={color}
    />
  </svg>
);

export default WithSvgState(CartMini);
