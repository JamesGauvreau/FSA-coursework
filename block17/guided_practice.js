const garageSale = require("./guided_practice_data");

// const printName = (dog) => {
//     return [dog.name, dog.price];
// }

// console.table(garageSale.map(printName))

const equalUnder = (cat) => {
    return cat.price <= 50;
}

const itemsEqualUnder = garageSale.filter(equalUnder);

garageSale.forEach((dog) => {
    console.log(dog.name, dog.price)
})
// console.table(itemsEqualUnder);

// Prompt 3
// Print an array of all the item names in garagaeSale.




// Prompt 4
// Print an array of arrays of all the items with their prices.
// For example: [["blue sweater", 20], ["yellow raincoat", 20]];




// Prompt 5
// Print an array of all the items that are less or equal to $50.




// Prompt 6
// Print an array of all the items whose condition are "used."

const usedUp = (lizard) => {
    return lizard.condition = "used";
}

let itemsUsed = itemsEqualUnder.filter(usedUp);
console.table(itemsUsed);

// Prompt 7
// Print all the prices in garageSale array into a new array.




// Prompt 8
// Print the total cost of the garageSale array.




// Prompt 9
// Print the average price for the garage sale.

