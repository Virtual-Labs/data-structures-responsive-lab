function infixToPost()
{
  var infixStr=document.getElementById('inputbox').value;
  document.getElementById("demo").innerHTML="Given Expression=>"+infixStr;

  var postArr=[];
  var postArr=infixStr.split(" ");
  for(var i=0; i<postArr.length; i++)
  {
  if(isOperand(postArr[i]))
    {
    var postStr="";
    postStr=postArr.push(postArr[i]);
    document.getElementById("demo").innerHTML="Postfix Expression=>"+postStr;
  }
  }  
}