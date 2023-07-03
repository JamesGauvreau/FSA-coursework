// Define const budget
// define const price1
// define const price 2

// function: sumOfGifts(sum(price1; price2)) = giftTotal

// function giftTotal * 0.08

const budget = 50;
const price1 = 20;
const price2 = 25;

const price3 = 10;
const altprice = price1 + price3

function sumOfGifts(price1, price2) {
    return price1 + price2;
}

const giftTotal = sumOfGifts(price1, price2) 

function addTax(giftTotal) {
    return giftTotal * 1.08;
}

const giftsWithTax = addTax

console.log(giftTotal)
console.log(giftsWithTax)

