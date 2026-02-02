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
const nextBtn = document.getElementById("nextBtn");
const orderBtn = document.getElementById("orderBtn");

function loadVideo() {
  const item = videos[current];
  vid.src = item.src;
  foodName.textContent = item.name;
  foodPlace.textContent = item.place;
  vid.play();
}

nextBtn.onclick = () => {
  current = (current + 1) % videos.length;
  loadVideo();
};

orderBtn.onclick = () => {
  alert("Order from " + foodPlace.textContent);
};

loadVideo();
