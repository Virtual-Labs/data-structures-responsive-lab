function Quicksort(A, lo, hi) 
{  if (lo < hi) 
   {  var mid = Partition(A,lo,hi);
      Quicksort(A,lo,mid-1);
      Quicksort(A,mid+1,hi);
   } 
} 

function Partition(A, lo, hi)
{// Input: An integer array A[lo..hi]  
 // Output: The array A arranged as: elements <= pivot, pivot, elements > pivot
 // Return the final position of pivot 
 // The pivot is A[lo] but it can be any of the elements A[lo], ..., A[hi];
 // If pivot is other than A[lo] then (at the start) swap it with A[lo]
 
   paramStack.push([-lo,hi]); // push lo and hi
   
   var pivot = A[lo];   
   var left = lo+1; 
   var right = hi;
   while (left <= right)
   {  while ((left <= right) && (A[left] <= pivot)) left++;
      while ((left <= right) && (A[right] > pivot)) right--;
      if (left < right)
      {  // save left and right parameters to paramStack array 
         paramStack.push([left,right]); 
         var t = A[left]; A[left] = A[right]; A[right] = t; left++; right--; 
      }
   }
  
   // Final swap: swap pivot with A[right] and return right (final pivot location) 
   A[lo] = A[right]; A[right] = pivot;
   paramStack.push([lo,right]); // push lo and right 
   return right;
}

var A;  // The input array for Quicksort
var paramStack; // A global array used as a stack 

function ExecuteQS()
{ // Some initialization code goes here, omitted form brevity
  // The array A (global) is the input to Quicksort 
    
  paramStack=[]; // paramStack array is global
  var B = A.slice(); // Make a duplicate of array A
  Quicksort(A,1,A.length-1);
 
  A = B.slice(); // Restore array A 
  ProcessStack(); 
}

function ProcessStack()
{  var elem = document.getElementById("arr0");
   if (elem) elem.parentNode.removeChild(elem); 
   elem = document.getElementById("arr1");
   if (elem) elem.parentNode.removeChild(elem); 

   if (paramStack.length==0)  
   { PrintArray(A,-1,0); return; }
    
   gelem1 = null; gelem2 = null;
   newRow = false;
   var param = paramStack.shift(); // Get parameters from paramStack
    
   left = param[0]; right = param[1]; 
   
   if (left < 0)  // Check if parameters are lo and hi
   {  newRow =true;
      lo = -left;  hi = right; 
     
      prevleft = lo;  // a bug creeps if RHS is lo+1
      prevright = hi;
 
      param = paramStack.shift();  
     
      left = param[0]; right = param[1]; 
   } 
       
   dispLeft = left-prevleft; // no. of cells to move left arraow
   dispRight = prevright-right ; // no. of cells to move right arraow
   
   if (left==lo) dispLeft = right - prevleft;
   
   PrintArray(A, prevleft, prevright);
 
   prevright = right; prevleft = left;

   // Modify the array; the modified array will be shown the 
   // next time ProcessStack() (and thus PrintArray) is called
   var t = A[left]; A[left] = A[right]; A[right] = t; 
  
   if (!Timer1) Timer1 = setInterval(AnimateArrow,Speed); // Start animation
} 


function PrintArray(A, prevleft, prevright)
{ // This function renders the array A as an HTML list 
  // The program code is omitted for brevity  
}
function AnimateArrow()
{ // This function is called as a result of 
  // the call to setInterval() in ProcessSatck()
  // The program code is omitted for brevity 
}