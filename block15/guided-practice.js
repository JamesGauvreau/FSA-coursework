const dinnerfull = {
    friends: ["James", "Jonah", "Amy", "Mateo", "Cheyenne"],
    dish: ["cheeseburger", "steak", "soup", "mac and cheese", "unlimited soup and salad"],
    price: [12, 20, 8, 14, 16]
}

const dinner = {
    hamburger: 12,
    steak: 20,
    soup: 8,
    macAndCheese: 14,
    soupAndSalad: 16,
}

console.log(dinner)

for (const hello in dinner) {
    console.log(`${hello}: ${dinner[hello]}`)
}

console.log(Object.keys(dinner));
console.log(Object.values(dinner))

let price = 0;

for (const dish in dinner) {
    price += dinner[dish];
}

console.log(price);

console.table(dinner)