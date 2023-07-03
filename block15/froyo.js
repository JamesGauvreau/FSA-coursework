// Make the list

const customer = {
    firstName: "jake",
    lastName: "smith",
    email: "jaekSmih!aol.com",
    phone: "undefined",
    zipCode: "631",
    favoriteFlavors: 32,
    cupSize: "medium",
    favoriteStore: "Target",
    firstVisit: false,
}

// Modify email to "Jak3Smith1992@email.com"

customer.email = "Jak3Smith1992@email.com";

// Modify phone to 3195551234

customer.phone = "3195551234";

// Modify zipCode to 63132

customer.zipCode = "63132";

// Modify favoriteFlavors to "coffee", "strawberry", "matcha"

customer.favoriteFlavors = ["coffee", "strawberry", "matcha"];

// Remove, using delete, zipCode

delete customer.zipCode;

// Remove, using delete, favoriteStore

delete customer.favoriteStore;

// Add following keys and values:
    // toppings: "chocolate sprinkles", "wafer straws", "gummy bears"

    customer.toppings = ["chocolate sprinkles", "wafer straws", "gummy bears"];

    // futureFlavors: "mango"
   
    customer.futureFlavors = ["mango"]; 

    // todaysPurchaseCost: 5.32

    customer.todaysPurchaseCost = [5.32];

// Print keys in survey

console.table(Object.keys(customer));