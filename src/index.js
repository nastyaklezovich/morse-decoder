const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {

  let expr1 = "";
  let morseCode = "";
  let result = [];
  let array1 = [];

  let regexp = /[*]{10}/gm;
  let regexp1 = /10/gm;
  let regexp2 = /11/gm;
  let regexp3 = /0{1,}/gm;
  let regexp4 = /\d{10}|[*]{10}/gm;

  while ((array1 = regexp4.exec(expr)) !== null) {
    expr1 = expr1 + array1[0] + " ";
  }

  morseCode = expr1
    .replace(regexp, " ")
    .replace(regexp2, "-")
    .replace(regexp1, ".")
    .replace(regexp3, " ");

  morseCode.split("   ").map(function (word) {
    word.split(" ").map(function (letter) {
      result.push(MORSE_TABLE[letter]);
    });
    result.push(" ");
  });

  return result.join("").trim();
}

module.exports = {
  decode,
};
