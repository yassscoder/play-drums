"use strict";

import { validInputKeys, soundSourceRoutes } from "./js/soundSourcesMaps.js";
import { crashBtn, hihatOpenBtn, hihatCloseBtn, kickBtn, rideBtn, snareBtn, tomHighBtn, tomMidBtn, tomLowBtn, playButton, recButton, stopButton } from "./js/buttonsSelection.js";

window.addEventListener("keydown", delaySound);
crashBtn.addEventListener("click", delaySound);
hihatOpenBtn.addEventListener("click", delaySound);
hihatCloseBtn.addEventListener("click", delaySound);
kickBtn.addEventListener("click", delaySound);
rideBtn.addEventListener("click", delaySound);
snareBtn.addEventListener("click", delaySound);
tomHighBtn.addEventListener("click", delaySound);
tomMidBtn.addEventListener("click", delaySound);
tomLowBtn.addEventListener("click", delaySound);

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

const recordedSession = [];
let isRecording = false;

function delaySound(event) {
  if (isRecording) {
    playWithKeyOrButton(event);
    recordedSession.push({ event, time: Date.now() });
  } else {
    setTimeout(playWithKeyOrButton, 200, event);
  }

  console.log(recordedSession);
}

recButton.addEventListener("click", () => {
  isRecording = true;
  recordedSession.length = 0;
});

stopButton.addEventListener("click", () => {
  isRecording = false;
});

playButton.addEventListener("click", () => {
  recordedSession.forEach((session, index) => {
    setTimeout(() => {
      playWithKeyOrButton(session.event);
    }, recordedSession[index].time - recordedSession[0].time);
  });
});
