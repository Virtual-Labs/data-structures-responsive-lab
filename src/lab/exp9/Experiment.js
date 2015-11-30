function Experiment() {

  Experiment.vis = []
  Experiment.complete = false; 
  Experiment.visitedCount = 0;

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

    if((STATE == KRUSKAL_RUNNING_STATE) && NUMBER_NODES == 0) {
      InformationBoard.text = "Draw a graph with atleast one node.";
      return;
    }

    if(CURRENTSTATE == KRUSKAL_RUNNING_STATE) {
      Experiment.resetGraph();
      Board.visible = false;
    }

    if(STATE == DRAWING_STATE) {
      InformationBoard.text = "Press escape when you are done drawing the graph.";
    }

    if(STATE == DRAWN_STATE) {
      InformationBoard.text = "Click on the Kruskal's algorithm ,if you want to run";
      for(i=0; i < GraphNode.allInstances.length ; i++)
      {
		GraphNode.allInstances[i].completely_visited = false;
      }
      for(i=0; i < GraphMidNode.allInstances.length ; i++)
      {
               GraphMidNode.allInstances[i].visited = false;
      }
      for(i=0 ; i < GraphEdge.allInstances.length ; i++)
      {
               GraphEdge.allInstances[i].visi = false;
      }
    }

    Experiment.hideButtons(CURRENTSTATE);
    CURRENTSTATE = STATE;
    Experiment.showButtons(CURRENTSTATE);

    if(STATE == KRUSKAL_RUNNING_STATE) {
      Experiment.initBoard();
      Board.visible = true;
    }

  }

  Experiment.clickedIn = function(u) {
    window.setTimeout(function() {

      if ( u % 2 == 0)
         var nxt = u + 1;
      else
         var nxt = u - 1;
 //     GraphMidNode.allInstances[u].visited = true;
 //     GraphMidNode.allInstances[nxt].visited = true;
      var a = GraphMidNode.allInstances[u].number;
      var b = GraphMidNode.allInstances[nxt].number;
      var e = GraphMidNode.allInstances[u].edgeno;
      var n1 = ( a + b ) / 2;
      if( u % 2 == 0)
         var n2 = b - n1;
      else 
         var n2 = a - n1;

      var flag = 0;
      if(GraphNode.allInstances[n1].completely_visited && GraphNode.allInstances[n2].completely_visited )
      {
         flag = 1;
 //        InformationBoard.text = "Selecting this edge forms a loop, Select a different edge!";
      }
      else
      {
         if(!GraphNode.allInstances[n1].completely_visited)
         {
	 GraphNode.allInstances[n1].completely_visited = true;
         Experiment.visitedCount++;
         }
         if(!GraphNode.allInstances[n2].completely_visited)
         {
         GraphNode.allInstances[n2].completely_visited = true;
         Experiment.visitedCount++;
         }
         GraphMidNode.allInstances[u].visited = true;
         GraphMidNode.allInstances[nxt].visited = true;
         GraphEdge.allInstances[e].visi = true;
         flag = 0;
         var ii = 0;
 //        InformationBoard.text = "Good Choice!, way to go";
      }
      Experiment.checkComplete();
      if(ii == 0)
      {
      InformationBoard.text = "Good Choice!, way to go";
      }
      else
      { 
      InformationBoard.text = "Selecting this edge forms a loop, Select a different edge!";
      }
    }, 30);
  }

  Experiment.checkComplete = function() {
    if(Experiment.visitedCount == NUMBER_NODES) {
      window.setTimeout(function() { 
        InformationBoard.text = "Correct ! You have succesfully completed the algorithm. Click anywhere on screen to go to main menu.";
        Experiment.complete = true;
      }, 1000);
    }
  }


  Experiment.initBoard = function() {
    Experiment.complete = false;
    Experiment.visitedCount = 0;
    Experiment.vis = [];
    for(i = 0; i < GraphNode.allInstances.length; i++) {
        Experiment.vis[i] = false;
    }
  }


  Experiment.resetGraph = function() {
      InformationBoard.text = "Click on the Kruskal's algorithm ,if you want to run";
      for(i = 0; i < GraphNode.allInstances.length; i++) {
      GraphNode.allInstances[i].partially_visited = true;
      GraphNode.allInstances[i].completely_visited = false;
    }
      for(i=0; i < GraphMidNode.allInstances.length ; i++)
      { 
        GraphMidNode.allInstances[i].visited = false;
      }
      for(i=0 ; i < GraphEdge.allInstances.length ; i++)
      {
               GraphEdge.allInstances[i].visi = false;
      }
  }

  Experiment.clearGraph = function() {
      InformationBoard.text = "Click on draw graph to start drawing the graph."
      GraphNode.allInstances = [];
      GraphEdge.allInstances = [];
      GraphMidNode.allInstances = [];
      NUMBER_NODES = 0;
      NUMBER_EDGES = 0;
  }

}

new Experiment();
