/*
  Author : Ayush Mishra
*/

function BFSBoard() {
  BFSBoard.visible = false;

  firstFakeNode = new GraphNode(800, USED_HEIGHT / 2 - 100, 1, true);
  secondFakeNode = new GraphNode(800, USED_HEIGHT / 2 - 50, 1, true);
  thirdFakeNode = new GraphNode(800, USED_HEIGHT / 2, 1, true);
  secondFakeNode.partially_visited = true;
  thirdFakeNode.completely_visited = true;

  BFSBoard.draw = function () {
    firstFakeNode.draw();
    secondFakeNode.draw();
    thirdFakeNode.draw();


    DrawUtil.writeText(820, USED_HEIGHT / 2 - 100 + 10, 'Unvisited Node', 14, '#FFFF00');
    DrawUtil.writeText(820, USED_HEIGHT / 2 - 50 + 10, 'Partially Visited', 14, '#FFFF00');
    DrawUtil.writeText(820, USED_HEIGHT / 2 + 10, 'Completely Visited', 14, '#FFFF00');
    

    DrawUtil.drawRect(50 + 5, 5, 900 - 10, 55, '#FFFFFF');
    DrawUtil.writeText(100, 25, 'Nodes: ', 17, '#000000');
    DrawUtil.writeText(100, 45, 'L :', 17, '#FF0000');

    var xoffset = 180;
    for(i = 0; i < NUMBER_NODES; i++) {
      DrawUtil.writeText(xoffset + 33 * i, 25, i, 17, '#000000');
      DrawUtil.writeText(xoffset + 33 * i, 45, Experiment.LValue[i], 17, '#FF0000');
    }
  }
}

new BFSBoard();