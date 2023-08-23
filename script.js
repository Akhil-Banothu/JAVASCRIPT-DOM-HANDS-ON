// Code for Question - 1
let select = document.getElementById("text");
console.log(select);




// Code for Question - 2
let select1 = document.getElementsByTagName("h1");
console.log(select1[0]);




// Code for Question - 3
let select2 = document.getElementsByClassName('box');
console.log(select2[0]);




// Code for Question - 4
let changeText = document.getElementById('change');
changeText.innerText = "Hello World";
console.log(changeText);





// Code for Question - 5
let newText = document.getElementById('welcome');
function add() {
   console.log(newText.innerText = "Welcome to Elevation academy");
}




// Code for Question - 6
let style1 = document.getElementsByClassName('unique');
style1[0].setAttribute('id', 'heading');
style1[0].style.color = "red";
console.log(style1[0]);





// Code for Question - 7
let direction = document.getElementsByTagName('section');
function add1() {
   direction[0].style.flexDirection = 'column';
}







// Code for Question - 9
var waste = document.getElementsByClassName('watch');

setInterval(() => {
   var d = new Date();
   waste[0].innerHTML = d.toLocaleTimeString();
}, 1000);