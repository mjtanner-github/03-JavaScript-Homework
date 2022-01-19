// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {

  var numeral = ['0','1','2','3','4','5','6','7','8','9'];
  var lower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  var upper = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  var special = [" ","!","”","#","$","%","&","'","(",")","*",",","-",".","/",":",";","<",">","?","@","[","\\","]","^","_","`","{","|","}","~"];

  //Get desired password length no fewer characters than 8, no more than 128;
  var passwordLength = getNumericInput("Enter the desired length of the password between 8 and 128 characters:")

  //Get password attributes: upper, lower case, or both 
  var capsType = getAlphaCharInput("Please select (u)ppercase, (l)owercase, (b)oth or (n)either):", ['u', 'l', 'b', 'n']);

  //No need for input checking so confirm window called directly.
  var numericChars = confirm("Would you like the password to include numeric characters?");
  
  //No need for input checking so confirm window called directly.
  var specialChars = confirm("Would you like the password to include special characters?");

  // Array for random selection of characters.
  var charArray = [];
  
  // Accumulates upper and lower based on user input. 
  switch(capsType){
    case 'u'/*upper*/: charArray = upper; break;
    case 'l'/*lower*/: charArray = lower; break;
    case 'b'/*both*/ : charArray = upper.concat(lower);
    default:/*'n' neither*/
  }

  //User selected numerical characters.
  if(numericChars) {
    charArray = charArray.concat(numeral);
  }

  //User selected special characters. 
  if(specialChars) {
    charArray = charArray.concat(special);
  }

  //Initialized array for compiling output. 
  var outputArray = [];

  //Compile password.
  for(var i = 0; i < passwordLength; i++){
    outputArray[i] = randomChar(charArray);
  }

  //Special case; no character sets selected.
  if(charArray.length==0){
    return("Error: No character set selected.")
  }

  //Typecast outputArray to string and return.
  return(outputArray.join(""));
}

//Takes the accumulated array of characters and returns a psuedo-random character. 
function randomChar(array){
    var index = Math.floor(Math.random() * (array.length - 1));
    return(array[index]);
}

//getNumbericInpuy continues to call itself until a numeric value between 8 and 128 inclusive is entered.
function getNumericInput(promptVerbage){
  var  inputValue = parseInt(prompt(promptVerbage));
  if(isNaN(inputValue) || inputValue < 8 || inputValue > 128){
    return getNumericInput(promptVerbage);
  }
  return inputValue;
}

//getAlphaCharInput continues to call itself until the user input (shifted to lowercase) is within "returnConstraint".
function getAlphaCharInput(promptVerbage, returnConstraint){
  var  inputValue = prompt(promptVerbage).toLowerCase();
  if(!returnConstraint.includes(inputValue)){
    return getAlphaCharInput(promptVerbage, returnConstraint);
  }
  return inputValue;
}