import { getTime, time, timelyGreet } from "./momentum.js";

// dsfd
const quotesStorage = document.getElementById("quotes-storage");
const quotesLegend = document.getElementById("quotes-legend");
const newQuoteInput = document.getElementById("new-quote-input");

const ellipsis = document.createElement("i");
ellipsis.className = "fa-solid fa-ellipsis";

//dsad
let displayedQuote = document.getElementById("displayed-quote");
const quotesSettings = document.getElementById("quotes-settings");

const toDoBtn = document.getElementById("todo-button");

let userName = localStorage.getItem("name");
let focus = localStorage.getItem("focus");

const nameInput = document.querySelector("input");
const hello = document.getElementById("hello");
const clock = document.getElementById("clock");
const greeting = document.getElementById("greeting-text");
const welcome = document.getElementById("welcome");

function getUsername() {
  if (userName === null) {
    toDoBtn.style.visibility = "hidden";
    displayedQuote.style.visibility = "hidden";
    nameInput.addEventListener("keypress", (event) => {
      if (event.key === "Enter") {
        userName = event.target.value;
        localStorage.setItem("name", userName);
        window.location.reload();
      }
    });
  } else {
    welcome.remove();
    getTime();
    greeting.innerHTML = `Good ${timelyGreet}, ${userName}.`;
    quotesSettings.style.display = "block";
    toDoBtn.style.visibility = "visible";
    setInterval(getTime, 1000);
    displayedQuote.style.visibility = "visible";
  }
}

export { toDoBtn, getUsername };
