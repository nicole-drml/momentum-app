const input = document.querySelector("input");
const greeting = document.getElementsByClassName(".greeting");
const theTime = document.querySelector("span");
const newGreeting = document.getElementsByClassName(".morning-greeting");

let userName = localStorage.getItem("name");

let time = "";
let timelyGreet = "";

if (userName === null) {
input.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    userName = event.target.value;
    getTime();
    theTime.innerHTML = `Good ${timelyGreet}, ${userName}.`;
    input.remove()
    localStorage.setItem("name", userName);
  }
});
} else {
    input.remove()
    getTime()
    theTime.innerHTML = `Good ${timelyGreet}, ${userName}.`;
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
