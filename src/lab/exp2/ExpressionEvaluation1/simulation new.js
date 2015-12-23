var infixStr;
var operand;
operand=[];
var stack;
stack=[];
postfix = [];
var opelement;
var moveleft=0;
var table;
var row;
var cells;
var j;
var key;
var b;
var row1;
var opr;
function hideImage() //hiding stack and instruction box
    {
      document.getElementById("stack").style.visibility = "hidden";
      document.getElementById("instrId").style.visibility = "hidden";
    }

function showImage() //showing stack and instruction box
    {
      document.getElementById("stack").style.visibility = "visible";
      document.getElementById("instrId").style.visibility = "visible";
    }

function checkVal() //validation checking
{
  infixStr = document.getElementById("textbox").value;
  if(infixStr == "**press C and start**")
  {
     document.getElementById("textbox").style.color = "red";
     hideImage();
  }
  else if(infixStr==""||infixStr==null)
  {
    alert("please enter valid input");
    document.getElementById("infixId").innerHTML="Given Exp=>"+infixStr;
    document.getElementById("postfixId").innerHTML="Postfix Exp=>";
  }
  else
  {
    //infixToPostExp();
    //infixToPostExp();
    //postfixEval();
    infixToPostExp();
    //postfixEval();

  }

}
//converting infix expression to postfix expression
function infixToPostExp()
{ 
    document.getElementById("infixId").innerHTML="Given Exp=>"+infixStr;
    document.getElementById("postfixId").innerHTML="Postfix Exp=>";
    postfix = infixStr.split(""); //splited given infix string into an array
    //scan infix expression from left to right
    for(i=0; i<postfix.length; i++)
    {
      if((postfix[i]=="0")||(postfix[i]=="1")||(postfix[i] =="2")||(postfix[i]=="3")||(postfix[i]=="4")||(postfix[i]=="5")||(postfix[i]=="6")||(postfix[i]=="7")||(postfix[i]=="8")||(postfix[i]=="9"))
         {
            operand.push(postfix[i]);
            moveArrow(postfix[i]);
          }
          else if(stack.length=="0")
          {
            stack.push(postfix[i]);
            pushOprstack(postfix[i]);
          }
             //when trying to push addition and substaction operator on to the stack    
               else if((postfix[i]=="+")||(postfix[i]=="-"))            
               {
                 for (j = stack.length; j >0; j--) 
                  {
                    if((stack[j-1]=="+")||(stack[j-1]=="-")||(stack[j-1]=="*")||(stack[j-1]=="/")||(stack[j-1]=="^"))
                      {
                        popPush(postfix[i]);
                        break;
                      }
                   
                  }
               
               }
                  //when trying to push multiplication and division operator on to the stack 
                   else if((postfix[i]=="*")||(postfix[i]=="/"))
                   {
                      for ( var k= stack.length; k >0; k--) 
                      {
                        if((stack[k-1]=="*")||(stack[k-1]=="/")||(stack[k-1]=="^"))
                         {
                           opelement = stack.pop();
                           operand.push(opelement);
                           popElement();
                         }
                       else 
                         {
                          stack.push(postfix[i]);
                          pushAction(postfix[i]);
                         }
                      }
                  }
                       //when trying to push caret operator on to the stack
                        else if ((postfix[i]=="^"))
                        {
                           for ( var l= stack.length; l>0; l--) 
                            {
                              if((stack[l-1]=="^"))
                              {
                                opelement = stack.pop();
                                operand.push(opelement);
                                popElement();
                              }
                             else
                              {
                               stack.push(postfix[i]);
                               pushAction(postfix[i]);
                              }
                            }
                        }
                            
     
     }

     for(var m= stack.length; m>0; m--)
      {
        popAction();
        break;
      }
     // alert(operand)
      //postfixEval();alert(operand)
}

//Postfix evaluation
function postfixEval()
{
  //Scan the postfix expression from left to right
  for(var i=0; i<operand.length; i++)
    {
      //if operand is encountered push onto the stack
      if((operand[i] =="0")||(operand[i] =="1")||(operand[i] =="2")||(operand[i] =="3")||(operand[i] =="4")||(operand[i] =="5")||(operand[i] =="6")||(operand[i] =="7")||(operand[i] =="8")||(operand[i] =="9"))
             {
              //stack.push(operand[i]);
               pushActionpostfix(operand[i]);
             }
      //if operator is encountered pop top two elements and apply operator to the operands and again push on to the stack
         else if ((operand[i] =="+")||(operand[i] =="-")||(operand[i] =="*")||(operand[i] =="/")||(operand[i] =="^"))
            {
              if(operand[i] =="+")
              {
                var firstNum =Number(stack.pop());
                var secondNum =Number(stack.pop());
                var result=secondNum + firstNum ;
                stack.push(result);
                document.getElementById("demo3").innerHTML="postfix result=>"+result;
              }
             
             if(operand[i] =="-")
              {
                var firstNum =stack.pop();
                var secondNum =stack.pop();
                var result=secondNum - firstNum;
                stack.push(result);
               document.getElementById("demo3").innerHTML="postfix result=>"+result;
                
              }
              
               if(operand[i] =="*")
              {
                var firstNum  =stack.pop();
                var secondNum =stack.pop();
                var result=secondNum*firstNum ;
                stack.push(result);
               document.getElementById("demo3").innerHTML="postfix result=>"+result;
              }

               if(operand[i] =="/")
              {
                var firstNum =stack.pop();
                var secondNum =stack.pop();
                var result=secondNum /firstNum;
                stack.push(result);
                document.getElementById("demo3").innerHTML="postfix result=>"+result;
              }

               if(operand[i] =="^")
              {
                var a =Number(stack.pop());
                var secondNum=Number(stack.pop());
                var result=Math.pow(secondNum, firstNum);
                stack.push(result);
                document.getElementById("demo3").innerHTML="postfix result=>"+result;
              }
           }
          // var finalResult=stack.pop(result);
          // document.getElementById("demo3").innerHTML="postfix result=>"+finalResult;
    } 
}



