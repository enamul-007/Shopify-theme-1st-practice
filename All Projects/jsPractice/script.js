// const form = document.querySelector("#regForm");
// const nameInput = document.querySelector("#name");
// const emailInput = document.querySelector("#email");
// const passInput = document.querySelector("#password");
// const nameError = document.querySelector("#nameError");
// const emailError = document.querySelector("#emailError");
// const passError = document.querySelector("#passwordError");
// const successMsg = document.querySelector("#successMessage");

// const { user } = require("pg/lib/defaults");


// const showError = (input , errorDiv)=>{
//     input.classList.add("error");
//     input.classList.remove("success");
//     errorDiv.classList.add("show");
// }

// const showSuccess = (input , errorDiv)=>{
//     input.classList.add("success");
//     input.classList.remove("error");
//     errorDiv.classList.remove("show");
// }

// const validateName = ()=>{
//     const value = nameInput.value.trim();
//     if(value.length <3){
//         showError(nameInput , nameError);
//         return false;
//     }
//     showSuccess(nameInput , nameError);
//     return true;
// }


// const validateEmail = ()=>{
//     const value = emailInput.value.trim();
//     if(!value.includes("@") || !value.includes(".")){
//         showError(emailInput , emailError);
//         return false;

//     }
//     showSuccess(emailInput , emailError);
//     return true;
// }

// const validatePassword = ()=>{

//     const value = passInput.value.trim();
//     if(value.length < 6){
//         showError(passInput , passError);
//         return false;
//     }
//     showSuccess(passInput , passError);
//     return true;

// }

// nameInput.addEventListener("input" , validateName);
// emailInput.addEventListener("input" , validateEmail);
// passInput.addEventListener("input" , validatePassword);

// form.addEventListener("submit" , (e)=>{
//     e.preventDefault();
//     const isNameValid = validateName();
//     const isEmailValid = validateEmail();
//     const isPassValid = validatePassword();

//     if(isNameValid && isEmailValid && isPassValid){
//         form.style.display = "none";
//         successMsg.classList.add("show")
//     }
// })


// function greet(name){
//     console.log("Hello , " + name + "!");

// }

// function processUser (name , callbackFunction){
//     console.log("Loading User");
//     callbackFunction(name);

// }

// processUser("Enamul" , greet)


// console.log("Welcome");

// const promise1 = new Promise((resolve , reject)=>{
//     let completedPromise = true;
//     if(completedPromise){
//         resolve("promise completed")
//     }else{
//         reject("not completed task1")
//     }
// })

// promise1.then((res)=>{
//     console.log(res);

// })
// .catch((err)=>{
//     console.log(err);

// })

// console.log("End");

// const task1 =()=>{
//     return new Promise((resolve , reject)=>{
//         resolve("task 1 is completed")
//     })
// }

// const task2 =()=>{
//     return new Promise((resolve , reject)=>{
//         resolve("task 2 is completed")
//     })
// }

// const task3 =()=>{
//     return new Promise((resolve , reject)=>{
//         resolve("task 3 is completed")
//     })
// }


// console.log("I ordered pizza.");

// setTimeout(function(){
//     console.log("Pizza is coming, now it's time to eat.");

// }, 2000)
// console.log("Why am I sitting here so long? I'm going to talk to my friends.");


// function goToMarket ( item , callback){
//     console.log("Going to market to buy " + item);

//    setTimeout(function(){
//     console.log(item +  " buy this");
//     callback(item);

//    }, 3000)
// }

// function informThis(item){
//     console.log("I bought this. " + item);


// }

// goToMarket("Banana" , informThis)

// function thisLogin (email , password , onSuccess , onFail){
// console.log("try to login ");
// setTimeout(function(){
//     if (email === "enamul@gmai.com" && password == "1122"){
//         onSuccess("Enamul");
//     }
//     else {
//         onFail("Invalid Email or Password")
//     }
// }, 2000)

// }

// function isLogin(name){
//     console.log("Welcome" + " " + name +"!" );

// }

// function isError(error){
// console.log("Sorry Try again");

// } 

// thisLogin("enamul@gmai.com" , "1122" , isLogin , isError)


// const placeOrder = new Promise(function (resolve , reject){
//     console.log("processing order ");

//    setTimeout(function(){
//     const stockAvailable = true ;
//     if(stockAvailable){
//         resolve("Product delivered")
//     }else{
//         reject("Out of stock")
//     }

//    },2000)
// });

// placeOrder
// .then(function(message){
//     console.log(message);

// })
// .catch(function(error){
//     console.log(error);

// })


// function login() {
//     return new Promise(function (resolve) {
//         setTimeout(function () {
//             console.log("Login Successful");
//             resolve({ userId: 1, name: "Enamul" })

//         }, 1000)
//     })
// }

