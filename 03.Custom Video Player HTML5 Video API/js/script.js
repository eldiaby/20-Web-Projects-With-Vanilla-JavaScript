'use strict';

// Variables
const vidoe = document.querySelector('.screen');
const btnPlay = document.querySelector('.play').closest('button');
const btnStop = document.querySelector('.stop').closest('button');
const progress = document.querySelector('.progress');
const timeStamp = document.querySelector('.time-stamp');

// Functions

// Updating the play/ pause icon
const updatePlayIcon = function () {
  if (vidoe.paused) {
    btnPlay.innerHTML = `<i class="fa fa-play fa-2x play"></i>`;
  } else {
    btnPlay.innerHTML = `<i class="fa fa-pause fa-2x pause"></i>`;
  }
};

// Toggle the vidoe status
function toggleVidoeStatus() {
  if (vidoe.paused) {
    vidoe.play();
  } else {
    vidoe.pause();
  }
  updatePlayIcon();
}

// Stop vidoe
const stopVidoe = function () {
  vidoe.currentTime = 0;
  vidoe.pause();
  updatePlayIcon();
};

// Set vidoe progress

const setVidoeProgerss = function () {
  // console.log(vidoe.currentTime);
  // console.log((vidoe.currentTime / vidoe.duration) * 100);
  progress.value = (vidoe.currentTime / vidoe.duration) * 100;

  const mins = String(Math.floor(vidoe.currentTime / 60)).padStart(2, '0');
  // console.log(mins);
  const secs = String(Math.floor(vidoe.currentTime % 60)).padStart(2, '0');
  console.log(secs);
  timeStamp.textContent = `${mins}: ${secs}`;
};

// Events handling

vidoe.addEventListener('click', toggleVidoeStatus);
btnPlay.addEventListener('click', toggleVidoeStatus);
btnStop.addEventListener('click', stopVidoe);

// For progerass bar
vidoe.addEventListener('timeupdate', setVidoeProgerss);

window.addEventListener('keydown', function (e) {
  // console.log(e);
  if (e.key === ' ') toggleVidoeStatus();
  else if (e.key === 'Escape') stopVidoe();
});

progress.addEventListener('change', function (e) {
  // console.log(this.value);
  // console.log((+progress.value * vidoe.duration) / 100);
  vidoe.currentTime = (+progress.value * vidoe.duration) / 100;
});
