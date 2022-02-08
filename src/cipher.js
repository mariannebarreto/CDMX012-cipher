//declaro constantes que utilizaré
const cipher = {encode,decode};

export default cipher;

//declaro funciones

//función cifrado
function encode(offset,stringCipher){

  if(typeof(stringCipher)!="string"){
     throw new TypeError("Caracter inválido");
    }

  var cipherOutCome = "";

  for (var i = 0 ; i < stringCipher.length ; i++){
   let keyNumber = stringCipher.charCodeAt(i);
   let cipherFormula;
   let resultCipher;
   if (keyNumber >= 65 && keyNumber <= 90) {
      cipherFormula = ( keyNumber - 65 + parseInt(offset)) % 26 + 65;
      resultCipher =  String.fromCharCode(cipherFormula);
      cipherOutCome +=resultCipher;
   } else if (keyNumber >= 97 && keyNumber <=122) {
     cipherFormula = ( keyNumber - 97 + parseInt(offset)) % 26 + 97;
     resultCipher = String.fromCharCode(cipherFormula);
     cipherOutCome +=resultCipher;
}
    else {

      throw new TypeError("Caracter inválido");
}
}
return cipherOutCome;
}


//función descifrado

function decode(offset2,stringDecipher){
  if(typeof(stringDecipher)!="string"){
    throw new TypeError("Caracter inválido");
   }
  
  var decipherOutCome ="";
//declaro variables

  for(var i = 0; i< stringDecipher.length ; i++){
     let keyNumber2 = stringDecipher.charCodeAt(i);
     let decipherFormula;
     let resultDecipher;
     if (keyNumber2 >= 65 && keyNumber2 <= 90){
       decipherFormula = ( keyNumber2 -13 - parseInt(offset2)) % 26 + 65;
       resultDecipher = String.fromCharCode(decipherFormula);
       decipherOutCome +=resultDecipher;
     }else if (keyNumber2 >= 97 && keyNumber2 <=122){
       decipherFormula = ( keyNumber2 - 45 - parseInt(offset2)) % 26 + 97;
       resultDecipher = String.fromCharCode(decipherFormula);
       decipherOutCome +=resultDecipher;
     } else {
       
      throw new TypeError("Carácter inválido");
      
     }
  }
  return decipherOutCome;
}