const timmy = {
    prescription: "acetaminophen",
    pricePerRefill: 25,
    refills: 3,
    subscription: false,
    coupon: true,
};

const sarah = {
    prescription: "diphenhydramine",
    pricePerRefill: 50,
    refills: 1,
    subscription: true,
    coupon: false,
}

const rocky = {
    prescription: "phenylephrine",
    pricePerRefill: 30,
    refills: 5,
    subscription: true,
    coupon: true,
}

// Determine whether the customer has a subscription; if so, apply 25% discount.
const subscription = (subscription, pricePerRefill, refills) => {
    if (subscription) {
        return pricePerRefill * refills * 0.75;
    }
    return pricePerRefill * refills;    
}

    // Determine whether the customer has a coupon; if so, apply -$10 discount after subscription is calculated. 
const coupon = (coupon, subscriptionAmount) => {
    if (coupon) {
        return subscriptionAmount - 10;
    }
    return subscriptionAmount;
}

// Return, log the string `Your grand total is ${grandTotal}.`

const grandTotal = (customer) => {
    const subscriptionAmount = subscription(customer.subscription, customer.pricePerRefill, customer.refills);
    const finalAmount = coupon(customer.coupon, subscriptionAmount);
    console.log(`Your grand total is ${finalAmount}`);
}

grandTotal(timmy);