/*
  Author: Ayush Mishra
*/

function InformationBoard() {
  InformationBoard.draw = function() {
    DrawUtil.drawRect(500 - 215, USED_HEIGHT - 105, 430, 90, '#600FF0');
    DrawUtil.drawRect(500 - 210, USED_HEIGHT - 100, 420, 80, '#FFFFFF');
    if(InformationBoard.text.length >= 55) {
      for(i = 45; i <= 55; i++) {
        if(InformationBoard.text[i] == ' ') {
          DrawUtil.writeText(500 - 200 + 20, USED_HEIGHT - 100 + 20, InformationBoard.text.slice(0, i), 16, '#000000');
          DrawUtil.writeText(500 - 200 + 20, USED_HEIGHT - 100 + 45, InformationBoard.text.slice(i + 1, InformationBoard.text.length), 16, '#000000');
          return;
        }
      }
    } else {
      DrawUtil.writeText(500 - 200 + 20, USED_HEIGHT - 100 + 20, InformationBoard.text, 16, '#000000');
    }
  }
  InformationBoard.text = "Click on draw graph to start drawing the graph.";
}

new InformationBoard();