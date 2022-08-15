import styled from "styled-components";

export const CloseButton = styled.button`
  cursor: pointer;
  width: 21px;
  height: 21px;
  position: relative;
  background: none;
  border: none;
  display: block;

  ::before,
  ::after {
    content: "";
    position: absolute;
    height: 20px;
    width: 2px;
    top: 0;
    left: 10px;
    background-color: ${({ color }) => color || "var(--colors-black-4)"};
  }

  ::before {
    transform: rotate(225deg);
  }

  ::after {
    transform: rotate(-45deg);
  }

  :hover::before,
  :hover::after {
    background-color: ${({ hoverColor, color }) =>
      hoverColor || color ? hoverColor || color : "var(--colors-black-3)"};
  }
`;
