const alphaKeys = [
  "a",
  "aa",
  "c",
  "c̓",
  "č",
  "e",
  "ee",
  "h",
  "ḥ",
  "i",
  "ii",
  "k",
  "kʷ",
  "k̓",
  "k̓ʷ",
  "ł",
  "ƛ",
  "ƛ̓",
  "m",
  "m̓",
  "n",
  "n̓",
  "o",
  "oo",
  "p",
  "p̓",
  "q",
  "qʷ",
  "s",
  "š",
  "t",
  "t̓",
  "u",
  "uu",
  "w",
  "w̓",
  "x",
  "xʷ",
  "x̌",
  "x̌ʷ",
  "y",
  "y̓",
  "Ɂ",
  "ʕ",
];
const numKeys = "1234567890";
const keyboard = document.getElementById("keyboard")
// const spacebar

// render keyboard
// loop thru keys and create dynamic buttons
function printKeys() {
  for (var i = 0; i < alphaKeys.length; i++) {
    var keys = document.createElement("button");
    keys.innerHTML = alphaKeys[i];
    keyboard.appendChild(keys);
  }
}

//onClick event, add text in text field
//before and after effects to show key has been pressed