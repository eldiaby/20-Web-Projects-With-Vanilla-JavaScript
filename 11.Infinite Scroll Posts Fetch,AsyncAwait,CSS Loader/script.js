'use strict';

// Variables

const postsContainer = document.querySelector('.posts-container');
const loader = document.querySelector('.loader');
const searchInput = document.getElementById('search');

const limitPosts = 5;
let currentPage = 1;

let isFirstLoad = true;

// Functions

// Fetching the posts from API
const fetchData = async function (page) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=${limitPosts}&_page=${page}`
  );
  const data = await res.json();
  return data;
};

// display the posts in the DOM
const displayPosts = async function () {
  const posts = await fetchData(currentPage++);
  posts.forEach((post) => {
    const html = `      
        <article class="post">
          <div class="post-number">${post.id}</div>
          <div class="post-text">
          <h2 class="post-title">${post.title}</h2>
          <p class="post-body">${post.body}.
          </p>
          </div>
        </atricle>
        `;
    postsContainer.insertAdjacentHTML('beforeend', html);
  });
};

// Show the loader and call the displayPosts function to fetch a new data
const showLoading = function () {
  loader.classList.add('show');

  setTimeout(() => {
    loader.classList.remove('show');

    setTimeout(() => {
      displayPosts();
    }, 500);
  }, 1000);
};

// Fetching new posts and show the loader when the user finish the page scrolling
const fetchNewPostOnObserv = function (entries) {
  const [entry] = entries;
  if (entry.isIntersecting && !isFirstLoad) {
    showLoading();
  }
  isFirstLoad = false;
};

// Posts container observer
const postsObserver = new IntersectionObserver(fetchNewPostOnObserv, {
  root: null,
  rootMargin: '0px',
  threshold: 1.0,
});
postsObserver.observe(document.querySelector('.sentinel'));

// Initial display of posts
displayPosts();

// Filter the posts
const filterPosts = function (e) {
  const searchTerm = e.target.value.toLowerCase();

  document.querySelectorAll('.post').forEach((post) => {
    post.querySelector('.post-title').innerText.includes(searchTerm);
    if (
      post.querySelector('.post-title').innerText.includes(searchTerm) ||
      post.querySelector('.post-body').innerText.includes(searchTerm)
    ) {
      post.style.display = '';
    } else {
      post.style.display = 'none';
    }
  });
};

// Events listeners

searchInput.addEventListener('input', filterPosts);
