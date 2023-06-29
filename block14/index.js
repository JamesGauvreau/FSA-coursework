// ## Only Odds
// Create variable for input array
// Create variable for output (odds) array
// Check even step for odds/evens; bypass evens and splice odds into output array 
// Print result of output array

    const oddsInput = [2, 4, 6, 8, 10, 11, 12]
    let oddsOutput = [ ] 

    for(let i=0; i<oddsInput.length; i++){
        if (oddsInput[i] % 2 !== 0) {
            oddsOutput.push(oddsInput[i]);
            }
        }

        console.log(`Only Odds result: ${oddsOutput}`)

// for (let i = 0; i < 5; i++) {
//   if (oddsInput % 2 === 0)
//     oddsInput.shift
//   else {
//       }    oddsOnly += "Number" + i;
// }

// console.log(oddsOnly)

// ## Vowels vs Consonant
// Create variable for input
// Create variables to track vowels and consonants
// Create loop for vowels, built on if/else 
// If no vowel is detected, increment consonantsCounter
// Log result. 

const letterSample = "textbook"
let vowelsCounter = 0;
let consonantsCounter = 0;

for (let i = 0; i < letterSample.length; i++) {
  if (letterSample[i] === "a") {
    vowelsCounter++
  }
    else 
    if (letterSample[i] === "e") {
        vowelsCounter++
      }
      else 
      if (letterSample[i] === "i") {
          vowelsCounter++
        }
        else 
        if (letterSample[i] === "o") {
            vowelsCounter++
          }
          else 
          if (letterSample[i] === "u") {
              vowelsCounter++
            }
            else {
                consonantsCounter++
            }
}

console.log(`Vowels vs Consonants result: "${letterSample}" has ${consonantsCounter} consonants and ${vowelsCounter} vowels`)

// ## Reverse Array
// Create input array and output array (empty by default)
// Take each item from input array and put it at the front of the output array
// Print result

const verseArray = [1, -1, 2, -3, 5, -8, 13]
let reverseArray = []

for (let i = 0; i < verseArray.length; i++)
    reverseArray.unshift(verseArray[i])

console.log(`Reverse Array result: ${reverseArray}`)

// ## FizzBuzz
// build input and output arrays
// build number sequence
// sift with "for", checking in following order: not cleanly divisible by 3 or
    // 5, not cleanly divisible by 3 && 5, cleanly divisible by 3, cleanly divisible
    // by 5
// replace 3s and 5s as appropriate
// log result

let countArray = [];
let fizzyArray = [];

for (let i = 1; i <= 100; i++) {
    countArray.push(i);
}

for (let i = 0; i <= 100; i++) 
    if ((countArray[i] % 3 !== 0) && (countArray[i] % 5 !== 0)) {
    fizzyArray.push(countArray[i])
}
    else
    if((countArray[i] % 3 === 0) && (countArray[i] % 5 !== 0)) {
        fizzyArray.push(`Fizz`)
    }
        else
        if((countArray[i] % 3 !== 0) && (countArray[i] % 5 === 0)) {
            fizzyArray.push(`Buzz`)
        }
            else
            if((countArray[i] % 3 === 0) && (countArray[i] % 5 === 0)) {
                fizzyArray.push('FizzBuzz')
            }
                else
                fizzyArray.push('ERROR')
                
console.log(`FizzBuzz: ${fizzyArray}`);