"use strict";

//const audioCrash = new Audio("./sounds/crash.wav");

const crashBtn = document.querySelector("#crash-btn");
const tomLowBtn = document.querySelector("#low-tom-btn");

crashBtn.addEventListener("click", playSound);

tomLowBtn.addEventListener("click", playSound);


function playSound(event) {
  const targetButton = event.target;
  const soundSource = targetButton.dataset.sound;
  const audio = new Audio(soundSource);
  audio.play();
}
