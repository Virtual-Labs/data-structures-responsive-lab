window.onload = init;

var temp = [];
var cur = [];

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


  function Animate(){
    ctx.clearRect(0, 0, cW, cH);
    for(var i=0;i<7;i++){
      TA[i].render(ctx,TA[i].x,TA[i].y,TA[i].w,TA[i].h,TA[i].clr,TA[i].Num);
      TA[i].y++;
      if(TA[i].y>300){
        TA[i].y = 200;		
      }
    }
  }

  clearInterval(animateInterval);

  //animateInterval = setInterval(Animate, 30);

  clearInterval(animateInterval);

  function AnimateIthBlock(K){
    ctx.clearRect(0, 0, cW, cH);
    TA[K].y+=1;
    for(var i=0;i<7;i++){
      TA[i].render(ctx,TA[i].x,TA[i].y,TA[i].w,TA[i].h,TA[i].clr,TA[i].Num);
    }
    console.log(TA[K].y);
    if(TA[K].y>400)
      TA[K].y = 200;	
  }

  //animateInterval = setInterval(function() {AnimateIthBlock(1);},30);*/
}

// for Restoring previous color changes

function RestoreColor(K){
  TA[K].clr = "#CCCCCC";
  //setTimeout(function(){ TA[K].clr = "#CCCCCC"; }, 500);
}


function TranslateUp(K,Y){
  console.log(TA[K].y, Y);

  ctx.clearRect(0, 0, cW, cH);
  if(TA[K].y<=Y){
    RestoreColor(K);
    clearInterval(animateInterval);
  }

  TA[K].y--;
  for(var i=0;i<7;i++){
    TA[i].render(ctx,TA[i].x,TA[i].y,TA[i].w,TA[i].h,TA[i].clr,TA[i].Num);
  }
}

function TranslateRight(K,X){
  console.log(TA[K].x,X);

  ctx.clearRect(0,0,cW,cH);
  if(TA[K].x>=X){
    clearInterval(animateInterval);
    RestoreColor(K);
  }

  TA[K].x++;
  for(var i=0;i<7;i++){
    TA[i].render(ctx,TA[i].x,TA[i].y,TA[i].w,TA[i].h,TA[i].clr,TA[i].Num);
  }
}

function TranslateDown(K,Y){
  console.log(TA[K].y, Y);

  ctx.clearRect(0, 0, cW, cH);
  if(TA[K].y>=Y){
    clearInterval(animateInterval);
    RestoreColor(K);
  }

  TA[K].y++;
  for(var i=0;i<7;i++){
    TA[i].render(ctx,TA[i].x,TA[i].y,TA[i].w,TA[i].h,TA[i].clr,TA[i].Num);
  }
}

function TranslateLeft(K,X){
  console.log(TA[K].x,X);

  ctx.clearRect(0,0,cW,cH);
  if(TA[K].x<=X){
    clearInterval(animateInterval);
    RestoreColor(K);
  }

  TA[K].x--;
  for(var i=0;i<7;i++){
    TA[i].render(ctx,TA[i].x,TA[i].y,TA[i].w,TA[i].h,TA[i].clr,TA[i].Num);
  }
}

function MoveInDir(x, y){
  var X = TA[x].x;
  var Y = TA[x].y;
  console.log(Y,y);
  TA[x].clr = "green";
  switch(y){
    case "0":
      animateInterval = setInterval( function() {TranslateUp(x,Y-70);},30);
      break;
    case "1":
      animateInterval = setInterval( function() {TranslateRight(x,X+100);},30);
      break;
    case "2":
      animateInterval = setInterval( function() {TranslateDown(x,Y+70);},30);
      break;
    case "3":
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



