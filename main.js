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

crashBtn.addEventListener("click", delaySound);
hihatOpenBtn.addEventListener("click", delaySound);
hihatCloseBtn.addEventListener("click", delaySound);
kickBtn.addEventListener("click", delaySound);
rideBtn.addEventListener("click", delaySound);
snareBtn.addEventListener("click", delaySound);
tomHighBtn.addEventListener("click", delaySound);
tomMidBtn.addEventListener("click", delaySound);
tomLowBtn.addEventListener("click", delaySound);

const validInputKeys = new Map();
validInputKeys.set(65, "./sounds/crash.wav");
validInputKeys.set(83, "./sounds/hihat-open.wav");
validInputKeys.set(68, "./sounds/hihat-close.wav");
validInputKeys.set(70, "./sounds/kick.wav");
validInputKeys.set(71, "./sounds/ride.wav");
validInputKeys.set(72, "./sounds/snare.wav");
validInputKeys.set(74, "./sounds/tom-high.wav");
validInputKeys.set(75, "./sounds/tom-mid.wav");
validInputKeys.set(76, "./sounds/tom-low.wav");

const soundSourceRoutes = new Map();
soundSourceRoutes.set(crashBtn, "./sounds/crash.wav");
soundSourceRoutes.set(hihatOpenBtn, "./sounds/hihat-open.wav");
soundSourceRoutes.set(hihatCloseBtn, "./sounds/hihat-close.wav");
soundSourceRoutes.set(kickBtn, "./sounds/kick.wav");
soundSourceRoutes.set(rideBtn, "./sounds/ride.wav");
soundSourceRoutes.set(snareBtn, "./sounds/snare.wav");
soundSourceRoutes.set(tomHighBtn, "./sounds/tom-high.wav");
soundSourceRoutes.set(tomMidBtn, "./sounds/tom-mid.wav");
soundSourceRoutes.set(tomLowBtn, "./sounds/tom-low.wav");

function getSoundSource(event) {
  let soundSource;
  const pressedKey = event.keyCode;

  if (validInputKeys.has(pressedKey)) {
    soundSource = validInputKeys.get(pressedKey);
    return soundSource;
  } else if (event.key && !validInputKeys.has(pressedKey)) {
    const error = new ReferenceError("Pressed key is not valid");
    //alert("Pressed key is not valid");
    Swal.fire({
      icon: "error",
      title: "Pressed key is not valid",
      text: "Please press a valid key",
    });
    throw error;
  } else {
    const targetButton = event.target;
    soundSource = soundSourceRoutes.get(targetButton);
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

window.addEventListener("keydown", delaySound);

function delaySound(event) {
  setTimeout(playWithKeyOrButton, 1000, event);
}
