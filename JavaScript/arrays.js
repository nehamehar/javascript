// arrays

// let num = ["k", "l", "o", "y"]
// console.log(num)


// arrays indices
// let num = [4,34,45,28,25];
// console.log (num)

// Looping in arrays
// for:

// let num = ["neha", "mehar" ,"samyak", "jain"];
// for( let i=0; i<num.length; i++){
//     console.log(num[i])
//     console.log(i)
// }

// for of loop
// let num = ["neha", "mehar" ,"samyak", "jain"];
// for(i of num){
//     console.log(i)
// }
// using uppercase:
// let num = ["neha", "mehar" ,"samyak", "jain"];
// for(i of num){
//     console.log(i.toUpperCase)
// }

//Methods in arrays

// push:
// let u = ["neha", "mehar", "samyak", "jain"];
// console.log(u.push("wends"));
// console.log(u)
// pop:
// let u = ["neha", "mehar", "samyak", "jain"];
// console.log(u.pop());
// console.log(u)
// toString:
// let u = ["neha", "mehar", "samyak", "jain"];
// console.log("string -" ,u.toString());
// console.log(u)

// concat ():
// let u = ["neha", "mehar"];
// let y = ["samyak", "jain"];
// console.log(y.concat(u));


// unshift:
// let u = ["neha", "mehar","samyak", "jain"];
// console.log(u.unshift("Wends"));
// console.log(u)

// shift:
// let u = ["neha", "mehar","samyak", "jain"];
// console.log(u.shift());
// console.log(u)

//slice:

// let u = ["neha", "mehar","samyak", "jain"];
// let y = u.slice(1,3);
// console.log(y)

// splice
// let u = [1,2,3,4,5,6,7];
// u.splice(1,4,78,89);


// Map array method returning array
// let x = [100,9,10]
// x.map((value)=>{
//     return value;
// })

// console.log(x);
// for returning only value put console.log(value)replace of return


// filter array
// let x = [100,9,10,7]
// let u = x.filter((value)=>{
//     return value % 2==0;
// })

// console.log(u);


// reduce array
// let x = [100,9,10,7,7,6,5,4]
// const sum = x.reduce((result,curr)=>{
//     return result + curr;
// })

// console.log(sum);

// reduce method of largest num in Array
// let x = [100,9,10,7,7,6,5,4]
// const sum = x.reduce((result,curr)=>{
//     return result> curr ? result : curr // : use as else 
// })

// console.log(sum);