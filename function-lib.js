// Problem #1
/**
 * Takes two numbers and logs the result of their division and multiplication
 * @param {number} x - The dividend in the case of division.
 * @param {number} y - The divisor in the case of division.
 */
function divisionAndMultiplication(x, y) {
  if (y === 0) {
    console.log("You okay in the head blud?");
    return;
  }

  let division = 0;
  let multiplication = 0;

  division = x / y;
  multiplication = x * y;

  console.log("Division result: " + division);
  console.log("Multiplication result: " + multiplication);
}

// Problem #2
// This was built without asking ChatGPT if there's an operation that joins an array back together to form a string
/**
 * Takes a string as an input, converts it to uppercase, and reverses it then logs the result
 * @param {string} x
 */
function upAndReverse(x) {
  if (typeof x !== "string") {
    console.log("Input is not a string");
    return;
  }

  let result = "";
  x = x.toUpperCase();
  for (let i = x.length - 1; i >= 0; i--) {
    result = result + x.charAt(i);
  }
  console.log("New string: " + result);
}

// Problem #2
// This is faster bro
/**
 * Takes a string as an input, converts it to uppercase, and reverses it then logs the result
 * @param {string} x
 */
function upAndReverseAdvancedAI(x) {
  if (typeof x !== "string") {
    console.log("Input is not a string");
    return;
  }

  x = x.toUpperCase();
  console.log("New string with advanced AI: " + x.split("").reverse().join(""));
}

// Problem #3
/**
 * Takes an array of numbers and returns a new array with each number doubled
 * @param {array} x
 * @returns {array} where each value is doubled
 */
function doubleArrayValues(x) {
  if (Array.isArray(x) == false) {
    console.log("Your input is not an array fam");
    return;
  }

  // I think you should validate whether each value is a number and can be doubled but I can't be bothered
  let result;

  result = x.map((value) => value * 2);
  console.log("New array: " + result);
  return result;
}

// Problem #4
/**
 * Logs "Hello, Node.js!" after 3 seconds
 */
function logDelayedMsg() {
  setTimeout(() => {
    console.log("Hello, Node.js!");
  }, 3000);
}

// Problem #5
/**
 * Generates a random number between 1 and 100 and logs it
 */
function generateRandomNumber() {
  console.log("A random nunmber is " + Math.floor(Math.random() * 100) + 1);
}

// Problem #6
/**
 * Takes a number and logs whether it is even or odd
 * @param {number} x
 */
function checkEvenOrOdd(x) {
  if (typeof x !== "number" || isNaN(x)) {
    console.log(x + " ain't a number blud");
    return;
  }

  if (x % 2 === 0) {
    console.log(x + " is even");
  } else {
    console.log(x + " is odd");
  }
}

// Problem #7
/**
 * Takes two strings and concatenates them with a space in between
 * @param {string} x
 * @param {string} y
 */
function concatString(x, y) {
  let result;
  result = x + " " + y;
  console.log(result);
  return result;
}

// Problem #8
/**
 * Takes an array of numbers and logs the maximum value
 * @param {array} x
 */
function getMaxValueInArray(x) {
  if (Array.isArray(x) == false) {
    console.log("Your input is not an array fam");
    return;
  }

  console.log(Math.max.apply(null, x));
  return Math.max.apply(null, x);
}

// Problem #9
/**
 * Takes a string and logs the number of characters in it
 * @param {string|array} x
 */
function countCharacters(x) {
  if (Array.isArray(x) == true) {
    x = x.join("");
  } else {
    try {
      x = x.toString();
    } catch (error) {
      console.log("Unstringable input bro");
    }
  }

  let textLength;
  let trimmedText;

  trimmedText = x.replaceAll(" ", "");
  textLength = trimmedText.length;

  console.log("Your text is " + textLength + " characters long");
}

// Problem #10
/**
 * Takes an array of strings and logs a greeting for each string
 * @param {array} x
 */
function greetArray(x) {
  if (Array.isArray(x) == false) {
    console.log("Your input is not an array broti");
  }

  x.map(logGreeting);

  function logGreeting(value, array) {
    console.log("Hello, " + value);
  }
}

module.exports = {
  divisionAndMultiplication,
  upAndReverse,
  upAndReverseAdvancedAI,
  doubleArrayValues,
  logDelayedMsg,
  generateRandomNumber,
  checkEvenOrOdd,
  concatString,
  getMaxValueInArray,
  countCharacters,
  greetArray,
};
