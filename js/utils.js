const rulesToEncrypt = {
  a: "ai",
  e: "enter",
  i: "ines",
  o: "ober",
  u: "ufat",
};
const rulesToDecrypt = {
  ai: "a",
  enter: "e",
  ines: "i",
  ober: "o",
  ufat: "u",
};

function encrypt(data) {
  let text = data.replace(/[aeiou]/g, (vowel) => rulesToEncrypt[vowel]);
  return text;
}
function decrypt(encryptedData) {
  let text = encryptedData.replace(
    /ai|enter|ines|ober|ufat/g,
    (textDecrypt) => rulesToDecrypt[textDecrypt]
  );
  return text;
}
function validateInput(inputText) {
  const containerWarning = document.getElementById("container-warning");
  const containerResult = document.getElementById("container-result");
  // Mostrar el mensaje "Ningún mensaje fue encontrado" si el texto esta vacio
  if (inputText == "") {
    containerWarning.classList.remove("hidden");
    containerResult.classList.add("hidden");
    return;
  }
  containerWarning.classList.add("hidden");
  containerResult.classList.remove("hidden");
}
export { encrypt, decrypt, validateInput };
