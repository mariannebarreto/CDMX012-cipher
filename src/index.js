import cipher from './cipher.js';

let string = document.querySelector("#productInput");//almacena texto a Cifrar
let offset = document.querySelector("#numberInput");// almacena valor offset encode
let string2 = document.querySelector("#codeInput");//almacena texto a descifrar
let offset2 = document.querySelector("#numberInput2");// almacena valor offset decode




//Funciones de cover


function continuar(){
  let screenAdmin = document.getElementById("decipherVend");
  screenAdmin. style.display = "none";
  document.getElementById("cipherAdmin").style.display= "block";
  document.getElementById("cover").style.display= "none";
}

document.getElementById("celticBtn").onclick = function() {continuar()};



function continuar2(){
  let screenVend = document.getElementById("cipherAdmin");
  screenVend. style.display = "none";
  document.getElementById("decipherVend").style.display= "block";
  document.getElementById("cover").style.display= "none";
}

document.getElementById("celticBtn2").onclick = function() {continuar2()};


//Funciones administrador/cipher
function cipherClick(){
  let word = cipher.encode(offset.value,string.value);
  document.getElementById("cipherOut").innerText= word;

}
document.getElementById("cipher-button").onclick=function() {cipherClick()};

//funciones vendedor/decipher

function decipherClick(){
  let word1 = cipher.decode(offset2.value,string2.value);
  document.getElementById("decipherOut").innerText= word1;

}
document.getElementById("decipher-button").onclick=function() {decipherClick()};
