// Assignment Code
var generateBtn = document.querySelector("#generate");
//generateBtn.addEventListener("click", writePassword)

// Write password to the #password input
function writePassword() {

  //var passwordLength = window.prompt()
  var password = generatePassword()
  var passwordText = document.querySelector("#password");
  passwordText.value = password
}

let password = new Array();
//var passwordText = document.querySelector("#password");

function generatePassword() {
  var passwordLength = window.prompt("How long do you want your password to be? ")
  //Check that User enters a number (is NaN?)
  //Check that User enters password greater than 8 and less than 128.
  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    window.alert("Please try again. Please enter a number between 8 and 128.")
    return "";
  }

  var lowercase = window.confirm("Do you want lowercaseletters?")
  var uppercase = window.confirm("Do you want uppercase letters?")

  //Check that at least one variable is requested for password.
  
  if (lowercase===false && uppercase===false) {
    window.alert("Please select yes for at least one variable");
    return "";

  }
  var z = []
  if (lowercase === true) {
    z.push()
  }


  for (var i = 0; i < passwordLength; i++) {

    var a = function getRndInteger(minimum, maximum) {
      return Math.floor(Math.random() * (maximum - minimum)) + minimum;
    }

    console.log(a(33, 128));
    var b = String.fromCharCode(a(33, 128));
    console.log(b);
    password.push(b);
  }

  console.log(password)
  console.log(password.join(""))
  return password.join("")
  //var passwordText = document.querySelector("#password");

}

//var passwordText = document.querySelector("#password");

//passwordText.value = password

//generateBtn.addEventListener("click", writePassword)

// passwordText.value = password;



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);