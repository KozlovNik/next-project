import { compose, system } from "@styled-system/core";
import { background } from "@styled-system/background";
import { border } from "@styled-system/border";
import { color } from "@styled-system/color";
import { flexbox } from "@styled-system/flexbox";
import { grid } from "@styled-system/grid";
import { layout } from "@styled-system/layout";
import { position } from "@styled-system/position";
import { shadow } from "@styled-system/shadow";
import { space } from "@styled-system/space";
import { typography } from "@styled-system/typography";
import { variant } from "@styled-system/variant";

const screen = (breakpoint) => (props) =>
  `@media only screen and ${props.theme.mediaQueries.screen[breakpoint]}`;

export const displayUp = (breakpoint) => (props) =>
  `@media only screen and (max-width: calc(${props.theme.breakpoints[breakpoint]} - 0.1px)) { display: none }`;

export const hideUp = (breakpoint) => (props) =>
  `${screen(breakpoint)(props)} { display: none }`;

export {
  background,
  border,
  color,
  shadow,
  compose,
  space,
  variant,
  layout,
  position,
  grid,
  flexbox,
  system,
  screen,
  typography,
};
