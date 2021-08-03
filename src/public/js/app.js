// import * as Tone from '/node_modules/tone/build/Tone.js';
// import * as Tone from 'tone';

let googleUser;

// window.onload = (event) => {
//   // Use this to retain user state between html pages.
//   firebase.auth().onAuthStateChanged(function(user) {
//     if (user) {
//     console.log('Logged in as: ' + user.displayName);
//     googleUser = user;
//     } else {
//     // If not logged in, navigate back to login page.
//     window.location = 'index.html'; 
//     };
//   });
// };

// const soundMap = {
//   "KeyQ": "", "KeyW": "", "KeyE": "", "KeyR": "", "KeyT": "", "KeyY": "", "KeyU": "", "KeyI": "", "KeyO": "", "KeyP": "",
//   "KeyA": "", "KeyS": "", "KeyD": "", "KeyF": "", "KeyG": "", "KeyH": "", "KeyJ": "", "KeyK": "", "KeyL": "",
//   "KeyZ": "", "KeyX": "", "KeyC": "", "KeyV": "", "KeyB": "", "KeyN": "", "KeyM": "",
// };

const soundMap = {
  "KeyW": {note: "C#4", on: false}, "KeyE": {note: "D#4", on: false}, "KeyT": {note: "E#4", on: false}, "KeyY": {note: "F#4", on: false}, "KeyU": {note: "G#4", on: false}, "KeyO": {note: "D#5", on: false}, "KeyP": {note: "C#5", on: false},
  "KeyA": {note: "C4", on: false}, "KeyS": {note: "D4", on: false}, "KeyD": {note: "E4", on: false}, "KeyF": {note: "F4", on: false}, "KeyG": {note: "G4", on: false}, "KeyH": {note: "A4", on: false}, "KeyJ": {note: "B4", on: false}, "KeyK": {note: "C5", on: false}, "KeyL": {note: "D4", on: false},
  "KeyZ": "", "KeyX": "", "KeyC": "", "KeyV": "", "KeyB": "", "KeyN": "", "KeyM": "",
};


// const soundMap = {
//   "KeyW": "C#4", "KeyE": "D#4", "KeyT": "E#4", "KeyY": "F#4", "KeyU": "G#4", "KeyO": "D#5", "KeyP": "C#5",
//   "KeyA": "C4", "KeyS": "D4", "KeyD": "E4", "KeyF": "F4", "KeyG": "G4", "KeyH": "A4", "KeyJ": "B4", "KeyK": "C5", "KeyL": "D4",
//   "KeyZ": "", "KeyX": "", "KeyC": "", "KeyV": "", "KeyB": "", "KeyN": "", "KeyM": "",
// };

const synth = new Tone.PolySynth(Tone.Synth).toDestination();
const drum = new Tone.PluckSynth(Tone.Synth).toDestination();

const now = Tone.now();

function playKey(keycode) {
  const virtkey = document.querySelector(`#${keycode}`);
  highlightKey(virtkey);
  // const synth = new Tone.Synth().toDestination();
  // synth.triggerAttackRelease("C4", "8n");
  // const now = Tone.now();
  console.log("activeVoices:", synth.activeVoices);
  console.log("maxPolyphony:", synth.maxPolyphony);
  // if (synth.activeVoices >= synth.maxPolyphony) {
  //   synth.releaseAll(now);
  // }
  if (soundMap[keycode].on) {
    return;
  }
  synth.triggerAttack(soundMap[keycode].note);
  soundMap[keycode].on = true;
}

function stopKey(keycode) {
  const virtkey = document.querySelector(`#${keycode}`);
  // const now = Tone.now();
  // synth.triggerRelease(soundMap[keycode], "+0");
  synth.releaseAll("+0");
  unhighlightKey(virtkey);
}

function highlightKey(elem) {
  elem.classList.add("mybox");
  // console.log(elem);
}

function unhighlightKey(elem) {
  elem.classList.remove("mybox");
}

const btn = document.querySelector("#startaudio");
btn.addEventListener("click", (e) => {
  console.log("hello");
  const synth = new Tone.Synth().toDestination();
  synth.triggerAttackRelease("C4", "8n");
});

// const synth = new Tone.Synth().toDestination();
document.addEventListener("keydown", (e) => {
  // console.log("keydown:", e.code);
  playKey(e.code);
});

document.addEventListener("keyup", (e) => {
  // console.log("keyup:", e.code);
  stopKey(e.code);
});