import { greeting, userName } from "./welcome.js";

let focus = localStorage.getItem("focus");
const focusContainer = document.getElementById("focus");
const focusQuestion = document.getElementById("focus-question");
const focusInput = document.getElementById("focus-input");

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

function createMomentumElements() {
  const today = document.createElement("h1");
  const focusAnswer = document.createElement("span");
  const checkFocus = document.createElement("input");
  const deleteLeft = document.createElement("i");
  const greatJob = document.createElement("h1");

  today.style.marginTop = "15px";
  today.style.fontSize = "20px";

  checkFocus.type = "checkbox";
  checkFocus.style.marginRight = "20px";
  checkFocus.style.transform = "scale(1.3)";
  checkFocus.style.opacity = "0";
  checkFocus.style.accentColor = "grey";
  checkFocus.style.cursor = "pointer";

  focusAnswer.style.fontSize = "40px";
  focusAnswer.style.lineHeight = "60px";

  deleteLeft.className = "fa-solid fa-delete-left";
  deleteLeft.style.marginLeft = "10px";
  deleteLeft.style.fontSize = "20px";
  deleteLeft.style.opacity = "0";
  deleteLeft.style.cursor = "pointer";
  deleteLeft.style.padding = "5px";

  greatJob.innerHTML = "Great job!";
  greatJob.style.fontSize = "20px";
  greatJob.style.fontWeight = "300";
  greatJob.style.letterSpacing = "1px";
  greatJob.style.opacity = "0";

  focusContainer.append(today);
  focusContainer.append(checkFocus);
  focusContainer.append(focusAnswer);
  focusContainer.append(deleteLeft);
  focusContainer.append(greatJob);

  if (focus === null || focus === undefined) {
    focusInput.addEventListener("keypress", (event) => {
      if (event.key === "Enter") {
        focus = event.target.value;
        localStorage.setItem("focus", focus);
        window.location.reload();
        checkFocus.style.display = "none";
      }
    });
  } else {
    focusInput.remove();
    focusQuestion.remove();
    today.innerHTML = `TODAY`;
    focusAnswer.innerHTML = `${focus}`;
    focusContainer.addEventListener("mouseover", higherOpacity);
    focusContainer.addEventListener("mouseout", lowerOpacity);
    checkFocus.addEventListener("change", getCheckValue);
    checkFocusStorage();
    deleteLeft.addEventListener("click", deleteFocus);
    deleteLeft.addEventListener("mouseover", higherBackground);
    deleteLeft.addEventListener("mouseout", lowerBackground);
  }

  function lowerOpacity() {
    deleteLeft.style.opacity = "0";
    checkFocus.style.opacity = "0";
  }

  function higherOpacity() {
    deleteLeft.style.opacity = "1";
    checkFocus.style.opacity = "1";
  }

  function checkOut() {
    focusAnswer.style.textDecoration = "line-through";
    focusAnswer.style.opacity = ".3";
    greatJob.style.opacity = "1";
    checkFocus.style.display = "none";
  }

  function getCheckValue() {
    if ((checkFocus.checked = true)) {
      localStorage.setItem("checkbox", "checked");
      checkOut();
    } else {
      localStorage.removeItem("checkbox");
    }
  }

  function checkFocusStorage() {
    if (localStorage.checkbox === "checked") {
      checkOut();
    } else {
      focusAnswer.style.textDecoration = "none";
      focusAnswer.style.opacity = "1";
      greatJob.style.opacity = "0";
    }
  }
  function lowerBackground() {
    deleteLeft.style.background = "none";
  }

  function higherBackground() {
    deleteLeft.style.backgroundColor = "rgb(240, 248, 255, 0.2)";
    deleteLeft.style.borderRadius = "50px";
  }

  function deleteFocus() {
    localStorage.removeItem("focus");
    localStorage.removeItem("checkbox");
    checkFocus.checked = false;
    window.location.reload();
  }
}

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

export { getTime, time, timelyGreet, createMomentumElements, clearLocalName };
