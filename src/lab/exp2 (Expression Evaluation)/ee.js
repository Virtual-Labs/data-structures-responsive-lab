//document.getElementById("keyEqual").addEventListener("click", infixToPost());
//x.addEventListener("click", postfixeval());

var operand=[];
var stack=[];
function infixToPost()
{
	var infixStr=document.getElementById("inputbox").value;
	document.getElementById("demo").innerHTML="Given Expression=>"+infixStr
    var postfix = infixStr.split("");
    operand=[];
    var stack=[];
   // var stack1=[];
   // var stack2=[];
    //document.getElementById("demo1").innerHTML=postfix;
  //scan infix expression from left to right
    for(var i=0; i<=postfix.length; i++)
    {
        if((postfix[i] =="0")||(postfix[i] == "1")||(postfix[i] == "2")||(postfix[i] =="3")||(postfix[i] == "4")||(postfix[i] == "5")||(postfix[i] == "6")||(postfix[i] == "7")||(postfix[i] == "8")||(postfix[i] == "9"))
    	 {
    		   operand.push(postfix[i]);
           document.getElementById("demo1").innerHTML="Postfix Expression=>"+operand.join("");
        }
   //when first operator is scanned     
        else if(stack.length=="0")
        {
            stack.push(postfix[i]);
            //document.getElementById("row1").innerHTML =stack;
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
             // document.getElementById("row1").innerHTML =stack;

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
              //document.getElementById("row1").innerHTML =stack;

         } 

       //when trying to push carot operator on to the stack 
      else if ((postfix[i]=="^"))
        {
            for ( var l= stack.length; l >0; l--) 
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

    else
      {
       
         for(var m= stack.length; m>0; m--)
             {
               var opelement = stack.pop();
               operand.push(opelement);
               //document.getElementById("demo2").innerHTML = result;
               // operand.push(stack);
               document.getElementById("demo1").innerHTML ="Postfix Expression=>"+operand.join("");

             }
       
      
      }

         
    } 

}

function createTable() { 
  var foo = document.getElementById("parentstack");
  console.log(singleDiv);
  for (i=0; i=4; i++)
  {
    var singleDiv = document.createElement("div");
    console.log(singleDiv);
    singleDiv.class = "some"
    singleDiv.id = ("id" + i)
    foo.appendChild(singleDiv);
  }
}

function postfixeval()
{
  
 // document.getElementById("demo2").innerHTML=operand;
  //Scan the postfix expression from left to right
  for(var i=0; i<operand.length; i++)
    {
      //if operand is encountered push onto the stack

          if((operand[i] =="0")||(operand[i] =="1")||(operand[i] =="2")||(operand[i] =="3")||(operand[i] =="4")||(operand[i] =="5")||(operand[i] =="6")||(operand[i] =="7")||(operand[i] =="8")||(operand[i] =="9"))
             {
              // alert(operand[i]);
              stack.push(operand[i]);
              //alert(stack);
              //document.getElementById("stack").innerHTML=stack;
 
             }

     //if operator is encountered pop top two elements and apply operator to the operands and again push on to the stack
         else if ((operand[i] =="+")||(operand[i] =="-")||(operand[i] =="*")||(operand[i] =="/")||(operand[i] =="^"))
            {
              //alert(operand[i]);//


            if(operand[i] =="+")
              {
                var a =stack.pop();
               
                var b =stack.pop();
                var result=b+a;
                document.getElementById("demo3").innerHTML="postfix result=>"+result;
                stack.push(result)
              }
             
             if(operand[i] =="-")
              {
                var a =stack.pop();
             
                var b =stack.pop();
                var result=b-a;
                document.getElementById("demo3").innerHTML="postfix result=>"+result;
                stack.push(result)
              }
              
               if(operand[i] =="*")
              {
                var a =stack.pop();
                
                var b =stack.pop();
                var result=a*b;
                document.getElementById("demo3").innerHTML="postfix result=>"+result;
                stack.push(result)
              }

               if(operand[i] =="/")
              {
                var a =stack.pop();
                
                var b =stack.pop();
                var result=a/b;
                document.getElementById("demo3").innerHTML="postfix result=>"+result;
                stack.push(result)
              }

               if(operand[i] =="^")
              {
                var a =stack.pop();
               
                var b =stack.pop();
                var result=a^b;
                document.getElementById("demo3").innerHTML="postfix result=>"+result;
                stack.push(result)
              }
           
          }
      
    } 

}
