var a, b
 function showFistVal()
{
 document.getElementById("val1Res").innerHTML = "First number = " + "  " + a;
 setTimeout(showSecondVal,100);
}

function showSecondVal(){
 document.getElementById("val2Res").innerHTML = "Second number = " + "  " + b; 
 setTimeout(label,500);

 var hr_node = document.createElement("hr");
  var div_elem = document.getElementById('mulCount1').parentElement;
  insertAfter(hr_node, div_elem);
 
}

function label() {
  document.getElementById('labelRes').innerHTML = "First number is concatinating with second...";
  setTimeout(concatRes, 1000);
}

function concatRes(){
    var res = a.concat(b);
    document.getElementById("concatResDiv").innerHTML = "Addition of two numbers is:  " + "  " + res;
    //setTimeout(reset, 2000);
}

function add(){
    a = document.getElementById('first').value;
    b = document.getElementById('second').value;

    if(/^[1]+$/.test(a) ==false || /^[1]+$/.test(b) == false)
    {
      alert("please enter unary number");
    }
    else
    {
      setTimeout(showFistVal,100);
    } 
}

var  a, b;
var count;
function mul()
{
  a = document.getElementById('first').value;
  b = document.getElementById('second').value;
  if(/^[1]+$/.test(a) ==false || /^[1]+$/.test(b) == false)
  {
    alert("please enter valid unary number");
  }
  else{
    setTimeout(showMainLabel, 100);
  }
}

function insertAfter(newElem, afterElem) {
  var parent = afterElem.parentElement;
  parent.insertBefore(newElem, afterElem.nextSibling);
}

function showMainLabel(){

  document.getElementById("mulLabel").innerHTML = "Take a minimum count and perform repeated addition until count becomes 1.. ";
  document.getElementById('val1Res').innerHTML = "First Value: " + a;
  document.getElementById('val2Res').innerHTML = "Second Value: " + b;
  
  var hr_node = document.createElement("hr");
  var div_elem = document.getElementById('mulCount2').parentElement;
  insertAfter(hr_node, div_elem);

  document.getElementById('mulCount1').innerHTML = "Count: " + a.length;
  document.getElementById('mulCount2').innerHTML= "Count: " + b.length;
  setTimeout(mulLogic, 1000);
  count = b.length;
  mulLogic();
}

function some(){

}

var res = '';
function mulLogic() {
    if (count > 0)
    {
      res += a;
      document.getElementById("mulCount").innerHTML = "Count: " + count;
      document.getElementById("mulRes").innerHTML = res;
      count--;
    }
    else {
      printRes(res);
    }
    setTimeout(mulLogic, 2000);
}

function printRes(res)
{
    document.getElementById("labelRes").innerHTML = "Multiplication of two unary number is = " + res;
}

function reset(){
   location.reload();
}


