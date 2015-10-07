/*
  Author: Ayush Mishra
*/

function GraphNode(x, y, number, demo) {
  this.x = x;
  this.y = y;
  this.radius = 15;
  this.number = number;
  this.partially_visited = false;
  this.completely_visited = false;
  this.adjList = []
  this.adjMatrix = []
  this.reverseAdjMatrix = []
  this.reverseAdjList = [number]
  this.reverseAdjMatrix[number] = true;

  if( ! demo) {
    GraphNode.allInstances = GraphNode.allInstances || [];
    GraphNode.allInstances.push(this);
  }

  this.draw = function() {
    if(!this.partially_visited && !this.completely_visited) {
      DrawUtil.drawArc(x, y, 15, '#FF0000');
    } else if(!this.completely_visited) {
      DrawUtil.drawArc(x, y, 15, '#AAAAAA');
    } else {
      DrawUtil.drawArc(x, y, 15, '#00FF00');
    }
    if(number < 10) DrawUtil.writeText(x - 3, y + 3, number + '', 15, '#FFFFFF');
    else DrawUtil.writeText(x - 6, y + 3, number + '', 15, '#FFFFFF');
  }

  this.inside = function(x1, y1) {
    return (Math.sqrt( (x - x1) * (x - x1) + (y - y1) * (y - y1) ) <= 15);
  }

  this.connectTo = function(v) {
    this.adjList.push(v);
    this.adjMatrix[v] = true;
    GraphNode.allInstances[v].reverseAdjList.push(number);
    GraphNode.allInstances[v].reverseAdjMatrix[number] = true;
  }

  this.connectedTo = function(v) {
    return this.adjMatrix[v];
  }

  this.reverseConnectedTo = function(v) {
    return this.reverseAdjMatrix[v];
  }

  this.canBacktrack = function(v) {
    if(this.number != v) return this.reverseConnectedTo(v);
    return Experiment.dfsStack.length == 1;
  }

}