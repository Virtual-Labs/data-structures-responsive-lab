/*
  Author: Ayush Mishra

  Contains all methods related to drawing something on to the canvas.
  All methods are static.
*/

function DrawUtil() {

  DrawUtil.drawLine = function (x1, y1, x2, y2, color) {
    context.beginPath();
    context.strokeStyle = color;
    context.moveTo(MathUtil.applyX(x1), MathUtil.applyY(y1));
    context.lineTo(MathUtil.applyX(x2), MathUtil.applyY(y2));
    context.stroke();
  }

  DrawUtil.drawEdge = function (x1, y1, x2, y2, color) {
    itx = (x1  + x2 * 4) / 5;
    ity = (y1 +  y2 * 4) / 5;
    context.beginPath();
    context.strokeStyle = color;
    context.moveTo(MathUtil.applyX(x1), MathUtil.applyY(y1));
    context.lineTo(MathUtil.applyX(x2), MathUtil.applyY(y2));
    context.stroke();
    DrawUtil.drawArc(itx, ity, 4, '#FFAAFF');
    DrawUtil.drawArc(itx, ity, 1.5, '#000000');
  }

  DrawUtil.writeText = function (x, y, str, size, color) {
    context.fillStyle = color;
    context.font = "bold " + Math.floor(MathUtil.applyY(size)) + "px Arial";
    context.fillText(str, MathUtil.applyX(x), MathUtil.applyY(y));
  }

  DrawUtil.drawRect = function (x1, y1, diffx, diffy, color) {
    if(color) context.fillStyle = color;
    context.fillRect(MathUtil.applyX(x1), MathUtil.applyY(y1), MathUtil.applyX(diffx), MathUtil.applyY(diffy));
  }

  DrawUtil.drawArc = function (x1, y1, radius, color) {
    context.beginPath();
    context.arc(MathUtil.applyX(x1), MathUtil.applyY(y1), MathUtil.applyY(radius), 0, 2 * Math.PI);
    context.fillStyle = color;
    context.fill();
  }

  DrawUtil.drawBackground = function () {
    context.fillStyle = "#000000";
    DrawUtil.drawRect(0, 0, 1000, 516);
    DrawUtil.drawLine(50, 0, 50, 516, '#FFFFFF');
    DrawUtil.drawLine(1000 - 50, 0, 1000 - 50, 516, '#FFFFFF');
  }
}

new DrawUtil();