/*
  Author: Ayush Mishra
*/

function Button(x, y, diffx, diffy, text, textColor, buttonColor, onClick, textSize, buttonColorHover, state, visible) {
  this.x = x;
  this.y = y;
  this.diffx = diffx;
  this.diffy = diffy;
  this.text = text;
  this.textColor = textColor
  this.buttonColor = buttonColor;
  this.onClick = onClick;
  this.focus = false;
  this.textSize = textSize;
  this.state = state;
  this.visible = visible;

  Button.allInstances = Button.allInstances || [];
  Button.allInstances.push(this);

  this.draw = function () {
    var special = this.focus;
    if(special) DrawUtil.drawRect(x - 2, y - 2, diffx + 4, diffy + 4, '#A8AAA8');
    else DrawUtil.drawRect(x - 2, y - 2, diffx + 4, diffy + 4, '#888888');
    if(special) DrawUtil.drawRect(x, y, diffx, diffy, buttonColorHover);
    else DrawUtil.drawRect(x, y, diffx, diffy, buttonColor);
    DrawUtil.writeText(x + 4, y + textSize, text, textSize, textColor);
  }

  this.inside = function(x1, y1) {
    // returns a boolean whether or not the point (x1, y1) is inside button or not.
    return (this.visible) && ((x1 >= x && x1 <= x + diffx) && (y1 >= y && y1 <= y + diffy));
  }

};