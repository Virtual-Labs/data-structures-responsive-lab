var DRAWN_NODES = 0;
var LASTINSIDENODE = -1;
var CURRENTSTATE;
var NUMBER_NODES = 0;
var NUMBER_EDGES = 0;
var MOUSE_X = 0;
var MOUSE_Y = 0;
var MOUSEDOWN_X = 0;
var MOUSEDOWN_Y = 0;
var MOUSEPRESSED = 0;
var WINDOW_WIDTH = window.innerWidth;              
var WINDOW_HEIGHT = window.innerHeight;             
const DEBUGGING = true;                             
const INITIAL_STATE = 0;                            
const DRAWING_STATE = 1;                           
const DRAWN_STATE = 2;                              
const KRUSKAL_RUNNING_STATE = 3;
const USED_HEIGHT = 516;
const USED_WIDTH = 1000;
var canvas = document.getElementById("animation");
var context = canvas.getContext("2d");

function config() {

  CURRENTSTATE = INITIAL_STATE;
  window.onresize = resizeSettings;
  canvas.width  = window.innerWidth;                
  canvas.height = window.innerHeight;              
  
  new Button(55, 5, 100, 25, 'Draw Graph', '#3652a4', '#FFFFFF', function() { Experiment.loadState(DRAWING_STATE); }, 15, '#FFFFFF', INITIAL_STATE, true);
  new Button(55 + 10 + 100, 5, 95, 25, 'Instructions', '#3652a4', '#FFFFFF', function() { }, 15, '#FFFFFF', INITIAL_STATE, true);

  new Button(55, 5, 100, 25, 'Draw Graph', '#3652a4', '#FFFFFF', function() { Experiment.loadState(DRAWING_STATE); }, 15, '#FFFFFF', DRAWN_STATE, false);
  new Button(55 + 1 * 10 + 1 * 100, 5, 100, 25, 'kruskal\'s MST', '#3652a4', '#FFFFFF', function() { Experiment.loadState(KRUSKAL_RUNNING_STATE); }, 15, '#FFFFFF', DRAWN_STATE, false);
  new Button(55 + 2 * 10 + 2 * 100, 5, 100, 25, 'ResetGraph', '#3652a4', '#FFFFFF', function() { Experiment.resetGraph(); }, 15, '#FFFFFF', DRAWN_STATE, false);
  new Button(55 + 3 * 10 + 3 * 100, 5, 100, 25, 'Clear Screen', '#3652a4', '#FFFFFF', function() { Experiment.clearGraph(); }, 15, '#FFFFFF', DRAWN_STATE, false);
  new Button(55 + 4 * 10 + 4 * 100, 5, 100, 25, 'Instructions', '#3652a4', '#FFFFFF', function() { }, 15, '#FFFFFF', DRAWN_STATE, false);
}

function resizeSettings() {
  WINDOW_WIDTH = window.innerWidth;
  WINDOW_HEIGHT = window.innerHeight;
  canvas.width  = WINDOW_WIDTH;
  canvas.height = WINDOW_HEIGHT;
}

function main_loop() {

  DrawUtil.drawBackground();
  InformationBoard.draw();
//  if(Board.visible) Board.draw();
  Board.draw();

  if(Button.allInstances) {
    for(i = 0; i < Button.allInstances.length; i++) {
      if(Button.allInstances[i].visible) {
        Button.allInstances[i].draw();
      }
    }
  }

  if((LASTINSIDENODE != -1) && (MOUSEPRESSED) && (CURRENTSTATE == DRAWING_STATE )) {
    DrawUtil.drawEdge(GraphNode.allInstances[LASTINSIDENODE].x, GraphNode.allInstances[LASTINSIDENODE].y, MOUSE_X, MOUSE_Y);
  }

  if(GraphEdge.allInstances) {
    for(i = 0; i < GraphEdge.allInstances.length; i++) {
      GraphEdge.allInstances[i].draw();
    }
  }

  if(GraphNode.allInstances) {
    for(i = 0; i < GraphNode.allInstances.length; i++) {
      GraphNode.allInstances[i].draw();
    }
  }

  if(GraphMidNode.allInstances) {
//       console.log("Out loop buddy");
    for(i=0; i < GraphMidNode.allInstances.length; i++) {
//          console.log("Inside loop buddy");
        GraphMidNode.allInstances[i].draw();
   }
  }
}

