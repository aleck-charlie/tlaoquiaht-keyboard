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
const keyboard = document.querySelector(".keyboard");

// render keyboard
function printKeys() {
  for (let i = 0; i < alphaKeys.length; i++) {
    let keys = document.createElement("button");
    keys.innerHTML = alphaKeys[i];
    keys.setAttribute("data-character", alphaKeys[i]);
    keyboard.appendChild(keys);
  }
}

//onClick event, add text in text field
const input = document.getElementById('input')

function typeKeys(character) {
  input.value += character;
}

keyboard.addEventListener("click", function(e){
  let target = e.target;
  if(target.getAttribute("data-character")){
    typeKeys(target.getAttribute("data-character"))
  }
})

printKeys()