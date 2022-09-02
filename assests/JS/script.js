// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// function to choose random integer//
function randomInt(min,max){
  if (!max) {
    max = min
    min = 0  }
    let randd = Math.random()
    return Math.floor(min*(1-randd) + randd*max) 
}
function getRandomItem(list){
  return list[randomInt(0,list.length -1)]
}
 
function generatePassword() {

let userInput = window.prompt("How long do you want password to be?")

let passwordLength = parseInt(userInput)

if (isNaN(passwordLength)) {
  window.alert("Thats not a number!")
   return 
}
 
if (passwordLength < 8 || passwordLength >128){
 window.alert("Password length must be between 8 and 128 characters")
return 
}

let userWantsNumbers = window.confirm (" Would you like to include numbers in your password?")
let userWantsLowerCase = window.confirm (" Would you like to include lowercase letters in your password?")
let userWantsSymbols = window.confirm (" Would you like to include Symbols in your password?")
let userWantsUpperCase = window.confirm (" Would you like to include uppercase letters in your password?") 


let numberList = ["0", "1","2","3","4","5","6","7","8","9"]
let SymbolList =["!", "@","#","$","%","^","&","*","(",")"]
let lowerCaseList = ["a","b","c","d","e","f","g","h","i", "j", "k", "l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
let upperCaseList = []

let optionsSelected = []

 // Function to make lowercase to uppercase//
for (let i =0; i <lowerCaseList.length;i++) {
  upperCaseList[i] = lowerCaseList[i].toUpperCase()
}

if (userWantsNumbers === true) {
 optionsSelected.push (numberList)
}
if (userWantsLowerCase === true){
  optionsSelected.push(lowerCaseList)
}
if (userWantsUpperCase === true){
  optionsSelected.push(upperCaseList)
}

if (userWantsSymbols === true){
  optionsSelected.push(SymbolList)
}
// Will alert user to make a choice in order to move foward// 
if (optionsSelected.length === 0) {
 window.alert("Please select one of the options in order to generate a password." )
 return 
}

 let generatePassword = ""
 for (let i = 0; i < passwordLength; i++){
  let randomSelect = getRandomItem(optionsSelected)
  let randomChar = getRandomItem(randomSelect)
  generatePassword += randomChar

}

console.log(generatePassword)
return generatePassword 
 }

// prompt user for password criteria //
//password lenghth - at least 8 charchaters less than 120//
//Validate//
//Generate//
//Display//




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
