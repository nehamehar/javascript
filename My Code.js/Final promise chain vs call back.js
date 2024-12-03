// // final promise chaining :


// function getData (dataId){ // getnextdata is callback fun as we are putting as argument that we remove as we are using promises no need of callback
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("dataId", dataId);
//             resolve("Sucess") // dataid will be 1,2,3 getdata(1), so dataid 1 and dataid 1 will print
//         }, 5000); //settimer
//     })
// }

// console("data....")
// getData(1)            // calling data 1
// .then((result) => {   // calling data 2
//     // console("data....")
//     return getData(2)  //returning data 2 will get data 2
// }).then((result) => {       // calling 3
//     console.log(result)      // print result value
// })

//getData(1)  -- calling data 1
// .then((result) => {    -- successsfull
// return getData(2) --- returing data 2
// .then((result) => {  -- successfull


// callback hell :


// function getData (dataId){ // getnextdata is callback fun as we are putting as argument that we remove as we are using promises no need of callback
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("dataId", dataId);
//             resolve("Sucess") // dataid will be 1,2,3 getdata(1), so dataid 1 and dataid 1 will print
//         }, 5000); //settimer
//     })
// }
// getData(1 , () => {   // nested callback hell is this (here we are telling to give data 1,2,3,4)
//     getData(2 ,() => {
//         getData(3,() => {
//             getData(4)
//         });
//     });
// });



// async - await :
// function getData (dataId){ // getnextdata is callback fun as we are putting as argument that we remove as we are using promises no need of callback
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("dataId", dataId);
//             resolve("Sucess") // dataid will be 1,2,3 getdata(1), so dataid 1 and dataid 1 will print
//         }, 2000); //settimer
//     })
// }

// async function alldata(){
//     console.log("getting data 1")
//     await getData(1);             
//     console.log("getting data 2")
//     await getData(2)
//     console.log("getting data 3")
//     await getData(3)
//     console.log("getting data 4")
//     await getData(4)
//     console.log("getting data 5")
//     await getData(5)
//     console.log("getting data 6")
//     await getData(6)
// }