function Draw() {

  Draw.drawLine = function (x1, y1, x2, y2, color) {
    context.beginPath();
    context.strokeStyle = color;
    context.moveTo(Rescale.applyX(x1), Rescale.applyY(y1));
    context.lineTo(Rescale.applyX(x2), Rescale.applyY(y2));
    context.stroke();
  }

  Draw.drawEdge = function (x1, y1, x2, y2, color) {
    itx = (x1  + x2 * 4) / 5;
    ity = (y1 +  y2 * 4) / 5;
    context.beginPath();
    context.strokeStyle = color;
    context.moveTo(Rescale.applyX(x1), Rescale.applyY(y1));
    context.lineTo(Rescale.applyX(x2), Rescale.applyY(y2));
    context.stroke();
    Draw.drawArc(itx, ity, 4, '#FFAAFF');
    Draw.drawArc(itx, ity, 1.5, '#000000');
  }

  Draw.writeText = function (x, y, str, size, color) {
    context.fillStyle = color;
    context.font = "bold " + Math.floor(Rescale.applyY(size)) + "px Arial";
    context.fillText(str, Rescale.applyX(x), Rescale.applyY(y));
  }

  Draw.drawRect = function (x1, y1, diffx, diffy, color) {
    if(color) context.fillStyle = color;
    context.fillRect(Rescale.applyX(x1), Rescale.applyY(y1), Rescale.applyX(diffx), Rescale.applyY(diffy));
  }

  Draw.drawArc = function (x1, y1, radius, color) {
    context.beginPath();
    context.arc(Rescale.applyX(x1), Rescale.applyY(y1), Rescale.applyY(radius), 0, 2 * Math.PI);
    context.fillStyle = color;
    context.fill();
  }

  Draw.drawBackground = function () {
    context.fillStyle = "#551111";
    Draw.drawRect(0, 0, 1000, 516);
  }
}

new Draw();