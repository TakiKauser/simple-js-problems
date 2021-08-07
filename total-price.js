const products = [
    {name: "laptop", price: 57500},
    {name: "shirt", price: 500},
    {name: "watch", price: 3680},
    {name: "phone", price: 27000}
];

function totalPrice1(array){
    let totalPrice = 0;
    for (const product of array){
        totalPrice += product.price;
        // console.log(totalPrice);
    }
    return totalPrice;
}
// console.log(totalPrice1(products));


// shopping cart
const cart = [
    {name: "laptop", price: 57500, quantity: 1},
    {name: "shirt", price: 500, quantity: 3},
    {name: "watch", price: 3680, quantity: 3},
    {name: "phone", price: 27000, quantity: 2}
];

function totalPrice2(array){
    let totalPrice = 0;
    for (const product of array){
        totalPrice += (product.price * product.quantity);
        // console.log(totalPrice);
    }
    return totalPrice;
}
console.log(totalPrice2(cart));