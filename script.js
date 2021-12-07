// Assignment Code
var generateBtn = document.querySelector("#generate");
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "1234567890";
const specialCharacters = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

///////////////////////////////////////////////////
function generatePassword() {
  var criteria = getCriteriaFromUser();
  return createPassword(criteria);
}
//This function prompts to user for password criteria, it uses while loops for input validation
function getCriteriaFromUser() {
  var length = -1;
  while (isNaN(length) || length < 8 || length > 128) {
    length = prompt("Enter the desired length, must be 8-128");
    length = parseInt(length);
  }
  var characterTypeChecker = false;
  while (!characterTypeChecker) {
    alert("You must select from at least 1 of the following criteria");
    var includeLowerCase = "";
    while (includeLowerCase !== "Yes" && includeLowerCase !== "No") {
      includeLowerCase = prompt("Do you want to include lowercase letters? Type Yes or No");
    }
    var includeUpperCase = "";
    while (includeUpperCase !== "Yes" && includeUpperCase !== "No") {
      includeUpperCase = prompt("Do you want to include uppercase letters? Type Yes or No");
    }
    var includeNumbers = "";
    while (includeNumbers !== "Yes" && includeNumbers !== "No") {
      includeNumbers = prompt("Do you want to include numbers? Type Yes or No");
    }
    var includeSpecialCharacters = "";
    while (includeSpecialCharacters !== "Yes" && includeSpecialCharacters !== "No") {
      includeSpecialCharacters = prompt("Do you want to include numbers? Type Yes or No");
    }
    if (includeLowerCase === "Yes" || includeUpperCase === "Yes" || includeNumbers === "Yes" || includeSpecialCharacters === "Yes") {
      characterTypeChecker = true;
    }
  }
  return [length, includeLowerCase, includeUpperCase, includeNumbers, includeSpecialCharacters];
}
//This function creates a password based on the users criteria and returns it
function createPassword(criteria) {
  var characterString = "";
  var password = "";
  if (criteria[1] === "Yes") {
    characterString = characterString + lowerCase;
  }
  if (criteria[2] === "Yes") {
    characterString = characterString + upperCase;
  }
  if (criteria[3] === "Yes") {
    characterString = characterString + numbers;
  }
  if (criteria[4] === "Yes") {
    characterString = characterString + specialCharacters;
  }
  for (var i = 0; i < criteria[0]; i++) {
    password = password + characterString[Math.floor(Math.random() * characterString.length)];
  }
  return password;
}
