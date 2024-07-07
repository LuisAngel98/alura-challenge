function encrypt(data) {
  return data + " encrypt";
}
function decrypt(encryptedData) {
  return encryptedData + " decrypt";
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
