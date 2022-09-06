import { greeting, userName } from "./welcome.js";

let focus = localStorage.getItem("focus");
const focusContainer = document.getElementById("focus");
const focusQuestion = document.getElementById("focus-question");
const focusInput = document.getElementById("focus-input");
const checkFocusStyles = document.getElementsByClassName("focus-input");


const today = document.createElement("h1");
const checkFocus = document.createElement("input");
const focusAnswer = document.createElement("span");
const deleteLeft = document.createElement("i");
const focusBtns = document.createElement("div");
const greatJob = document.createElement("h1");


let time = "";
let timelyGreet = "";

function getTime() {
  var date = new Date();
  var hour = date.getHours();
  var minute = date.getMinutes();

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
    if (focus !== null || focus !== undefined) {
      localStorage.removeItem("focus");
    }
    hour = 12;
  }

  if (minute < 10) {
    minute = "0" + minute;
  }

  time = `${hour}:${minute}`;
  clock.innerHTML = time;
}


function classesFocusElements() {
  today.classList.add("focus-h1");
  checkFocus.classList.add("check-focus");
  checkFocus.type = "checkbox";
  focusAnswer.classList.add("focus-answer");
  deleteLeft.className = "fa-solid fa-delete-left";
  deleteLeft.classList.add("focus-delete");
  focusBtns.classList.add("focus-buttons");
  greatJob.classList.add("great-job");
  greatJob.textContent = "Great job!";
}
classesFocusElements();

function appendFocusElements() {
  focusBtns.append(checkFocus);
  focusBtns.append(focusAnswer);
  focusBtns.append(deleteLeft);
  focusContainer.append(today);
  focusContainer.append(focusBtns);
  focusContainer.append(greatJob);
}
appendFocusElements();

function focusAnswered() {
  if (focus === null || focus === undefined) {
    focusInput.addEventListener("keypress", (event) => {
      if (event.key === "Enter") {
        focus = event.target.value;
        localStorage.setItem("focus", focus);
        window.location.reload();
      }
    });
  } else {
    focusInput.remove();
    focusQuestion.remove();
    today.innerHTML = `TODAY`;
    focusAnswer.innerHTML = `${focus}`;
    checkFocusStorage();
    focusBtns.style.visibility = "visible"
  }
}
focusAnswered();

function checkFocusStorage() {
  if (localStorage.checkbox === "checked") {
    crossOutText();
  } else {
    focusAnswer.style.textDecoration = "none";
    focusAnswer.style.opacity = "1";
    greatJob.style.opacity = "0";
  }
}

function focusContainerEvents() {
  focusContainer.addEventListener("mouseover", higherOpacity);
  focusContainer.addEventListener("mouseout", lowerOpacity);

  function lowerOpacity() {
    deleteLeft.style.opacity = "0";
    checkFocus.style.opacity = "0";
  }

  function higherOpacity() {
    deleteLeft.style.opacity = "1";
    checkFocus.style.opacity = "1";
  }
}
focusContainerEvents();

function checkFocusEvents() {
  checkFocus.addEventListener("change", getCheckValue);

  function getCheckValue() {
    if ((checkFocus.checked = true)) {
      localStorage.setItem("checkbox", "checked");
      crossOutText();
    } else {
      localStorage.removeItem("checkbox");
    }
  }
}
checkFocusEvents();

function crossOutText() {
  focusAnswer.style.textDecoration = "line-through";
  focusAnswer.style.opacity = ".3";
  greatJob.style.opacity = "1";
  checkFocus.style.visibility = "hidden";
}

function deleteFocusEvents() {
  deleteLeft.addEventListener("click", deleteFocus);
  deleteLeft.addEventListener("mouseover", higherBackground);
  deleteLeft.addEventListener("mouseout", lowerBackground);

  function deleteFocus() {
    localStorage.removeItem("focus");
    localStorage.removeItem("checkbox");
    checkFocus.checked = false;
    window.location.reload();
  }

  function lowerBackground() {
    deleteLeft.style.background = "none";
  }

  function higherBackground() {
    deleteLeft.style.backgroundColor = "rgb(240, 248, 255, 0.2)";
    deleteLeft.style.borderRadius = "50px";
  }
}
deleteFocusEvents();

function clearLocalName() {
  greeting.style.cursor = "pointer";
  greeting.addEventListener("mouseover", lowerOpacity);
  greeting.addEventListener("mouseout", higherOpacity);

  function lowerOpacity() {
    greeting.style.opacity = "0.6";
  }

  function higherOpacity() {
    greeting.style.opacity = "0.95";
  }

  greeting.addEventListener("click", clearLocalStorage);
  function clearLocalStorage() {
    localStorage.removeItem("name");
    window.location.reload();
  }
}

export { getTime, time, timelyGreet, clearLocalName };
