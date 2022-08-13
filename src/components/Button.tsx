import React, { forwardRef } from "react";
import styled from "styled-components";

const ButtonUI = styled.button`
  border: none;
  min-width: 100%;
  min-height: 40px;
  height: 35px;
  font-size: 16;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 300;
  background-color: var(--colors-red);

  :hover {
    background-color: var(--colors-red-2);
  }
`;

interface ButtonProps {
  type?: "submit" | "reset" | "button";
  href?: "string";
  onClick?: () => void;
}

// TODO: add variants and separate button and anchor in the future if necessary
const Button: React.FC<ButtonProps> = forwardRef(
  ({ href, children, ...rest }, ref) => (
    <ButtonUI {...rest} as={href ? "a" : "button"} href={href} ref={ref}>
      {children}
    </ButtonUI>
  )
);

export default Button;
