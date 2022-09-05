import { displayedQuote } from "./welcome.js";

const quotesStorage = document.getElementById("quotes-storage");
const quotesSettings = document.getElementById("quotes-settings");
const quotesLegend = document.getElementById("quotes-legend");
const newQuoteInput = document.getElementById("new-quote-input");

const addQuoteContainer = document.getElementById("new-quote-container");

let quotes = [
"Inspiration exists, but it has to find you working.",
"The greatest work that kindness does to others is that it makes them kind themselves.",
"Judge your success by what you had to give up in order to get it.",
"Have a heart that never hardens, and a temper that never tires, and a touch that never hurts.",
"There is nothing noble about being better than your fellow man. Only being better than your former self.",
  //{quote: quoteBy:}
];

//localStorage.setItem("quotes", JSON.stringify(quotes))

function quotesContainerFunction() {
  for (let i = 0; i < quotes.length; i++) {
    const item = quotes[i];

    const newLi = document.createElement("li");
    const quote = document.createElement("span");
    //const quoteBy = document.createElement("span");
    const deleteQuoteBtn = document.createElement("i");

    quote.textContent = `"${item}"`;
    //quoteBy.textContent = `- ${item.quoteBy}`;
    deleteQuoteBtn.className = "fa-solid fa-trash";

    newLi.append(quote);
    //newLi.append(quoteBy);
    newLi.appendChild(deleteQuoteBtn);

    newLi.style.marginBottom = "12px";
    //quoteBy.style.fontSize = "12px";

    deleteQuoteBtn.style.fontSize = "15px";
    deleteQuoteBtn.style.marginLeft = "10px";
    deleteQuoteBtn.style.visibility = "hidden";
    deleteQuoteBtn.style.opacity = ".5";
    deleteQuoteBtn.style.cursor = "pointer";

    quotesStorage.append(newLi);

    newLi.addEventListener("mouseover", showSettings);
    newLi.addEventListener("mouseout", hideSettings);

    function showSettings() {
      deleteQuoteBtn.style.visibility = "visible";
    }

    function hideSettings() {
      deleteQuoteBtn.style.visibility = "hidden";
    }

    deleteQuoteBtn.addEventListener("mouseover", higherOpacity);
    deleteQuoteBtn.addEventListener("mouseout", lowerOpacity);

    function lowerOpacity() {
      deleteQuoteBtn.style.opacity = ".5";
    }

    function higherOpacity() {
      deleteQuoteBtn.style.opacity = "1";
    }

    deleteQuoteBtn.addEventListener("click", deleteQuote);
    function deleteQuote() {
      if (quote.style.opacity === "1") {
        quote.style.opacity = ".5";
        //quoteBy.style.opacity = ".5";
      } else {
        quote.style.opacity = "1";
        //quoteBy.style.opacity = "1";
      }
    }
    //localStorage.setItem(`quote${[i]}`,`${quotes[i].quote}` )
    //const quotee = `quote${[i]}: ${quotes[i].quote}`
    //JSON.stringify(quotes)
  }
  console.log(quotes);
}

function quotesPopFunction() {
  const quotesPopUp = document.getElementById("quotes-pop-up");

  quotesSettings.addEventListener("click", togglePop);

  function togglePop() {
    if (
      quotesPopUp.style.display === "block" &&
      quotesLegend.style.display === "block"
    ) {
      quotesPopUp.style.display = "none";
      quotesLegend.style.display = "none";
      addQuoteContainer.style.visibility = "hidden";
      quotesSettings.style.transitionDuration = "1000ms";
      quotesSettings.style.color = "rgb(240, 248, 255, 0.5)";
    } else {
      quotesPopUp.style.display = "block";
      quotesLegend.style.display = "block";
      quotesSettings.style.transitionDuration = "1000ms";
      quotesSettings.style.color = "rgb(240, 248, 255, 0.9)";
    }
  }
}

function addQuoteFunction() {
  const addQuoteButton = document.getElementById("add-quote-button");

  addQuoteButton.addEventListener("click", newQuotePop);
  function newQuotePop() {
    if (addQuoteContainer.style.visibility === "visible") {
      addQuoteContainer.style.visibility = "hidden";
    } else {
      addQuoteContainer.style.visibility = "visible";
    }
  }
  let newQuoteValue = ""
  newQuoteInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      newQuoteValue = event.target.value;
      //const newEntryLi = document.createElement("li");
      //const newEntryQuote = document.createElement("span");

      //newEntryQuote.textContent = `"${newQuoteValue}"`;
      //newEntryLi.append(newEntryQuote);
    //quotesStorage.append(newEntryLi);
      //console.log(newQuoteValue)

    quotes.push(`${newQuoteValue}`)
    }
  });
}
function displayQuoteFunction() {
  function randomNum() {
    return Math.floor(Math.random() * quotes.length);
  }

  displayedQuote.innerHTML = `"${quotes[randomNum()]}"`;
}


export {
  quotes,
  displayQuoteFunction,
  quotesContainerFunction,
  quotesPopFunction,
  addQuoteFunction,
  addQuoteContainer,
  quotesSettings,
};
