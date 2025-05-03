const slide = document.querySelectorAll(".slide");
const caption = document.querySelectorAll(".caption");
const stats = document.querySelectorAll(".stats");
const dropButton = document.querySelectorAll(".dropButton");
const songPlay = document.querySelectorAll("audio");
const mainPage = document.getElementById("mainPage");
const openingPage = document.getElementById("openingPage");
const capButton = document.querySelectorAll(".capTog");
const introSong = document.getElementById("introSong");
const swipe = document.querySelectorAll(".swipe");

function showPic(value) {
  if (slide[value].style.display == "flex") {
    stopSong();
    slide[value].style.display = "none";
    caption[value].style.display = "none";
    stats[value].style.display = "none";
    capButton[value].style.display = "none";
    dropButton[value].textContent = "V";
    swipe[value].style.display = "none";
  } else {
    playSong(value);
    dropButton.forEach((s) => (s.textContent = "V"));
    slide.forEach((s) => (s.style.display = "none"));
    caption.forEach((s) => (s.style.display = "none"));
    stats.forEach((s) => (s.style.display = "none"));
    capButton.forEach((s) => (s.style.display = "none"));
    swipe.forEach((s) => (s.style.display = "none"));
    capButton[value].style.display = "block";
    slide[value].style.display = "flex";
    stats[value].style.display = "block";
    dropButton[value].textContent = "X";
    swipe[value].style.display = "block";
  }
}

function toggleCaption(value) {
  if (caption[value].style.display == "none") {
    caption[value].style.display = "block";
    capButton[value].textContent = "Hide My 💗";
  } else {
    caption[value].style.display = "none";
    capButton[value].textContent = "Hear My 💗";
  }
}
function playSong(value) {
  stopSong();
  songPlay[value].play();
}
function stopSong() {
  songPlay.forEach((s) => {
    s.pause();
    s.currentTime = 0;
  });
}

function loadMain() {
  mainPage.classList.remove("mainPage");
  openingPage.style.display = "none";
  navigator.vibrate(200);
  songPlay[7].play();
  launchConfetti();
}
function launchConfetti() {
  const container = document.querySelector(".confetti-container");
  for (let i = 0; i < 100; i++) {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");
    confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.animationDuration = Math.random() * 2 + 2 + "s";
    confetti.style.animationDelay = Math.random() * 2 + "s";
    container.appendChild(confetti);
    setTimeout(() => container.removeChild(confetti), 3000);
  }
}
