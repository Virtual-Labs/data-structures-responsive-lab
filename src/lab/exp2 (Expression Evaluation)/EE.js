var operand=[];
var stack=[];

function infixToPostfix()
{
    var infixStr=$("#inputbox").val();//infix string
    document.getElementById("demo").innerHTML="Given Expression=>"+infixStr;
    var postfix = infixStr.split(""); //split given infix string into an array
    operand=[];
 //scan infix expression from left to right
     for(var i=0; i<=postfix.length; i++)
     {
     	if((postfix[i]=="0")||(postfix[i]=="1")||(postfix[i] =="2")||(postfix[i]=="3")||(postfix[i]=="4")||(postfix[i]=="5")||(postfix[i]=="6")||(postfix[i]=="7")||(postfix[i]=="8")||(postfix[i]=="9"))
         {
         	operand.push(postfix[i]);
          document.getElementById("demo1").innerHTML ="Postfix Expression=>"+operand.join("");
          }
          //when first operator is scanned     
        else if(stack.length=="0")
         {
            stack.push(postfix[i]);
         }
    //when trying to push addition and substaction operator on to the stack    
       else if((postfix[i]=="+")||(postfix[i]=="-"))            
        {
            for ( var j = stack.length; j >0; j--) 
               {
                   if((stack[j-1]=="+")||(stack[j-1]=="-")||(stack[j-1]=="*")||(stack[j-1]=="/")||(stack[j-1]=="^"))
                    {
                        var opelement = stack.pop();
                         //alert(opelement);
                        operand.push(opelement);
                        //alert(operand);
                        document.getElementById("demo1").innerHTML ="Postfix Expression=>"+operand.join("");
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
                        document.getElementById("demo1").innerHTML ="Postfix Expression=>"+operand.join("");
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
                        document.getElementById("demo1").innerHTML ="Postfix Expression=>"+operand.join("");
                    }
               }
              stack.push(postfix[i]);
              //document.getElementById("row1").innerHTML =stack;
        } 

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
                        document.getElementById("demo1").innerHTML ="Postfix Expression=>"+operand.join("");
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
               document.getElementById("demo1").innerHTML ="Postfix Expression=>"+operand.join("");
             }
       }

    } 
}
 

function postfixeval()
{
  //Scan the postfix expression from left to right
  for(var i=0; i<operand.length; i++)
    {
      //if operand is encountered push onto the stack
      if((operand[i] =="0")||(operand[i] =="1")||(operand[i] =="2")||(operand[i] =="3")||(operand[i] =="4")||(operand[i] =="5")||(operand[i] =="6")||(operand[i] =="7")||(operand[i] =="8")||(operand[i] =="9"))
             {
              //alert(operand)
              stack.push(operand[i]);
              }
             //if operator is encountered pop top two elements and apply operator to the operands and again push on to the stack
         else if ((operand[i] =="+")||(operand[i] =="-")||(operand[i] =="*")||(operand[i] =="/")||(operand[i] =="^"))
            {
              if(operand[i] =="+")
              {
                var a =Number(stack.pop());
                var b =Number(stack.pop());
                var result=b + a;
                stack.push(result);
                document.getElementById("demo3").innerHTML="postfix result=>"+result;
              }
             
             if(operand[i] =="-")
              {
                var a =stack.pop();
                var b =stack.pop();
                var result=b - a;
                stack.push(result);
               document.getElementById("demo3").innerHTML="postfix result=>"+result;
                
              }
              
               if(operand[i] =="*")
              {
                var a =stack.pop();
                var b =stack.pop();
                var result=b * a;
                stack.push(result);
               document.getElementById("demo3").innerHTML="postfix result=>"+result;
              }

               if(operand[i] =="/")
              {
                var a =stack.pop();
                var b =stack.pop();
                var result=b / a;
                stack.push(result);
                document.getElementById("demo3").innerHTML="postfix result=>"+result;
              }

               if(operand[i] =="^")
              {
                var a =Number(stack.pop());
                var b =Number(stack.pop());
                var result=Math.pow(b, a);
                stack.push(result);
                document.getElementById("demo3").innerHTML="postfix result=>"+result;
              }
           }
          // var finalResult=stack.pop(result);
          // document.getElementById("demo3").innerHTML="postfix result=>"+finalResult;
    } 
}

    function postfixExp()
    {
      document.getElementById("demo1").innerHTML="Postfix Expression=>";
    }

      function hideImage()
    {
      document.getElementById("stack").style.visibility = "hidden";
    }

    function showImage()
    {
      document.getElementById("stack").style.visibility = "visible";
    }

    


// function createTable()
//  {
//     var infixStr=$("#inputbox").val();
//     if(infixStr=="")
//     {
//        alert("please enter numeric value");
//     }
//     else
//     {                
//        var tableElem = document.createElement('table');
//        //document.getElementById("parentstack").appendChild(tableElem);
//        tableElem.border="2px solid black";
//        tableElem.width="150px";
//        tableElem.height="30";
//        tableElem.height="30";
//        tableElem.marginLeft="100px";
//        tableElem.left="30";
//        var patt1 = /[+,-,*,/,^]/g;
//        var result = infixStr.match(patt1);
//        for (var i = 0; i < result.length; i++) 
//          {
//            var rowElem = document.createElement('tr');
//            rowElem.height="30";
//            var data1 = document.createElement("td")
//            data1.height="30";
//            data1.backgroundColor="grey"
//            rowElem.appendChild(data1);
//            tableElem.appendChild(rowElem);
//            document.getElementById("parentstack").appendChild(tableElem).style.backgroundColor="lightgrey";
//            document.getElementById("parentstack").appendChild(tableElem);
//          }
//      }

//  }
