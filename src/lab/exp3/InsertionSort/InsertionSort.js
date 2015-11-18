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


function init(){

	if(!allOk()){
		alert("Enter all values between 0 and 99");
		return ;
	}

	var canvas = document.getElementById('myCanvas');
	var ctx = canvas.getContext('2d');
	
	var cW = ctx.canvas.width;
	var cH = ctx.canvas.height;

    var TA = [];
	for(var i=0; i<7;i++){
		TA.push(new rectObj());
		TA[i].render(ctx, 200+i*100, 200, 90, 60, "#CCCCCC", temp[i]);
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
	//var animateInterval = setInterval(Animate, 30);
	

	function AnimateIthBlock(K){
		ctx.clearRect(0, 0, cW, cH);
		TA[K].y+=0.7;
		for(var i=0;i<7;i++){
			TA[i].render(ctx,TA[i].x,TA[i].y,TA[i].w,TA[i].h,TA[i].clr,TA[i].Num);
		}
		if(TA[K].y>400)
			TA[K].y = 200;	
	}
	//var animateInterval = setInterval(function() {AnimateIthBlock(1);},30);

	function AnimateByLine(){
		//ctx.clearRect(0, 0, cW, cH);
		for(var i=0;i<7;i++){
				var animateInterval = setInterval(function() {AnimateIthBlock(1);},30);
		}
	}
	var Z = AnimateByLine();
}


