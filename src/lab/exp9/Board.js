

function Board() {
  Board.visible = false;

  firstFakeNode = new GraphNode(800, USED_HEIGHT / 2 - 200, 1, true);
  secondFakeNode = new GraphNode(800, USED_HEIGHT / 2 - 150, 1, true);

  firstFakeNode.partially_visited = true;
  secondFakeNode.completely_visited = true;

  Board.draw = function () {
    firstFakeNode.draw();
    secondFakeNode.draw();

    DrawUtil.writeText(820, USED_HEIGHT / 2 - 200 + 10, 'Disconnected Node', 14, '#FFFF00');
    DrawUtil.writeText(820, USED_HEIGHT / 2 - 150 + 10, 'Connected Node', 14, '#FFFF00');
    DrawUtil.drawLine(800, USED_HEIGHT / 2 - 100, 860, USED_HEIGHT / 2 - 100, '#FFA500');
    DrawUtil.drawArc(815, USED_HEIGHT / 2 - 100, 4, '#FFAAFF');
    DrawUtil.writeText(827, USED_HEIGHT / 2 - 100 , '1', 14, '#FFFF00');
    DrawUtil.drawArc(845, USED_HEIGHT / 2 - 100, 4, '#FFAAFF');
    DrawUtil.writeText(820, USED_HEIGHT / 2 - 75, 'Not In MST', 14 , '#FFFF00');
    DrawUtil.drawLine(800, USED_HEIGHT / 2 - 50, 860, USED_HEIGHT / 2 - 50, '#00FF00');
    DrawUtil.drawArc(815, USED_HEIGHT / 2 - 50, 4, '#00FF00');
    DrawUtil.writeText(827, USED_HEIGHT / 2 - 50 , '1', 14, '#FFFF00');
    DrawUtil.drawArc(845, USED_HEIGHT / 2 - 50, 4, '#00FF00');
    DrawUtil.writeText(820, USED_HEIGHT / 2 - 25, 'Included In MST', 14 , '#FFFF00');
     
  }
}

new Board();
