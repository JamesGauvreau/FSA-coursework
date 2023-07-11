// ::Prompt 1
// Clean coffee_data.js file
// Connect to index.js. 
// Confirm connection.

const coffeeMenu = require("./coffee_data")

// console.log(coffeeMenu)
// ^ Unnecessary after confirmation of connection.

// ::Prompt 2
// Print an array of all the drinks on the menu.
// Function is named menuDrinks; `(drink)` is the referent. 
// Return only the values in the name property of the array. 
// Map it to a new constant.
// Log that constant. 

const menuDrinks = (drink) => {
    return drink.name;
}

const listDrinks = coffeeMenu.map(menuDrinks);

console.log(`List of Drinks: ${listDrinks}`)

// ::Prompt 3
// 

const menuDrinksUnder5 = (drink) => {
    if (drink.price <= 5) {
    return drink.name;
    }
}

const listDrinksUnder5 = coffeeMenu.filter(menuDrinksUnder5);
console.log(listDrinksUnder5);

// Logging without the additional constant.

console.log(coffeeMenu.filter(menuDrinksUnder5));


const menuDrinksEven = (drink) => {
    if (drink.price % 2 === 0) {
    return drink.name;
    }
}

const listDrinksEven = coffeeMenu.filter(menuDrinksEven);
console.log(listDrinksEven)

const findPriceArray = (array) => {
    return array.price;
}
const priceArray = coffeeMenu.map(findPriceArray);

const beanPrice = (accumulator, currentValue) => {
    return accumulator + currentValue;
}

const totalPrice = priceArray.reduce(beanPrice);
console.log(totalPrice)

const menuSeasonal = coffeeMenu.filter((drink) => {
    return drink.seasonal
})

    console.log(menuSeasonal)

const importedBeans = menuSeasonal.filter((drink) => {
        return drink.name = `${drink.name} with imported beans`
})

console.log(importedBeans)

// ::Simple-sum
// Function w/ array of two 

const simpleSum = (num1, num2) => {
    return num1 + num2
}

// Functions can be written as 
    // const functionName = (parameter1, etc) => {
// or
    // function functionName(parameter1, etc) {
// In both cases, you would log it as
    // console.log(functionName(argument1, etc))
// "return" means that a value is returned to functionName and the function concludes. 
// Functions are called when the function is provided with parens — if no inputs, though, then it might throw an error. 

console.log(simpleSum(1, 5))

console.log(simpleSum(simpleSum(3, 4), simpleSum(1, 5)))

const dogNumber = simpleSum(simpleSum(3, 4), simpleSum(1, 5)); 

console.log(`dogNumber = ${dogNumber}`)

const mySlice = (textValue, startValue, endValue) => {
    let result = []; // <= this signifies a flexible variable and an empty array
    from = Math.max(startValue, 0); // Math.max will give the largest of the input parameter numbers. We want "start" but include 0 so that an error won't give us infinity.  
    to = Math.min(endValue); // Math.min will give the smallest of the input parameter numbers. 

    if((!endValue) || (endValue > textValue.length)) {    // The two pipes (II) are a "logical OR," so this will return true if either of the parenthetical arguments is true. This will
                                                // be true if there is no end value or if the end value is greater than the length of the textValue.
        for(let i = from; i<textValue.length; i++ {   // "i = from" is the initialization, creating a counter variable. If "var" then non-local to the loop; if let, then local.
                                                // "i<arr.length" is the condition, which is evaluated before each loop iteration. If true, then the loop executes. In this
                                                    // case that would mean that the loop executes if and only if "i" is smaller than the value of textValue.length. 
        } 
    }
}