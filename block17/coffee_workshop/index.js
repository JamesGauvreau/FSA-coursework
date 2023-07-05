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