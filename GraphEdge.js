/*
  Author: Ayush Mishra
*/

function GraphEdge(u, v) {

  this.u = u;
  this.v = v;

  GraphEdge.allInstances = GraphEdge.allInstances || [];
  GraphEdge.allInstances.push(this);

  this.draw = function() {
    DrawUtil.drawEdge(GraphNode.allInstances[u].x, GraphNode.allInstances[u].y, GraphNode.allInstances[v].x, GraphNode.allInstances[v].y);
  }
}