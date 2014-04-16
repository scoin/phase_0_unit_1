// I was by myself on this challenge.

// Pseudocode
// 1 & 2. set secretNumber equal to 7
// 3 & 4. set password equal to "just open the door"
// 5 & 6. set allowedIn equal to false
// 7, 8 & 9 create an array members containing "John" as the first element and "Mary" as the 4th


// __________________________________________
// Write your code below.
var secretNumber = 7;
var password = 'just open the door'
var allowedIn = false;
var members = ["John", null, null, "Mary"];

// __________________________________________
// Refactored Code: Include a refactored version (or justification of your original code) here. 
/* 
I believe my code is efficient as it can possibly be. As it is only setting variables, and I am using
the variables outlined in the driver code, they are clear and concise. The code does not repeat
itself, it seeks to solve multiple tests with each line. It also does not waste memory in the 
array, but setting nulls instead of arbitrary strings.
*/
// __________________________________________
// Reflection: Use the reflection guidelines to write a reflection here. 
/*
At first, I admit I had no idea what I was doing. I overthought it.
As soon as I slowed down and realized why this file was structured as it is, and that I was 
merely setting variables, I read through the tests again and solved them. 
Because they went from general to specific I could solve more than one
test by writing just a single line. This strategy worked well and did not require me to refactor.
I initially did not understand that the functions parameters were being set on different lines.
That kind of threw me off, until I remembered from the js intro that this was how it was done so
long as there is a comma at the end of line.
I enjoyed the satsifaction of completing the tests and watching them ring true, 2 - 3 at a time.

*/

// __________________________________________
// Driver Code:  Do not alter code below this line.

function assert(test, message, test_number) {
  if (!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
}

assert(
  (typeof secretNumber === 'number'),
  "The value of secretNumber should be a number.",
  "1. "
)

assert(
  secretNumber === 7,
  "The value of secretNumber should be 7.",
  "2. "
)

assert(
  typeof password === 'string',
  "The value of password should be a string.",
  "3. "
)

assert(
  password === "just open the door",
  "The value of password should be 'just open the door'.",
  "4. "
)

assert(
  typeof allowedIn === 'boolean',
  "The value of allowedIn should be a boolean.",
  "5. "
)

assert(
  allowedIn === false,
  "The value of allowedIn should be false.",
  "6. "
)

assert(
  members instanceof Array,
  "The value of members should be an array",
  "7. "
)

assert(
  members[0] === "John",
  "The first element in the value of members should be 'John'.",
  "8. "
)

assert(
  members[3] === "Mary",
  "The fourth element in the value of members should be 'Mary'.",
  "9. "
)

