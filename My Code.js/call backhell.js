// function getData (dataId , getnextData){ // getnextdata is callback fun as we are putting as argument 
//    return new promises(( resolve, reject) =>{
//    setTimeout(() => {
        //         console.log("dataId", dataId);  // dataid will be 1,2,3 getdata(1), so dataid 1 and dataid 1 will print
        //         if (getnextData){   // calling callback fun here so if the next number we are calling it ca be print// bacically call back fun is that we are putting as argumnet in main fun
        //             // then calling in our code is callback fun
        //             getnextData()
        //         };
        //     }, 1000); //settimer})
//    
// }

// getData(1 , () => {   // nested callback hell is this (here we are telling to give data 1,2,3,4)
//     getData(2 ,() => {
//         getData(3,() => {
//             getData(4)
//         });
//     });
// });


// we can use promises instead of call back also
// callback code is difficult to understand as compare to promises