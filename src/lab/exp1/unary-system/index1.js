var a;
var b;

function add(a,b)
{
 a = document.getElementById('first').value;
 b = document.getElementById('second').value;

 var res = a.concat(b);
 document.getElementById('sixth').innerHTML = res;

 
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
