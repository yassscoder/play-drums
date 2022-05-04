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

crashBtn.addEventListener("click", playSound);
hihatOpenBtn.addEventListener("click", playSound);
hihatCloseBtn.addEventListener("click", playSound);
kickBtn.addEventListener("click", playSound);
rideBtn.addEventListener("click", playSound);
snareBtn.addEventListener("click", playSound);
tomHighBtn.addEventListener("click", playSound);
tomMidBtn.addEventListener("click", playSound);
tomLowBtn.addEventListener("click", playSound);

function playSound(event) {
  const targetButton = event.target;
  const soundSource = targetButton.dataset.sound;
  const audio = new Audio(soundSource);
  audio.play();
}

function playSoundKeyBoard(letter) {
  const targetLetter = document.querySelector(`.${letter}`);
  const soundSource = targetLetter.dataset.sound;
  const audio = new Audio(soundSource);
  audio.play();
}

window.addEventListener("keydown", getLetterkeyboard);

function getLetterkeyboard(event) {
  if (event.code === "KeyA") {
    playSoundKeyBoard(event.code);
    console.log("tocaste A");
  } else if (event.code === "KeyS") {
    playSoundKeyBoard(event.code);
    console.log("tocaste S");
  } else if (event.code === "KeyD") {
    playSoundKeyBoard(event.code);
    console.log("tocaste D");
  } else if (event.code === "KeyF") {
    playSoundKeyBoard(event.code);
    console.log("tocaste F");
  } else if (event.code === "KeyG") {
    playSoundKeyBoard(event.code);
    console.log("tocaste G");
  } else if (event.code === "KeyH") {
    playSoundKeyBoard(event.code);
    console.log("tocaste H");
  } else if (event.code === "KeyJ") {
    playSoundKeyBoard(event.code);
    console.log("tocaste J");
  } else if (event.code === "KeyK") {
    playSoundKeyBoard(event.code);
    console.log("tocaste K");
  } else if (event.code === "KeyL") {
    playSoundKeyBoard(event.code);
    console.log("tocaste L");
  }
}
