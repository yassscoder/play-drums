"use strict";

import { validInputKeys, validButtons } from "./validInputs.js";
import { crashBtn, hihatOpenBtn, hihatCloseBtn, kickBtn, rideBtn, snareBtn, tomHighBtn, tomMidBtn, tomLowBtn, playButton, recButton, stopButton } from "./buttonsSelection.js";

window.addEventListener("keydown", playSoundWithDelay);
crashBtn.addEventListener("click", playSoundWithDelay);
hihatOpenBtn.addEventListener("click", playSoundWithDelay);
hihatCloseBtn.addEventListener("click", playSoundWithDelay);
kickBtn.addEventListener("click", playSoundWithDelay);
rideBtn.addEventListener("click", playSoundWithDelay);
snareBtn.addEventListener("click", playSoundWithDelay);
tomHighBtn.addEventListener("click", playSoundWithDelay);
tomMidBtn.addEventListener("click", playSoundWithDelay);
tomLowBtn.addEventListener("click", playSoundWithDelay);

function getSoundSource(event) {
  let soundSource;
  const pressedKey = event.keyCode;

  if (validInputKeys.has(pressedKey)) {
    soundSource = validInputKeys.get(pressedKey);
    return soundSource;
  } else if (event.key && !validInputKeys.has(pressedKey)) {
    const error = new ReferenceError("Pressed key is not valid");
    Swal.fire({
      icon: "error",
      title: "Oops, that key is not valid!",
      text: "Please press only valid keys (A - S - D - F - G - H - J - K - L).",
      confirmButtonColor: "var(--main-color)",
      iconColor: "var(--main-color)",
      color: "var(--light-color)",
    });
    throw error;
  } else {
    const targetButton = event.target;
    soundSource = validButtons.get(targetButton);
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

const recordedSession = [];
let isRecording = false;

function playSoundWithDelay(event) {
  if (isRecording) {
    playWithKeyOrButton(event);
    recordedSession.push({ event, time: Date.now() });
  } else {
    setTimeout(playWithKeyOrButton, 200, event);
  }
}

recButton.addEventListener("click", () => {
  isRecording = true;
  recordedSession.length = 0;
  recButton.textContent = "recording";
  recButton.classList.add("active-btn");
});

stopButton.addEventListener("click", () => {
  recButton.textContent = "rec";
  recButton.classList.remove("active-btn");
  isRecording = false;
});

playButton.addEventListener("click", () => {
  recordedSession.forEach((session, index) => {
    setTimeout(() => {
      playWithKeyOrButton(session.event);
    }, recordedSession[index].time - recordedSession[0].time);
  });
});
