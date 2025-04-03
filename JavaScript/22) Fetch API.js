// fetch api :-----

// this is how we send request to API Using link ----

// const URL = "https://testbooru.donmai.us.";

// const getFacts= async () => {
//     console.log("getting data")
//     let response = await fetch(URL)  await as it is returning promises
//     console.log(response) //JSON FORMAT
// }

// getfacts -- function name
// for making arrow fun async we write it before that
// reponse is object that we use in API mostly in get request also recive


//random api using fetch data



// const URL = "https://api.jikan.moe/v4/anime?q=新世紀&sfw";
// const para = document.querySelector("#neha")
// const button = document.querySelector("#button") 


// const getFacts= async () => {
//     console.log("getting data")
//     let response = await fetch(URL)  //1st promise
//     console.log(response) 
//     let data = await response.json()  // 2nd promise
//     para.innerText = data.data[0].background  // under para innertext use to put particular text 
// }
// button.addEventListener("click", getFacts ) // by clicking getfacts fun will show on webpage