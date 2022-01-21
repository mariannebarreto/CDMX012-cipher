//inicio haciendo las constantes del bloque
const cipher = {encode,decode};
export default cipher;

//-----------ÁREA CIFRADO--------
//variables a utilizar
var productName= document.getElementById("productInput").value;
var shiftNum= Number(document.getElementById("numberInput")).value;
var size= productName.length;
var stringCipher= "";
var asciiValue = 0;
var i=0;

//declaro funciones
function encode (productName,shiftNum);

for(i=0; i<size; i++){// pasa por cada caracter del string
  asciiValue= productName.charcodeAt(i); //guarda el valor ASCII de cada caracter

//fórmula para mayúsculas
if ((asciiValue >= 65) && (asciiValue <=90)){
  asciiValue = (((asciiValue - 65 + shiftNum) % 26) + 65);
}
//fórmula para minúsculas
else if ((asciiValue >=97) && (asciiValue <=122)){
asciiValue = (((asciiValue - 65 + shiftNum) % 26) + 97);
}
else {
  asciiValue = "?";
}
stringCipher += String.fromCharCode(asciiValue);
}

return stringCipher;

//-------------ÁREA DESCIFRADO-----------------

