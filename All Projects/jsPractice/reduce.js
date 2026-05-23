const cartIems = [
    { name: "Shirt", price: 500, quantity: 2 },
    { name: "Pant", price: 800, quantity: 1 },
    { name: "Shoe", price: 1200, quantity: 3 }
];

const total = cartIems.reduce((acc, item) => {
    return acc = + item.price * item.quantity;
})

console.log("Total price: $" + total);

const products = [
    {
        name: "Shirt", price: 500, stock: true, category: "Clothing"

    },
    {
        name: "Pant", price: 800, stock: false, category: "Clothing"
    },

    {
        name: "Shoe", price: 1200, stock: true, category: "Footwear"
    },
    {
        name: "Watch", price: 2000, stock: true, category: "Accessories"
    },
    {
        name: "Bag", price: 1500, stock: false, category: "Accessories"
    },
    {
        name: "Hat", price: 300, stock: false, category: "Accessories"
    },
    {
        name: "Socks", price: 100, stock: true, category: "Clothing"
    },
    {
        name: "Belt", price: 400, stock: true, category: "Accessories"
    },
    {
        name: "Sandal", price: 700, stock: false, category: "Footwear"
    }
]

const result = products
    .filter(p => p.stock)
    .filter(p => p.category === "Accessories")
    .map(p => ({
        name: p.name, price: p.price
    }))

console.log(result);


const studentName = ["Enamul", "Rafiq", "Karim", "Rahim", "Jamal"]
const nameuppercase = studentName.map(name => name.toUpperCase())

console.log(nameuppercase);


const producArry = [
    {
        name: "apple", price: 100, stock: true
    },
    {
        name: "banana", price: 50, stock: false
    },
    {
        name: "orange", price: 80, stock: true
    }
]

const isAvailable = producArry.filter(p => p.stock)
const totalPrice = isAvailable.reduce((acc, item) => acc + item.price, 0)

console.log("Total price of available products: $" + totalPrice);


const cart = [
    { id: 1, name: "Shirt", price: 500, qty: 2 },
    { id: 2, name: "Pants", price: 800, qty: 1 },
    { id: 3, name: "Shoes", price: 2000, qty: 1 },
];

const getTotalPrice = (items) => 
    items.reduce((total , item ) => total + item.price * item.qty , 0);

const totalItem = cart.reduce((total, item) => total + item.qty, 0)
const mostExpensiveItem = cart.reduce((max, item) => item.price > max.price ? item : max, cart[0])
const removeItem = (cartIems, id) => cartIems.filter(item => item.id !== id)
const applyDiscount = cart.reduce((acc, item) => {
    const discount = item.price > 100 ? 0.1 : 0;
    return [...acc, { ...item, price: item.price - (item.price * discount) }];
}, [])

console.log(getTotalPrice(cart));
console.log(`Total items in cart: ${totalItem}`);
console.log(`Most expensive item: ${mostExpensiveItem.name}`);
console.log(`Items after removing ID 2: ${JSON.stringify(removeItem)}`);
console.log(`Items with discounts applied: ${JSON.stringify(applyDiscount)}`);
