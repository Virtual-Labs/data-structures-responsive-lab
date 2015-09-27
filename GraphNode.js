/*
  Author: Ayush Mishra
*/

function GraphNode(x, y, number) {
  this.x = x;
  this.y = y;
  this.radius = 15;
  this.number = number;

  GraphNode.allInstances = GraphNode.allInstances || [];
  GraphNode.allInstances.push(this);

  this.draw = function() {
    DrawUtil.drawArc(x, y, 15, '#FF0000');
    if(number < 10) DrawUtil.writeText(x - 3, y + 3, number + '', 15, '#FFFFFF');
    else DrawUtil.writeText(x - 6, y + 3, number + '', 15, '#FFFFFF');
  }

  this.inside = function(x1, y1) {
    return (Math.sqrt( (x - x1) * (x - x1) + (y - y1) * (y - y1) ) <= 15);
  }

}