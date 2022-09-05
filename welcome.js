import { getTime, time, timelyGreet } from "./momentum.js";
import { quotesSettings } from "./quotes.js";

let displayedQuote = document.getElementById("displayed-quote");

const toDoBtn = document.getElementById("todo-button");

let userName = localStorage.getItem("name");

const nameInput = document.getElementById("name");
const welcome = document.getElementById("welcome");
const greeting = document.getElementById("greeting-text");

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

export { toDoBtn, userName, getUsername, displayedQuote, greeting };
