//inicio haciendo las constantes del bloque
const cipher = {encode,decode};
export default cipher;

//-----------ÁREA CIFRADO--------
//variables a utilizar
let productName= document.getElementById("productInput").value;
let offset= Number(document.getElementById("numberInput")).value;
let size= productName.length
let stringCipher= "";
const asciiValue = 0;
const i=0;

//declaro funciones
function encode (productName,offset){;

for(i=0; i<size; i++){// pasa por cada caracter del string
  asciiValue= productName.charcodeAt(i); //guarda el valor ASCII de cada caracter

//fórmula para mayúsculas
if ((asciiValue >= 65) && (asciiValue <=90)){
  asciiValue = (((asciiValue - 65 + offset) % 26) + 65);
}
//fórmula para minúsculas
else if ((asciiValue >=97) && (asciiValue <=122)){
asciiValue = (((asciiValue - 65 + offset) % 26) + 97);
}
else {
  asciiValue = "?";
}
stringCipher += String.fromCharCode(asciiValue);
}
console.log (cipher)
//verificar que sirva
//-------------ÁREA DESCIFRADO-----------------

let codeName= document.getElementById ("codeInput").value
let size1= codeName.length;
let stringUncipher= "";

//declaro funciones
function decode (codeName,offset){; 
for (i=0; i<size1; i++){// pasa por cada caracter del string
  asciiValue= codeName.charcodeAt(i); //guarda el valor ASCII de cada caracter

//fórmula para mayúsculas
if ((asciiValue >= 65) && (asciiValue <=90)){
  asciiValue = (((asciiValue - 65 + offset) % 26) + 65);
}
//fórmula para minúsculas
else if ((asciiValue >=97) && (asciiValue <=122)){
asciiValue = (((asciiValue - 65 + offset) % 26) + 97);
}
else {
  asciiValue = "?";
}
stringUncipher += String.fromCharCode(asciiValue);
}

