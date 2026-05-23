
for (i = 1; i <=100; i++){
 if (i % 3 ==0 && i % 5 ==0){
    console.log( `${i} fizzBuzz \n` );
    
 }
 else if (i % 3 ==0){
    console.log(`${i} fizz \n`);
 }
    else if (i % 5 ==0){
        console.log(`${i} buzz \n`);
    }
    else{
        console.log(`${i} \n`);
    }

}