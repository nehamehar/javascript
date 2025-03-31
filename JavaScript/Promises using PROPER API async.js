// function asyncFunc1 () {    
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("issue is resolve")
//         }, 4000);
//     })
// }

// function asyncFunc2 () {    
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data2")
//             resolve("issue is resolve for data2 ")
//         }, 8000);
//     })
// }

// Q as we want first data 1 fatch then only dtat 2 (rn it's giving data1 data2 same time then only print msg in perticular tiem we want fisrt data1 print then only data 2 msg show for that
// we do promises chaining)
// console.log("Fetching some data 1")    // we do only this part .then one as reutn upper part is API do
// let promise1 = asyncFunc1()    // calling fun and put it into variable
// promise1.then((res) =>{
//     console.log ("Here is the data1 -- ", res)
// })

// console.log("Fetching some data 2")  //CAll fun asyncfun2
// let promise2 = asyncFunc2()         // calling fun and put it into variable
// promise2.then((res) =>{
//     console.log ("Here is the data2 -- ", res)
// })

// for using this typeof code it will print both fun together but we want first fun print then sec after taking time
//for that weuse promises chaining means one then unser another
// for that we have to use
// console.log("Fetching some data 1")    // we do only this part .then one as reutn upper part is API do
// let promise1 = asyncFunc1()    // calling fun and put it into variable
// promise1.then((res) =>{
//     console.log ("Here is the data1 -- ", res)
//     console.log("Fetching some data 2")   // we do only this part .then one as reutn upper part is API do
//     let promise2 = asyncFunc2()    
//     promise2.then((res) =>{
//         console.log ("Here is the data2 -- ", res)})
// })


// here 
//let promise1 = asyncFunc1() 
//promise1.then((res) =>{
//    console.log("Fetching some data 2")
// we can write ----------------
//asyncFunc1().then((res) =>{
//    console.log("Fetching some data 2")



// promise chain in better 
// console.log("Fetching some data 1") 
// asyncFunc1().then((res) =>{
//     console.log("Fetching some data 2")  
//     asyncFunc2().then((res) =>{
//         console.log ("Here is the data2 -- ", res)})
// })