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
