// changes the color of the header to green
var header = document.getElementById("myHeader")
header.style.background = "green"
header.style.color ="white"

//var button = document.getElementById("myButton")
//button.addEventListener("click", function() {
  //  button.style.background = "red"
//  })


var btn = document.getElementById("myButton")
var myTitle = document.getElementById("title")

btn.addEventListener("click", function(){
    // changes the background colour of the button when clicked
    btn.style.background = 'orange'

    //changes the text content of H1 when button is clicked
    myTitle.textContent = 'Learning Javascript is fun'
})

