const ellipsis = document.createElement("i");
ellipsis.className = "fa-solid fa-ellipsis";

let focus = localStorage.getItem("focus");

//dsdasdasd

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
    hour = 12;
  }

  if (minute < 10) {
    minute = "0" + minute;
  }

  time = `${hour}:${minute}`;
  clock.innerHTML = time;
}

//focus today
function createMomentumElements() {
  const today = document.createElement("h1");
  const focusAnswer = document.createElement("span");
  const checkFocus = document.createElement("input");
  const focusEllipsis = ellipsis;
  const greatJob = document.createElement("h1");

  today.style.marginTop = "15px";
  today.style.fontSize = "20px";

  checkFocus.type = "checkbox";
  checkFocus.style.marginRight = "20px";
  checkFocus.style.transform = "scale(1.5)";
  checkFocus.style.opacity = "0";
  checkFocus.style.accentColor = "grey";
  checkFocus.style.cursor = "pointer";

  focusAnswer.style.fontSize = "40px";
  focusAnswer.style.lineHeight = "60px";

  focusEllipsis.style.marginLeft = "20px";
  focusEllipsis.style.fontSize = "20px";
  focusEllipsis.style.opacity = "0";
  focusEllipsis.style.cursor = "pointer";
  focusEllipsis.style.padding = "6px";

  greatJob.innerHTML = "Great job!";
  greatJob.style.fontSize = "20px";
  greatJob.style.fontWeight = "300";
  greatJob.style.letterSpacing = "1px";
  greatJob.style.opacity = "0";

  focusContainer.append(today);
  focusContainer.append(checkFocus);
  focusContainer.append(focusAnswer);
  focusContainer.append(focusEllipsis);
  focusContainer.append(greatJob);

  checkFocus.addEventListener("change", crossOut);

  function crossOut() {
    if (checkFocus.checked) {
      focusAnswer.style.textDecoration = "line-through";
      focusAnswer.style.opacity = ".3";
      greatJob.style.opacity = "1";
    } else {
      focusAnswer.style.textDecoration = "none";
      focusAnswer.style.opacity = "1";
      greatJob.style.opacity = "0";
    }
  }
  ellipsis.addEventListener("mouseover", higherBackground);
  ellipsis.addEventListener("mouseout", lowerBackground);

  function lowerBackground() {
    ellipsis.style.background = "none";
  }

  function higherBackground() {
    ellipsis.style.backgroundColor = "rgb(240, 248, 255, 0.2)";
    focusEllipsis.style.borderRadius = "50px";
  }

  if (focus === null) {
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
  }

  function lowerOpacity() {
    focusEllipsis.style.opacity = "0";
    checkFocus.style.opacity = "0";
  }

  function higherOpacity() {
    focusEllipsis.style.opacity = "1";
    checkFocus.style.opacity = "1";
  }
}

export { getTime, time, timelyGreet, createMomentumElements };
