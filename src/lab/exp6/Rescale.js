function Rescale() {
  Rescale.applyX = Rescale.applyX || function (x) {
    return (x * WINDOW_WIDTH) / USED_WIDTH;
  }

  Rescale.applyY = Rescale.applyY || function (y) {
    return (y * WINDOW_HEIGHT) / USED_HEIGHT;
  }

  Rescale.rapplyX = Rescale.rapplyX || function (x) {
    return (x * USED_WIDTH) / WINDOW_WIDTH;
  } 

  Rescale.rapplyY = Rescale.rapplyY || function (y) {
    return (y * USED_HEIGHT) / WINDOW_HEIGHT;
  }
}

new Rescale();             