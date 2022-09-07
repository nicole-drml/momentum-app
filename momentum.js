import { greeting, userName } from "./welcome.js";

let focus = localStorage.getItem("focus");

const focusNoInput = document.querySelector("#focus-no-input");
const focusInput = document.querySelector("#focus-input");

const focusWithInput = document.querySelector("#focus-with-input");
const checkboxFocus = document.querySelector("#checkbox-focus");
const focusAnswer = document.querySelector("#focus-answer");
const deleteLeft = document.querySelector("#focus-delete");
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
        focus = event.target.value;
        localStorage.setItem("focus", focus);
        window.location.reload();
      }
    });
  } else {
    focusNoInput.remove();
    focusAnswer.innerHTML = `${focus}`;
    focusWithInput.style.display = "block";
  }
}
focusAnswered();

function crossOutText() {
  focusAnswer.style.textDecoration = "line-through";
  focusAnswer.style.opacity = ".3";
  greatJob.style.opacity = "1";
  checkboxFocus.style.visibility = "hidden";
}

function checkboxFocusEvents() {
  checkboxFocus.addEventListener("change", getCheckValue);

  function getCheckValue() {
    if ((checkboxFocus.checked = true)) {
      localStorage.setItem("focusCheckbox", "checked");
      crossOutText();
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
  greeting.addEventListener("click", clearLocalStorage);
  function clearLocalStorage() {
    localStorage.clear();
    window.location.reload();
  }
}

export { getTime, time, timelyGreet, clearLocalName };
