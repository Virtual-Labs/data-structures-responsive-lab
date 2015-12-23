
function DrawUtil() {

  DrawUtil.drawLine = function (x1, y1, x2, y2, color) {
    context.beginPath();
    context.strokeStyle = color;
    context.moveTo(MathUtil.applyX(x1), MathUtil.applyY(y1));
    context.lineTo(MathUtil.applyX(x2), MathUtil.applyY(y2));
    context.stroke();
  }

  DrawUtil.drawEdge = function (x1, y1, x2, y2, visit, color) {
   /*   itx = (x1  + 0.2 * x2 ) / 1.2;
      ity = (y1 + 0.2 * y2 ) / 1.2;    
    ittx = (x1 + 4 * x2)/ 5;
    itty = (y1 + 4 * y2)/ 5;*/
     tx = (x1 + x2)/2;
     ty = (y1 + y2)/2; 
    /*  dx = x2 - x1 ;
      dy = y2 - y1;
      m = dy/dx;
      itx = x1 + (m/5);
      ity = y1 + (m/5);
      ittx = x1 + (4 * m)/5;
      itty = y1 + (4 * m)/5; */
 /*     var pqr = color;
      if(visit)
      {
        pqr = '#00FF00';
      } */
    context.beginPath();
    if(!visit)
    {
    context.strokeStyle = color;
    }
    else
    {
    context.strokeStyle = '#00FF00';
    }
    context.moveTo(MathUtil.applyX(x1), MathUtil.applyY(y1));
    context.lineTo(MathUtil.applyX(x2), MathUtil.applyY(y2));
    context.stroke();
    DrawUtil.writeText(tx,ty,'1',16,'#FFFF00');
 //   DrawUtil.drawArc(itx, ity, 4, '#FFAAFF');
 //   DrawUtil.drawArc(itx, ity, 1.5, '#000000');
 //   DrawUtil.drawArc(ittx, itty, 4, '#FFAAFF');
 //   DrawUtil.drawArc(ittx, itty, 1.5, '#000000'); 
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
