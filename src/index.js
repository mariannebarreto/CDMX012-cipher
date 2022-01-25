
import cipher from './cipher.js';

console.log(cipher);

let offset = document.querySelector("numberInput");// almacena valor offset encode
let offset2 = document.querySelector("number_input");// almacena valor offset decode
let stringCipher = document.querySelector("productInput");//almacena texto a Cifrar
let stringDecipher = document.querySelector("codeInput");//almacena texto a descifrar



//CLICK CIFRADO
function cipherClick(){
  let newCode = cipher.encode(offset.value,stringCipher.value);
  document.getElementById("cipherOut").innerText= newCode;

}
document.getElementById("cipher-button").onclick=function() {cipherClick()};

//CLICK DESCIFRADO

function decipherClick(){
  let newProduct = cipher.decode(offset2.value,stringDecipher.value);
  document.getElementById("decipher").innerText= newProduct;

}
document.getElementById("decipher-button").onclick=function() {decipherClick()};