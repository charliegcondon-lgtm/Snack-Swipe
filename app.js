// ---- FEED DATA ----
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

// ---- STATE ----
let current = 0;
let startY = 0;

// ---- ELEMENTS ----
const vid = document.getElementById("vid");
const foodName = document.getElementById("foodName");
const foodPlace = document.getElementById("foodPlace");
const orderBtn = document.getElementById("orderBtn");

// ---- LOAD VIDEO ----
function loadVideo() {
  const item = videos[current];

  vid.pause();
  vid.src = item.src;
  vid.load(); // REQUIRED for iOS

  foodName.textContent = item.name;
  foodPlace.textContent = item.place;
}

// ---- TAP TO PLAY (iOS SAFE) ----
vid.addEventListener("click", () => {
  vid.play();
});

// ---- SWIPE DETECTION ----
document.addEventListener("touchstart", e => {
  startY = e.touches[0].clientY;
});

document.addEventListener("touchend", e => {
  const endY = e.changedTouches[0].clientY;
  const diff = startY - endY;

  // ignore tiny swipes
  if (Math.abs(diff) < 50) return;

  if (diff > 0) {
    // swipe up → next
    current = (current + 1) % videos.length;
  } else {
    // swipe down → previous
    current = (current - 1 + videos.length) % videos.length;
  }

  loadVideo();
});

// ---- ORDER BUTTON ----
orderBtn.onclick = () => {
  alert("Order from " + foodPlace.textContent);
};

// ---- INIT ----
loadVideo();
