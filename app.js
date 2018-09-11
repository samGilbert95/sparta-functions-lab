// 1. Write a function called 'multiply' that multiplies two numbers and returns the result
function multiply (num1,num2) {
  return num1 * num2;
};

// 2. Write a function called 'addThree' that adds three numbers together and returns the result
function addThree(num1,num2,num3) {
  return num1+num2+num3;
};
// 3. Write a function called 'smallestNumber' that returns the smaller of 2 numbers
function smallestNumber(number1,number2){
  if (number1 < number2){
    return number1;
  } else {
    return number2;
  }
}
// 4. Write a function called 'maxOfThree' that returns the largest of 3 numbers
function maxOfThree(no1,no2,no3){
  if (no1 > no2 && no1 > no3){
    return no1;
  } else if (no2 > no1 && no2 > no3) {
    return no2;
  } else {
    return no3;
  }
}
// 5. Write a function called 'reverseString' that returns the reverse of a string
function reverseString(sentence){
  var sentArray = sentence.split("");
  var reverseArray = sentArray.reverse();
  var reversed = reverseArray.join("");
  return reversed;
}
// 6. Write a function called 'disemvowel' that returns a string with the vowels stripped out
function disemvowel(sentence){
  var sentArray = sentence.split("");
  var disArray = [];
  for (var i=0;i<=sentArray.length;i++){
     switch (sentArray[i]) {
       case 'a':
       case 'e':
       case 'i':
       case 'o':
       case 'u':
         disArray[i] = "";
         break;
       default:
         disArray[i] = sentArray[i];
     }
   }
   var disVowel = disArray.join("");
   return disVowel;
}
// 7. Write a function called 'removeOdd' that removes all ODD number from an array
function removeOdd(numArray){
  for (var i = 0; i < numArray.length; i++){
    if(numArray[i] % 2 !== 0){
      numArray[i] = "";
    }
  }
  var testArray = numArray.filter(check);
  return testArray;
}
function check(value) {
  return value !== "";
}
// 8. Write a function called 'removeEven' that removes all EVEN number from an array
function removeEven(numArray2){
  for (var i = 0; i < numArray2.length; i++){
    if((numArray2[i])% 2 == 0){
      numArray2[i] = "";
    }
  }
  var testArray2 = numArray2.filter(check);
  return testArray2;
}

function check(value) {
  return value !== "";
}
// 9. Write a function called 'longestString' that takes an array of strings and returns the string with the longest character length
function longestString(stringArray){
  var longest = "";
  for (var i=0;i<stringArray.length;i++){
    if (stringArray[i].length > longest.length){
      longest = stringArray[i];
    }
  }
  return longest;
}
// 10. Write a function called 'allElementsExceptFirstThree' that discards the first 3 elements of an array,
// e.g. [1, 2, 3, 4, 5, 6] becomes [4, 5, 6]
function allElementsExceptFirstThree(array10){
  array10.splice(0,3);
  return array10;
}
//#### BONUS ####

// 11. Write a function called 'convertArrayToAnObject' that turns an array (with an even number of elements) into a hash, by
// pairing up elements. e.g. ['a', 'b', 'c', 'd'] becomes
// {'a' => 'b', 'c' => 'd'}
function convertArrayToAnObject(array11){
  var arraySplit=[];
  var newObj = {};
  for (var i = 0; i<array11.length;i++){
    if (i%2 == 0){
      arraySplit[i] = array11.slice(i,i+2);
    }
    else {
      arraySplit[i] = "";
    }
  }
  var filterSplit = arraySplit.filter(check);
  for (var i = 0;i<filterSplit.length;i++){
    newObj[filterSplit[i][0]] = filterSplit[i][1];
  }
  return newObj;
}
function check(value) {
  return value !== "";
}

// 12. Write a function called 'fizzBuzz' that takes any number and returns a value based on these rules
  function fizzBuzz(num12){
    var fizzcheck = num12%3;
    var buzzcheck = num12%5;
    if (fizzcheck == 0){
      return "Fizz";
    } else if (buzzcheck == 0) {
      return "Buzz";
    } else if (buzzcheck == 0 && fizzcheck == 0) {
      return "FizzBuzz"
    }
  }
// But for multiples of three print "Fizz" instead of the number
// For the multiples of five print "Buzz".
// For numbers which are multiples of both three and five print "FizzBuzz".
