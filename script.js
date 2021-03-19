// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

function writePassword() {

  //Major text block 

  var passwordText = document.querySelector("#password");

  var passwordLength = prompt("Enter the lenght of the password you would like to generate. \nMust be between 8 charectors and 128 charectors.");


  if(passwordLength > 7 && passwordLength < 129) {

    var collectionOfCriterias = "";
    var lowerCase = "abcdefghijklmnopqrstuvwxyz";
    var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numbers = "1234567890";
    var special = "~!@#$%^&*()-_=+<>?";
    var generatedPassword = "";
    // let filter = [{confirmLowerCase}, {confirmUpperCase}, {confirmNumbers}, {confirmSpecial}].filter(item => Object.values(item)[0]);
    // var length = passwordLength - filter.length;
    function addNecessaryChars (charecters) {
      collectionOfCriterias += charecters;
      const addNecessaryChar = Math.floor(Math.random() * charecters.length);
      const adding = (charecters.charAt(addNecessaryChar));
      generatedPassword = generatedPassword + adding;
    }
    var confirmLowerCase = confirm("Do you want Lowercase charecters?");

    var confirmUpperCase = confirm("Do you want Uppercase charecters?");

    var confirmNumbers = confirm("Do you want Numbers charecters?");

    var confirmSpecial = confirm("Do you want Special charecters?");

    if (confirmLowerCase || confirmUpperCase || confirmNumbers || confirmSpecial) {
      
      if (confirmLowerCase) {
        addNecessaryChars(lowerCase);
      }
      if (confirmUpperCase) {
        addNecessaryChars(upperCase);
      }
      if (confirmNumbers) {
        addNecessaryChars(numbers);
      }
      if (confirmSpecial) {
        addNecessaryChars(special);
      }

      while (generatedPassword.length < passwordLength) {
        var random = (Math.floor(Math.random() * collectionOfCriterias.length));
        var result = (collectionOfCriterias.charAt(random));
        generatedPassword = generatedPassword + result;
      }
      // generatedPassword = generatePassword(confirmLowerCase, confirmUpperCase, confirmNumbers, confirmSpecial);

      passwordText.textContent = generatedPassword;
      // console.log(generatePassword);
      // console.log(filter);
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
