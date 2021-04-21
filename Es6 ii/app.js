// let obj = {
//     name : "Sarfraz",
//     email : "Sarfrazaslam2015@gmail.com"
// }

// // let name = obj.name;
// // console.log(name)


// let {name,email} = obj;
// console.log(email)











//Ary destruction




// let arr = ["ghous","basit","umair"];

// // let name1 = arr[0];
// // let name2 = arr[1];

// let [name1,name2,name3] = arr;

// console.log(name1)


















// function expression

// let foo = function () {
// console.log("hello world")
// }
// foo()
















// Arrow function

// let hello = () => {
//     console.log("I am Arrow Function")
// }

// hello()









// let helo = (name) => {
//     console.log(`Hello ${name}`)
// }

// helo('Sarfraz')




// let helo = name => {
//     console.log(`Hello ${name}`)
// }

// helo('Sarfraz')



// let helo = (name,age) => {
//     console.log(`Hello ${name}\nYour Age is ${age}`)
// }
// helo('Sarfraz',22)





// let hello = () =>{
//     return "Sarfraz"
// }

//console.log(hello())








// let hello = _ =>{
//     return "Sarfraz"
// }

// console.log(hello())





// let hello = () => "fraz"

// console.log(hello())











// Example

// let getData = (render_data) => {
//     setTimeout(()=>{
//         render_function("Amaan")
//     },3000)
// }

// let render_function = (name) =>{
//    console.log(name)
// }

//  getData(render_function)













//Arry function


// let arr = [{name: "Sarfraz",age: 22},{name:"Fraz",age:25}]
// let filter = arr.filter((a) =>{ return true})
// console.log(filter)



//or



// let arr = [{name: "Sarfraz",age: 22},{name:"Fraz",age:25}]
// let filter = arr.filter(function (a){
//      return true
//     })
// console.log(filter)






// let arr = [{name: "Sarfraz",age: 22},{name:"Fraz",age:25}]

// let filter = arr.filter((a) =>{
//      return a.age === 22
//     })

// console.log(filter)







// let arr = [{name: "Sarfraz",age: 22},{name:"Fraz",age:25}]

// let filter = arr.filter((a) =>{
//      return a.age > 22
//     })

// console.log(filter)














// Search


// let name = "fraz";
// let search = "fr"


// if(name.startsWith(search)){
//     console.log(name)
// }













// let name = "sarfraz";
// let search = "z"


// if(name.endsWith(search)){
//     console.log(name)
// }














// Array Map

// let arr = [2,3,4,5];
// console.log(arr)
// let mul = arr.map( a => a*2)
// console.log(mul)



// let arr = [{name: "sarfraz"},{name:"fraz"}];
// console.log(arr)

// let mul = arr.map( a => a.name = "Muhammad")
// console.log(mul)










// let arr = [{name: "sarfraz"},{nickname:"fraz"}];
// console.log(arr)

// let mul = arr.map( a =>{
// document.getElementById("table").innerHTML = a.name
// })

// console.log(mul)















// Class

// class Student{
//     constructor(name,email){
//         this.name = name;
//         this.email = email;
//     }
// }


// let student1 = new Student('Fraz','sarfrazaslam2015@gmail.com')
// console.log(student1)







class Student{
    constructor(name,email){
        this.name = name;
        this.email = email;
    }
}

class School extends Student {
    constructor(name,email,school){
        super(name,email)
        this.school = school
    }
}

let student1 = new School('Sarfraz','sarfrazaslam2015@gmail.com','saylani')

console.log(student1)