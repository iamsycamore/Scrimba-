//var myButton = document.getElementById("btn")
//var myTitle = document.getElementById("title")
//var counter = 0

//myButton.addEventListener("click", function(){

  //  counter += 1
    //console.log(counter)

    //myButton.textContent = counter
//})

var number = 10
console.log(number)

var username = 'rick123'
var password = 'aL8#klfo'

if(username !== 'rick123'){
    console.log('username is incorrect')
} else if(password !== 'aL8#klfo'){
    console.log("password is incorrect")
} else {
    console.log("Access Granted")
}


var score = 61;

if(score >= 80){
  console.log('Grade is distinction')
} else if (score >= 60){
  console.log('Grade is Credit')
} else if(score >=50){
  console.log('Grade is pass')
} else{
  console.log('Grade is Fail')
}

/////////////////////
// Logic Operators //
/////////////////////

// Another category in the operator family

// 3 main logic operators

var username = "joe"
var password = "joe123"

// And
// &&
if(username === "jo" && password === "joe123"){
    console.log("Access granted")
} else {
    console.log("Username or password are incorrect")
}

// Or
// ||
if(!username || !password){
    console.log("Please provide username and password")
} else {
    console.log("Both were provided")
}


// Negation
// !

//loops and arrays part 1

//Challenge: you are at your shift at the shop and the owner has left you with a long list of
//things in the inventory. He has asked you to find out how many 'mustard' bottles you have in 
//stock. Use a for loop to count the amount of 'mustard' you have.

const shopInventory = ['milk', 'Cheddar', 'mustard', 'ketchup', 'olive oil', 'cheddar', 'milk', 'garlic', 'mayo', 'carrots', 'cheddar', 'Mustard', 'mayo', 'orange juice']

let count = 0

for (let i = 0; i < shopInventory.length; i++) {
    if ( shopInventory[i] === 'mustard') {
        count += 1
    }
}

console.log(count)