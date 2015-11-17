
function GraphMidNode(x, y, number, edgeno)
{
 this.x = x;
 this.y = y;
 this.number = number;
 this.edgeno = edgeno;
 this.visited = false;
 // this.com_visited = false;
  

    GraphMidNode.allInstances = GraphMidNode.allInstances || [];
    GraphMidNode.allInstances.push(this);

 this.draw = function() {
  if(!this.visited)
   {
         DrawUtil.drawArc(x, y, 4, '#FFAAFF');
   } 

   else
   {
         DrawUtil.drawArc(x, y, 4, '#00FF00');
   }
}
 
 this.inside = function(x1, y1) {
    return (Math.sqrt( (x - x1) * (x - x1) + (y - y1) * (y - y1) ) <= 4);
  }
	
}
 
 
