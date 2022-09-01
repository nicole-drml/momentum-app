const input = document.querySelector("input");
const hello = document.getElementById("hello");
const clock = document.getElementById("clock");
const greeting = document.getElementById("greeting-text");
const welcome = document.getElementById("welcome");
const focusQuestion = document.getElementById("focus-question");
const focusAnswer = document.getElementById("focus-answer");


let userName = localStorage.getItem("name");
let focus = localStorage.getItem("focus-answer");

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
    greeting.innerHTML = `Good ${timelyGreet}, ${userName}.`;
   // setInterval(getTime, 1000);
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

  console.log(`Good ${timelyGreet}, ${userName}.`);

  clock.innerHTML = time
}


if (focus === null) {
  focusAnswer.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      focus = event.target.value;
      localStorage.setItem("focus-answer", focus);
      window.location.reload()
    }
  });
  } else {
      focusAnswer.remove()
      focusQuestion.innerHTML = `Focus on ${focus}.`;
  }   
 

var quotes = [
  {quote: "You can't connect the dots looking forward, you can only connect them looking backward. So you have to trust that the dots will somehow connect in your future. You have to trust in something -- your gut, destiny, life, karma, whatever.", quoteBy: "Steve Jobs"},
  {quote: "A ship in harbor is safe, but that is not what ships are built for.", quoteBy: "John A Shedd"},
  {quote: "There is nothing noble about being better than your fellow man. Only being better than your former self.", quoteBy: "Ernest Hemingway"},
  {quote: "Chains of habit are too light to be felt until they are too heavy to be broken.", quoteBy: "Warren Buffet"},
  {quote: "Mistakes are always forgivable, if one has the courage to admit them.", quoteBy: "Bruce Lee"},
  {quote: "Nothing is particularly hard if you divide them in small task.", quoteBy: "Henry Ford"},
  {quote: "Life can only be understood backwards; but it must be lived forwards.", quoteBy: "Soren Kierkegaard"},
  {quote: "Happiness is not something ready made. It comes from your own actions.", quoteBy: "Dalai Lama"},
  {quote: "Judge your success by what you had to give up in order to get it.", quoteBy: "Dalai Lama"},
  {quote: "Have a heart that never hardens, and a temper that never tires, and a touch that never hurts.", quoteBy: "Charles Dickens"},
  {quote: "Inspiration exists, but it has to find you working.", quoteBy: "Pablo Picasso"},
  {quote: "The greatest work that kindness does to others is that it makes them kind themselves.", quoteBy: "Amelia Earheart"}
  //{quote: quoteBy:}
]

function randomNum() {
  return Math.floor(Math.random() * (quotes.length));
}

var randomQuote = (quotes[randomNum()].quote)

console.log(Math.random())
console.log(`"${randomQuote}"`)
console.log(`${userName}`)
console.log(localStorage)
//  window.location.reload()
// localStorage.clear();
