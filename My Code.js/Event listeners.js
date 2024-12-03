// event listeners on same event different work done
// let n = document.querySelector("div")
// n.addEventListener("click",() => {
//     console.log("Neha is Samyak's Love")
// })

// n.addEventListener("click",() => {
//     console.log("Neha is Samyak's Love - yes")
// })

// execute event object with event listeners we can also write this for event type target know
// n.addEventListener("click",(event) => {
//     console.log("Neha is Samyak's Love - yes")
//     console.log(event)
//     console.log(event.type)
//     console.log(event.target)

// })

// for removing any event in event listeners 
// let n = document.querySelector("div")
// n.addEventListener("click",() => {
//     console.log("Neha is Samyak's Love")
// })

// n.addEventListener("click",(event) => {
//     console.log("Neha is Samyak's Love - yes")
//     console.log(event)
//     console.log(event.type)
//     console.log(event.target)

// })

// n.addEventListener("click",() => {
//     console.log("Neha is Samyak's Love 567")
// })

// const u = () =>{
//     console.log("Neha is Samyak's Love 0000")
// }
// n.addEventListener("click", u)
// n.removeEventListener("click", u) // n must be main veriable from that u variable will remove


// making color changig button white to black using event listerner
// making dark mode vs light mode button 
// let n = document.querySelector("button")
// let m = "dark";
// n.addEventListener("click",() => {
//     if (m == "dark"){ // == m is qual to dark
//         m = "light"; // m is assiging to light
//         document.querySelector("body").style.backgroundColor="white"
//     }
//     else{
//         m = "dark" 
//         document.querySelector("body").style.backgroundColor="black"
//     }
//     console.log(m)
// })

//or 

// let n = document.querySelector("button")
// let body = document.querySelector("body")
// let m = "dark";
// n.addEventListener("click",() => {
//     if (m == "dark"){ // == m is qual to dark
//         m = "light"; // m is assiging to light
//         body.classList.add("box")
//         body.classList.remove("box1")
//     }
//     else{
//         m = "dark" 
//         body.classList.add("box1")
//         body.classList.remove("box")
//     }
//     console.log(m)
// })

// in this question we use to use css for styling in wgich first we add class in body by classlist.add and then applying styling in css we do not use html coz we can not use classlist.remove in html only also we need to add fist element ansd remove second then add second remove first

// CSS CODE FOR THIS
// .box{
//     background-color: black;
//     color: aliceblue;
// }

// .box1{
//     background-color: aliceblue;
//     color: black;
// }

// HTML CODE
{/* <body>
    <button class="box"> Change Mode</button>
    <p class="box2" style="font-size: larger;">Heyy all</p>
    <div>here is your selective</div>
    <script src="coding.js"></script>
</body>  */}