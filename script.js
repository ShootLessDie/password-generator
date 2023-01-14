// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {

  while (true){
  var passwordLength = prompt("What length password would you like?")
    /* If input is within accepted parameters, sets variable to false, thereby stopping the while loop */
    if (passwordLength < 64 && passwordLength > 10){
      break
    }
    /* If not accepted, alerts user. */
    else{
      alert("Password length must be between 10 and 64 characters.")
    }

  }
  var includeSpecialChars = confirm("Would you like it to include special characters?")
  var includeNumbers = confirm("Would you like it to include numbers?")
  var includeUpperCase = confirm("Would you like it to include upper case letters?")
  /* Creates array containing info to be used in subsequent functions */
  var passwordSettings = [passwordLength, includeSpecialChars, includeNumbers, includeUpperCase]

  /* Returns array */
  return passwordSettings
}

// Function for getting a random element from an array
function getRandom(arr) {
  return arr[Math.floor(Math.random() * (arr.length))]
}

// Function to generate password with user input
function generatePassword(passwordSettings) {

  /* Runs function to get password parameters and reads it into variable */
  var passwordSettings = getPasswordOptions()

  /* Initializes array containing which types of characters it can use to generate the passoword */
  let characterTypes = [0]

  /* Loops through the passwordSettings array (specifically the boolean parts i.e. includeSpecialChars...) and writes index of it if true */
  for (let i = 1; i < (4); i++){
    if (passwordSettings[i] == true){
      characterTypes.push(i)
    }
  }
 
  /* Initializes password variable to empty string */
  let password = ""
  /* Creates password one character at a time */
  for (let i = 0; i < passwordSettings[0]; i++){
    /* Chooses character type based on accepted types */
    var x = getRandom(characterTypes)
    switch (x){
      
      case 0: /* lower case character */
        var y = getRandom(lowerCasedCharacters)
        password += (y)
        break;
        
      case 1: /* Include special characters */
        var y = getRandom(specialCharacters)
        password += (y)
        break;

      case 2: /* Include numbers */
        var y = getRandom(numericCharacters)
        password += (y)
        break;

      case 3: /* Include upper cased letters */
        var y = getRandom(upperCasedCharacters)
        password += (y)
        break;
    }
  }
  return password
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
