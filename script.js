// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  //Major text block 
  var passwordText = document.querySelector("#password");
  var passwordLength = prompt("Enter the lenght of the password you would like to generate. \nMust be between 8 charectors and 128 charectors.");


  if(passwordLength > 7 && passwordLength < 129) {
    var confirmLowerCase = confirm("Do you want Lowercase charectors?");

    var confirmUpperCase = confirm("Do you want Uppercase charectors?");

    var confirmNumbers = confirm("Do you want Numbers charectors?");

    var confirmSpecial = confirm("Do you want Special charectors?");

    // 
    
    var collectionOfCriterias = "";
    var lowerCase = "abcdefghijklmnopqrstuvwxyz";
    var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numbers = "1234567890";
    var special = "~!@#$%^&*()-_=+<>?";
    var generatePassword = "";
    //Condition

    if (confirmLowerCase || confirmUpperCase || confirmNumbers || confirmSpecial) {
      if (confirmLowerCase) {
        collectionOfCriterias += lowerCase;
      }
      if (confirmUpperCase) {
        collectionOfCriterias += upperCase;
      }
      if (confirmNumbers) {
        collectionOfCriterias += numbers;
      }
      if (confirmSpecial) {
        collectionOfCriterias += special;
      }

      for (i = 0; i < passwordLength; i++) {
        var random = (Math.floor(Math.random() * collectionOfCriterias.length));
        var result = (collectionOfCriterias.charAt(random));
        generatePassword = generatePassword + result;
      }
      passwordText.textContent = generatePassword;
      console.log(generatePassword);

    } else {
      alert("Try again !! Password must contain atleast one criteria.")
  }
} else {
  alert("Try again !! Password must be between 8 and 128.. No more.. No less.")
}
//   var password = generatePassword();

 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
