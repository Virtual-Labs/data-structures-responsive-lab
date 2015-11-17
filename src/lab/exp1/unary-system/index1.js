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


function mul(a,b)
{
  a = document.getElementById('first').value;
  b = document.getElementById('second').value;

  document.getElementById('third').innerHTML = a.length;
  document.getElementById('fourth').innerHTML= b.length;

    var count = b.length;
    console.log("count" + count)
    document.getElementById('fifth').innerHTML = count;
     var res = ' ';
     while(count != 0)
     {
        res += a;
        console.log("result is: " + res);
        count--;
     }
     document.getElementById('seventh').innerHTML = res;
  }

function reset(){
  location.reload();
  // document.getElementById('first').value = ""
  // document.getElementById('second').value = ""
 
} 
