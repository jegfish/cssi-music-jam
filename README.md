# Music Jam Project

##
- music jam (spicy: collaborative). Variety of instruments mapped to stuff on screen, keyboard. (mild: loops) https://tonejs.github.io/ https://tonejs.github.io/docs/14.7.77/index.html
  - Checkpoint 1 - Instruments
  - Play sounds when button pressed
  - Stretch: Create custom instrument splitting keyboard with different sounds
  - Checkpoint 2 - Loops
  - Checkpoint $ - Collaborative jam
  - WebRTC? https://webrtc.org/getting-started/firebase-rtc-codelab 

- Login -> synth page: synth, save loop, how to button, join jam, everything else keyboard mapped, select instrument
- Nav bar

- Keyboard: basic notes q-l, drum pads z-m, loops 1-0, arrows octave up/down
- Light up virtual keyboard keys as they are pressed
- Drop shadow or other form of lighting up key to show loops running
- Loops
  - Toggle recording of loop Shift + Numkey
  - Toggle playback of loop Numkey
  - If the loop doesn’t exist, currently recording this one: don’t start playing? Modal warning
  - Highlight on-screen number keys while recording loop
  - Data structure:
    - ? Array of objects with key pressed and timestamp relative to start of loop
- Theme / appearance
  - Polka dot
    - Black and white. White background with black polka dots (or color dots
  - Keyboard lights up with color
  - Vaporwave
  - Jam as in jelly
    - Farmer’s market organic music jam
    - Slime/drip effect
    - Jelly jars

## Goals / Features
- Theme / appearance / nice UI (dark mode?)
  - Modals [Tiana]
- Log in / Log out [Antonio]
- Loops [ Group ]
  - Recording
  - Playing back
  - Serializing and saving in Firebase
  - Overwrite when record again
- ? Changeable theme
  - theme in general [Antonio]
    - pick colors / palette
    - background
    - glow / shadow
  - dark and light mode
  - ? CSS Variables [Jeff]
- multiple instruments / synths [Tiana]
  - ? changeable instrument
  - ? effects
    - ? UI: toggleable effects, checkbox
    - vibrato (slider?)
    - pitch slider?
  - bottom row uses drum synth
- ? visualization of music
- ? metronome

## Mentor day 2
- make it obvious what the notes are on screen
  - drums for last row
  - white and black keys?
  - could add small label of what note a key plays
  - add space between drum row and other rows to make it clear it's different synth/instrument
- try to get recording and playback before looping the recording
- have most features presentable for mentor meeting on Wednesday "last call for changes"
- rigorously test Thursday so works for Friday
  - though we're probably doing a recorded demo

## Thursday
- make it obvious what the notes are on screen
  - [X] drums for last row
  - [X] white and black keys?
  - [X] could add small label of what note a key plays
  - [X] add space between drum row and other rows to make it clear it's different synth/instrument
- [X] separate drum synth
- make it pretty

### Main Extra
- additional instruments
  - specific instruments hardcoded
  - toggle / slide different effects to synth

### Mentor
- if can't get loops
  - maybe record
  - if not record, play samples?
- hide unused buttons
- taller buttons/keys
- try to add touchstart and touchend events

## Questions for mentor
- UI design?
- Thoughts on theme?
- Tips on splitting up work

## Friday
- [ ] improve theme/UI and use changeable theme
- [ ] ? diff instruments or toggleable effects
- [ ] Create presentation slideshow
- [ ] Create demo video(s)

## Presentation (cool stuff, what did we learn)
- keymapping
  - "dynamically" load key names
  - add many event listeners through javascript
  - "Dont repeat yourself"
- rest/spread operators / our debug function wrapper around console.log (show snippet in slides)
- regex
  - regex replace editor support (Vim/sed)
    - [ ] Vim editor replace demo video ?
    - or demo in VS Code (use $1, $2 for match groups)
  - regex to match strings in isDrum func (show code snippet in slides)
- Split up speaking/presenting parts among the three of us

## Don't lose
- https://www.clairecodes.com/blog/2018-10-10-css-polka-dot-background/
- https://doodad.dev/dither-me-this/
- https://www.devbridge.com/articles/tonejs-coding-music-production-guide/
- https://tonejs.github.io/docs/r13/Sequence 