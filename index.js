import { getUsername, toDoBtn } from "./welcome.js";
import { getTime, createMomentumElements } from "./momentum.js";
import {
  quotes,
  displayQuoteFunction,
  quotesContainerFunction,
  quotesPopFunction,
  addQuoteFunction,
  addQuoteContainer,
} from "./quotes.js";
import { showCheckListFunction } from "./check-list.js";

quotesPopFunction();
getUsername();
displayQuoteFunction();
quotesContainerFunction();
addQuoteFunction();
showCheckListFunction();
createMomentumElements();

//  window.location.reload()
// localStorage.clear();
