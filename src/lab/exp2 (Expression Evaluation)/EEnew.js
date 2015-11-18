function infixToPost()
{
	var infixStr=document.getElementById("inputbox").value;
	document.getElementById("demo").innerHTML="Given Expression=>"+infixStr;
    var postfix = infixStr.split("");
    //document.getElementById("demo1").innerHTML=postfix;
    var operand = [];
    var operator = [];
    var stack = [];
    var top = 0;
  for (i = 0; i <= postfix.length; i++) 
    {
        
        if((postfix[i] =="0")||(postfix[i] == "1")||(postfix[i] == "2")||(postfix[i] =="3")||(postfix[i] == "4")||(postfix[i] == "5")||(postfix[i] == "6")||(postfix[i] == "7")||(postfix[i] == "8")||(postfix[i] == "9"))
      	{
      		operand.push(postfix[i]);
      		document.getElementById("demo1").innerHTML ="Postfix Expression=>"+operand.join("");
      	}
       else if(stack.length=="0")

          {
        	 stack.push(postfix[i]);
           num = i;
           string="row".concat(num.toString());    
           document.getElementById(string).innerHTML=stack;
        	 //document.getElementById("stack").innerHTML =stack;
          }
       
       else if(postfix[i]=="+")
          {
              //opelement= stack.pop();
              //operand.push(opelement);
              //document.getElementById("demo1").innerHTML ="Postfix Expression=>"+operand.join("");
              for ( var i = stack.length; i >= 0; i--) 
               {
                   if((stack[stack.length-1]=="+")||(stack[stack.length-1]=="-")||(stack[stack.length-1]=="*")||(stack[stack.length-1]=="/")||(stack[stack.length-1]=="^"))
                    {
                        opelement = stack.pop();
                        operand.push(opelement);
                        document.getElementById("demo1").innerHTML ="Postfix Expression=>"+operand.join("");
                    }
                    else
                    {
                        stack.push(postfix[i]);
                        //var num2 = stack.length;
                        //var string2 = "row".concat(num2.toString());     
                        //document.getElementById(string2).innerHTML=stack;
                        document.getElementById("stack").innerHTML =stack;

                    }

               }
            } 


      }
    
}
