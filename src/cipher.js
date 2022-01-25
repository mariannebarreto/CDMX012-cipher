//inicio haciendo las constantes del bloque
const cipher = {encode,decode};
export default cipher;

//-----------ÁREA CIFRADO--------
//declaro funciones
function encode (productName,offset){


//variables a utilizar
let productName= document.getElementById("productInput").value;
let offset= parseInt(document.getElementById("numberInput")).value;
let size= productName.length;
var stringCipher= "";

for (var i = 0; i<size; i++){  //pasa por cada caracter del string
let asciiValue= productName.charcodeAt(i); //guarda el valor ASCII de cada caracter
let cipherFormula;
let cipherResult;

if (asciiValue >= 65 && asciiValue <=90){
  cipherFormula= (((asciiValue - 65 + offset) % 26) + 65);
  cipherResult= String.fromCharCode(cipherFormula);
  stringCipher += cipherResult;

}else if (asciiValue >= 97 && asciiValue <= 122){
  cipherFormula = (asciiValue- 97 + parseInt (offset))%26 + 97;
  cipherResult= String.fromCharCode(cipherFormula);
  stringCipher += cipherResult;
}
return stringCipher;
}
}

//-----------------ÁREA DESCIFRADO------------

function decode (codeName,offset2){   

//variables a utilizar
let codeName = document.getElementById ("codeInput").value;
let offset2 = parseInt(document.getElementById("number_input")).value;
var stringDecipher ="";

  for(var i = 0; i< myString1.length ; i++){ //pasa por cada carácter del string
    let ascii_value = codeName.charCodeAt(i); //guarda el valor ASCII de cada caracter
    let decipherFormula;
    let decipherResult;

    if (ascii_value  >= 65 && ascii_value <= 90){
      decipherFormula = ( ascii_value  -13 - parseInt(offset2)) % 26 + 65;
      decipherResult = String.fromCharCode(decipherFormula);
      stringDecipher += decipherResult;

    }else if (ascii_value  >= 97 && ascii_value  <=122){
      decipherFormula = ( ascii_value  - 45 - parseInt(offset2)) % 26 + 97;
      stringDecipher = String.fromCharCode(decipherFormula);
      stringDecipher += decipherResult;
    }
 return stringDecipher;
  }
