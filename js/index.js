import { encrypt, decrypt, validateInput } from "./utils.js";

//variables de los elementos del html
const inputText = document.getElementById("inputText");
const resultText = document.getElementById("resultText");
const btnEncrypt = document.getElementById("btnEncrypt");
const btnDecrypt = document.getElementById("btnDecrypt");
const btnCopy = document.getElementById("btnCopy");
//evento
btnEncrypt.addEventListener("click", () => {
  validateInput(inputText.value.trim());
  resultText.value = encrypt(inputText.value.trim());
});
btnDecrypt.addEventListener("click", () => {
  validateInput(inputText.value.trim());
  resultText.value = decrypt(inputText.value.trim());
});
btnCopy.addEventListener("click", async () => {
  resultText.select();
  resultText.setSelectionRange(0, 99999);
  try {
    await navigator.clipboard.writeText(resultText.value);
    alert("Texto copiado: " + resultText.value);
  } catch (err) {
    console.error("Error al copiar el texto: ", err);
  }
});
