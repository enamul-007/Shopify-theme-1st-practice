function findMax (a , b ){
    if (a> b ){
        return a;
    }else{
        return b ;
    }
    }
console.log(" Max number is" + " "  + findMax(20, 30));


function ageDetector (age){
    if (age < 18){
        return "You are a minor.";
    }
    else if (age >= 18 && age <= 60){
        return "You are an adult.";
    }
    else{
        return "You are a senior citizen.";
    }
}
console.log(ageDetector(80));

function calculateResult (number1 , number2 , oparetor){
    if (oparetor === "+"){
        return number1 + number2;
    }
    else if (oparetor === "-"){
        return number1 - number2
    }
    else if (oparetor === "*"){
        return number1 * number2;
    }
    else if (oparetor === "/"){
        if (number2 === 0){
            return "Error: Division by zero is not allowed.";
        }
        return number1 / number2;
    }
}
console.log(calculateResult(10, 5, "+"));
console.log(calculateResult(10, 0, "/"));

const  calculateTotal =  (price , quantity , discount = 0) =>{
    const subTotal = price * quantity;
    const discountAmount = subTotal * (discount /100);
    return subTotal - discountAmount ;
}

console.log(calculateTotal(2020, 3, 5));
