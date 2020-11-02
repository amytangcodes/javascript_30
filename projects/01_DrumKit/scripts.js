// play sound
// -----------------------------
function playSound(e) {
  const key = e.key;
  const audio = document.querySelector(`audio[data-key="${key}"]`);
  const keyElement = document.querySelector(`.key[data-key="${key}"]`);
  // console.log("audio", audio);
  // console.log("key element", keyElement);

  // stop function from running if no audio
  // -----------------------------
  if (!audio) return;

  // play correct sound wav file
  // -----------------------------
  audio.src = audio.getAttribute("src");
  audio.play();

  // add class style to button
  // -----------------------------
  keyElement.classList.add("playing");
}

// remove class styling
// -----------------------------
function removeTransition(e) {
  // skip if it's not a transform
  if (e.propertyName !== "transform") return;
  // console.log(e.propertyName);
  // console.log("this:", this);
  this.classList.remove("playing");
}

const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));

window.addEventListener("keydown", playSound);
