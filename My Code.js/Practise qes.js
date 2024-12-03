// prompt

// let num=prompt("Enter any number");
// let number;
// if(num%5===0){
//     console.log("This number is multiply of 5");
// }
// else{
//     console.log("This number is not multiply of 5");
// }

// multi condition 
// let scores = prompt("Give your scores");
// if (scores>=80 && scores<=100){
//     console.log(scores ,"Your grade is A");
// }
// else if (scores>=70 && scores<=89){
//     console.log(scores ,"Your grade is B");
// }
// else if (scores>=60 && scores<=69){
//     console.log(scores ,"Your grade is C");
// }
// else if (scores>=50 && scores<=59){
//     console.log(scores , "Your grade is D");
// }
// else if (scores>=0 && scores<=49){
//     console.log(scores , "Your grade is F");
// }

// loop:
// print even number from 1 - 100 using loop and conditional statement if
// for ( num=0; num<=100; num++){
//     if (num%2===0){
//         console.log("Even num" , num);
//     }
// }

// maling guess game 
// let lucky = 43;
// let num = prompt ("Guess to win this game put value 25-75");

// while ( num != lucky){
//     num = prompt(" You have entered the wrong value, try again HINT-IT'S 2 DIGIT NUM BTW 1-5"); //PROMPT Always give string value in retuen so using prompt do no use ==, use =

// }
// console.log("Congrats you got the lucky num, Thank you!");

// using prompt creating user name wih username lenght by putting any name
// let Name = (prompt("Enter your name :"));
// name3 = Name.length;
// name2 = `@${Name}${name3}`;
// console.log(name2);

// array of student - [85,97,44,37,76,60] findavg of marks of class

// formula of finding avg = sum of all score/ total index 
// let marks = [85,97,44,37,76,60];
// let u = 0;
// for(i of marks){
//     console.log("Marks =",i);
//     u = i+u;
// }
// console.log("Average marks of entire class" , u/marks.length)

// calculating total discount on item as the discount is 10% 
// item [250,645,300,900,50]

// let item = [250,645,300,900,50];
// // for finding 10% disc - formula (each item / discount also - that vaule from devideone)
// let u = 0;
// for(i of item){
//     let y = i/10;
//     item[u]= item[u]-y;
//     console.log("item after discount=", item[u]);
//     u++
// }


// add and remove item
// let u = ["bloomberg" , "Microsoft" ," Uber", " Google" , "IBM" , " Netflix"];
// u.splice(0,1);
// u.splice(1,1, "Ola");
// u.push("Amazon")

// find vowels in str of functiom 
// function vowelcount (str) { //parameter act like variable
//     let count = 0;
//     for (i of str){
//         if(i == "a"|| i == "e"|| i == "i"|| i == "o"|| i == "u") ||means ya phir 
//         count++
//     }
//     console.log(count)
// }
// using arrow fun 
// const vowelcount = (str)=>{ //parameter act like variable
//     let count = 0;
//     for (i of str){
//         if(i == "a"|| i == "e"|| i == "i"|| i == "o"|| i == "u")
//         count++
//     }
//     console.log(count)
// }

//square using foreach method 
// let arr = [1,2,3,4,5,6,7];
// arr.forEach((value)=>{
//     console.log(value*value);
// });


// making an array of hieghest scored marks of 90 + using array
// let x = [100,91,95,7,70,93,99,45]
// const sum = x.filter((result)=>{
//     return result > 90 ;
// })

// console.log("the number of student score in class " , sum);

//reduce method using multiply sum and print 1 to n numbers
// let n = prompt("enter value of n ")
// let x = [];
// for( let i = 1; i<=n; i++){
//     x[i-1] = i ;
// }
// console.log(x)
// const sum = x.reduce((x, curr) => {
//     return x + curr
// })
// console.log("total sum of array : ", sum)
// const fac = x.reduce((x, curr) => {
//     return x * curr
// })
// console.log("factorial of an array : ", fac)

// making dark mode vs light mode button 
// let n = document.querySelector("button")
// let m = "light";
// n.addEventListener("click",() => {
//     if (m == "light"){
//          m = "dark"
//         document.querySelector("body").style.backgroundColor="black"
//     }
//     else{
//         m = "light";
//         document.querySelector("body").style.backgroundColor="white"
//     }
//     console.log(m)
// })

// by hover make changes in webpage
// let n = document.querySelector("div")
// let m = document.querySelector("body")
// n.addEventListener("mouseover",() => {    
//     n.classList.add("box")
//     m.classList.remove("box1")
// })
// m.addEventListener(("mouseout"), () =>{
//     m.classList.add("box1")
//     n.classList.remove("box")
// })
//CSS---
// .box{
//     border: 10px, black;
//     color: rgb(77, 11, 184);
// }

// .box1{
//     background-color: blueviolet;
//         color: rgb(134, 165, 42);
// }
//HTML---
//{/* <body class="box1"></body> */}//
 //<div class="box" style="height: 120px; width: 120px; background-color: rgb(255, 111, 0);">here is your selective</div>
//<script src="coding.js"></script>//




// classes making qes using two properties and on method to create a class
// class user{
//     constructor(name , email){
//         this.name = name;
//         this.email = email;
//         console.log("hello")
//     }
//     viewdata(){
//         console.log("you can view website data")
//     }
// }

// myobj = new user("neha", "nehamehar31@gmail.com");

//adding one more method 
// class user{
//     constructor(name , email, data ){
//         this.name = name;
//         this.email = email;
//         this.data =  data ;
//         console.log("hello")
//     }
//     viewdata(){
//         console.log("you can view website data")
//     }
// }
// class Admin extends user{
//     constructor(data){ //for process the info of method editdata we need constructor
//         super(data) //passing value to parent constructor
//     }
//     editdata(){
//         console.log("you can edit")
//     }
// }



// myobj = new user("neha", "nehamehar31@gmail.com", "it's legal info");