import { toDoBtn } from "./welcome.js";

const taskContainer = document.getElementById("task-container");

function showCheckListFunction() {
  toDoBtn.addEventListener("click", showTask);
  function showTask() {
    if (taskContainer.style.display === "block") {
      taskContainer.style.display = "none";
    } else {
      taskContainer.style.display = "block";
    }
  }
}

export { showCheckListFunction };
