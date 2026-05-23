const userName = prompt("Enter your name:");
const income = parseFloat(prompt("Enter your income:"));
const numberOfExpenses = parseInt(prompt("How many expenses do you have?"));
if (isNaN(income) || isNaN(numberOfExpenses) || income <= 0 || numberOfExpenses < 0 ){
    console.log("Invalid input ");
    
}else{

}let totalExpenses = 0;
for (let i = 0; i <= numberOfExpenses; i++ ){
    let expense = parseFloat(prompt(`Enter expense ${i}:`));
    if (isNaN(expense) || expense < 0){
        console.log(`Invalid input for expense ${i}`);
        expense = 0;
        
    }
    totalExpenses += expense;
}


const tax = income * 0.1;
const netIcome = income - tax;
const balance = netIcome - totalExpenses;
const savings = balance * 0.2;
let overspendingMassage = '';
if(totalExpenses> income){
    overspendingMassage = `${userName} Warning: Your expenses exceed your income! Please review your spending habits.`;
}
console.log(`Name: ${userName}`);
console.log(`Total income : $${income} `);
console.log(`Total expenses: $${totalExpenses}`);
console.log(`Tax: $${tax}`);
console.log(`Net income: $${netIcome}`);
console.log(`Remaining Balance $${balance}`);
console.log(`Savings: $${savings}`);
console.log(finalStatus){
    if(overspendingMassage){
        console.log(overspendingMassage);
    }
};


