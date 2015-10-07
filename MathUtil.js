/*
  Author: Ayush Mishra

  Contains all maths related stuff.
  Contains the scaling functions to adjust to any window size...
*/


function MathUtil() {
  MathUtil.applyX = MathUtil.applyX || function (x) {
    return (x * WINDOW_WIDTH) / USED_WIDTH;
  }

  MathUtil.applyY = MathUtil.applyY || function (y) {
    return (y * WINDOW_HEIGHT) / USED_HEIGHT;
  }

  MathUtil.rapplyX = MathUtil.rapplyX || function (x) {
    return (x * USED_WIDTH) / WINDOW_WIDTH;
  } 

  MathUtil.rapplyY = MathUtil.rapplyY || function (y) {
    return (y * USED_HEIGHT) / WINDOW_HEIGHT;
  }
}

new MathUtil();             // needs to be instansiated once to use static methods of this utility class.