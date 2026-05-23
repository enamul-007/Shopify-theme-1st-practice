function calcilatePrice (price , discount ){
    return price - (price * discount / 100)
}

let finalPrice = calcilatePrice(750, 3)
console.log(finalPrice);
