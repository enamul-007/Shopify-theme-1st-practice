function doOparation (a , b , opartion ){
    return opartion(a,b);
}

const addition = (a,b)=> a + b ;
const substraction = (a,b)=> a - b ;
const multiplication = (a,b ) => a * b;
const division = (a,b)=> a/b;


console.log(doOparation(10,15 , addition));
