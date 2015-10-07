function Experiment() {

  Experiment.vis = []
  Experiment.dValue = []
  Experiment.fValue = []
  Experiment.dfsStack = []
  Experiment.dfsTime = 0;
  Experiment.visitedCount = 0;
  Experiment.dfsComplete = false;
  Experiment.expectedToVisit = [];
  Experiment.expectedToVisitNext = [];
  Experiment.bfsSelected = -1;
  Experiment.bfsComplete = false;
  Experiment.LValue = []
  Experiment.bfsStack = []

  Experiment.hideButtons = function (STATE) {
    for(i = 0; i < Button.allInstances.length; i++) {
      if(Button.allInstances[i].state == STATE) {
        Button.allInstances[i].visible = false;
      }
    }
  }

  Experiment.showButtons = function (STATE) {
    for(i = 0; i < Button.allInstances.length; i++) {
      if(Button.allInstances[i].state == STATE) {
        Button.allInstances[i].visible = true;
      }
    }
  }

  Experiment.loadState = function (STATE) {

    if((STATE == DFS_RUNNING_STATE || STATE == BFS_RUNNING_STATE) && NUMBER_NODES == 0) {
      InformationBoard.text = "Draw a graph with atleast one node.";
      return;
    }

    if(CURRENTSTATE == DFS_RUNNING_STATE) {
      Experiment.refreshGraph();
      DFSBoard.visible = false;
    }

    if(CURRENTSTATE == BFS_RUNNING_STATE) {
      Experiment.refreshGraph();
      BFSBoard.visible = false;
    }

    if(STATE == DRAWING_STATE) {
      InformationBoard.text = "Press escape when you are done drawing the graph.";
    }

    if(STATE == DRAWN_STATE) {
      InformationBoard.text = "Click on the algorithm you want to run. DFS/BFS";
    }

    Experiment.hideButtons(CURRENTSTATE);
    CURRENTSTATE = STATE;
    Experiment.showButtons(CURRENTSTATE);

    if(STATE == DFS_RUNNING_STATE) {
      Experiment.initDFS();
      DFSBoard.visible = true;
    }

    if(STATE == BFS_RUNNING_STATE) {
      Experiment.initBFS();
      BFSBoard.visible = true;
    }

  }

  Experiment.clickedInBFS = function(u) {
    window.setTimeout(function() {
    if(Experiment.bfsSelected == -1) {
      GraphNode.allInstances[u].partially_visited = true;
      Experiment.bfsSelected = u;
      Experiment.LValue[u] = 0;
      
        if(!Experiment.vis[u]) {
          Experiment.vis[u] = true;
          InformationBoard.text = "Click on the next node for BFS.";
          Experiment.visitedCount++;
          Experiment.checkBFSComplete();
          for(i = 0; i < GraphNode.allInstances[u].adjList.length; i++) {
            if(!Experiment.vis[GraphNode.allInstances[u].adjList[i]])
              Experiment.expectedToVisit.push(GraphNode.allInstances[u].adjList[i]);
          }
          if(Experiment.expectedToVisit.length == 0) {
            Experiment.expectedToVisit = Experiment.expectedToVisitNext;
            Experiment.expectedToVisitNext = [];
            if(Experiment.expectedToVisit.length == 0) {
              Experiment.bfsSelected = -1;
              InformationBoard.text = "Click on some source node for BFS.";
            }
          }
        } else {
          InformationBoard.text = "The node you selected was already visited.";
        }
    } else {
  
        if(Experiment.expectedToVisit.indexOf(u) != -1) {
          Experiment.vis[u] = true;
          Experiment.LValue[u] = Experiment.calculateDistance(Experiment.bfsSelected, u);
          InformationBoard.text = "Correct! Click on the next node for BFS.";
          Experiment.visitedCount++;
          Experiment.checkBFSComplete();
          GraphNode.allInstances[u].partially_visited = true;
          for(i = 0; i < GraphNode.allInstances[u].adjList.length; i++) {
            if(!Experiment.vis[GraphNode.allInstances[u].adjList[i]])
              Experiment.expectedToVisitNext.push(GraphNode.allInstances[u].adjList[i]);
          }
          Experiment.expectedToVisit.splice(Experiment.expectedToVisit.indexOf(u), 1);
          if(Experiment.expectedToVisit.length == 0) {
            Experiment.expectedToVisit = Experiment.expectedToVisitNext;
            Experiment.expectedToVisitNext = [];
            if(Experiment.expectedToVisit.length == 0) {
              Experiment.bfsSelected = -1;
              InformationBoard.text = "Click on some source node for BFS.";
            }
          }
        } else {
          InformationBoard.text = "Wrong node selected. Click on the next node for BFS.";
        }
    }
  
    for(var i = 0; i < GraphNode.allInstances.length; i++) {
        var allVisited = true;
        for(var j = 0; j < GraphNode.allInstances[i].adjList.length; j++) {
          allVisited = allVisited && ( Experiment.vis[GraphNode.allInstances[i].adjList[j]] == true);
        }
        if(Experiment.vis[i] && allVisited && Experiment.expectedToVisitNext.indexOf(i) == -1) GraphNode.allInstances[i].completely_visited = true;
      }
    }, 30);
  }

  Experiment.checkBFSComplete = function() {
    if(Experiment.visitedCount == NUMBER_NODES) {
      window.setTimeout(function() { 
        InformationBoard.text = "Correct ! You have succesfully completed the BFS. Click anywhere on screen to go to main menu.";
        Experiment.bfsComplete = true;
      }, 1000);
    }
  }


  Experiment.initBFS = function() {
    Experiment.vis = [];
    Experiment.bfsComplete = false;
    Experiment.visitedCount = 0;
    Experiment.bfsStack = [];
    Experiment.bfsSelected = -1;
    Experiment.expectedToVisit = [];
    Experiment.expectedToVisitNext = [];
    for(i = 0; i < GraphNode.allInstances.length; i++) {
      Experiment.vis[i] = false;
      Experiment.LValue[i] = '-';
    }
  }

  Experiment.calculateDistance = function(u, v) {
    visited = [];
    queue = [];
    dist = [];
    queue.push(u);
    dist[u] = 0;

    while(queue.length != 0) {
      var top = queue.shift();
      console.log(top);
      for(j = 0; j < GraphNode.allInstances[top].adjList.length; j++) {
        if(!visited[GraphNode.allInstances[top].adjList[j]]) {
          visited[GraphNode.allInstances[top].adjList[j]] = true;
          dist[GraphNode.allInstances[top].adjList[j]] = dist[top] + 1;
          queue.push(GraphNode.allInstances[top].adjList[j]);
        }
      }
    }
    return dist[v];
  }

  Experiment.clickedInDFS = function(u) {

    if(Experiment.dValue[u] != '-' && Experiment.fValue[u] == '-') {
      if(GraphNode.allInstances[Experiment.dfsStack[Experiment.dfsStack.length - 1]].canBacktrack(u)) {
        var lastInStack = Experiment.dfsStack[Experiment.dfsStack.length - 1];
        var canGoAhead = false;

        window.setTimeout(function() {

          for(i = 0; i < GraphNode.allInstances[lastInStack].adjList.length; i++) {
            canGoAhead = canGoAhead || (Experiment.vis[GraphNode.allInstances[lastInStack].adjList[i]] == false);
          }
          if(canGoAhead == false) {
            Experiment.dfsStack.pop();
            console.log(Experiment.dfsStack);
            Experiment.fValue[lastInStack] = ++Experiment.dfsTime;
            GraphNode.allInstances[lastInStack].completely_visited = true;
            if(Experiment.visitedCount == NUMBER_NODES && Experiment.dfsStack.length == 0) {
              window.setTimeout(function() { 
                InformationBoard.text = "Correct ! You have succesfully completed the DFS. Click anywhere on screen to go to main menu.";
                Experiment.dfsComplete = true;
              }, 1000);
            } else if(Experiment.dfsStack.length == 0) {
              window.setTimeout(function() {
                InformationBoard.text = "Select some source node to start DFS again.";
              }, 100);
            }
          }
        }, 30);

      }
    } else {
      if(Experiment.vis[u]) {
        InformationBoard.text = "The node you chose is already visited";
        return;
      }
      if(Experiment.dfsStack.length == 0 || (GraphNode.allInstances[Experiment.dfsStack[Experiment.dfsStack.length - 1]].connectedTo(u))) {
        Experiment.dfsStack.push(u);
        Experiment.visitedCount++;
        Experiment.vis[u] = true;
        GraphNode.allInstances[u].partially_visited = true;
        Experiment.dValue[u] = ++Experiment.dfsTime;
        window.setTimeout(function() {
          var canGoAhead = false;
          for(i = 0; i < GraphNode.allInstances[u].adjList.length; i++) {
            if(! Experiment.vis[GraphNode.allInstances[u].adjList[i]]) canGoAhead = true;
          }
          if(canGoAhead) {
            InformationBoard.text = "Correct ! Now what's next?!";
          } else {
            InformationBoard.text = "Correct ! As we can't go ahead now. We need to backtrack.";
          }
        }, 30);
        return;
      } else {
        window.setTimeout(function() {
          InformationBoard.text = "The node you are trying to visit can't be visited from the last node.";
        }, 30);
      }
    }
  }

  Experiment.initDFS = function() {
    Experiment.vis = [];
    Experiment.dValue = [];
    Experiment.fValue = [];
    Experiment.dfsTime = 0;
    Experiment.dfsComplete = false;
    Experiment.visitedCount = 0;
    Experiment.dfsStack = [];
    for(i = 0; i < GraphNode.allInstances.length; i++) {
      Experiment.vis[i] = false;
      Experiment.dValue[i] = '-';
      Experiment.fValue[i] = '-';
    }
  }



  Experiment.refreshGraph = function() {
      for(i = 0; i < GraphNode.allInstances.length; i++) {
      GraphNode.allInstances[i].partially_visited = false;
      GraphNode.allInstances[i].completely_visited = false;
    }
  }

  Experiment.resetGraph = function() {
    if(confirm('Are you sure you want to reset the graph?')) {
      InformationBoard.text = "Click on draw graph to start drawing the graph."
      GraphNode.allInstances = [];
      GraphEdge.allInstances = [];
      NUMBER_NODES = 0;
    }
  }

}

new Experiment();