// In simple javaScript(Es5)

// if(true){
//     var name = "fraz";
// }

// console.log(name)




// In Es6

// if(true){
//     let name = "fraz";
// }
// console.log(name)






// In Es5

// var lastName = "Aslam";
// var lastName = "Sarfraz";
// console.log(lastName)









//In Es6

// let lastName = "Aslam";
// let lastName = "Sarfraz";
// console.log(lastName) //error










//In Es6

// let lastName;
// lastName = "Sarfraz"

// console.log(lastName)

















//In Es6

// const school = "SAYLANI";
// // const school = "SAYLANI";


// var obj = {
//     schoolName : school
// }

// console.log(obj)










// Template literals

// let firstName = "Sarfraz";
// let lastName = "Aslam";

// // firebase.database().ref(`karachi/saylani/webandmobile/${firstName}${lastName}`)


// console.log(`My name is ${firstName}  ${lastName}`)











// Spread Operators
// way 1 

// var students1 = ["Sarfraz","Aslam"]
// var students2 = ["Amaan","Chingari"]

// var merge = students1.concat(students2)

// console.log(merge)

//Another Way

// var students1 = ["Sarfraz","Aslam"]
// var students2 = [...students1,"Amaan","Chingari"]

// console.log(students2)







// object Destruction 



// var student ={
//     name : "fraz",
//     school : "saylani",
//     roll : 123
// }

// let {name,school,roll} = student;

// console.log(school)

















// ternary operators

// simple js(Es5)
// var age = 20;
// if(age> 30){
//     console.log("30 se bara hai")
// }
// else{
//     console.log("30 se chota hai")
// }


// var age = 40;
// var check = age > 30 ? "30 se bara hai" : "30 se chota hai"
// console.log(check)






// var age = 40;
// var check = age > 30 && age <50 ?
//  "30 se bara hai" : 
//  "30 se chota hai"
// console.log(check)










// var bool = true;
// var name = bool && "fraz"

// console.log(name)





// var bool = false;
// var name = bool && "fraz"

// console.log(name)












// Async or sync

// setTimeout(function(){
//     console.log("Number 1")
// },1000);
// console.log("Number 2")
// console.log("Number 3")

// var name ;
// setTimeout(function(){
//    name = "Sarfraz Aslam"
// },1000);
// console.log(name)







// promise 


// //Example #01
// let promise = new Promise(function(resolve,reject){
//     var zinger = "Available";
//     if(zinger === "Available"){
//         resolve("It's Available")
//     }
//     else{
//         reject("Not Available")
//     }
 
// })

// promise.then(function(data){
//     console.log("Resolve==>>",data)
// })
// .catch(function(error){
//     console.log("Reject==>>",error)
// })





// let promise = new Promise(function(resolve,reject){
//     firebase.database().ref("users").on("child_added",function(data){
//        if(data.val()){
//            resolve(data.val())
//        }else{
//            reject("Something went wrong")
//        } 
//     })
// })


// promise.then(function(data){
//     console.log("Resolve ==>>",data)
// })
// .catch(function(err){
//     console.log("Error",err)
// })
















// let promise = new Promise(function(resolve,reject){
       
//            if(true){
//                console.log("Checking info")
//             setTimeout(()=>{
//                 resolve("It's Resolve")
//             },3000)   
            
            
//            }else{
//                reject("Something went wrong")
//            } 
//     })
    
    
//     promise.then(function(data){
//         console.log("Resolve ==>>",data)
//     })
//     .catch(function(err){
//         console.log("Error",err)
//     })