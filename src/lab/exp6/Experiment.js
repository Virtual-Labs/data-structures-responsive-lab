function Experiment() {
  Experiment.array=[]
  Experiment.insertnode = function() {
    var no=document.getElementById("input").value;
    status=BST.insertvalue(no);
    if(status)
      Message.text=no+" is inserted at the position "+status;
    else
      Message.text=no+" is found at the position "+status;
  }

  Experiment.searchnode = function() {
    var no=document.getElementById("input").value;
    status=BST.searchvalue(no);
    if(status)
      Message.text=no+" is found at the position "+status;
  }

  Experiment.deletenode = function() {
    /*var no=document.getElementById("input").value;
    status=BST.deletevalue(no);
    if(status)
      Message.text=no+" is inserted at the position "+status*/
  }

  Experiment.resetGraph = function() {
    Message.text = "To insert, delete and search a number into tree, enter a number and press insert, delete and search button";
    BST.initialize();
  }

}

new Experiment();