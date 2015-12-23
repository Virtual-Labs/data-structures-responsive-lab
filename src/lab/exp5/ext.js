// document.getElementById("myreset").addEventListener("C",clear);

// function clear() {
//  document.getElementById("myreset").innerHTML();="empty" ;


var mytable=[];
var operand=[];
var str=[] ;
var j;

function Val() {
  var str=$("#form").val();

  document.getElementById("demo").innerHTML="Given Exp => " + str ;
    operand=[];


  var  preorder=str[2];
      document.getElementById("mytable").rows[9].cells[0].innerHTML=str[0];

      function preorder() {
        preorder.push("str[0]");  
        document.getElementById("mytable").innerHTML=preorder(str[0]);
      }
}


// var mytable=str;

//          for(var i=9 , row1=0;row1<row.length; row++,i--)
//          {
//            if(mytable.rows[i].cells[0]="")
//              break;
//          }
//          else
//          {

//          }
  
// for( var i=num,op  ; row>row.length ; i++, j--)
// {
//  if(i=num)
//  {
//    document.getElementById(str[0]).row[1].cells[0].innerHTML="num"
//  }
//  else {
//    document.getElementById(str[0]).row[1].cells[0].innerHTML="op";
//  }
// }

