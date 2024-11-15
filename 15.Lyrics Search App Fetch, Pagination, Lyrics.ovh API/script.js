'use strict';

// Select Elements and Declare Variables
const form = document.querySelector('.form-search');
const searchInput = document.querySelector('.input-search');
const songsContainer = document.querySelector('.songs-container');
const songsList = document.querySelector('.songs');
const paginationContainer = document.querySelector('.pagination');
const apiURL = 'https://api.lyrics.ovh';

// ============================================================================ //
// Functions

// Fetch more songs prev and next buttons
const fetchMoreSongs = async function (url) {
  fetch(`https://cors-anywhere.herokuapp.com/${url}`)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error('Error:', error));
};

// Display song on DOM
const displaySong = function (song) {
  const html = `
    <li class="song">
      <span class="song-info"><strong class="song-artist">${song.artist.name}</strong> - ${song.title}</span>
      <button class="btn" data-artist="${song.artist.name}" data-songtitle="${song.title}">
      Get Lyrics
      </button>
    </li>
  `;
  songsList.insertAdjacentHTML('beforeend', html);
};

// Display results on DOM
const showData = function (data) {
  songsList.innerHTML = ``;
  data.data.forEach((song) => {
    displaySong(song);
  });

  if (data.prev || data.next) {
    paginationContainer.innerHTML = `
    ${
      data.prev
        ? `<button class="btn" onclick="fetchMoreSongs('${data.prev}')">Prev</button>`
        : ''
    }
    ${
      data.next
        ? `<button class="btn" onclick="fetchMoreSongs('${data.next}')">Next</button>`
        : ''
    }
    `;
  } else {
    paginationContainer.innerHTML = ``;
  }
};

// Search with song title or artist
const searchSongs = async function (searchTerm) {
  const res = await fetch(`${apiURL}/suggest/${searchTerm}`);
  const data = await res.json();
  showData(data);
};

// Get lyrics for a song
const getLyrics = async function (artist, title) {
  const res = await fetch(`${apiURL}/v1/${artist}/${title}`);
  const data = await res.json();

  const lyrics = data.lyrics.replace(/(\r\n|\r|\n)/g, `<br />`);

  songsContainer.innerHTML = `
  <h2><strong>${artist}</strong> - ${title}</h2>
  <span>${lyrics}</span>
  `;

  paginationContainer.innerHTML = '';
};

// ============================================================================ //
// Event Listeners
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const searchTerm = searchInput.value.trim();

  if (!searchTerm) {
    window.alert('You should type somthing to search first');
  } else {
    searchSongs(searchTerm);
  }
});

// Get lyrics functionality
songsList.addEventListener('click', (e) => {
  const targetEl = e.target.closest('.btn');

  if (!targetEl) return;

  const artist = targetEl.dataset.artist;
  const title = targetEl.dataset.songtitle;
  getLyrics(artist, title);
});
