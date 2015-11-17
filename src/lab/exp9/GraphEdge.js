function GraphEdge(u, v ,no, demo) {

  this.u = u;
  this.v = v;
  this.no = no;
  this.visi = false;
  if( ! demo)
  {
  GraphEdge.allInstances = GraphEdge.allInstances || [];
  GraphEdge.allInstances.push(this);
  }
  var x1 = GraphNode.allInstances[u].x;
  var y1 = GraphNode.allInstances[u].y;
  var x2 = GraphNode.allInstances[v].x;
  var y2 = GraphNode.allInstances[v].y;
  var mx1 = (x1  + 0.2 * x2 ) / 1.2;
  var my1 = (y1 + 0.2 * y2 ) / 1.2;    
  var mx2 = (x1 + 4 * x2)/ 5;
  var my2 = (y1 + 4 * y2)/ 5;
  var n1 = this.u - this.v;
  var n2 = this.u + this.v;
  new GraphMidNode(mx1, my1, n1, this.no);
  new GraphMidNode(mx2, my2, n2, this.no);
  this.draw = function() {
    DrawUtil.drawEdge(x1, y1, x2, y2, this.visi , '#FFA500');
 //   new GraphMidNode(mx1, my1, n1, this.no);
 //   new GraphMidNode(mx2, my2, n2, this.no);
  }
}
