/////////////////////////////////////////
// Complex Data Types - Objects Part 2 //
/////////////////////////////////////////

// Objects: describe a peice of data in depth
var larry = {
    name: "larry",
    age: 20,
    friends: ["john", "lisa", "al"],
    isPetOwner: true,
    greeting: "Hello Friend!",
    sayGreeting: function(){
        console.log(this.greeting)
    }
}

// console.log(larry.name)
larry.sayGreeting()

// dot notation
// larry.age

// bracket notation
// larry["age"]

// Functions & Methods
    // Function: a type of data that allows us to execute specific code when/as needed
        // login
    // Method: A function that is a property of an object
    
// this keyword inside of an object refers to itself

var car = {
    model: "honda",
    wheels: 4,
    honkSound: "beerp",
    registeredDrivers: ['jane', 'john'],
    hasHadAccident: false,
    honk: function(){
        console.log(this.honkSound)
    }
}

// console.log(car.model)
// console.log(car["wheels"])
car.honk()

//////////////////
// Conditionals //
//////////////////

// How we ask our program a question about our data and then run a specific set of code depending on the answer.

// var color = "yellow"

// if(color === "red"){
//     console.log("It is red!")
// } else if(color === "yellow"){
//     console.log("It is yellow!")
// } else if(color === "black"){
//     console.log("It is black!")
// } else {
//     console.log("The color is not red or yellow")
// }

var username = 'rick123'
var password = 'aL8#klfo'

if(username !== 'rick123'){
    console.log('username is incorrect')
} else if(password !== 'aL8#klfo'){
    console.log("password is incorrect")
} else {
    console.log("Access Granted")
}