const input = document.querySelector("input");
const hello = document.getElementById("hello");
const clock = document.getElementById("clock");
const greeting = document.getElementById("greeting-text");
const welcome = document.getElementById("welcome");

const focusContainer = document.getElementById("focus");
const focusQuestion = document.getElementById("focus-question");
const focusInput = document.getElementById("focus-input");

const quotesStorage = document.getElementById("quotes-storage");
const displayedQuote = document.getElementById("displayed-quote");
const quotesSettings = document.getElementById("quotes-settings");
const quotesLegend = document.getElementById("quotes-legend");


const ellipsis = document.createElement("i")
ellipsis.className = "fa-solid fa-ellipsis"

let userName = localStorage.getItem("name");
let focus = localStorage.getItem("focus");

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
    quotesSettings.style.display = "block"
    setInterval(getTime, 1000);
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

  if (hour === 0) {
    hour = 12;
  }

  if (minute < 10) {
    minute = "0" + minute;
  }

  time = `${hour}:${minute}`
  clock.innerHTML = time
}

//focus today

const today = document.createElement("h1");
const focusAnswer = document.createElement("span");
const checkFocus = document.createElement("input");
const focusEllipsis = ellipsis
const greatJob = document.createElement("h1");

focusContainer.append(today)
focusContainer.append(checkFocus)
focusContainer.append(focusAnswer)
focusContainer.append(focusEllipsis)
focusContainer.append(greatJob)

today.style.marginTop = "15px"
today.style.fontSize = "20px"

checkFocus.type = "checkbox"
checkFocus.style.marginRight = "20px"
checkFocus.style.transform = "scale(1.5)"
checkFocus.style.opacity = "0"
checkFocus.style.accentColor = "grey";
checkFocus.style.cursor = "pointer";

focusAnswer.style.fontSize = "40px"
focusAnswer.style.lineHeight = "60px"

focusEllipsis.style.marginLeft = "20px"
focusEllipsis.style.fontSize = "20px"
focusEllipsis.style.opacity = "0"
focusEllipsis.style.cursor = "pointer";
focusEllipsis.style.padding = "6px";

greatJob.innerHTML = "Great job!"
greatJob.style.fontSize = "20px"
greatJob.style.fontWeight = "300"
greatJob.style.letterSpacing = "1px"
greatJob.style.opacity = "0"


checkFocus.addEventListener("change", crossOut);

function crossOut() {
  if (checkFocus.checked) {
    focusAnswer.style.textDecoration = "line-through"
    focusAnswer.style.opacity = ".3"  
    greatJob.style.opacity = "1"
  } else {
    focusAnswer.style.textDecoration = "none"
    focusAnswer.style.opacity = "1"  
    greatJob.style.opacity = "0"
  }
}


focusContainer.addEventListener("mouseover", higherOpacity);
focusContainer.addEventListener("mouseout", lowerOpacity);

function lowerOpacity() {
  focusEllipsis.style.opacity = "0";
  checkFocus.style.opacity = "0";
}

function higherOpacity() {
  focusEllipsis.style.opacity = "1";
  checkFocus.style.opacity = "1";
}


focusEllipsis.addEventListener("mouseover", higherBackground);
focusEllipsis.addEventListener("mouseout", lowerBackground);

function lowerBackground() {
  focusEllipsis.style.background = "none";
}

function higherBackground() {
  focusEllipsis.style.backgroundColor = "rgb(240, 248, 255, 0.2)";
  focusEllipsis.style.borderRadius = "50px"
}



if (focus === null) {
  focusInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      focus = event.target.value;
      localStorage.setItem("focus", focus);
      window.location.reload()
    }
  });
  } else {
      focusInput.remove()
      focusQuestion.remove()
      today.innerHTML = `TODAY`;
      focusAnswer.innerHTML = `${focus}`;

  }   
 

