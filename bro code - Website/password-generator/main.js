const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
const uppercaseChars = "ABCDEFGTHIJKLMNOPQRSTUVWXYZ";
const numberChars = "1234567890";
const symbolChars = "!@#$%^&*()_+";

const myh2 = document.getElementById("myh2");

function GeneratePassword() {
  const passwordLengthStr = document.getElementById("mylength").value;
  const passwordLength = Number(passwordLengthStr);
  const islowercase = document.getElementById("lowercase").checked;
  const isUppercase = document.getElementById("uppercase").checked;
  const isnumbers = document.getElementById("numbers").checked;
  const isSymbols = document.getElementById("symbols").checked;
  let generatedPassword = "";
  if (passwordLength <= 0 || passwordLength > 12) {
    myh2.textContent = `length should be greater than 0 or lesser than 12`;
  } else if (!islowercase && !isUppercase && !isnumbers && !isSymbols) {
    myh2.textContent = `Select any one case for password`;
  } else {
    let allowedChars = generateAllowedChars(
      islowercase,
      isUppercase,
      isnumbers,
      isSymbols
    );
    for (let i = 0; i < passwordLength; i++) {
      let randomIndex = Math.floor(Math.random() * allowedChars.length);
      generatedPassword += allowedChars[randomIndex];
    }

    myh2.textContent = `fuck yeah = ${generatedPassword}`;
  }
}

function generateAllowedChars(lowercase, uppercase, numbers, symbols) {
  let allowedChars = "";
  allowedChars += lowercase ? lowercaseChars : "";
  allowedChars += uppercase ? uppercaseChars : "";
  allowedChars += numbers ? numberChars : "";
  allowedChars += symbols ? symbolChars : "";

  return allowedChars;
}