window.onmousemove = function(event) {

  MOUSE_X = MathUtil.rapplyX(event.clientX);
  MOUSE_Y = MathUtil.rapplyY(event.clientY);
  if(Button.allInstances) {
    for(i = 0; i < Button.allInstances.length; i++) {
      if(Button.allInstances[i].inside(MOUSE_X, MOUSE_Y)) {
        Button.allInstances[i].focus = true;
      } else {
        Button.allInstances[i].focus = false;
      }
    }
  }

}

window.onclick = function(event) {

  MOUSE_X = MathUtil.rapplyX(event.clientX);
  MOUSE_Y = MathUtil.rapplyY(event.clientY);
  MOUSEPRESSED = false;

  if(CURRENTSTATE == KRUSKAL_RUNNING_STATE && Experiment.complete) {
    Experiment.loadState(DRAWN_STATE);
    return;
  }

  if(Button.allInstances) {
    for(i = 0; i < Button.allInstances.length; i++) {
      if(Button.allInstances[i].visible && Button.allInstances[i].inside(MOUSE_X, MOUSE_Y)) {
        Button.allInstances[i].onClick();
        return;
      }
    }
  }

  if(CURRENTSTATE == DRAWING_STATE) {

    var lastInsideNode = LASTINSIDENODE;
    var insideNode = -1;

    if(GraphNode.allInstances) {
      for(i = 0; i < GraphNode.allInstances.length; i++) {
        if(GraphNode.allInstances[i].inside(MOUSE_X, MOUSE_Y)) insideNode = i;
      }
    }

    if(lastInsideNode != -1) {
      // mouse started dragging at some node.
      if(insideNode == -1) {
          new GraphNode(MOUSE_X, MOUSE_Y, NUMBER_NODES++);
          new GraphEdge(lastInsideNode, NUMBER_NODES - 1, NUMBER_EDGES++);
          GraphNode.allInstances[lastInsideNode].connectTo(NUMBER_NODES - 1);
      } else {
        // draw edge beetween lastInsideNode and insideNode
        if(lastInsideNode != insideNode)  {
          new GraphEdge(lastInsideNode, insideNode, NUMBER_EDGES++);
          GraphNode.allInstances[lastInsideNode].connectTo(insideNode);
        }
      }
    } else {

      if(insideNode != -1) {

      } else {
        new GraphNode(MOUSE_X, MOUSE_Y, NUMBER_NODES++);
        return;
      }
    }

  }

}

window.onmousedown = function(event) {

  MOUSEPRESSED = true;
  MOUSE_X = MathUtil.rapplyX(event.clientX);
  MOUSE_Y = MathUtil.rapplyY(event.clientY);
  MOUSEDOWN_X = MOUSE_X;
  MOUSEDOWN_Y = MOUSE_Y;
  LASTINSIDENODE = -1;
  if(GraphNode.allInstances) {
    for(i = 0; i < GraphNode.allInstances.length; i++) {
      if(GraphNode.allInstances[i].inside(MOUSEDOWN_X, MOUSEDOWN_Y)) LASTINSIDENODE = i;
    }
  }

  if(CURRENTSTATE == KRUSKAL_RUNNING_STATE) {
    for(i = 0; i < GraphMidNode.allInstances.length; i++) {
      if(GraphMidNode.allInstances[i].inside(MOUSE_X, MOUSE_Y)) {
        if(CURRENTSTATE == KRUSKAL_RUNNING_STATE) Experiment.clickedIn(i);
      }
    }
  }
}

window.onkeydown = function(event) {
  if(CURRENTSTATE == DRAWING_STATE && event.keyCode == '27') {
    Experiment.loadState(DRAWN_STATE);
    return;
  }
}

config();

setInterval(function() {
  main_loop();
}, 30);
