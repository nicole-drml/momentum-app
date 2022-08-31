const input = document.querySelector("input");
const hello = document.getElementById("hello");
const clock = document.getElementById("clock");
const greeting = document.getElementById("greeting-text");
const welcome = document.getElementById("welcome");

let userName = localStorage.getItem("name");

let time = "";
let timelyGreet = "";

if (userName === null) {
input.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    userName = event.target.value;
    localStorage.setItem("name", userName);
    window.location.reload()
  }
});
} else {
    welcome.remove()
    getTime()
    greeting.innerHTML = `Good ${timelyGreet}, ${userName}`;
    clock.style.display = 'block'
    clock.innerHTML = time
}

function getTime() {
  var date = new Date();
  var hour = date.getHours();
  var minute = date.getMinutes();
  var second = date.getSeconds();

  if (hour >= 0 && hour < 12) {
    timelyGreet = "morning";
  } else if (hour >= 12 && hour < 18) {
    timelyGreet = "afternoon";
  } else {
    timelyGreet = "evening";
  }

  if (hour > 12) {
    hour -= 12;
  }
  if (minute < 10) {
    minute = "0" + minute;
  }

  time = `${hour}:${minute}`;
  console.log(date);
  console.log(hour);
  console.log(minute);
  console.log(second);
  console.log(time);

  console.log(`Good ${timelyGreet}, ${userName}`);
}

   


console.log(`${userName}`)
//  window.location.reload()
// localStorage.clear();
