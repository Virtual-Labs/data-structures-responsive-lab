// function add(a,b)
// {
//  a = document.getElementById('val1').value;
//  b = document.getElementById('val2').value;

//  var res = a.concat(b);
//  document.getElementById('sixth').innerHTML = res;
// }


var a, b
function showFistVal()
{
 a = document.getElementById('first').value;
 document.getElementById("val1Res").innerHTML = "First number = " + "  " + a;
 setTimeout(showSecondVal,1000);
}

function showSecondVal(){
 b = document.getElementById('second').value;
 document.getElementById("val2Res").innerHTML = "Second number = " + "  " + b; 
 setTimeout(label,1000);
 
}

function label() {
  document.getElementById('labelRes').innerHTML = "First number is concatinating with second...";
  setTimeout(concatRes, 1500);
}

function concatRes(){
    var res = a.concat(b);
    document.getElementById("concatResDiv").innerHTML = "Addition of two numbers is:  " + "  " + res;
}

function add(){
    setTimeout(showFistVal,1000);

}




function mul(a,b)
{

 a = document.getElementById('first').value;
 b = document.getElementById('second').value;

 

 document.getElementById('third').innerHTML = a.length;
 document.getElementById('fourth').innerHTML= b.length;
 
 if(a.length > b.length)
  {
    var count = b.length - 1;
    document.getElementById('fifth').innerHTML = count;
     var res = ' ';
     while(count)
     {
        res += a.concat(a);
        alert(res);
      count--;
     }
     document.getElementById('seventh').innerHTML = res;

 }
  else
  { 
    var count = a.length - 1;
    document.getElementById('fifth').innerHTML = count;
	  var res = ' ';
     while(count)
     {
        res += a.concat(a);
        //alert(res);
      count--;
     }
     document.getElementById('seventh').innerHTML = res;
  }
}

function reset(){
  location.reload();
  document.getElementById('first').value = ""
  document.getElementById('second').value = ""
 
} 