function appendOperand(x) //function is called when it is an operand
{ 
  $("#postfixId").append(x);   
}

function moveArrow(x) //function is called when it is an operand
{
  moveleft=moveleft+14;
  console.log(moveleft);
  $("#arrow").show().animate({"left":moveleft }, 3000, function(){ appendOperand(x),
  $("#instrId").css("color","white").css("background-color", "#958BAC").html("appending operand to the postfix string");
    });
}

function appendOperator(y) //function is called when there are no operators in the stack
{ 
  document.getElementById("row1").firstChild.innerHTML=y;   
  
}

function pushOprstack(y) //function is called when there are no operators in the stack
{
  moveleft=moveleft+14;
  console.log(moveleft);
  $("#arrow").show().animate({"left":moveleft }, 3000, function(){appendOperator(y),
  $("#instrId").css("color","darkblue").css("background-color", "lightgrey").html("pushing the operator on to the stack since precedence(read input) > precedence(top element on stack))");
    });
}

function popElement()
{
  table = document.getElementById("stack");
  for (var b = 0, row = 0; row < table.rows.length; b++,row++)
    {
        opr= table.rows[b].cells[0].innerHTML;
        if((opr == "+")||(opr == "-")||(opr == "*")||(opr == "/")||(opr == "^"))
        {
          opelement = stack.pop();
          operand.push(opelement);
          $("#postfixId").append(opr);
          table.rows[b].cells[0].innerHTML = null;
        }
    }
 }

function pushOpr(key)
{
 table1 = document.getElementById("stack");
  for (var c = 8,row1=0; row1 < table1.rows.length;c--,row1++) 
    {
      if(table1.rows[c].cells[0].innerHTML=="")
      {
          $("#instrId").css("color","darkblue").css("background-color", "lightgrey").html("popping the operator from the stack and adding to the postfix string");
          stack.push(key);
          table1.rows[c].cells[0].innerHTML= key;
          break; 
      }
    }

}

function popPush(key)
{
  moveleft=moveleft+14;
  console.log(moveleft);
  $("#arrow").show().animate({"left":moveleft }, 3000, function(){
  $("#instrId").css("color","black").css("background-color", "lightblue").html("popping the operator from the stack and adding to the postfix string");
   popElement(),pushOpr(key)});
}

function pushAction(key)
{
  moveleft=moveleft+14;
  console.log(moveleft);
  $("#arrow").show().animate({"left":moveleft }, 3000, function(){
  $("#instrId").css("color","black").css("background-color", "lightblue").html("popping the operator from the stack and adding to the postfix string");
  pushOpr(key);});
}

function popAction()
{
  moveleft=moveleft+14;
  console.log(moveleft);
  $("#arrow").show().animate({"left":moveleft }, 3000, function(){
  $("#instrId").css("color","black").css("background-color", "lightblue").html("popping the operators from the stack and adding to the postfix string");
   popElement();});
}

moveleft1 = 0;
function pushActionpostfix(key)
{
  moveleft1=moveleft1+14;
  console.log(moveleft);
  $("#arrow2").show().animate({"left":moveleft1 },3000, function(){
  $("#instrId").css("color","darkblue").css("background-color", "lightgrey").html("pushing the operand on to the stack");
  pushOpr(key);});
}
// function pop_push1()
// {
//   moveleft=moveleft+14;
//   console.log(moveleft);
//   $("#arrow").show().animate({"left":moveleft }, 3000, function(){
//   $("#instrId").css("color","black").css("background-color", "lightblue").html("popping the operator from the stack and adding to the postfix string");
//    popElement1(),appendOperator(key1)});
// }

// function popElement1()
// {
//   table = document.getElementById("stack");
//   for (var b = 0, row; row = table.rows[b]; b++)
//     {
//         // var w= 0;
//         var popedOpr= row.cells[0].innerHTML;
//         console.log(popedOpr);
//         alert(popedOpr);
//     if((row.cells[0].innerHTML=="+")||(row.cells[0].innerHTML=="-")||(row.cells[0].innerHTML=="*")||(row.cells[0].innerHTML=="/")||(row.cells[0].innerHTML=="^"))
//        {
//          $("#postfixId").append(popedOpr);
//          row.cells[0].innerHTML=null;
//          break;
//        }
//     }
//  }

//  function appendOperator(y)
// { 
//   document.getElementById("row1").firstChild.innerHTML=y;   
  
// }