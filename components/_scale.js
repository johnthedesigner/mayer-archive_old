// Base pixel scale to build all sizes from
export const rem = 8;

// generate number of pixels as a rem-scaled px string
export const rempx = units => units * rem + "px";

// Build an array of flexible spacing variables
export const space = {
  0: rempx(0.125),
  1: rempx(0.25),
  2: rempx(0.5),
  3: rempx(1),
  4: rempx(1.5),
  5: rempx(2),
  6: rempx(3),
  7: rempx(5)
};

export const baseFontSize = rempx(2.5);
