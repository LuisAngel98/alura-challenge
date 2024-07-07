import { encrypt, decrypt } from "./utils.js";

//variables de los elementos del html
const inputText = document.getElementById("inputText");
const resultText = document.getElementById("resultText");
const btnEncrypt = document.getElementById("btnEncrypt");
const btnDecrypt = document.getElementById("btnDecrypt");
//evento
btnEncrypt.addEventListener("click", () => {
  const containerWarning = document.getElementById("container-warning");
  const containerResult = document.getElementById("container-result");
  // Mostrar el mensaje "Ningún mensaje fue encontrado" si el texto esta vacio
  if (inputText.value.trim() == "") {
    containerWarning.classList.remove("hidden");
    containerResult.classList.add("hidden");
    return;
  }
  containerWarning.classList.add("hidden");
  containerResult.classList.remove("hidden");
  resultText.value = encrypt(inputText.value);
});
btnDecrypt.addEventListener("click", () => {
  console.log(decrypt(inputText));
});
