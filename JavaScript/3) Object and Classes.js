// objects:

// object with methods and property
// const student = {
//     name : "neha",
//     rollno : 213,
//     Marks : 56,
//     printMarks: function() {
//         console.log("marks ", name + this.Marks) // this. marks = means this marks is belongs to object student so provide the marks ofobject student

//     }
// }
// or
// function() {
//     console.log("marks ", name + this.Marks) // this. marks = means this marks is belongs to object student so provide the marks ofobject student
    
//}



// how to make or add prototype in main object
// const student = {
//     name : "neha",
//     rollno : 213,
//     Marks : 56,
//     function() {
//         console.log("marks ", name + this.Marks) // this. marks = means this marks is belongs to object student so provide the marks ofobject student

//     }
// }

// const student2 = {
//     Name : "samyak"
// }
// // if there is many new things of list we have to added then we don not have to rewrite the code or edit our last code
// // just make one object prototype of other then it will add in main object
// student2.__proto__= student

//if object & prototype have same method, object's method will used
// const student = {
//     name : "neha",
//     rollno : 213,
//     Marks : 56,
//     function() {
//         console.log("name is normal")

//     }
// }
//--->
// const student2 = {
//     Name : "samyak",
//     function() {
//         console.log("name is good")  // if we have same method of diff string, always objest's own method will print prototype will not work in method as
// the method of student2 is own and student is far so it will print student2 method as we have mentioned student2 method in object

//     }
// }
// student2.__proto__= student

// classes:
// how to create a class with object
// class tata{
//     start = () => {
//         console.log("starting date 20-10-1999")
//     }
//     ending = () => {
//         console.log("ending date right now")
//     }
// }

// let accenture = new tata(); // accecnture , hcl object which we want to add in class tata for same feature
// let hcl = new tata(); // all property and method of tata will store in hcl and accenture
 
// OR we can write 
// let accenture , hcl= new tata();
// so like this we can add many object under the class to specify same features of all object


// setting one fun in class
// class tata{
//     start = () => {
//         console.log("starting date 20-10-1999")
//     }
//     ending = () => {
//         console.log("ending date right now")
//     }
//     setbrand(brand) {
//         this.Brandname = brand; // in this when we set any object with setbrnd fun like hcl.setbrand("hcl") and putting value of brandname it will goes as argument in setbrand fun as brand argument
//                                 //then this. means same object we choose to have brand name we want to put value on brand --
//                                 // this.brandname = brand( for All calling object we can set this)
//     }
// }

// let accenture = new tata();
// let hcl = new tata();
// hcl.setbrand("hcl")