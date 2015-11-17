var a, b
 function showFistVal()
{
 document.getElementById("val1Res").innerHTML = "First number = " + "  " + a;
 setTimeout(showSecondVal,100);
}

function showSecondVal(){
 document.getElementById("val2Res").innerHTML = "Second number = " + "  " + b; 
 setTimeout(label,1800);
 
}

function label() {
  document.getElementById('labelRes').innerHTML = "First number is concatinating with second...";
  setTimeout(concatRes, 1800);
}

function concatRes(){
    var res = a.concat(b);
    document.getElementById("concatResDiv").innerHTML = "Addition of two numbers is:  " + "  " + res;
    setTimeout(reset, 3000);
}

function add(){
    a = document.getElementById('first').value;
    b = document.getElementById('second').value;

    if(/\d1{1}/.test(a) == false || /\d1{1}/.test(b) == false)
    {
      alert("please enter unary number");
    }
    else
    {
      setTimeout(showFistVal,100);
    } 
}

var  a, b;
function mul()
{
  a = document.getElementById('first').value;
  b = document.getElementById('second').value;
  setTimeout(showMainLabel, 100);
}

function showMainLabel(){
  document.getElementById("mulLabel").innerHTML = "Take a minimum count and perform repeated addition until count becomes 1.. ";
  document.getElementById('val1Res').innerHTML = "First Value: " + a;
  document.getElementById('val2Res').innerHTML= "First Value: " + b;
  document.getElementById('mulCount1').innerHTML = "Count: " + a.length;
  document.getElementById('mulCount2').innerHTML= "Count: " + b.length;
  setTimeout(mulLogic, 1000);
}

function mulLogic() {
    
    var count = b.length;
    var res = ' ';

     while(count != 0)
     {
        res += a;
        document.getElementById("mulCount").innerHTML = "Count is: " + count; 
        console.log(res)
        console.log(count);
        count--;

     }     
     document.getElementById("mulRes").innerHTML = res;
     document.getElementById("labelRes").innerHTML = "Multiplication of two unary number is = " + res;
   }


function reset(){
  location.reload();
} 
