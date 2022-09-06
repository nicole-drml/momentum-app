import { greeting, userName } from "./welcome.js";

let focus = localStorage.getItem("focus");

const focusNoInput = document.querySelector("#focus-no-input");
const focusQuestion = document.querySelector("#focus-question");
const focusInput = document.querySelector("#focus-input");


const focusWithInput = document.querySelector("#focus-no-input");
const today = document.querySelector("#focus-h1");
const checkboxFocus = document.querySelector("#checkbox-focus");
const focusAnswer = document.querySelector("#focus-answer");
const deleteLeft = document.querySelector("#focus-delete");
const focusBtns = document.querySelector("#focus-buttons-div");
const greatJob = document.querySelector("#great-job");

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

function focusAnswered() {
  if (focus === null || focus === undefined) {
    focusInput.addEventListener("keypress", (event) => {
      if (event.key === "Enter") {
        focusWithInput.style.display = "none"
        focus = event.target.value;
        localStorage.setItem("focus", focus);
        window.location.reload();
      }
    });
  } else {
    focusNoInput.remove();
    focusWithInput.style.display = "block"
    focusAnswer.innerHTML = `${focus}`;
  }
}
focusAnswered()


function focusBtnEvents() {
  focusBtns.addEventListener("mouseover", showButtons);
  focusBtns.addEventListener("mouseout", hideButtons);

  function hideButtons() {
    deleteLeft.style.opacity = "0";
    checkboxFocus.style.opacity = "0";
  }

  function showButtons() {
    deleteLeft.style.opacity = "1";
    checkboxFocus.style.opacity = "1";
  }
}
focusBtnEvents();

function crossOutText() {
  focusAnswer.style.textDecoration = "line-through";
  focusAnswer.style.opacity = ".3";
  greatJob.style.opacity = "1";
  checkboxFocus.style.visibility = "hidden";
}

function checkboxFocusStorage() {
  if (localStorage.checkbox === "checked") {
    crossOutText();
  } else {
    focusAnswer.style.textDecoration = "none";
    focusAnswer.style.opacity = "1";
    greatJob.style.opacity = "0";
  }
}
checkboxFocusStorage() 

function checkboxFocusEvents() {
  checkboxFocus.addEventListener("change", getCheckValue);

  function getCheckValue() {
    if ((checkboxFocus.checked = true)) {
      localStorage.setItem("focusCheckbox", "checked");
      crossOutText();
    } else {
      localStorage.removeItem("focusCheckbox");
    }
  }
}
checkboxFocusEvents();

function deleteFocusEvents() {
  deleteLeft.addEventListener("click", deleteFocus);
  deleteLeft.addEventListener("mouseover", higherBackground);
  deleteLeft.addEventListener("mouseout", lowerBackground);

  function deleteFocus() {
    localStorage.removeItem("focus");
    localStorage.removeItem("focusCheckbox");
    checkboxFocus.checked = false;
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
