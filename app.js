// Important Note - No Built-in functions to be used
// Progression 1: Names and Input

// 1.1 Create a variable `ProGrad-1` with the driver's name.
// 1.2 Print `"The driver's name is XXXX"`.
// 1.3 Create a variable `ProGrad-2` with the navigator's name.
// 1.4 Print `"The navigator's name is YYYY"`.

let driver = "Sowjanya";
console.log("The driver's name is " + driver);

let navigator = "munna";
console.log("The navigator's name is " + navigator);

// Progression 2: Control Statements - 1
// 2.1. Depending on which name is longer, print:
// - The driver has the longest name, it has XX characters. or
// - It seems that the navigator has the longest name, it has XX characters. or
// - Wow, you both have equally long names, XX characters!.

let x = driver.length;
let y = navigator.length;
if (x > y) {
  console.log("The driver has the longest name, it has " + x + " characters.");
} else if (y > x) {
  console.log(
    "It seems that the navigator has the longest name, it has " +
      y +
      "characters."
  );
} else {
  console.log(" Wow, you both have equally long names," + x + "  characters!.");
}

// 2.2. Check if the string contains vowels or not.
// - If it contains vowels, print the name, and also print the vowel letters along with the vowel index. or
// - print no vowels
// - for example. In String ProGrad - o and a are vowels. Print ProGrad o a 2 5.

for (i = 0; i <= x; i++) {
  if (
    driver[i] == "a" ||
    driver[i] == "e" ||
    driver[i] == "i" ||
    driver[i] == "o" ||
    driver[i] == "u" ||
    driver[i] == "A" ||
    driver[i] == "E" ||
    driver[i] == "I" ||
    driver[i] == "O" ||
    driver[i] == "U"
  ) {
    console.log(driver + " " + driver[i] + " " + i);
  }
}
for (i = 0; i <= x; i++) {
  if (
    navigator[i] == "a" ||
    navigator[i] == "e" ||
    navigator[i] == "i" ||
    navigator[i] == "o" ||
    navigator[i] == "u" ||
    navigator[i] == "A" ||
    navigator[i] == "E" ||
    navigator[i] == "I" ||
    navigator[i] == "O" ||
    navigator[i] == "U"
  ) {
    console.log(navigator + " " + navigator[i] + " " + i);
  }
}

// 2.3. Check if the string contains uppercase and lowercase characters Xx
// - Print the number of upper case characters
// - Print the number of lower case characters
let count1 = 0;
let count2 = 0;
for (i = 0; i < x; i++) {
  if (
    driver[i] == "A" ||
    driver[i] == "B" ||
    driver[i] == "D" ||
    driver[i] == "C" ||
    driver[i] == "E" ||
    driver[i] == "F" ||
    driver[i] == "G" ||
    driver[i] == "H" ||
    driver[i] == "I" ||
    driver[i] == "J" ||
    driver[i] == "K" ||
    driver[i] == "L" ||
    driver[i] == "M" ||
    driver[i] == "N" ||
    driver[i] == "O" ||
    driver[i] == "P" ||
    driver[i] == "Q" ||
    driver[i] == "R" ||
    driver[i] == "S" ||
    driver[i] == "T" ||
    driver[i] == "U" ||
    driver[i] == "V" ||
    driver[i] == "W" ||
    driver[i] == "X" ||
    driver[i] == "Y" ||
    driver[i] == "Z"
  ) {
    count1++;
  } else {
    count2++;
  }
}
console.log("upper of driver " + count1);
console.log("lower of driver " + count2);

// Progression 3: Control Statements - 2
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "ProGrad"

let DRIVER = driver.toUpperCase();
for (i = 0; i <= x; i++) {
  DRIVER[i] = DRIVER[i] + " ";
}
console.log(DRIVER.split("").join(" "));
// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "darGorP"
let rev;
for (i = y; i >= 0; i--) {
  rev = rev + navigator[i];
}
console.log(rev);

// 3.3 Merge both the characters such that driver is followed by Navigator like "ProGrad FACEPrep"
// - Now bring the FACEPrep to the start and send ProGrad to the back like "FACEPrep ProGrad"

let add = driver + " " + navigator;
console.log(add);
let add1 = navigator + " " + driver;
console.log(add1);

// 3.3 Depending on the lexicographic order of the strings, print:
// - The driver's name goes first.
// - Yo, the navigator goes first definitely.
// - What?! You both have the same name?

var elements = ["sowjanya", "munna"];
a = elements.sort((a, b) => a.localeCompare(b));
if (a == "driver") {
  console.log("The driver's name goes first.");
} else if (a == "navigator") {
  console.log("the navigator goes first.");
}

// Bonus Time!
// Bonus 1:
// Go to lorem ipsum generator and:
// Generate 3 paragraphs. Store the text in a variable type of string.
// Make your program count the number of words in the string.
// Make your program count the number of times the Latin word et appears.
// Bonus 2:
// Create a new variable phraseToCheck and have it contain some string value. Write a code that will check if the value we assigned to this variable is a Palindrome. Here are some examples of palindromes:

// "A man, a plan, a canal, Panama!"
// "Amor, Roma"
// "race car"
// "stack cats"
// "step on no pets"
// "taco cat"
// "put it up"
// "Was it a car or a cat I saw?" and "No 'x' in Nixon".

// Hint: If you use Google to help you to find solution to this iteration, you might run into some solutions that use advanced string or array methods (such as join(), reverse(), etc.). However, try to apply the knowledge you currently have since you can build pretty nice solution with just using for loop, if-else statements with some break and continue... Just sayin'
