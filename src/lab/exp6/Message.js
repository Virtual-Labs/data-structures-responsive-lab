function wrapText(context, text, x, y, maxWidth, lineHeight) {
        var words = text.split(' ');
        var line = '';

        for(var n = 0; n < words.length; n++) {
          var testLine = line + words[n] + ' ';
          var metrics = context.measureText(testLine);
          var testWidth = metrics.width;
          if (testWidth > maxWidth && n > 0) {
            context.fillText(line, x, y);
            line = words[n] + ' ';
            y += lineHeight;
          }
          else {
            line = testLine;
          }
        }
        context.fillText(line, x, y);
      }
function Message() {
  Message.draw = function() {
    Draw.drawRect(500-455,  USED_HEIGHT-455, 180, 370, '#600FF0');
    Draw.drawRect(500-450 , USED_HEIGHT-450, 170, 360, '#FFFFFF');
    context.font = '16pt Calibri';context.fillStyle = '#333';
    wrapText(context,Message.text,500-400+20,USED_HEIGHT-300+20,150,40)
  }
}

new Message();