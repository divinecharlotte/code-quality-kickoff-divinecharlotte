//Decoder
function solution (roman) {
  const romanNumerals = {
   I: 1,
   V: 5,
   X: 10,
   L: 50,
   C: 100,
   D: 500,
   M: 1000
 };

 let result = 0;
 let previousValue = 0;

 for (let index = roman.length - 1; index >= 0; index--) {
   const currentChar = roman[index];
   const currentValue = romanNumerals[currentChar];

   if (currentValue < previousValue) {
     result -= currentValue;
   } else {
     result += currentValue;
   }

   previousValue = currentValue;
 }

 return result;
}
 console.log(solution('MM'));
