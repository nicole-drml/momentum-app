import { getTime, timelyGreet } from "./momentum.js";

const nameInput = document.querySelector("#name");
const welcome = document.querySelector("#welcome-section");
const momentumContents = document.querySelector("#momentum");
const greeting = document.querySelector("#timely-greeting");
const displayedQuote = document.querySelector("#displayed-quote");

let userName = localStorage.getItem("name");

function getUsername() {
  if (userName === null) {
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
    setInterval(getTime, 1000);
    greeting.innerHTML = `Good ${timelyGreet}, ${userName}.`;
    momentumContents.style.visibility = "visible";
  }
}

export { userName, getUsername, displayedQuote, greeting };
