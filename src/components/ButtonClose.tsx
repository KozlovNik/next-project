import styled from "styled-components";
import { Box } from "../shared/system/Box";

export const ButtonClose = styled(Box)`
  position: relative;
  cursor: pointer;
  width: 21px;
  height: 21px;
  position: relative;

  ::before,
  ::after {
    content: "";
    position: absolute;
    height: 20px;
    width: 2px;
    top: 0;
    left: 10px;
    background-color: var(--colors-black-4);
  }

  :hover::before,
  :hover::after {
    background-color: var(--colors-black-3);
  }

  ::before {
    transform: rotate(45deg);
  }

  ::after {
    transform: rotate(-45deg);
  }
`;
