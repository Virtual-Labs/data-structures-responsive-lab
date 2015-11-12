
function Experiment() {
  Experiment.array=[]
  Experiment.insertnode = function() {
    var no=document.getElementById("input").value;
    status=BST.insertvalue(no);
    if(status!=-1)
      Message.text=no+" is inserted at the position "+status;
    else
      Message.text=no+" is found at the position "+status;
  }

  Experiment.searchnode = function() {
    var no=document.getElementById("input").value;
    status=BST.searchvalue(no);
    if(status!=-1)
      Message.text=no+" is found at the position "+status;
    else
      Message.text=no+" is not found";
  }

  Experiment.deletenode = function() {
    var no=document.getElementById("input").value;
    status=BST.deletevalue(no);
    if(status)
      Message.text=no+" is found at the position "+status;
  }

  Experiment.resetGraph = function() {
    Message.text = "To insert, delete and search a number into tree, enter a number and press insert, delete and search button";
    BST.initialize();
  }
  Experiment.drawGraph =function() {
    var RootNode = { x:USED_WIDTH/2,y:USED_HEIGHT*0.1};
    var Radius=USED_HEIGHT*0.05;
    if(Experiment.array[0]!=-1) {
      Draw.drawArc(RootNode.x,RootNode.y,Radius,"#ffffff");
        Draw.writeText( RootNode.x,RootNode.y,Experiment.array[0],Radius*0.25,"#000000");
      }

    Experiment.DrawNodes(RootNode.x-Radius*4,RootNode.y+Radius*4, 4, Radius,1);
    Experiment.DrawNodes(RootNode.x+Radius*4,RootNode.y+Radius*4, 4, Radius,2);
  }
  Experiment.DrawNodes =function( x, y, Radius, factor, pos) {
    if(Experiment.array[pos]!=-1) {
      if(pos%2==0) {
        Draw.drawEdge( x-Radius, y-Radius, x-(factor-2)*Radius, y-(factor-2)*Radius, "#ffffff");
      }
      else {
        Draw.drawEdge( x+Radius, y-Radius, x+(factor-2)*Radius, y-(factor-2)*Radius, "#ffffff");
      }
      Draw.drawArc(x, y, Radius, "#ffffff");
      Draw.writeText( x,y,Experiment.array[pos],Radius*0.25,"#000000")
      Experiment.DrawNodes(x-Radius*(factor-0.5),y+Radius*(factor-0.5),(factor-0.5),Radius,pos*2+1);
      Experiment.DrawNodes(x+Radius*(factor-0.5),y+Radius*(factor-0.5),(factor-0.5),Radius,pos*2+2);


    }
  }

}

new Experiment();