'use strict';

// Variables
const musicContainer = document.querySelector('.music-container');

const playBtn = document.querySelector('.play');
const previewBtn = document.querySelector('.preview');
const forwardBtn = document.querySelector('.next');
const btnsContainer = document.querySelector('.navigation');

const audio = document.querySelector('.audio');
const progressBar = document.querySelector('.progress');
const progressContainer = document.querySelector('.progress-container');

const musicTitile = document.querySelector('.music-title');
const musicCover = document.querySelector('.cover');

// song titles
const tracks = ['hey', 'summer', 'ukulele'];

let songIndex = 0;

// =============================================================================
// Functions

// update song details
const loadSong = function (song) {
  musicTitile.innerText = song;
  musicCover.src = `./images/${song}.jpg`;
  audio.src = `./music/${song}.mp3`;
};

// puase the track
const pauseSong = function () {
  audio.pause();
  musicContainer.classList.remove('play');
  playBtn.querySelector('i').className = 'fas fa-play';
};

// Play the song
const playSong = function () {
  audio.play();
  musicContainer.classList.add('play');
  playBtn.querySelector('i').className = 'fas fa-pause';
};

// inject the preview Song
const previewSong = function () {
  songIndex--;
  if (songIndex < 0) songIndex = tracks.length - 1;
  loadSong(tracks[songIndex]);
  playSong();
};

// inject the preview Song
const nextSong = function () {
  songIndex++;
  if (songIndex > tracks.length - 1) songIndex = 0;

  loadSong(tracks[songIndex]);
  playSong();
};

// Update progress bar in UI
const updateProgressBar = function (e) {
  const { duration, currentTime } = e.srcElement;
  progressBar.style.width = `${(currentTime / duration) * 100}px`;
};

// Set progress bar
const setProgress = function (e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;
  console.log((clickX / width) * duration);
  audio.currentTime = (clickX / width) * duration;
};

loadSong(tracks[songIndex]);
// =============================================================================
// Events handlers

// playBtn.addEventListener('click', function (e) {
//   musicContainer.classList.contains('play') ? pauseSong() : playSong();
// });

// previewBtn.addEventListener('click', previewSong);
// forwardBtn.addEventListener('click', nextSong);

// update the event listener for the performance
btnsContainer.addEventListener('click', function (e) {
  if (!e.target.closest('button')) return;

  const target = e.target.closest('button');

  if (target === playBtn)
    musicContainer.classList.contains('play') ? pauseSong() : playSong();
  else if (target === forwardBtn) nextSong();
  else if (target === previewBtn) previewSong();
});

audio.addEventListener('timeupdate', updateProgressBar);
progressContainer.addEventListener('click', setProgress);

audio.addEventListener('ended', nextSong);
