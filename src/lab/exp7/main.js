const DEBUGGING = true;                             // assign the value false, to go to non-debugging mode.

const INITIAL_STATE = 0;                            // the state when only Draw Graph and Instructions tab is present i.e the initial state.
const DRAWING_STATE = 1;                            // the state when the use could draw the graph.
const DRAWN_STATE = 2;                              // the sate when at least one node is present (except when clear screen is pressed),
                                                    // an algorithm runs in this state.
const DFS_RUNNING_STATE = 3;
const BFS_RUNNING_STATE = 4;

const USED_HEIGHT = 516;
const USED_WIDTH = 1000;

var DRAWN_NODES = 0;
var LASTINSIDENODE = -1;
var CURRENTSTATE;
var NUMBER_NODES = 0;
var MOUSE_X = 0;
var MOUSE_Y = 0;
var MOUSEDOWN_X = 0;
var MOUSEDOWN_Y = 0;
var MOUSEPRESSED = 0;

var WINDOW_WIDTH = window.innerWidth;               // the width do use in the game.
var WINDOW_HEIGHT = window.innerHeight;             // the height to use in the game.

var canvas = document.getElementById("animation");
var context = canvas.getContext("2d");

function config() {

  CURRENTSTATE = INITIAL_STATE;
  window.onresize = resizeSettings;
  canvas.width  = window.innerWidth;                // setting the width of the canvas.
  canvas.height = window.innerHeight;               // setting the height of the canvas.


  /* Buttons of the initial state */
  
  new Button(55, 5, 100, 25, 'Draw Graph', '#3652a4', '#FFFFFF', function() { Experiment.loadState(DRAWING_STATE); }, 15, '#FFFFFF', INITIAL_STATE, true);
  new Button(55 + 10 + 100, 5, 95, 25, 'Instructions', '#3652a4', '#FFFFFF', function() { }, 15, '#FFFFFF', INITIAL_STATE, true);

  /* Buttons of the drawn state */
  //DrawGraph DFS BFS ResetGraph ClearScreen BoardState Instructions

  new Button(55, 5, 100, 25, 'Draw Graph', '#3652a4', '#FFFFFF', function() { Experiment.loadState(DRAWING_STATE); }, 15, '#FFFFFF', DRAWN_STATE, false);
  new Button(55 + 1 * 10 + 1 * 100, 5, 100, 25, 'Instructions', '#3652a4', '#FFFFFF', function() { }, 15, '#FFFFFF', DRAWN_STATE, false);
  new Button(55 + 2 * 10 + 2 * 100, 5, 100, 25, 'DFS', '#3652a4', '#FFFFFF', function() { Experiment.loadState(DFS_RUNNING_STATE); }, 15, '#FFFFFF', DRAWN_STATE, false);
  new Button(55 + 3 * 10 + 3 * 100, 5, 100, 25, 'BFS', '#3652a4', '#FFFFFF', function() { Experiment.loadState(BFS_RUNNING_STATE); }, 15, '#FFFFFF', DRAWN_STATE, false);
  new Button(55 + 4 * 10 + 4 * 100, 5, 100, 25, 'ResetGraph', '#3652a4', '#FFFFFF', function() { Experiment.resetGraph(); }, 15, '#FFFFFF', DRAWN_STATE, false);
  new Button(55 + 5 * 10 + 5 * 100, 5, 100, 25, 'Clear Screen', '#3652a4', '#FFFFFF', function() { Experiment.resetGraph(); }, 15, '#FFFFFF', DRAWN_STATE, false);
//  new Button(55 + 6 * 10 + 6 * 90, 5, 90, 25, 'Board State', '#008000', '#DDDDDD', function() { }, 15, '#FFFFFF', DRAWN_STATE, false);

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

  if(DFSBoard.visible) DFSBoard.draw();
  if(BFSBoard.visible) BFSBoard.draw();

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

  if(CURRENTSTATE == DFS_RUNNING_STATE && Experiment.dfsComplete) {
    Experiment.loadState(DRAWN_STATE);
    return;
  }

  if(CURRENTSTATE == BFS_RUNNING_STATE && Experiment.bfsComplete) {
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
          new GraphEdge(lastInsideNode, NUMBER_NODES - 1);
          GraphNode.allInstances[lastInsideNode].connectTo(NUMBER_NODES - 1);
      } else {
        // draw edge beetween lastInsideNode and insideNode
        if(lastInsideNode != insideNode)  {
          new GraphEdge(lastInsideNode, insideNode);
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

  if(CURRENTSTATE == DFS_RUNNING_STATE || CURRENTSTATE == BFS_RUNNING_STATE) {
    for(i = 0; i < GraphNode.allInstances.length; i++) {
      if(GraphNode.allInstances[i].inside(MOUSE_X, MOUSE_Y)) {
        //alert(MOUSEDOWN_X, MOUSEDOWN_Y, i);
        if(CURRENTSTATE == DFS_RUNNING_STATE) Experiment.clickedInDFS(i);
        else Experiment.clickedInBFS(i);
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
