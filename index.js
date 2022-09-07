import { getUsername } from "./welcome.js";
import { clearLocalName } from "./momentum.js";
import { quotesPopFunction, toggleWriteNewQuote } from "./quotes.js";

import { showCheckListFunction } from "./check-list.js";

quotesPopFunction();
getUsername();
clearLocalName();
showCheckListFunction();
toggleWriteNewQuote();

console.log(localStorage);
//  window.location.reload()
// localStorage.clear();
