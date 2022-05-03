"use strict";

const audioCrash = new Audio("./sounds/crash.wav");

const crashBtn = document.querySelector("#crash-btn");
crashBtn.addEventListener("click", playSound);

function playSound() {
  audioCrash.play();
}
