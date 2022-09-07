import { displayedQuote } from "./welcome.js";

let quotesArr = [
  "Inspiration exists, but it has to find you working.",
  "The greatest work that kindness does to others is that it makes them kind themselves.",
  "Judge your success by what you had to give up in order to get it.",
  "Have a heart that never hardens, and a temper that never tires, and a touch that never hurts.",
  "There is nothing noble about being better than your fellow man. Only being better than your former self.",
];

let quoteIdx = -1;
let retrievedArr = localStorage.getItem("quotesArray");
let newArr = JSON.parse(retrievedArr);
let randomNum = ''

const quotesUl = document.querySelector("#quotes-ul");
const quotesSettings = document.querySelector("#quotes-settings");
const quotesLegend = document.querySelector("#quotes-legend");
const newQuoteInput = document.querySelector("#new-quote-input");
const addQuoteContainer = document.querySelector("#new-quote-container");
const addQuoteButton = document.querySelector("#add-quote-button");
const quotesPopUp = document.querySelector("#quotes-pop-up");

const editQuoteBtn = document.createElement("i");
function randomQuoteDisplay() {
  if (newArr === null || newArr === undefined) {
    randomNum = Math.floor(Math.random() * quotesArr.length);
    displayedQuote.innerHTML = `"${quotesArr[randomNum]}"`;
  } else {
    randomNum = Math.floor(Math.random() * newArr.length);
  displayedQuote.innerHTML = `"${newArr[randomNum]}"`;
  }
  console.log(quotesArr[2])
}
randomQuoteDisplay();


function toggleWriteNewQuote() {
  addQuoteButton.addEventListener("click", newQuotePop);
  function newQuotePop() {
    if (addQuoteContainer.style.display === "flex") {
      addQuoteContainer.style.display = "none";
    } else {
      addQuoteContainer.style.display = "flex";
    }
  }
}

const addNewQuote = (entry) => {
  quotesArr.push(entry);
};

let updateQuote = (updatedQuote, idx) => {
  newArr[idx] = updatedQuote;
};

const deleteQuote = (idx) => {
  newArr = newArr.filter((_, index) => index !== idx);
};

newQuoteInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    if (quoteIdx > -1) {
      updateQuote(newQuoteInput.value, quoteIdx);
      quoteIdx = -1;
    } else {
      addNewQuote(newQuoteInput.value);
    }
    newQuoteInput.value = "";
    displayAllQuotes();
    setQuotesLocalStorage() 
  }
});

const displayAllQuotes = () => {
    quotesUl.innerHTML = "";
    if (newArr === null) {
      newArr = quotesArr
    } else {
      quotesArr = newArr
    }
    newArr.forEach((quote, idx) => {
      const newLi = document.createElement("li");
      newLi.classList.add("quote-new-li");

      const quoteSpan = document.createElement("span");
      quoteSpan.textContent = '"' + quote + '"';

      const editQuoteBtn = document.createElement("i");
      editQuoteBtn.className = "fa-solid fa-pen-nib";
      editQuoteBtn.classList.add("edit-quote-button");

      const deleteQuoteBtn = document.createElement("i");
      deleteQuoteBtn.className = "fa-solid fa-trash";
      deleteQuoteBtn.classList.add("delete-quote-button");

      newLi.append(quoteSpan);
      newLi.append(editQuoteBtn);
      newLi.append(deleteQuoteBtn);
      quotesUl.append(newLi);

      deleteQuoteBtn.addEventListener("click", () => {
        deleteQuote(idx);
        displayAllQuotes();
        setQuotesLocalStorage() 
      });

      editQuoteBtn.addEventListener("click", () => {
        quoteIdx = idx;
        newQuoteInput.textContent = quoteIdx
      });
    });
  }
displayAllQuotes();

function quotesPopFunction() {
  quotesSettings.addEventListener("click", togglePop);
  function togglePop() {
    if (
      quotesPopUp.style.display === "block" &&
      quotesLegend.style.display === "block"
    ) {
      quotesPopUp.style.display = "none";
      quotesLegend.style.display = "none";
      addQuoteContainer.style.display = "none";
      quotesSettings.style.color = "rgb(240, 248, 255, 0.5)";
    } else {
      quotesPopUp.style.display = "block";
      quotesLegend.style.display = "block";
      quotesSettings.style.color = "rgb(240, 248, 255, 0.9)";
    }
  }
}

function setQuotesLocalStorage() {
  localStorage.setItem("quotesArray", JSON.stringify(quotesArr));
}

export { quotesPopFunction, toggleWriteNewQuote };
