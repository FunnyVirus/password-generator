//received help from a tutor to write this code
//variables
var lowerChars = "abcdefghijklmnopqrstuvwxyz";
var upperChars =  "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialChars = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"]
var randomChars = "1234567890";

//assignment Code
var generateBtn = document.querySelector("#generate");

//write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//store the password 
var passwordHolder= [];

//add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  //password needs to me more than 7 characters and less than 129 
  //lower case and upper case lettering 
  //numbers and special characters 
  //randomize the password depending on the selections
  var numberOfCharacters = parseInt(prompt("Input the number of characters you want your password to be. Must be within 8 and 128 characters."))  
  if (numberOfCharacters < 8 || numberOfCharacters > 128){
    alert("Input a proper password")
    generatePassword()
  }
  var lowerCase =confirm ("Would you like lower case characters?")
  var upperCase =confirm ("Would you like upper case characters?")
  var specialCharacters =confirm ("Would you like special characters?")
  var randomNumber = confirm ("Would you like numbers in your password?")

  //checker for the criteria 
  if (lowerCase=== true){
    passwordHolder= passwordHolder.concat(lowerChars.split(""))
    console.log(lowerCase)
  }
  if (upperCase=== true){
    passwordHolder= passwordHolder.concat(upperChars.split(""))
    console.log(upperCase)
  }
  if (specialCharacters=== true){
    passwordHolder= passwordHolder.concat(specialChars)
    console.log(specialCharacters)
  }
  if (randomNumber=== true){
    passwordHolder= passwordHolder.concat(randomChars.split(""))
    console.log(randomNumber)
  };
  

 //creating alert for people not agreeing with any criteria   
  while (passwordHolder.length === 0) {
      alert("You need to choose at least one criteria for your new password");
      valueCheck();
  };

//using math random to create randomly generate numbers from array
  function randomInt() {
    return Math.floor(Math.random() * passwordHolder.length);
  };
console.log(randomInt)
console.log(passwordHolder)
//makes password appear in the place holder matching all the criteria selected previously 
  var newPassword = "";
    do {
      newPassword = newPassword + passwordHolder[randomInt(numberOfCharacters)];
  } while (newPassword.length < numberOfCharacters);
    return newPassword;



}



