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
  switch (event.code) {
    case "KeyA":
      playSoundKeyBoard(event.code);
      console.log("tocaste A");
      break;

    case "KeyS":
      playSoundKeyBoard(event.code);
      console.log("tocaste S");
      break;

    case "KeyD":
      playSoundKeyBoard(event.code);
      console.log("tocaste D");
      break;

    case "KeyF":
      playSoundKeyBoard(event.code);
      console.log("tocaste F");
      break;

    case "KeyG":
      playSoundKeyBoard(event.code);
      console.log("tocaste G");
      break;

    case "KeyH":
      playSoundKeyBoard(event.code);
      console.log("tocaste H");
      break;

    case "KeyJ":
      playSoundKeyBoard(event.code);
      console.log("tocaste J");
      break;

    case "KeyK":
      playSoundKeyBoard(event.code);
      console.log("tocaste K");
      break;

    case "KeyL":
      playSoundKeyBoard(event.code);
      console.log("tocaste L");
      break;
  }
}
