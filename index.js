const alphaKeys = [
  "a",
  "aa",
  "c",
  "c̓",
  "č",
  "č́",
  "h",
  "ḥ",
  "i",
  "ii",
  "k",
  "k̓",
  "kʷ",
  "k̓ʷ",
  "ł",
  "ƛ",
  "ƛ̓",
  "m",
  "m̓",
  "n",
  "n̓",
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

function copyText() {
  let copyText = document.getElementById("input");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText.value);

  let tooltip = document.getElementById("tooltip");
  tooltip.innerHTML = "Copied!"
}

function toolTip() {
  let tooltip = document.getElementById("tooltip");
  tooltip.innerHTML = "Copy to clipboard"
}

function clearForm(){
  let clearText = document.getElementById("input")
  clearText.value="";
}
printKeys()