// Our global variables
var music;

function play() {
    //seek to 2 seconds
    music.currentTime = 2;
    music.play();
}

function pause() {
    music.pause();
}

function registerEvents() {
  // Event for clicking the play button
  document.getElementById('play-control').onclick=function(){
    play();
  };
  // Event for clicking the pause button
  document.getElementById('pause-control').onclick=function(){
    pause();
  };
}

function init() {
  music = document.getElementsByTagName("audio")[0];
  registerEvents();
}

window.onload = init;