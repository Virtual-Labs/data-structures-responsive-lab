var moveleft=0;
function wait(ms)
{
var d = new Date();
var d2 = null;
do { d2 = new Date(); }
while(d2-d < ms);
}
function hideImage() //hiding stack 
    {
      document.getElementById("stack").style.visibility = "hidden";
    }

function showImage() //showing stack 
    {
      document.getElementById("stack").style.visibility = "visible";
    }
var infixStr;
//infixStr=document.getElementById("textbox").value;//infix string
function checkVal()
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
{ moveleft=0;
	document.getElementById("demo").innerHTML="Given Exp=>"+infixStr;
  document.getElementById("demo1").innerHTML="Postfix Exp=>";
	postfix = []
  postfix = infixStr.split(""); //split given infix string into an array
  operand=[];
  stack=[];
  //scan infix expression from left to right
  for(i=0; i<=postfix.length; i++)
    {
    	if((postfix[i]=="0")||(postfix[i]=="1")||(postfix[i] =="2")||(postfix[i]=="3")||(postfix[i]=="4")||(postfix[i]=="5")||(postfix[i]=="6")||(postfix[i]=="7")||(postfix[i]=="8")||(postfix[i]=="9"))
          {
          	  (function(i){
          	  setTimeout(function(x){
          	  operand.push(postfix[i]);       	 
              x=postfix[i];
              console.log(x);
              (function(x){
              	
              		moveleft=moveleft+15;
 					console.log(moveleft);
					$("#arrow").show().css("color","blue").animate({"left":moveleft }, function(){ //appendOperand(x),
  					$("#demo2").css("color","blue").html("append operand to the postfix string");
    				});
    

				//function appendOperand(x)
				//{ setTimeout(function(){
       			(function(x){
       			$("#demo1").append(x)})(x);   
              			//}, 800);
  
  
				//}
              		
              })(x);
              	},5000);
				})(i);
          	 //setInterval(appendOperand(operand[i]), 5000);
          }
       //when first operator is scanned     
      else if(stack.length=="0")
           { 
              a = stack.push(postfix[i]);
              // alert(a)
               
              moveArrow1(a); 
             
              //sleep(10000);
           }


    }

}

function moveArrow1(a)
{
  moveleft=moveleft+15;
  console.log(moveleft);
  $("#arrow").show().css("color","blue").animate({"left":moveleft },function(){
  $("#demo2").css("color","blue").html("pushing the operator on to the stack since precedence(read input) > precedence(top element on stack))");
    });
  var rowId = document.getElementById("row1").innerHTML
  if(rowId="<td></td>")
  { 
     document.getElementById("row1").innerHTML=a;
  }
setTimeout(function(){
             	console.log("hello");
             	}, 5000);
  			
}


function moveArrow(x)
{
  moveleft=moveleft+15;
  console.log(moveleft);
$("#arrow").show().css("color","blue").animate({"left":moveleft }, function(){ appendOperand(x),
  $("#demo2").css("color","blue").html("append operand to the postfix string");
    });
    


}
function appendOperand(x)
{ setTimeout(function(){
       
       $("#demo1").append(x);   
              }, 800);
  
  
}

// function appendOperand(x)
// { setTimeout(function(){
//        $("#demo1").append(x);   
//               }, 1000);
	
//   //alert(x) 
// }

// function move_arrow() {
//   $('#arrow').animate({
//     right: "-=15px"
//   }, {
//     duration: 1000,
//     complete: function() {
//        $("#demo2").css("color","blue").html("append operand to the postfix string");
//     }
//   });
// }
