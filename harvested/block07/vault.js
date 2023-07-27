/*
1   String stating "You have received this message because you have been chosen to open an important vault."
2   Three variable calculations with results 10; 40; 39
    2a  5 * 2
    2b  400 / 10
    2c  1119 % 180
3   Variables in step 2 are calculated as per 2a-2c.
4   Concatenate output of step 3.
5   Concatenate output of steps 1 & 4.
6   Produce dialog box giving output of step 5 
*/

var code1 = 5 * 2 // Multiplying 5 times 2 for output of 10. 
let code2 = 400 / code1 // Dividing 400 by 10 (output of previous var) for output of 40.  
const code3 = 1119 % 180 // Dividing 1119 by 180 for output of 39. 

var step2output = "You have received this message because you have been chosen to open an important vault.\n\n" // Adding two line breaks or newlines. 
var step4output = code1 + ", " + code2 + ", " + code3 // Putting together the three outputs from the previous step. 

alert(step2output + step4output) // Putting everything together.
