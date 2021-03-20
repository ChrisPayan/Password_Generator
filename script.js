// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function shuffle(arrayOfPassword) {
  arrayOfPassword.sort(() => Math.random() - 0.5);
}

function writePassword() {

  //Major text block 

  var passwordText = document.querySelector("#password");

  var passwordLength = prompt("Enter the lenght of the password you would like to generate. \nMust be between 8 charecters and 128 charecters.");


  if(passwordLength > 7 && passwordLength < 129) {

    var collectionOfCriterias = "";
    var lowerCase = "abcdefghijklmnopqrstuvwxyz";
    var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numbers = "1234567890";
    var special = "~!@#$%^&*()-_=+<>?";
    var generatedPassword = "";

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

      var arrayOfPassword = generatedPassword.split('');
      console.log(arrayOfPassword);
      shuffle(arrayOfPassword);
      console.log(arrayOfPassword);
      generatedPassword = arrayOfPassword.join('');

      passwordText.textContent = generatedPassword;

    } else {
      alert("Try again !! Password must contain atleast one criteria.")
    }

  } else {
    alert("Try again !! Password must be between 8 and 128.. No more.. No less.")
  }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