// function getProfile(user) {
//     return new Promise(function (resolve) {
//         setTimeout(function () {
//             console.log("I have get my profile ");
//             resolve({ ...user, city : "dhaka" })
//         }, 1000)
//     })
// }


// function getOrder(profile) {
//     return new Promise(function (resolve) {
//         setTimeout(function () {
//             console.log("I have Got my Order ");
//             resolve({ user: profile, orders: ["Nike Shoes", "I Phone 17 pro max "] })

//         },1000)
//     })
// }


// login()
// .then(function(user){return getProfile(user)})
// .then(function(profile){return getOrder(profile)})
// .then(function(data){
//     console.log("All done");
//     console.log(data.user.name + "order" , data.orders);

// })
// .catch(function(error){
//     console.log("Error",error);

// })



// const placeOrder = new Promise (function(resolve , reject){
//     console.log("Order Processing ...");

//     setTimeout(function(){
//         const stockAvailable = false;
//         if(stockAvailable){
//             resolve("Product delivered !")
//         }else{
//             reject("Product Out Of Stock")
//         }
//     }, 2000)

// })


// placeOrder
// .then(function(message){
//     console.log(message);

// })
// .catch(function(error){
//     console.log(error);

// })

// function getUser (){
//     fetch("https://jsonplaceholder.typicode.com/users/1")
//     .then(function(res){
//         return res.json();
//     })
//     .then(function(user){
//         console.log(user.name);
//     })
//     .catch(function(error){
//         console.log("Error : " , error);

//     })
// }

// getUser()

// async function get_User() {
//     try{
//         const response = await fetch("https://jsonplaceholder.typicode.com/users/1")
//         const user = await response.json();
//         console.log(user.name);

//     } catch(error){
//         console.log("Error :" , error);

//     }
// }

// get_User();

// async function PlaceOrder() {
//     console.log("I sat at the restaurant");

//     const pizza = await getPizza();
//     console.log("Get this " , pizza);
//     console.log("Eating"); 
// }

// function getPizza (){
//     return new Promise(function(resolve){
//         setTimeout(function(){
//             resolve("Pizza with white souse")
//         },2000)
//     })
// }

// PlaceOrder()
// console.log("iam something working");

// async function DataAnteci() {
//     try{
//         console.log("Date anteci");
//         const response = await fetch("https://jsonplaceholder.typicode.com/users/1")
//         console.log("Response Status :" , response.status);
//         if(!response.ok){
//             throw new Error("Data paowa jay nai ")
//         }
//         const user = await response.json();
//         console.log("Name : " , user.name);
//         console.log("Email :" ,user.email );
//         console.log("City :" , user.address.city);
//     }catch{
//         console.log("Error" , error.message);

//     }
// }

// DataAnteci()

// async function allUser() {

//  try{
//      console.log("All user here");

//     const response = await fetch("https://jsonplaceholder.typicode.com/users")
//     const user = await response.json();


//     console.log("Total user : " , user.length);
//     console.log("____________________");
//     user.forEach(function(user){
//         console.log(user.name + "  " + "→" + " " + user.email);

//     })
//  }  catch(error){
//     console.log("Error :" , error.message);

//  } 

// }

// allUser()

const loadBtn = document.querySelector("#loadBtn")
const loading = document.querySelector("#loading")
const error = document.querySelector("#error")
const userList = document.querySelector("#userList")
const loginBtn = document.querySelector("#loginBtn");

const email = document.querySelector("#email");
const password = document.querySelector("#password");

const loginSection = document.querySelector("#loginSection");
const userSection = document.querySelector("#userSection");

const loginError = document.querySelector("#loginError");

loginBtn.addEventListener("click", async function () {

    const emailValue = email.value.trim();

    const passwordValue = password.value.trim();

    if (emailValue === "admin@gmail.com" && passwordValue === "1234") {

        loginSection.style.display = "none";

        userSection.style.display = "block";

        loadBtn.click();

    } else {

        loginError.style.display = "block";

        loginError.innerHTML = "Invalid Email or Password";

    }

});

loadBtn.addEventListener("click", async function () {
    loading.style.display = "block"
    error.style.display = "none"
    userList.innerHTML = ""
    loadBtn.disabled = true

    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users")

        if (!response.ok) {
            throw new Error("Data Not Found")
        }
        const users = await response.json()
        userList.innerHTML = users.map(function (user) {
            return `
          <div class="user-card">
                            <div class="user-name">👤 ${user.name}</div>
                            <div class="user-email">📧 ${user.email}</div>
                            <div class="user-city">📍 ${user.address.city}</div>
                        </div>
        `
        }).join("")
    } catch (err) {
        error.style.display = "block"
        error.textContent = "Error :" + err.message
    } finally {
        loading.style.display = "block"
        loadBtn.disabled = false
        loading.style.display = "none"
    }


})
