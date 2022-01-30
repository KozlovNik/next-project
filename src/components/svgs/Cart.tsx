import WithSvgState, { SvgProps } from "../hocs/WithSvgState";

const Cart: React.FC<SvgProps> = ({ color, width = 26, ...rest }) => (
  <svg
    {...rest}
    width={width}
    height="26"
    viewBox="0 0 26 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M10 10H21.5M11 13H20M11.5 15.8061H19" stroke={color} />
    <path
      d="M7 6.62245H25L20.5 19.8878H10L7 6.62245ZM7 6.62245L5 0.5H0"
      stroke={color}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 25.5C13.1046 25.5 14 24.5863 14 23.4592C14 22.332 13.1046 21.4183 12 21.4183C10.8954 21.4183 10 22.332 10 23.4592C10 24.5863 10.8954 25.5 12 25.5ZM12 24.4795C12.5523 24.4795 13 24.0227 13 23.4591C13 22.8956 12.5523 22.4387 12 22.4387C11.4477 22.4387 11 22.8956 11 23.4591C11 24.0227 11.4477 24.4795 12 24.4795Z"
      fill={color}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18 25.5C19.1046 25.5 20 24.5863 20 23.4592C20 22.332 19.1046 21.4183 18 21.4183C16.8954 21.4183 16 22.332 16 23.4592C16 24.5863 16.8954 25.5 18 25.5ZM18 24.4795C18.5523 24.4795 19 24.0227 19 23.4591C19 22.8956 18.5523 22.4387 18 22.4387C17.4477 22.4387 17 22.8956 17 23.4591C17 24.0227 17.4477 24.4795 18 24.4795Z"
      fill={color}
    />
  </svg>
);

export default WithSvgState(Cart);
