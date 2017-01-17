function encode (str){
  let letters = str.split("");
  let encodedLetters = [];
  for (let i = 0; i < letters.length; i++){
    let current = str.charCodeAt(i);
    if (current >= 65 && current <= 90){
      if (current < 88) {
        encodedLetters.push(String.fromCharCode(current+3));
      } else if (current == 88){
        encodedLetters.push(String.fromCharCode(65));
      } else if (current == 89){
              encodedLetters.push(String.fromCharCode(66));
      } else {
              encodedLetters.push(String.fromCharCode(67));
      }
    } else if (current >= 97 && current <= 122){
      if (current < 120){
              encodedLetters.push(String.fromCharCode(current+3));
      } else if (current == 120){
              encodedLetters.push(String.fromCharCode(97));
      } else if (current == 121){
              encodedLetters.push(String.fromCharCode(98));
      } else {
              encodedLetters.push(String.fromCharCode(99));
      }
    } else {
      encodedLetters.push(letters[i]);
    }
    }
    return encodedLetters.join("");
  }

  function decode (str){
    let letters = str.split("");
    let decodedLetters = [];
    for (let i = 0; i < letters.length; i++){
      let current = str.charCodeAt(i);
      if (current >= 65 && current <= 90){
        if (current >67) {
          decodedLetters.push(String.fromCharCode(current-3));
        } else if (current == 65){
          decodedLetters.push(String.fromCharCode(88));
        } else if (current == 66){
                decodedLetters.push(String.fromCharCode(89));
        } else {
                decodedLetters.push(String.fromCharCode(90));
        }
      } else if (current >= 97 && current <= 122){
        if (current > 99){
                decodedLetters.push(String.fromCharCode(current-3));
        } else if (current == 97){
                decodedLetters.push(String.fromCharCode(120));
        } else if (current == 98){
                decodedLetters.push(String.fromCharCode(121));
        } else {
                decodedLetters.push(String.fromCharCode(122));
        }
      } else {
        decodedLetters.push(letters[i]);
      }
      }
      return decodedLetters.join("");
    }


module.exports = {encode, decode};
