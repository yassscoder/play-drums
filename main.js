"use strict";

const crashBtn = document.querySelector("#crash-btn");
const hihatOpenBtn = document.querySelector("#hihat-open-btn");
const hihatCloseBtn = document.querySelector("#hihat-close-btn");
const kickBtn = document.querySelector("#kick-btn");
const rideBtn = document.querySelector("#ride-btn");
const snareBtn = document.querySelector("#snare-btn");
const tomHighBtn = document.querySelector("#tom-high-btn");
const tomMidBtn = document.querySelector("#tom-mid-btn");
const tomLowBtn = document.querySelector("#tom-low-btn");

crashBtn.addEventListener("click", playWithKeyOrButton);
hihatOpenBtn.addEventListener("click", playWithKeyOrButton);
hihatCloseBtn.addEventListener("click", playWithKeyOrButton);
kickBtn.addEventListener("click", playWithKeyOrButton);
rideBtn.addEventListener("click", playWithKeyOrButton);
snareBtn.addEventListener("click", playWithKeyOrButton);
tomHighBtn.addEventListener("click", playWithKeyOrButton);
tomMidBtn.addEventListener("click", playWithKeyOrButton);
tomLowBtn.addEventListener("click", playWithKeyOrButton);

function getSoundSource(event) {
  let soundSource;
  if (event.key && document.querySelector(`.${event.code}`) !== null) {
    const targetLetter = document.querySelector(`.${event.code}`);
    soundSource = targetLetter.dataset.sound;
    console.log(event);
    return soundSource;
  } else if (event.key && document.querySelector(`.${event.code}`) === null) {
    console.log(event);
    const error = new ReferenceError("Played key is invalid"); // what's the way to throw the error in catch??
    alert("Played key is invalid");
  } else {
    const targetButton = event.target;
    soundSource = targetButton.dataset.sound;
    return soundSource;
  }
}

function playWithKeyOrButton(event) {
  try {
    const soundSrc = getSoundSource(event);
    const audio = new Audio(soundSrc);
    audio.play();
  } catch (error) {
    console.log(error.message);
  }
}

window.addEventListener("keydown", playWithKeyOrButton);

// window.addEventListener("keydown", delaySound);
// function delaySound(event) {
//   setTimeout(playWithKeyOrButton, 1000, event); 
// }
