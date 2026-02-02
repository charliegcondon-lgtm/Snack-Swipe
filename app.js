const videos = [
  {
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
    name: "Burger + Fries",
    place: "Bite City"
  },
  {
    src: "https://www.w3schools.com/html/movie.mp4",
    name: "Cheese Pizza",
    place: "Slice House"
  }
];

let current = 0;

const vid = document.getElementById("vid");
const foodName = document.getElementById("foodName");
const foodPlace = document.getElementById("foodPlace");
const orderBtn = document.getElementById("orderBtn");

function loadVideo() {
  const item = videos[current];
  vid.src = item.src;
  foodName.textContent = item.name;
  foodPlace.textContent = item.place;

  vid.load();
  vid.play().catch(() => {
    // iOS requires user interaction first
  });
}

// ---- SWIPE ----
let startY = 0;

document.addEventListener("touchstart", e => {
  startY = e.touches[0].clientY;
});

document.addEventListener("touchend", e => {
  const endY = e.changedTouches[0].clientY;
  const diff = startY - endY;

  if (Math.abs(diff) < 40) return;

  if (diff > 0) {
    current = (current + 1) % videos.length;
  } else {
    current = (current - 1 + videos.length) % videos.length;
  }

  loadVideo();
});

// REQUIRED for iOS: first tap enables video
document.addEventListener("click", () => {
  vid.play();
}, { once: true });

orderBtn.onclick = () => {
  alert("Order from " + foodPlace.textContent);
};

loadVideo();
