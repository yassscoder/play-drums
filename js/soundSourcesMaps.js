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

export const soundSourceRoutes = new Map();
soundSourceRoutes.set(crashBtn, "./sounds/crash.wav");
soundSourceRoutes.set(hihatOpenBtn, "./sounds/hihat-open.wav");
soundSourceRoutes.set(hihatCloseBtn, "./sounds/hihat-close.wav");
soundSourceRoutes.set(kickBtn, "./sounds/kick.wav");
soundSourceRoutes.set(rideBtn, "./sounds/ride.wav");
soundSourceRoutes.set(snareBtn, "./sounds/snare.wav");
soundSourceRoutes.set(tomHighBtn, "./sounds/tom-high.wav");
soundSourceRoutes.set(tomMidBtn, "./sounds/tom-mid.wav");
soundSourceRoutes.set(tomLowBtn, "./sounds/tom-low.wav");
