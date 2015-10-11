const INITIAL_STATE =0;;                           
                                                    
const SEARCH_RUNNING_STATE = 3;

var WINDOW_WIDTH = window.innerWidth*0.9;               // the width do use in the game.
var WINDOW_HEIGHT = window.innerHeight*0.85;  

const USED_HEIGHT = 516;
const USED_WIDTH = 1000;           // the height to use in the game.

var canvas = document.getElementById("animation");
var context = canvas.getContext("2d");

function clicked(clicked_id) {
  if(clicked_id=="Insert"){
    Experiment.insertnode();
  }
  if(clicked_id=="Search"){
    Experiment.searchnode();
  }
  if(clicked_id=="Delete"){
    Experiment.deletenode();
  }

}

function config() {

  CURRENTSTATE = INITIAL_STATE;
  window.onresize = resizeSettings;
  canvas.width  = window.innerWidth;                // setting the width of the canvas.
  canvas.height = window.innerHeight;               // setting the height of the canvas.
  Experiment.resetGraph();
}

function main_loop() {
  Draw.drawBackground();
  Message.draw(); 
  
}


function resizeSettings() {
  WINDOW_WIDTH = window.innerWidth;
  WINDOW_HEIGHT = window.innerHeight;
  canvas.width  = WINDOW_WIDTH;
  canvas.height = WINDOW_HEIGHT;
  Experiment.resetGraph();

}




config();
document.getElementById("animation").onload=main_loop();
setInterval(function() {
  main_loop();
}, 30);