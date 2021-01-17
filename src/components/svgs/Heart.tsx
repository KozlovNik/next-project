import React, { useState } from "react";

interface HeartProps {
  className: string;
}

const Heart: React.FC<HeartProps> = ({ className }) => {
  const [color, setColor] = useState("white");
  return (
    <svg
      width="23"
      height="21"
      viewBox="0 0 23 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      onClick={() => {
        setColor((color) => (color === "white" ? "#D66565" : "white"));
      }}
    >
      <path
        d="M16.3398 1C14.593 1 13.0616 1.83224 11.9113 3.40683C11.758 3.61683 11.6212 3.82692 11.5 4.0304C11.3788 3.82688 11.242 3.61683 11.0887 3.40683C9.93837 1.83224 8.40701 1 6.66016 1C5.2156 1 3.95113 1.56573 2.98589 2.49904C1.74612 3.69781 1 5.503 1 7.49481C1 10.663 2.90078 13.6886 7.06278 17.0145C8.22212 17.9408 9.55691 18.8905 11.075 19.8731C11.2056 19.9578 11.3528 20 11.5 20C11.6472 20 11.7944 19.9578 11.925 19.8733C18.8928 15.3633 22 11.5456 22 7.49486C22 3.95413 19.6417 1 16.3398 1Z"
        fill={color}
        stroke="#D66565"
      />
    </svg>
  );
};

export default Heart;
