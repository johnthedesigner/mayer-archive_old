// Base pixel scale to build all sizes from
export const rem = 8;

// generate number of pixels as a rem-scaled px string
export const px = units => units * rem + "px";

// Build an array of flexible spacing variables
export const space = {
  0: px(0.125),
  1: px(0.25),
  2: px(0.5),
  3: px(1),
  4: px(1.5),
  5: px(2),
  6: px(3),
  7: px(5)
};

export const baseFontSize = px(2.5);
