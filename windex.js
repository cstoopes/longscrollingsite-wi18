// // SET UP VARIABLES
// var counter = document.getElementById('counter');
// var fromTop = window.pageYOffset;
//
// // PSUEDOCODE UPDATE VARIABLE
// counter.innerHTML = "counter text";
//
// // WHEN USER SCROLLS, DO ALL OF THIS
// window.onscroll = function (){
//
//   fromTop = window.pageYOffset;
//   // TEST IT TO SEE IF WORKS
//
//   console.log(fromTop);
//
//   counter.style.top = 0 + fromTop + "px";
//
//   if(fromTop > 1000){
//     counter.innerHTML = "more than 1000 leagues";
//     counter.style.backgroundColor="red";
//   }else
//   counter.innerHTML = "counter text";
//   counter.style.backgroundColor = "green";
//   counter.style.backgoundImage = "url(YellowSubmarine.png)"
// }


// COUNTER JAVA
var positionY = window.pageYOffset;
var icon = document.getElementById("icon");
var counter = document.getElementById("counter")

window.onscroll = function () {
  var windowHeight = window.innerHeight;
  var positionY = window.pageYOffset;

  console.log(positionY + windowHeight);


// document.getElementById("counter").innerHTML = positionY + windowHeight;

document.getElementById("counter").style.top = 0 + positionY + "px";

icon.style.top = 300 + positionY  + "px";

if(positionY <= 2500){

      icon.src="rocket4.svg";
      counter.innerHTML="You died!";

  } else if(positionY > 2500 && positionY < 5000){

      icon.src="rocket3.svg";
      counter.innerHTML="We might want to turn this ship around!";

  } else if(positionY > 5000 && positionY < 7500){

      icon.src="rocket2.svg";
      counter.innerHTML="Things are getting shakey!";

  }else{

  icon.src="rocket.svg";
  counter.innerHTML="Lets go for a ride!";
 }

}







// START AT BOTTOM OF PAGE
window.onload=toBottom;

function toBottom()
{
// alert("Scrolling to bottom ...");
window.scrollTo(0, document.body.scrollHeight);
}
