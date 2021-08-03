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

function playKey(keycode) {
  const virtkey = document.querySelector(`#${keycode}`);
  highlightKey(virtkey);
  const synth = new Tone.Synth().toDestination();
  synth.triggerAttackRelease("C4", "8n");
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

const synth = new Tone.Synth().toDestination();
document.addEventListener("keydown", (e) => {
  console.log("keydown:", e.code);
  if (e.code === "KeyJ") {
    console.log("the j key was pressed!");
    synth.triggerAttackRelease("C4", "8n");
  } else if (e.code === "KeyK") {
    synth.triggerAttackRelease("D4", "8n");
  }
  playKey(e.code);
});

document.addEventListener("keyup", (e) => {
  console.log("keyup:", e.code);
  const virtkey = document.querySelector(`#${e.code}`);
  unhighlightKey(virtkey);
});