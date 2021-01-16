import GenericImage, { GenericProps } from "./GenericImage";

const Fb: React.FC<GenericProps> = ({ color, width = 36, ...rest }) => {
  return (
    <svg
      {...rest}
      width={width}
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.5 29H15V18C15 18 13.5 18 12.5 17.5C12.3565 17.4283 12 16.781 12 16V14L15 14V13.5C15 13.5 15 8.99997 17.5 7.99999C20 7.00001 22 7.5 22 7.5V11C22 11.5 19.8405 10.797 19.5 12C19.3405 12.5636 19.5 14 19.5 14H23V18H19.5V29Z"
        stroke={color}
      />
      <circle cx="18" cy="18" r="17.5" stroke={color} />
    </svg>
  );
};

export default GenericImage(Fb);
