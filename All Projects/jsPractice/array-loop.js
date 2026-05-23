// const cart = [
//     {
//         name: "laptop", price: 500, quantity: 2
//     },
//     {
//         name: "Phone", price: 300, quantity: 1
//     },
//     {
//         name: "Hadephone", price: 150, quantity: 3
//     }
// ]

// let total = 0;
// cart.forEach((item) => {
//     total += item.price * item.quantity
// })

// console.log(`Cart total : ${total}`);



// const product = {
//     id: "PD-01",
//     name: "Samsung Galaxy S21",
//     price : 175000,
//     discount : 3,
//     stock : 3 ,
//     category : "Mobile",

//     getFinalprice(){
//         return this.price - (this.price * this.discount / 100);

//     },
//     isAvailable(){
//         return this.stock > 0;
//     } ,

//     getInfo (){
//         return `${this.name} | ${this.getFinalprice()} | ${this.isAvailable() ? "In Stock" : "Out of Stock"} `
//     }
// }

// console.log(product.getInfo());


// const prices = [ 100 , 200 , 300 , 400 , 500 ];
 
// const withtax = prices.map (price => price * 1.1);

// console.log(withtax);


// const products = [
//      {
//         name: "laptop", price: 500, quantity: 2
//     },
//     {
//         name: "Phone", price: 300, quantity: 1
//     },
//     {
//         name: "Hadephone", price: 150, quantity: 3
//     }
// ]

// const productCard = products.map(products =>
//     `<div> ${products.name} - $${products.price}</div>`
// )

// console.log(productCard);


/*      --------------------- filter  --------------------       */


const product = [
    {
        name :"Shirt" , price : 500 , stock : true 
    },
    {
        name :"Pant" , price : 800 , stock : false
    },
    {
        name :"Shoe" , price : 1200 , stock : true
    },
    {
        name :"Hat" , price : 300 , stock : false
    }, 
    {
        name :"Watch" , price : 2000 , stock : true
    },
    {
        name :"Bag" , price : 1500 , stock : false
    }
]

const avilable = product.filter (p => p.stock)
console.log(avilable.length);

const budget = product.filter (p => p.price > 500)
console.log(budget);




