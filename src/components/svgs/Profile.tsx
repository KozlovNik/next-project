import GenericImage, { GenericProps } from "./GenericImage";

const Profile = ({
  color,
  handleMouseEnter,
  handleMouseLeave,
  handleClick,
}: GenericProps) => {
  return (
    <svg
      width="22"
      height="26"
      viewBox="0 0 22 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="hell"
      onMouseEnter={() => {
        handleMouseEnter();
      }}
      onMouseLeave={() => {
        handleMouseLeave();
      }}
      
    >
      <path
        d="M11 14C6.49977 14 4.32086 17.301 4 17.7931C1.70517 21.3125 1 25 1 25"
        stroke={color}
      />
      <path
        d="M11 14C15.5002 14 17.6791 17.301 18 17.7931C20.2948 21.3125 21 25 21 25"
        stroke={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 14C14.866 14 18 10.866 18 7C18 3.13401 14.866 0 11 0C7.13401 0 4 3.13401 4 7C4 10.866 7.13401 14 11 14ZM11 13C14.3137 13 17 10.3137 17 7C17 3.68629 14.3137 1 11 1C7.68629 1 5 3.68629 5 7C5 10.3137 7.68629 13 11 13Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.5377 10L14.2502 10.7125C13.3942 11.3988 12.3076 11.8093 11.1251 11.8093C9.94261 11.8093 8.85601 11.3988 8 10.7125L8.71249 10.0001C9.38316 10.5079 10.2189 10.8093 11.1251 10.8093C12.0313 10.8093 12.8671 10.5079 13.5377 10Z"
        fill={color}
      />
    </svg>
  );
};

export default GenericImage(Profile);
