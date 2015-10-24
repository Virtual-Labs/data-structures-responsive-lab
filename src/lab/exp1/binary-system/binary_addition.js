var a, b, cur_digit, carry;

function add() {
  a = $('#ip-num1').val();
  b = $('#ip-num2').val();

  // TODO: validate if numbers..
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
  $('#result').html('');
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
    $('#carry').html(carry);
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

function mul(){
  alert("Sorry!! It's not working");
}