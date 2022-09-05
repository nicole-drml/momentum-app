import { getUsername, toDoBtn } from "./welcome.js";
import { clearLocalName } from "./momentum.js";
import {
  displayQuoteFunction,
  quotesContainerFunction,
  quotesPopFunction,
  addQuoteFunction,
} from "./quotes.js";
import { showCheckListFunction } from "./check-list.js";

quotesPopFunction();
getUsername();
displayQuoteFunction();
quotesContainerFunction();
addQuoteFunction();
showCheckListFunction();
clearLocalName();

console.log(localStorage);
//  window.location.reload()
// localStorage.clear();
