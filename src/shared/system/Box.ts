import styled from "styled-components";
import {
  color,
  background,
  flexbox,
  layout,
  grid,
  position,
  border,
  space,
  shadow,
  compose,
} from "./primitives";

const box = compose(
  color,
  background,
  border,
  flexbox,
  grid,
  layout,
  position,
  space,
  shadow
);

export const Box = styled("div")`
  ${box};
`;

export const Flex = styled(Box).attrs((props) => ({
  display: props.inline ? "inline-flex" : "flex",
}))``;

export const Grid = styled(Box).attrs((props) => ({
  display: props.inline ? "inline-grid" : "grid",
}))``;
