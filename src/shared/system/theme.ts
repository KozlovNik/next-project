import mapValues from "lodash/mapValues";

const breakpoints = {
  xs: "480px",
  sm: "768px",
  lg: "1200px",
};

export const theme = Object.freeze({
  breakpoints: Object.assign(Object.values(breakpoints), breakpoints),
  mediaQueries: {
    screen: mapValues(
      breakpoints,
      (breakpoint) => `(min-width: ${breakpoint})`
    ),
  },
  fontWeights: {
    thin: 100,
    extralight: 200,
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    heavy: 900,
    extrablack: 950,
  },
  colors: {
    red: "var(--colors-red)",
    "red-2": "var(--colors-red-2)",
    white: "var(--colors-white)",
    yellow: "var(--colors-yellow)",
    orange: "var(--colors-orange)",
    black: "var(--colors-black)",
    "black-2": "var(--colors-black-2)",
    "black-3": "var(--colors-black-3)",
    "black-4": "var(--colors-black-4)",
    "black-5": "var(--colors-black-5)",
    "black-6": "var(--colors-black-6)",
  },
  space: {
    xxl: "var(--spacings-xxl)",
    xxs: "var(--spacings-xxs)",
    xs: "var(--spacings-xs)",
    "xxl-2": "var(--spacings-xxl-2)",
    s: "var(--spacings-s)",
    m: "var(--spacings-m)",
    "xxl-3": "var(--spacings-xxl-3)",
    l: "var(--spacings-l)",
    xl: "var(--spacings-xl)",
    "xxl-4": "var(--spacings-xxl-4)",
    "xxl-5": "var(--spacings-xxl-5)",
    "xxl-6": "var(--spacings-xxl-6)",
    "xxl-7": "var(--spacings-xxl-7)",
    "xxl-8": "var(--spacings-xxl-8)",
    "xxl-9": "var(--spacings-xxl-9)",
    "xxl-10": "var(--spacings-xxl-10)",
  },
});
