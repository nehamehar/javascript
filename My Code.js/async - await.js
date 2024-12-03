// aync can use in any function it always gives auto promises means if you write async itmeas
// to return the promises compulsory

// async function hello (){
//     console.log("hellooo")
// }


//async - await 
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

// IIFE -- Immediately invocked function expression
// we use if we want to call only one time in await so we do not have to create function like async
// (async function (){
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
// })();