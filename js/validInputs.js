"use strict";
import { crashBtn, hihatOpenBtn, hihatCloseBtn, kickBtn, rideBtn, snareBtn, tomHighBtn, tomMidBtn, tomLowBtn } from "./buttonsSelection.js";

export const validInputKeys = new Map();
validInputKeys.set(65, "./sounds/crash.wav");
validInputKeys.set(83, "./sounds/hihat-open.wav");
validInputKeys.set(68, "./sounds/hihat-close.wav");
validInputKeys.set(70, "./sounds/kick.wav");
validInputKeys.set(71, "./sounds/ride.wav");
validInputKeys.set(72, "./sounds/snare.wav");
validInputKeys.set(74, "./sounds/tom-high.wav");
validInputKeys.set(75, "./sounds/tom-mid.wav");
validInputKeys.set(76, "./sounds/tom-low.wav");

export const validButtons = new Map();
validButtons.set(crashBtn, "./sounds/crash.wav");
validButtons.set(hihatOpenBtn, "./sounds/hihat-open.wav");
validButtons.set(hihatCloseBtn, "./sounds/hihat-close.wav");
validButtons.set(kickBtn, "./sounds/kick.wav");
validButtons.set(rideBtn, "./sounds/ride.wav");
validButtons.set(snareBtn, "./sounds/snare.wav");
validButtons.set(tomHighBtn, "./sounds/tom-high.wav");
validButtons.set(tomMidBtn, "./sounds/tom-mid.wav");
validButtons.set(tomLowBtn, "./sounds/tom-low.wav");
