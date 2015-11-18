window.onload = init;

var temp = [];
var cur = [];
var Running = 1;
function allOk(){

  for(var i=0;i<7;i++){
    temp[i] = 0;
    cur[i] = (i==0);
  }

  var flag = 0;

  for(var i=0;i<7;i++){
    var x = document.getElementById('num' + i).value;
    if(x>99 || x<0){
      flag = 1;
    }
    temp[i] = x;
    console.log(temp[i]);
  }

  return (flag == 0);
}

function rectObj(){
  this.x = 0;
  this.y = 0;
  this.w = 0;

  this.render = function(ctx, rx, ry, rw, rh, clr,Num){

    this.x = rx;
    this.y = ry;
    this.w = rw;
    this.h = rh;
    this.clr = clr;
    this.Num = Num;

    ctx.font = "18pt Arial";
    ctx.strokeStyle = "#000";
    ctx.lineWidth = 6;

    ctx.beginPath();
    ctx.fillStyle = clr;
    ctx.rect(rx, ry, rw, rh);
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = "#900";
    ctx.fillText(Num, rx+(rh/2), ry+(rw/2));

  }
}

var animateInterval,ctx,cW,cH;
var TA = [];

function init(){

  if(!allOk()){
    alert("Enter all values between 0 and 99");
    return ;
  }

  var canvas = document.getElementById('myCanvas');
  ctx = canvas.getContext('2d');

  cW = ctx.canvas.width;
  cH = ctx.canvas.height;
  ctx.clearRect(0, 0, cW, cH);
  console.log(cW,cH);
  TA = [];

  for(var i=0; i<7;i++){
    TA.push(new rectObj());
    TA[i].render(ctx, 250+i*100, 200, 90, 60, "#CCCCCC", temp[i]);
  }

  InsertionSort();

  window.setTimeout(function() {
    window.setInterval(draw, 30);
  }, 30);

}

function draw() {
    ctx.clearRect(0, 0, cW, cH);
    for(var i=0;i<7;i++){
      TA[i].render(ctx,TA[i].x,TA[i].y,TA[i].w,TA[i].h,TA[i].clr,TA[i].Num);
    }
}


function Gogreen(K){
  TA[K].clr = "green";
}

function goRed(K){
  TA[K].clr = "red";
}

// for Restoring previous color changes
function RestoreColor(K){
  TA[K].clr = "#CCCCCC";
}


function TranslateUp(K,Y){
  if(TA[K].y<=Y){
    RestoreColor(K);
    clearInterval(animateInterval);
  }

  TA[K].y--;
}

function TranslateRight(K,X){

  if(TA[K].x>=X){
    clearInterval(animateInterval);
    RestoreColor(K);
  }

  TA[K].x++;
}

function TranslateDown(K,Y){
  if(TA[K].y>=Y){
    clearInterval(animateInterval);
    RestoreColor(K);
  }

  TA[K].y++;
}

function TranslateLeft(K,X){

  if(TA[K].x<=X){
    clearInterval(animateInterval);
    RestoreColor(K);
  }

  TA[K].x--;
}


function MoveInDir(x, y){
  var X = TA[x].x;
  var Y = TA[x].y;
  TA[x].clr = "green";
  y = parseInt(y);
  switch(y) {
    case 0:
      animateInterval = setInterval( function() {TranslateUp(x,Y-70);},30);
      break;
    case 1:
      animateInterval = setInterval( function() {TranslateRight(x,X+100);},30);
      break;
    case 2:
      animateInterval = setInterval( function() {TranslateDown(x,Y+70);},30);
      break;
    case 3:
      animateInterval = setInterval( function() {TranslateLeft(x,X-100);},30);
      break;
  }
}

function move(){
  clearInterval(animateInterval);
  var whichBlock = document.getElementById('Box').value;
  var Dir = document.getElementById('Dir').value;
  console.log(whichBlock);
  console.log(Dir);
  MoveInDir(whichBlock,Dir);
}


function InsertionSort(){
  console.log("Insertion sort Starts here");
  var moveBlockId = 0;
  
  var intervalId = window.setInterval(function() {
    
    var NewI = window.setInterval(function() {
      if(TA[moveBlockId].y>=200)clearInterval(NewI);
      MoveInDir(moveBlockId-1,2);
    },3000);

    if(moveBlockId == 8) clearInterval(intervalId);
    Gogreen(moveBlockId);
    MoveInDir(moveBlockId, 0);
    moveBlockId++;
  }, 6000);


}
