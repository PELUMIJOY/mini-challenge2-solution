const MORSE_CODE = {
  "-.-.--": "!",
  ".-..-.": '"',
  "...-..-": "$",
  ".-...": "&",
  ".----.": "'",
  "-.--.": "(",
  "-.--.-": ")",
  ".-.-.": "+",
  "--..--": ",",
  "-....-": "-",
  ".-.-.-": ".",
  "-..-.": "/",
  "-----": "0",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "---...": ":",
  "-.-.-.": ";",
  "-...-": "=",
  "..--..": "?",
  ".--.-.": "@",
  ".-": "A",
  "-...": "B",
  "-.-.": "C",
  "-..": "D",
  ".": "E",
  "..-.": "F",
  "--.": "G",
  "....": "H",
  "..": "I",
  ".---": "J",
  "-.-": "K",
  ".-..": "L",
  "--": "M",
  "-.": "N",
  "---": "O",
  ".--.": "P",
  "--.-": "Q",
  ".-.": "R",
  "...": "S",
  "-": "T",
  "..-": "U",
  "...-": "V",
  ".--": "W",
  "-..-": "X",
  "-.--": "Y",
  "--..": "Z",
  "..--.-": "_",
  "...---...": "SOS",
};

Object.freeze(MORSE_CODE);
function morse(text) {
  if (typeof text != "string" || text == null)
    throw "Please provide a morse string";
  while (text[0] == " " || text[text.length - 1] == " ") text = text.trim();
  if (MORSE_CODE[text]) {
    return MORSE_CODE[text];
  }
  if (text == "") {
    return "";
  }

  let decode = "";
  let codedArr = text.split(" ");
  for (let i = 0; i < codedArr.length; i++) {
    if (MORSE_CODE[codedArr[i]]) {
      decode += MORSE_CODE[codedArr[i]];
      // console.log("decode1: ", decode);
    } else {
      // console.log("decode2: ", decode);
      // console.log(codedArr[i], i);
      if (codedArr[i] == "") {
        decode += decode[decode.length - 1] == " " ? "" : " ";
      } else {
        return "Please provide a morse string";
      }
    }
  }

  return decode;
}
module.exports = morse;
