// simple arry 
const num = [1, 2, 3]
console.log(num)

// array length 
const fruits = ["apple", "mango", "banana", "orange"];
console.log("Array length:", fruits.length);

// array frist index 
console.log("Array frist Index:", fruits[0]);
console.log("Array last Index:", fruits[fruits.length - 1]);

//  Loop Array 



// for loop
const color = ["white", "black", "green", "red", "blue"];
for (let i = 0; i < color.length; i++) {
    console.log(color[i]);

}

// forEach loop 
const country = ["bangladesh", "India", "pakistan", "china", "japan"]

country.forEach(color => console.log(color))


// map 
const Upper = country.map(country => country.toUpperCase())
console.log(Upper);


// Add / remove Element 

const movie = ["aladin", "ms.dhoni", "bahubali"]
// add last 
movie.push("kgf","salar");

console.log(movie);

// remove last 
const number = [10, 11, 12, 13];
number.pop();
console.log(number);
// add first 
number.unshift(9)
console.log("unshift"+number);
// remove first
const Name = ["enamul", "sifat"]
Name.shift();
console.log(Name);

// searching 
// includes
const nums = [1, 2, 4, 3]
console.log(nums.includes(3));
console.log(nums.indexOf(2));

// Slice new array return kore 
const a = [1, 2, 3, 4, 5, 6]
console.log(a.slice(1, 5));


// splice 
const b = [10, 20, 50,60];
b.splice(1, 2);
console.log(b); 

// join 
const c = ["a","b","c","d"]
console.log(c.join("."));
// toString
console.log(c.toString());
// short 
const d = [3,1,2,5,4,6]


// reverse
const e = [3,1,2,5,4,6]
e.reverse();
console.log(e);


function plusOne(digits) {

  // Step 1: Last digit থেকে শুরু করি
  for (let i = digits.length - 1; i >= 0; i--) {

    // Step 2: যদি digit 9 না হয় → direct +1 করে return
    if (digits[i] < 9) {
      digits[i]++;   // increment
      return digits; // done, কারণ carry লাগেনি
    }

    // Step 3: যদি digit = 9 হয় → 0 বসাই (carry next digit এ যাবে)
    digits[i] = 0;
  }

  // Step 4: এখান পর্যন্ত আসলে মানে সবগুলো digit ছিল 9 (e.g., 999)
  // তাই শুরুতে 1 বসিয়ে দাও
  digits.unshift(1);

  return digits;
}


console.log(digits);













