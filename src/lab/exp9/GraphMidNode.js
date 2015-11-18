
function GraphMidNode(x, y, number, edgeno, demo)
{
 this.x = x;
 this.y = y;
 this.number = number;
 this.edgeno = edgeno;
 this.visited = false;
 // this.com_visited = false;
  
  if( ! demo)
  {
    GraphMidNode.allInstances = GraphMidNode.allInstances || [];
    GraphMidNode.allInstances.push(this);
  }

 this.draw = function() {
  if(!this.visited)
   {
 //        console.log("No No buddy");
         DrawUtil.drawArc(x, y, 5, '#FFAAFF');
   } 

   else
   {
 //        console.log("hey buddy");
         DrawUtil.drawArc(x, y, 5, '#00FF00');
   }
}
 
 this.inside = function(x1, y1) {
    return (Math.sqrt( (x - x1) * (x - x1) + (y - y1) * (y - y1) ) <= 5);
  }
	
}
 
 
