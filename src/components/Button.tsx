import React, { forwardRef } from "react";
import styled from "styled-components";

const ButtonUI = styled.button`
  border: none;
  min-height: 40px;
  height: 35px;
  font-size: 16;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 300;
  background-color: var(--colors-red);
  padding: 0 var(--spacings-s);
  display: inline-grid;
  justify-content: center;
  align-items: center;

  :hover {
    background-color: var(--colors-red-2);
  }

  :disabled {
    background-color: var(--colors-red-2);
    opacity: 0.4;
    cursor: not-allowed;
  }
`;

interface ButtonProps {
  type?: "submit" | "reset" | "button";
  href?: "string";
  disabled?: boolean;
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
