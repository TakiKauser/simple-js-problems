const phones = [
    {name: "Samsung S5", price: 45000, camera: 24, storage: 128},
    {name: "Oppo A2", price: 35000, camera: 18, storage: 64},
    {name: "Xaomi M3", price: 25000, camera: 12, storage: 32},
    {name: "Nokia N95", price: 5000, camera: 8, storage: 8},
    {name: "Walton M32", price: 15000, camera: 10, storage: 16}
]

function cheapestProduct(array){
    let cheapest = array[0];
    for (const mobile of phones){
        if (cheapest.price > mobile.price){
            cheapest = mobile;
        }
        // console.log(mobile);
    }
    return cheapest;
}

const desiredMobile = cheapestProduct(phones);
console.log("Cheapest HandSet: ",desiredMobile);