// // 1. create two arrays

var oddLengthArray = [1, 2, 3, 4, 5, 5, 7];
var evenLengthArray = [4, 4, 5, 5, 6, 6, 6, 7];
var thing = "pie";

// 2. write tests using assert
//  a. create the main assert function with three parameters:
  function assert(test, message, test_number){
    if (!test){
      console.log(test_number + " false");
      throw "Error: " + message;
    } 
    console.log(test_number + " true");
  };
 
 //  b. Using the function you just created
 //    1. Test if the array exists
 assert(
  (oddLengthArray instanceof Array),
  "The value of oddLengthArray should be an Array.",
  "1."
);

//2. Test the exsistance of the Second array
assert(
  (evenLengthArray instanceof Array),
  "The value of evenLengthArray should be an Array.",
  "1."
);

//Tests
//1. create a function called sum

function Sum(array){
  sum = 0;
  for(var i = 0; i < array.length; i++){
  sum += array[i];
  };
  return sum;
};

//2. test if the function exists using assert:
assert(
  (Sum instanceof Function),
  "sum should be a Function.",
  "2."
); 

//3. test that sum of oddLengthArray is equal to 27
assert(
  Sum(oddLengthArray) === 27,
  "sum should return the sum of all the elements in an array with an odd length.",
  "3."
);

//test that sum of evenLengthArray is equal to 43

assert(
  Sum(evenLengthArray) === 43,
  "sum should return the sum of all the elements in an array with an even length.",
  "3."
);

//4. create a function called mean

function Mean(array){
  return Sum(array) / array.length
};

//use assert to test if the mean function exists
assert(
  (Mean instanceof Function),
  "mean should be a Function.",
  "4."
);

//5. test that the mean value for
//'oddLengthArray' is equal to 3.857142857142857

assert(
  Mean(oddLengthArray) === 3.857142857142857,
  "mean should return the average of all the elements in an array with an odd length.",
  "5."
);

//6. test that the mean value for
//'evenLengthArray' is equal to 5.375

assert(
  Mean(evenLengthArray) === 5.375,
  "mean should return the average of all the elements in an array with an odd length.",
  "6."
);

//7. create a function called median
/*
function Median(array) {
  var arrayType;
  var temp; 
  array.sort();

  if(array.length % 2 === 0) {
    var arrayType = "even"
  } else {
    var arrayType = "odd"
  }; 

  if(arrayType === "odd"){
    var temp = array.length / 2;
    var temp = Math.floor(temp)
    return array[temp];
  } else {
    var temp = array.length / 2;
    var temp = (array[temp - 1] + array[temp]) / 2;
    return temp;
  }
};
*/

function Median(array) {
  var temp; 
  array.sort();
   if(array.length % 2 != 0){
    var temp = array.length / 2;
    var temp = Math.floor(temp)
    return array[temp];
  } else {
    var temp = array.length / 2;
    var temp = (array[temp - 1] + array[temp]) / 2;
    return temp;
  }
};

var testArray = [5,6,5,6,4];
//use assert to test if the median function exists
assert(
  (Median instanceof Function),
  "median should be a Function.",
  "7."
);

//8. test that the median value for
//'oddLengthArray' is equal to 4

assert(
  Median(oddLengthArray) === 4,
  "median should return the median value of all the elements in an array with an odd length.",
  "8."
);

//9. test that the median value for
//'evenLengthArray' is equal to 5.5


assert(
  Median(evenLengthArray) === 5.5,
  "median should return the median value of all the elements in an array with an even length.",
  "9."
);


/*
Refactoring done by Greg and Nick
The code by Adam was very efficient. The only proper refactoring we found to reduce code length,
without changing the functionality, was to remove the conditional determining even and odd
and setting the variable "arrayType", and rather to just directly run the code from those conditionals.
This shortened the code by 3 lines or so.
*/

/*
Reflection: I found working together on a single project, both independently and together, to be a 
challenge. Without fore knowledge of the project and what had been done, I had to spend a solid
10 - 15 mins reading line by line. I did this together with Nick, which was helpful and rewarding
to have two sets of eyes on it.

Conceptualizing work in this manner is new to me, but in the end was very comfortable. I found the challenge
all together enjoyable and in no way tedious. I understood all the code presented.
*/
