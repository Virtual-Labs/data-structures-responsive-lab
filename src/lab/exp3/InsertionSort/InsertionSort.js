window.onload = init;
function Shape(x, y, w, h, fill) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.fill = fill;
}
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

function init(){
	if(!allOk()){
		alert("Enter all values between 0 and 99");
		return ;
	}
	var canvas = document.getElementById('myCanvas');
	var context = canvas.getContext('2d');
	context.font = "18pt Arial";
	context.strokeStyle = "#000";
	context.lineWidth = 4;

	for(var i=0; i<7;i++){
		context.beginPath();
		context.fillStyle = "#3c0";
		context.rect(200+i*100, 200, 90, 60);
		context.fill();
		context.stroke();
		context.fillStyle = "#900";
		context.fillText(temp[i],200+i*100+35,200+35);
	}
}

