const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {
  const itemNumber = movieLists[i].querySelectorAll("img").length;
  let clickCounter = 0;

  arrow.addEventListener("click", () => {
    const ratio = Math.floor(window.innerWidth / 270);
    clickCounter++;
    
    // Check if we can scroll to the next items
    if (itemNumber - (4 + clickCounter) + (4 - ratio) >= 0) {
      movieLists[i].style.transform = `translateX(${
        movieLists[i].computedStyleMap().get("transform")[0].x.value - 300
      }px)`;
    } else {
      movieLists[i].style.transform = "translateX(0)";
      clickCounter = 0; // Reset the click counter if reached end of items
    }
  });

  console.log(Math.floor(window.innerWidth / 270)); // Debugging log to check ratio
});

// TOGGLE functionality for light/dark mode

const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
  ".container, .movie-list-title, .navbar-container, .sidebar, .left-menu-icon, .toggle"
);

ball.addEventListener("click", () => {
  // Toggle 'active' class to switch between light and dark modes
  items.forEach((item) => {
    item.classList.toggle("active");
  });
  ball.classList.toggle("active"); // Toggle ball for light/dark switch
});

// Light/Dark Mode Toggle: Add class to body for global theme change
const body = document.querySelector('body');
ball.addEventListener('click', () => {
  body.classList.toggle('dark-mode'); // Toggle dark mode globally
});
