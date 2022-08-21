var generateBtn = document.querySelector("#generate")
var passwordText = document.querySelector("#password");

function writePassword() {
  console.log("Generate Password Button Clicked");
  let password = []

  var passwordLength = window.prompt("How long do you want your password to be? ")
  console.log(passwordLength)
  //Check that User enters a number (is NaN?)
  //Check that User enters password greater than 8 and less than 128.
  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    window.alert("Please try again. Please enter a number between 8 and 128.")
    return "";
  } else {
    // Prompt user to pick parameters
    var lowercase = window.confirm("Do you want lowercase letters?")
    var uppercase = window.confirm("Do you want uppercase letters?")
    var number = window.confirm("Do you want numbers?")
    var symbols = window.confirm("Do you want symbols?")

    //Check that at least one variable is requested for password.
    if (lowercase === false && uppercase === false && number === false && symbols === false) {
      window.alert("Please select yes for at least one variable");
      return "";
    }

    console.log("Parameters picked");

    // Push selected parameters into an array to start the character selection process
    let parameters = []

    if (lowercase === true) {
      parameters.push("lowercase")
    };

    if (uppercase === true) {
      parameters.push("uppercase")
    };

    if (number === true) {
      parameters.push("number")
    };

    if (symbols === true) {
      parameters.push("symbol")
    };

    console.log(parameters);

    // Use math.random to select a random index from our parameters array
    for (var i = 0; i < passwordLength; i++) {
      var parameterType = Math.floor(Math.random() * ((parameters.length) - 0)) + 0;
      console.log(parameterType);
      console.log(parameters[parameterType])

      // Check index to see which parameter was randomly selected for
      if (parameters[parameterType] === "lowercase") {
        console.log("lowercase was selected")
        var character = Math.floor(Math.random() * (122 - 97)) + 97;
        console.log(character);
        var value = String.fromCharCode(character);
        console.log(value);
        password.push(value);
      }

      if (parameters[parameterType] === "uppercase") {
        console.log("uppercase was selected")
        var character = Math.floor(Math.random() * (90 - 65)) + 65;
        console.log(character);
        var value = String.fromCharCode(character);
        console.log(value);
        password.push(value);
      }

      if (parameters[parameterType] === "number") {
        console.log("number was selected")
        var character = Math.floor(Math.random() * (57 - 48)) + 48;
        console.log(character);
        var value = String.fromCharCode(character);
        console.log(value);
        password.push(value);
      }

      if (parameters[parameterType] === "symbol") {
        console.log("symbol was selected")
        var symbolRange = Math.floor(Math.random() * (4 - 0)) + 0;
        console.log(symbolRange);

        // Use the randomly chosen number to pick which range of symbols to use math.random on
        if (symbolRange === 1) {
          var character = Math.floor(Math.random() * (47 - 33)) + 33;
          console.log(character);
          var value = String.fromCharCode(character);
          console.log(value);
          password.push(value);
        }

        if (symbolRange === 2) {
          var character = Math.floor(Math.random() * (64 - 58)) + 58;
          console.log(character);
          var value = String.fromCharCode(character);
          console.log(value);
          password.push(value);
        }

        if (symbolRange === 3) {
          var character = Math.floor(Math.random() * (96 - 91)) + 91;
          console.log(character);
          var value = String.fromCharCode(character);
          console.log(value);
          password.push(value);
        }

        if (symbolRange === 4) {
          var character = Math.floor(Math.random() * (126 - 123)) + 123;
          console.log(character);
          var value = String.fromCharCode(character);
          console.log(value);
          password.push(value);
        }
      }
    }
    let passwordString = password.join("");
    console.log(passwordString);
    passwordText.value = passwordString;

  }
}

generateBtn.addEventListener("click", writePassword);