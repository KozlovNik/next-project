import styled from "styled-components";
import {
  variant,
  space,
  typography,
  color,
  compose,
  layout,
} from "./primitives";

export const presets = variant({
  prop: "preset",
  variants: {
    h1: {
      fontWeight: "regular",
      fontSize: "30px",
    },
    h1Light: {
      fontWeight: "light",
      fontSize: "30px",
    },
    h1Thin: {
      fontWeight: "thin",
      fontSize: "30px",
    },

    h2: {
      fontWeight: "regular",
      fontSize: "24px",
    },
    h2Thin: {
      fontWeight: "thin",
      fontSize: "24px",
    },

    h3: {
      fontWeight: "regular",
      fontSize: "20px",
    },
    h3Thin: {
      fontWeight: "thin",
      fontSize: "20px",
    },
    h3Bold: {
      fontWeight: "bold",
      fontSize: "20px",
    },

    paragraph1: {
      fontWeight: "regular",
      fontSize: "16px",
    },
    paragraph1Light: {
      fontWeight: "light",
      fontSize: "16px",
    },
    paragraph1Thin: {
      fontWeight: "thin",
      fontSize: "16px",
    },

    paragraph2: {
      fontWeight: "regular",
      fontSize: "14px",
    },
    paragraph2Light: {
      fontWeight: "light",
      fontSize: "14px",
    },

    caption: {
      fontWeight: "regular",
      fontSize: "12px",
    },
    captionThin: {
      fontWeight: "thin",
      fontSize: "12px",
    },
  },
});

const textMixin = compose(typography, space, color, layout, presets);

export const Text = styled("div")`
  ${textMixin};
`;
