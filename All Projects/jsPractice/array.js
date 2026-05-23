// const nums = [10, 20, 30, 40, 50];
// const part = nums.slice(1, 5);
// console.log(part);



// const a = [1, 2, 3, 4, 5, 6]
// const multyply = a.map(b => b * 3);
// console.log(multyply);

// const b = [2, 4, 5, 4, 6, 7, 8, 10];
// const even = b.filter(x => x % 2 === 0);
// const findOne = b.find(x => x > 6)
// const total = b.reduce((sum, num) => sum * num, 1)
// console.log(even);
// console.log(findOne);
// console.log(total);


// const votes = ['absent', 'yes', 'yes', 'absent', 'yes', 'yes', 'no', 'yes', 'no', 'yes', 'no']

// const result = votes.reduce((acc, vote) => {
//     if (acc[vote]) {
//         acc[vote]++
//     } else {
//         acc[vote] = 1;
//     }
//     return acc;
// }, {})
// console.log(result);

// const products = [
//     {
//         name: 'Coca-Cola',
//         price: 25
//     },
//     {
//         name: 'Pepsi',
//         price: 30
//     },
//     {
//         name: 'Sprite',
//         price: 20
//     },
//     {
//         name: 'iPhone',
//         price: 30000
//     },
//     {
//         name: 'Samsung Galaxy',
//         price: 40000
//     }
// ]

// const allProduct = products.reduce((sum, product) => {
//     return sum + product.name + " "
// }, " ")
// console.log(allProduct.trim());


// const students = [
//   ['Rahim', 45],
//   ['Karim', 55],
//   ['Selim', 60],
//   ['Babul', 40]
// ];

// const names = students.map(student => student[0]);
// console.log(names);

// const name = students.reduce((acc,studentNane)=>{
//     acc.push(studentNane[0]);
//     return acc ;
// },[])
// console.log(name);

// var num = new Array();

// for (var i = 0; i < 5; i++) {
//     num[i] = parseInt(prompt("enter your number "));
// }

// var sum = 0;
// for (var i = 0; i < 5; i++) {
//     console.log(num[i]);
//     sum = sum + num[i];

// }
//  console.log("sum = " + sum);



//  Find the sum of all the numbers in an array.

// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// let sum = 0;
// for (let i = 0; i < nums.length; i++) {
//     sum += nums[i]
// }
// console.log("the sum is = " + sum);



// let even = []
// for (let i = 0; i < nums.length; i++) {
//     if (nums[i] % 2 === 0) {
//         even.push(nums[i])
//     }
// }

// console.log("even number is = " + even);

// let odd = [];
// for (let i = 0; i < nums.length; i++) {
//     if (nums[i] % 2 === 1) {
//         odd.push(nums[i])
//     }
// }


// console.log("the odd number is = " + odd);


// let nums = [10 , 12, 13 ,"hii", 14 , 15 , 17 , 18 , 25 , 40 , 100, -100, -200 ]

// let maxNumber = [0]

// for (let i = 0 ; i < nums.length ; i++){
//     if(nums[i] > maxNumber){
//          maxNumber = nums[i]
//     }
// }


// console.log("max number is = " + maxNumber);


// const min = [100 , 10 , 1 , 12 , 200 , ]

// const minNumber = Math.min(... min)
// console.log(minNumber);

// let user = {
//     name: "Enamul",
//     hobbies: ["coding", "reading"],
//     address: { city: "Dhaka", zip: 1205 },
//     greet: function () {
//         console.log("Hello!");
//     }
// };

// console.log(user.hobbies.join(" , ")); // "coding"
// user.greet();                 // "Hello!"

// console.log(user.address); // "Dhaka"

// const person = {
//     firstName: "enamul",
//     lastName: "Khan",
//     age: 22,
//     eyeColor: "black",
//     country: {
//         city: "dhaka", zip: 1205
//     },
//     fullName : function(){
//        return this.firstName + " " + this.lastName
//     }

// }

// console.log(person.fullName());



// let digits = [1, 2, 3]

// var plusOne = function (digits) {
//     let number = parseInt(digits.join(""));
//     number = number + 1  
//     let array = Array.from(String(number));
//    console.log(array);
// }


// plusOne(digits)