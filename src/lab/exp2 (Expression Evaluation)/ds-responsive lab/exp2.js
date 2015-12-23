function hideImage() //hiding stack 
    {
      document.getElementById("stack").style.visibility = "hidden";
    }

function showImage() //showing stack 
    {
      document.getElementById("stack").style.visibility = "visible";
    }
var infixStr;
var moveleft=0;
var table;
var operand;
var stack;
var j;
function checkVal() //validation checking
{
  infixStr=document.getElementById("textbox").value;
  if(infixStr==""||infixStr==null)
  {
    alert("please enter valid input");
  }
  else
  {
    infixToPostExp();
  }
}
//converting infix to postfix expression
function infixToPostExp()
{ 
	  console.log(infixStr);
    document.getElementById("demo").innerHTML="Given Exp=>"+infixStr;
    document.getElementById("demo1").innerHTML="Postfix Exp=>";
	  postfix = []
    postfix = infixStr.split(""); //split given infix string into an array
    console.log(postfix);
    console.log(postfix.length);
    operand=[];
    stack=[];
    //scan infix expression from left to right
    for(i=0; i<postfix.length; i++)
    {
    	if((postfix[i]=="0")||(postfix[i]=="1")||(postfix[i] =="2")||(postfix[i]=="3")||(postfix[i]=="4")||(postfix[i]=="5")||(postfix[i]=="6")||(postfix[i]=="7")||(postfix[i]=="8")||(postfix[i]=="9"))
         {
           	operand.push(postfix[i]);
           	console.log(operand);
            x=postfix[i];
          	console.log(x);
          	moveArrow(x);
          }
          else if(stack.length=="0")
          {
          	stack.push(postfix[i]);
          	console.log(stack);
          	y = postfix[i];
          	console.log(y);
          	moveArrow1();
          }
       //when trying to push addition and substaction operator on to the stack    
          else if((postfix[i]=="+")||(postfix[i]=="-"))            
         {
            for (j = stack.length; j >0; j--) 
              {
              	  //console.log(stack.length);
                  if((stack[j-1]=="+")||(stack[j-1]=="-")||(stack[j-1]=="*")||(stack[j-1]=="/")||(stack[j-1]=="^"))
                    {
                        var opelement = stack.pop();
                        console.log(opelement);
                        operand.push(opelement);
                        moveArrow2();
                        console.log(operand);
                        //document.getElementById("demo1").innerHTML ="Postfix Exp=>"+operand.join("");
                    }

              }
              stack.push(postfix[i]);
              z = postfix[i];
              console.log(stack);
              // (function(){
              //   setTimeout(function(){pushOpr(z)}, 2000);
              //   })();
          }

      }
  }

function moveArrow(x)
{
  moveleft=moveleft+15;
  console.log(moveleft);
  $("#arrow").show().css("color","blue").animate({"left":moveleft }, 2000, function(){ appendOperand(x),
  $("#demo2").css("color","white").css("background-color", "#958BAC").html("appending operand to the postfix string");
    });
}

function appendOperand(x)
{ 
	setTimeout(function()
		{
			$("#demo1").append(x);   
        });
}

function moveArrow1()
{
  moveleft=moveleft+15;
  console.log(moveleft);
  $("#arrow").show().css("color","blue").animate({"left":moveleft }, 2000, function(){  
  $("#demo2").css("color","darkblue").css("background-color", "lightgrey").html("pushing the operator on to the stack since precedence(read input) > precedence(top element on stack))");
    });
  var rowId = document.getElementById("row1").innerHTML
  if(rowId="<td></td>")
    { 
       console.log(y);
       setTimeout(function(){
       	// $("#row1").show().css("backgroundColor","black")
       	document.getElementById("row1").firstChild.innerHTML=y;},4000);
    }
}

function moveArrow2()
{
  moveleft=moveleft+15;
  console.log(moveleft);
  $("#arrow").show().css("color","blue").animate({"left":moveleft }, 2000, function(){
  $("#demo2").css("color","black").css("background-color", "lightblue").html("popping the operator from the stack and adding to the postfix string");
   popElement(),pushOpr(z)});

}
//var b;
// var rows;
 
//var a;
//var k;
function popElement()
{
	var table = document.getElementById("stack");
	var rows;
    var cells;
   for (var b = 0, row; row = table.rows[b]; b++)
    {
        //console.log(row);
  	   // alert(row)
        var k= 0;
        var a= row.cells[k].innerHTML;
        console.log(a);
        //alert(row.cells[k].innerHTML)
    if((row.cells[k].innerHTML=="+")||(row.cells[k].innerHTML=="-")||(row.cells[k].innerHTML=="*")||(row.cells[k].innerHTML=="/")||(row.cells[k].innerHTML=="^"))
       {
         $("#demo1").append(a);
         row.cells[k].innerHTML=null;
       }
    }
 }
//var c;
//var row1;
//var table1;
function pushOpr(z)
{
 var table1 = document.getElementById("stack");
  for (var c = 8,row1=0; row1<table1.rows.length;c--,row1++) 
    {
      //lert(row1);
      console.log(row1);
      var h=0;
      if(table1.rows[c].cells[0].innerHTML=="")
      {
          //alert(row1.cells[h].innerHTML);
          $("#demo2").html("pushing the operator on to the stack since precedence(read input) > precedence(top element on stack)");
          table1.rows[c].cells[0].innerHTML= z ;
          break; 
      }
    }
}


