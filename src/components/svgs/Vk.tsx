import GenericImage, { GenericProps } from "./GenericImage";

const Vk = ({ color, handleMouseEnter, handleMouseLeave }: GenericProps) => {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="icons__social"
      onMouseEnter={() => {
        handleMouseEnter();
      }}
      onMouseLeave={() => {
        handleMouseLeave();
      }}
    >
      <path
        d="M14.6433 25.3048C13.6447 24.4511 4.43282 10.8221 6.23237 10.2529C8.03192 9.68382 10.3039 10.253 10.3039 10.253L12.7145 14.222L14.6433 17.3885L14.6433 16.2287V12.111C14.6433 12.111 14.1577 11.1382 13.4148 10.5375C12.6719 9.93678 18.8322 9.93675 18.8322 10.5375V15.0185C18.8322 15.0185 21.3578 11.0969 22.4376 10.5277C23.5173 9.95863 26.7502 10.5375 26.7502 10.5375C27.1101 11.3912 21.3997 18.444 21.3997 18.444C21.3997 18.444 30.3494 25.3345 29.9894 25.6191C29.6295 25.9036 24.7779 25.9036 24.0581 25.6191C23.3383 25.3345 18.8322 21.6105 18.8322 21.6105V23.1938V25.6191C18.8322 26.1802 15.6418 26.1584 14.6433 25.3048Z"
        stroke={color}
      />
      <circle cx="18" cy="18" r="17.5" stroke={color} />
    </svg>
  );
};

export default GenericImage(Vk);
