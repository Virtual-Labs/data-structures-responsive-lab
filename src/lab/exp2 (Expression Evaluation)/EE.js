function infixToPost()
{
    var infixStr=document.getElementById("inputbox").value;

    /*if ((isNaN("infixStr")||(infixStr=null)){
        window.alert("Enter valid input");

       } */
    

    document.getElementById("demo").innerHTML="Given Expression=>"+infixStr;
    var postfix = infixStr.split("");
    //document.getElementById("demo1").innerHTML=postArr;
  
    var operand = [];
    var operator = [];
    var stack = [];
  for (i = 0; i < postfix.length; i++) 
      {

        if((postfix[i] =="0")||(postfix[i] == "1")||(postfix[i] == "2")||(postfix[i] =="3")||(postfix[i] == "4")||(postfix[i] == "5")||(postfix[i] == "6")||(postfix[i] == "7")||(postfix[i] == "8")||(postfix[i] == "9"))
        {
           operand.push(postfix[i]);
         
           //document.getElementById("demo1").innerHTML = arr;
           document.getElementById("demo1").innerHTML ="Postfix Expression=>"+operand.join("");
        
        }

        else if(stack.length=="0")
        {
            stack.push(postfix[i]);
            //document.getElementById("stack").innerHTML =stack;
            document.getElementById("row10").innerHTML =stack;
        }
   
        else if(postfix[i]=="+")
        {
                opelement= stack.pop();
                //operator.push(r);
                operand.push(opelement);
                document.getElementById("demo1").innerHTML ="Postfix Expression=>"+operand.join("");
                stack.push(postfix[i]);

               /*for (i = 0; i<stack.length; i++)
               {
                  num = i
                  string="row".concat(num.toString())                  
                   document.getElementById(string).innerHTML=stack[i];

               }*/
               
               // document.getElementById("stack").innerHTML =stack;
        }              
  
        

  else if(postfix[i]=="*")
           {
               if((stack[0]="*")||(stack[0]=="/")||(stack[0]=="^"))
                 {
                   //operator=stack.pop();
                   opelement= stack.pop();
                   operand.push(opelement);
                   document.getElementById("demo1").innerHTML ="Postfix Expression=>"+operand.join("");
                   stack.push(postfix[i]);
                   document.getElementById("stack").innerHTML =stack;
                 }

               else if((stack[0]=="+")||(stack[0]=="-"))
                  {
                 //arr=stackArr.pop();
                 //document.getElementById("demo1").innerHTML ="Postfix Expression=>"+arr.join("");
                  stack.push(postfix[i]);
                  document.getElementById("stack").innerHTML =stack; 
                  }
            }
/*
           else if(postfix[i]=="/")
              {
                 if((stack=="*")||(stack=="/")||(stack=="^"))
                 {
                   //operand=stack.pop();
                   opelement= stack.pop();
                   operand.push(opelement);

                   document.getElementById("demo1").innerHTML ="Postfix Expression=>"+operand.join("");
                   stack.push(postfix[i]);
                   document.getElementById("stack").innerHTML =stack;

                 }

                else if((stack=="+")||(stack=="-"))
                  {
                 //arr=stackArr.pop();
                 //document.getElementById("demo1").innerHTML ="Postfix Expression=>"+arr.join("");
                  stack.push(postfix[i]);
                  document.getElementById("stack").innerHTML =stack; 
                  }

              }
             
           else if(postfix[i]=="^")
             {
                if(stack=="^")
                 {
                  // operand=stack.pop();
                   opelement= stack.pop();
                   operand.push(opelement);
                   document.getElementById("demo1").innerHTML ="Postfix Expression=>"+operand.join("");
                   stack.push(postfix[i]);
                   document.getElementById("stack").innerHTML =stack;
                 }

                else if((stack=="+")||(stack=="-")||(stack=="*")||(stack=="/"))
                  {
                 //arr=stackArr.pop();
                 //document.getElementById("demo1").innerHTML ="Postfix Expression=>"+arr.join("");
                  stack.push(postfix[i]);
                  document.getElementById("stack").innerHTML =stack; 
                  }

                  
             } */
         
   }

}



   
  


   
   /* var postStr = arr.join("");
    var postArr1 =  new Array();
    var stack=[];
    var result;
    var firstNum;
    var secNum;
    //var k;
    for(var i=0; i<postArr1.length; i++)
    {
        if((postArr1[i]!="^")||(postArr1[i]!= "+")||(postArr1[i]!= "-")||      (postArr1[i]!= "*")||(postArr1[i]!= "/"))
        {
            stack.push(postArr[i]);
            //document.write("length" + stack.length);
        }

       /* else if((postArr1[i]=="^")||(postArr1[i]== "+")||(postArr1[i]== "-")||(postArr1[i]== "*")||(postArr1[i]== "/"))
        { 
            if(postArr[i]=='+')
            {
                firstNum=stack.pop();
                secNum=stack.pop();
                result = secNum + firstNum;
                stack.push(result);
                document.getElementById("demo3").innerHTML ="Postfix Expression=>"+arr.join(""); 
            
            }
            else if(postArr[i]=='*')
            {
                firstNum=stack.pop();
                secNum=stack.pop();
                result = secNum * firstNum;
                stack.push(result);
            }
            else if(postArr[i]=='/')
            {
                firstNum=stack.pop();
                secNum=stack.pop();
                result = secNum / firstNum;
                stack.push(result);
            }
            else if(postArr[i]=='-')
            {
                firstNum=stack.pop();
                secNum=stack.pop();                                        
                                    result = secNum - firstNum;
                stack.push(result);
            } 
        } 
    }
    var finalRes=stack.pop();
    document.getElementById("demo3").innerHTML = finalRes  */


