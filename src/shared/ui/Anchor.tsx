import styled from "styled-components";
import { Text } from "../system/Text";

export const DottedAnchor = styled(Text).attrs({
  as: "a",
  preset: "paragraph1Thin",
  cursor: "pointer",
  mb: "xs",
})`
  color: var(--colors-black-3);
  text-decoration: underline dotted var(--colors-black-4);
  text-decoration-thickness: 1px;

  :hover {
    color: var(--colors-red-2);
    text-decoration: underline dotted var(--colors-red-2);
    text-decoration-thickness: 1px;
  }
`;
