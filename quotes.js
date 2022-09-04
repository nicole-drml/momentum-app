import {displayedQuote} from "./welcome.js";

const quotesStorage = document.getElementById("quotes-storage");
const quotesSettings = document.getElementById("quotes-settings");
const quotesLegend = document.getElementById("quotes-legend");
const newQuoteInput = document.getElementById("new-quote-input");

const addQuoteContainer = document.getElementById("new-quote-container");

const quotes = [
  {
    quote:
      "A ship in harbor is safe, but that is not what ships are built for.",
    quoteBy: "John A Shedd",
  },
  {
    quote:
      "Mistakes are always forgivable, if one has the courage to admit them.",
    quoteBy: "Bruce Lee",
  },
  {
    quote: "Nothing is particularly hard if you divide them in small task.",
    quoteBy: "Henry Ford",
  },
  {
    quote:
      "Life can only be understood backwards; but it must be lived forwards.",
    quoteBy: "Soren Kierkegaard",
  },
  {
    quote: "Inspiration exists, but it has to find you working.",
    quoteBy: "Pablo Picasso",
  },
  {
    quote:
      "The greatest work that kindness does to others is that it makes them kind themselves.",
    quoteBy: "Amelia Earheart",
  },
  {
    quote: "Judge your success by what you had to give up in order to get it.",
    quoteBy: "Dalai Lama",
  },
  {
    quote:
      "Have a heart that never hardens, and a temper that never tires, and a touch that never hurts.",
    quoteBy: "Charles Dickens",
  },
  {
    quote:
      "There is nothing noble about being better than your fellow man. Only being better than your former self.",
    quoteBy: "Ernest Hemingway",
  },
  //{quote: quoteBy:}
];

function displayQuoteFunction() {
  function randomNum() {
    return Math.floor(Math.random() * quotes.length);
  }

  displayedQuote.innerHTML = `"${quotes[randomNum()].quote}"`;
}

function quotesContainerFunction() {
  for (let i = 0; i < quotes.length; i++) {
    const item = quotes[i];

    const newLi = document.createElement("li");
    const quote = document.createElement("span");
    const quoteBy = document.createElement("span");
    const blockQuote = document.createElement("i");

    quote.textContent = `"${item.quote}"`;
    quoteBy.textContent = `- ${item.quoteBy}`;
    blockQuote.className = "fa-solid fa-ban ";

    newLi.append(quote);
    newLi.append(quoteBy);
    newLi.appendChild(blockQuote);

    newLi.style.marginBottom = "12px";
    quoteBy.style.fontSize = "12px";
    blockQuote.style.fontSize = "15px";
    blockQuote.style.marginLeft = "10px";
    blockQuote.style.visibility = "hidden";
    blockQuote.style.opacity = ".5";
    blockQuote.style.cursor = "pointer";

    quotesStorage.append(newLi);

    newLi.addEventListener("mouseover", showSettings);
    newLi.addEventListener("mouseout", hideSettings);

    function showSettings() {
      blockQuote.style.visibility = "visible";
    }

    function hideSettings() {
      blockQuote.style.visibility = "hidden";
    }

    blockQuote.addEventListener("mouseover", higherOpacity);
    blockQuote.addEventListener("mouseout", lowerOpacity);

    function lowerOpacity() {
      blockQuote.style.opacity = ".5";
    }

    function higherOpacity() {
      blockQuote.style.opacity = "1";
    }

    blockQuote.addEventListener("click", disableQuote);
    function disableQuote() {
      if (quote.style.opacity === "1") {
        quote.style.opacity = ".5";
        quoteBy.style.opacity = ".5";
      } else {
        quote.style.opacity = "1";
        quoteBy.style.opacity = "1";
      }
    }
  }
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
      quotesSettings.style.transitionDuration = "1000ms"
      quotesSettings.style.color = "rgb(240, 248, 255, 0.5)"
    } else {
      quotesPopUp.style.display = "block";
      quotesLegend.style.display = "block";
      quotesSettings.style.transitionDuration = "1000ms"
      quotesSettings.style.color = "rgb(240, 248, 255, 0.9)"
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
}

export {
  quotes,
  displayQuoteFunction,
  quotesContainerFunction,
  quotesPopFunction,
  addQuoteFunction,
  addQuoteContainer,
  quotesSettings
};
