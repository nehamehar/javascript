// promises: to reduce callback hell we use promises-----------------


// let promises = new Promise((resolve , reject) => { // two fun reejct resolve
//     console.log ("tell me the state of my order") //till here console say pending state
//     resolve("there is the issue is been resolve now") //(We are calling function here )reject or the resolve the item it will autoomatically give these result
// }) 



// but in general program we didnot create the promise object when we request the api for data API return promise then only we try to take data from promise while dealing with API //others created promises and we use that promise
//API EXAMPLE--------------
// function getData (dataId , getnextData){    //GETDATA i API here
//     return new Promise((resolve , reject) => {   //API would not give promises directly, it will return the promises as (new peomise)
//             setTimeout(() => {                                 //    |
//             console.log("dataId", dataId);                    //|              work done 
//             resolve("it's been resolve")                      
//             if (getnextData){                               //|
//                 getnextData()
//             };                                              //
//         }, 1000);                                             //|
//     })
// }

// PROMISES USING RESOLVE REJECT PARAMETER ----------
// const getPromise = () => {
//     return new Promise((resolve, reject) => {
//     console.log("issue is promise") // it will run compulsory with resolve issue or reject issue
//     resolve("issue is been resolve")  // resolve give msg as issue.....we put if resolve value --- parameter (result)
//     // reject("error")  // if reject value -- patameter(error)
//     })
// }

// //if the issue is resolve we want to execute this also for that
// let promise1 = getPromise();  //for calling getpromise for resturnig the value into promise1
// promise1.then((result) => {    // if promise1 is resolve .then fun execute through result we can access proper value of resolve
//     console.log("fullfill" , result)
// })
//.catch((err) => {               //if promise1 is reject .then fun execute through error we can access proper value of rejcet
//     console.log("not fullfill")
// });

//---------- console--






//after resolve  
// let n = getData("hello")  
// undefined
// n
// Promise {<pending>}[[Prototype]]: Promise[[PromiseState]]: "pending"[[PromiseResult]]: undefined  // only when we put high time
// coding.js:12 dataId hello
// n
// Promise {<fulfilled>: "it's been resolve"}[[Prototype]]: Promise[[PromiseState]]: "fulfilled"[[PromiseResult]]: "it's been resolve" // wht we type in resolve 
