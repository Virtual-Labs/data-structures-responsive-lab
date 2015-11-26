var a, b, cur_digit, carry;

function add() {
  a = $('#ip-num1').val();
  b = $('#ip-num2').val();

  if (/^[01]+$/.test(a) ==false || /^[01]+$/.test(b) == false) {
    alert("Enter binary numbers");
  }
  else {
    addit();
  }
}

function addit() {
  $("#mul-res").hide();
  $('#addition-res').show(); // To hide all other contents
  if(a.length < b.length) {
    var diff = b.length - a.length;
    a = prepend_zeros(diff, a);
  }
  else if(b.length < a.length) {
    var diff = a.length - b.length;
    b = prepend_zeros(diff, b);
  }
  cur_digit = a.length - 1;
  carry = ""; //equivalent to no carry
  $('#num1').html(a);
  $('#num2').html(b);
  $('#num2').append('<hr>');
  $('#result').html();
  place_arrow();
  add_digit();
}

function add_digit() {
  console.log('cur digit index:', cur_digit);
  if(cur_digit >= 0) {
    console.log('adding digits:', a[cur_digit], b[cur_digit]);
    var res = add_binary_string(a[cur_digit], b[cur_digit]);
    console.log('res from add_binary_string:', res);
    if(carry.length > 0) {
      console.log('carry exist of', carry);
      res = add_binary_string(res, carry);
      console.log('res after carry:', res);
      carry = "";
    }
    if(res.length > 1 && cur_digit > 0) { // if result is greater than 1 digit
      var newres = res[res.length - 1]; // get the last digit
      console.log('actual res', newres);
      carry = res.slice(0, res.length - 1);  // get the entire array except the last element
      console.log('carry', carry);
      res = newres;
    }
    $('#result').prepend(res);
    $('#carry').html('Carry: ' + carry);
    cur_digit -= 1;
    if(cur_digit >= 0) {
      move_arrow();
    }
  }
}

// prepend the `number` with `count` no of zeros..
// and return the new number
function prepend_zeros(count, number) {
  var zeros = "";
  for(var i = 0; i < count; i++) {
    zeros += "0";
  }
  return zeros + number;
}

// a, b are one digit binary strings..
// returns sum of above in binary string..
function add_binary_string(a, b) {
  var res = parseInt(a, 2) + parseInt(b, 2);
  return res.toString(2);
}

function place_arrow() {
  var wd = $('#num1').css('width');
  wd = parseFloat(wd, 10);
  console.log('width of num box', wd);
  $('#arrow').css('left', (wd - 20) + 'px');
  $('#arrow').show();
}

function move_arrow() {
  $('#arrow').animate({
    left: "-=15px"
  }, {
    duration: 1000,
    complete: function() {
      add_digit();
    }
  });
}


/* code related to binary multiplication */

var count, interm_muls;

function mul() {

  interm_muls = [];
  $('#addition-res').hide(); // To hide all other contents
  $("#mul-res").show();
  $('#mul-animation').html('');
  $('#mul-result').html('');
  $('#mulFinalRes').html('');
  a = $('#ip-num1').val();
  b = $('#ip-num2').val();
  if (/^[01]+$/.test(a) ==false || /^[01]+$/.test(b) == false) {
    alert("Enter binary numbers");
  }
  else {
    console.log(a, b);
    $('#firstValue').html(a);
    $('#secondValue').html(b);

   

  //set width of #mul-animation
  // good width = (first num width + sec num width) - 1 digit width
  // 15 is no of pixels taken by one digit in the current style!!!
  var good_width = $('#firstValue').width() + $('#secondValue').width() - 15;
  console.log('good width', good_width);
  $('#mul-animation').width(good_width);

  $('#hrAfterInpt').html('<hr>')
  //console.log(b.length)
  place_arrow_mul();
  mul_logic(b.length);
}
}


function mul_logic(i) {

  if(i == 0) {
    finalRes();
    return;
  }
  var res = "";
  var digit = b[i-1];
  if(digit == 0) {
    res = makeZeros(a.length);
  }    
  else {
    res = a;
  }
  // append zeros at the end for the position at the multiplication
  var no_of_zeros = b.length - i;
  res += makeZeros(no_of_zeros);
  console.log('final res', res);
  // append the intermediate mul to the display
  $('#mul-animation').append(res + '<br>');
  // also push it to an array for final addition later
  interm_muls.push(res);

  // move the arrow and the after the arrow move that func will call this func
  // again
  move_arrow_mul(i);
  // call itself again after 2 secs
  /*setTimeout(function () {
    mul_logic(i-1);
  }, 2000);*/
}

function finalRes() {
  var res = "0";
  for(var i in interm_muls) {
    res = add_binary_string(res, interm_muls[i]);
  }
  console.log('final final res', res);
  $('#hrBeforeRes').html('<hr>');
  $('#mul-result').html(res);
  $('#hr-before-main-res').html('<hr>');
  $('#mulFinalRes').html("Multiplication of two numbers is: " +  res);
}
 
function makeZeros(n) {
  return "0".repeat(n);
}

function place_arrow_mul() {
  var wd = $('#secondValue').css('width');
  wd = parseFloat(wd, 10);
  console.log('width of num box', wd);
  $('#arrow-mul').css('left', (wd - 20) + 'px');
  //$('#arrow-mul').css('right', '10px');
  $('#arrow-mul').show();
}

function move_arrow_mul(i) {
  if(i-1 == 0) {
      mul_logic(i-1);
      return;
  }
  $('#arrow-mul').animate({
    left: "-=15px"
  }, {
    duration: 2000,
    complete: function() {
      mul_logic(i-1);
    }
  });
}

