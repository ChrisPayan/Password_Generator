// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var passWordLength = prompt("Enter the lenght of the password you would like to generate. \nMust be between 8 charectors and 128 charectors.");
  var confirmLowerCase = confirm("Do you want Lowercase charectors?");
  var confirmUpperCase = confirm("Do you want Uppercase charectors?");
  var confirmNumbers = confirm("Do you want Numbers charectors?");
  var confirmSpecial = confirm("Do you want Special charectors?");
  
  var collectionOfArrays = "";
  var LowerCase = "abcdefghijklmnopqrstuvwxyz";
  var UpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//   var password = generatePassword();
  var passwordText = document.querySelector("#password");
 
  passwordText.value = password;
 console.log(passWordLength);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