var quotes = [
  {quote: "A ship in harbor is safe, but that is not what ships are built for.", quoteBy: "John A Shedd"},
  {quote: "Chains of habit are too light to be felt until they are too heavy to be broken.", quoteBy: "Warren Buffet"},
  {quote: "Mistakes are always forgivable, if one has the courage to admit them.", quoteBy: "Bruce Lee"},
  {quote: "Nothing is particularly hard if you divide them in small task.", quoteBy: "Henry Ford"},
  {quote: "Life can only be understood backwards; but it must be lived forwards.", quoteBy: "Soren Kierkegaard"},
  {quote: "Happiness is not something ready made. It comes from your own actions.", quoteBy: "Dalai Lama"},
  {quote: "Inspiration exists, but it has to find you working.", quoteBy: "Pablo Picasso"},
  {quote: "The greatest work that kindness does to others is that it makes them kind themselves.", quoteBy: "Amelia Earheart"},{quote: "Judge your success by what you had to give up in order to get it.", quoteBy: "Dalai Lama"},
  {quote: "Have a heart that never hardens, and a temper that never tires, and a touch that never hurts.", quoteBy: "Charles Dickens"},
  {quote: "There is nothing noble about being better than your fellow man. Only being better than your former self.", quoteBy: "Ernest Hemingway"},
  {quote: "You can't connect the dots looking forward, you can only connect them looking backward. So you have to trust that the dots will somehow connect in your future. You have to trust in something -- your gut, destiny, life, karma, whatever.", quoteBy: "Steve Jobs"},
  //{quote: quoteBy:}
]


for (let i = 0; i < quotes.length; i++) {
  const item = quotes[i]

  const newLi = document.createElement("li");
  const quote = document.createElement("span");
  const quoteBy = document.createElement("span");
  const deleteQuote = document.createElement("i")

  quote.textContent = `"${item.quote}"`;
  quoteBy.textContent = `- ${item.quoteBy}`;
  deleteQuote.className = "fa-solid fa-ban ";

  newLi.style.marginBottom = "12px"
  quoteBy.style.fontSize = "12px"
  deleteQuote.style.fontSize = "15px"
  deleteQuote.style.marginLeft = "10px"
  deleteQuote.style.visibility = "hidden"
  deleteQuote.style.opacity = ".5"
  deleteQuote.style.cursor = "pointer"

  newLi.append(quote)
  newLi.append(quoteBy);
  newLi.appendChild(deleteQuote);

  quotesStorage.append(newLi);

  displayedQuote.innerHTML =`"${(quotes[randomNum()].quote)}"`

  newLi.addEventListener("mouseover", showSettings);
  newLi.addEventListener("mouseout", hideSettings);

function showSettings() {
  deleteQuote.style.visibility = "visible";
}

function hideSettings() {
  deleteQuote.style.visibility = "hidden";
}

deleteQuote.addEventListener("mouseover", higherOpacity);
deleteQuote.addEventListener("mouseout", lowerOpacity);

function lowerOpacity() {
  deleteQuote.style.opacity = ".5";
}

function higherOpacity() {
  deleteQuote.style.opacity = "1";
}

function randomNum() {
  return Math.floor(Math.random() * (quotes.length));
}
}

quotesSettings.addEventListener("click", togglePop)
function togglePop() {
  if (quotesPopUp.style.display === "block" && quotesLegend.style.display === "block") {
    quotesPopUp.style.display = "none";
    quotesLegend.style.display = "none";
    addQuoteContainer.style.visibility = "hidden"
  } else {
    quotesPopUp.style.display = "block";
    quotesLegend.style.display = "block";
  }
}

const quotesPopUp = document.getElementById("quotes-pop-up");
const addQuoteContainer = document.getElementById("new-quote-container");


const addQuoteButton = document.getElementById("add-quote-button");

addQuoteButton.addEventListener("click", newQuotePop)
function newQuotePop() {  
  if (addQuoteContainer.style.visibility === "visible") {
    addQuoteContainer.style.visibility = "hidden";
} else {
  addQuoteContainer.style.visibility = "visible";
}
}

console.log(Math.random())
console.log(`${userName}`)
console.log(localStorage)
console.log(localStorage.name)
console.log(focus)
//  window.location.reload()
// localStorage.clear();
