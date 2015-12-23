function checkVal()
{
  infixStr=$("#inputbox").val();
  if(infixStr==""||infixStr==null)
  {
    alert("please enter valid input")
  }
  else
  {
     infixToPostExp();
   }  
}

function hideImage()
    {
      document.getElementById("stack").style.visibility = "hidden";
    }

function showImage()
    {
      document.getElementById("stack").style.visibility = "visible";
    }
// 
function moveArrow() {
  $('#arrow').animate("right":"1px");
  $('#arrow').stop();
  }
//infix to postfix expression
function infixToPostExp()
    {
      document.getElementById("demo1").innerHTML="Postfix Exp=>";
      infixStr=$("#inputbox").val();//infix string
      document.getElementById("demo").innerHTML="Given Exp=>"+infixStr;
      postfix = infixStr.split(""); //split given infix string into an array
      operand=[];
      stack=[];
      //scan infix expression from left to right
      for(var i=0; i<=postfix.length; i++)
      {
     	 if((postfix[i]=="0")||(postfix[i]=="1")||(postfix[i] =="2")||(postfix[i]=="3")||(postfix[i]=="4")||(postfix[i]=="5")||(postfix[i]=="6")||(postfix[i]=="7")||(postfix[i]=="8")||(postfix[i]=="9"))
           {
              operand.push(postfix[i]);
              moveArrow();
              //appendOperand();
             // changeCol(postfix[i]);
              //document.getElementById("demo1").innerHTML ="Postfix Exp=>"+operand.join("");
           }
      //when first operator is scanned     
       else if (stack.length=="0")
           { 
              stack.push(postfix[i]);
              //changeCol(postfix[i]); 
           }
      //when trying to push addition and substaction operator on to the stack    
       else if((postfix[i]=="+")||(postfix[i]=="-"))            
        {
            for ( var j = stack.length; j >0; j--) 
               {
                   if((stack[j-1]=="+")||(stack[j-1]=="-")||(stack[j-1]=="*")||(stack[j-1]=="/")||(stack[j-1]=="^"))
                    {
                        var opelement = stack.pop();
                        operand.push(opelement);
                        //document.getElementById("demo1").innerHTML ="Postfix Exp=>"+operand.join("");
                    }
                }
            stack.push(postfix[i]);
        } 
       //when trying to push multiplication and division operator on to the stack      
       else if ((postfix[i]=="*")||(postfix[i]=="/"))         
        {
            for ( var k= stack.length; k >0; k--) 
               {
                   if((stack[k-1]=="*")||(stack[k-1]=="/")||(stack[k-1]=="^"))
                    {
                        var opelement = stack.pop();
                        operand.push(opelement);
                        //document.getElementById("demo1").innerHTML ="Postfix Exp=>"+operand.join("");
                    }
               }
              stack.push(postfix[i]);         
        } 
       //when trying to push caret operator on to the stack 
       else if ((postfix[i]=="^"))
         {
            for ( var l= stack.length; l>0; l--) 
               {
                   if((stack[l-1]=="^"))
                    {
                        var opelement = stack.pop();
                        operand.push(opelement);
                       // document.getElementById("demo1").innerHTML ="Postfix Exp=>"+operand.join("");
                    }
               }
              stack.push(postfix[i]);
        } 
       //Checking paranthesis precedence
       else if((postfix[i]=="("))
        {
          stack.push(postfix[i]);
        }

       else if((postfix[i]==")"))
        {
        for ( var l= stack.length; l>0; l--) 
               {
                   if((stack[l-1]=="^")||(stack[k-1]=="*")||(stack[k-1]=="/")||(stack[k-1]=="+")||(stack[k-1]=="-")||(stack[k-1]=="("))
                    {
                        var opelement = stack.pop();
                        operand.push(opelement);
                        //document.getElementById("demo1").innerHTML ="Postfix Exp=>"+operand.join("");
                    }
               }
         }
       //pop out all the operators from the stack
         else
          {
           for(var m= stack.length; m>0; m--)
             {
               var opelement = stack.pop();
               operand.push(opelement);
               //document.getElementById("demo1").innerHTML ="Postfix Exp=>"+operand.join("");
             }
          }
     } 
}   

//Postfix evaluation
function postfixeval()
{
  //Scan the postfix expression from left to right
  for(var i=0; i<operand.length; i++)
    {
      //if operand is encountered push onto the stack
      if((operand[i] =="0")||(operand[i] =="1")||(operand[i] =="2")||(operand[i] =="3")||(operand[i] =="4")||(operand[i] =="5")||(operand[i] =="6")||(operand[i] =="7")||(operand[i] =="8")||(operand[i] =="9"))
             {
              stack.push(operand[i]);
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

