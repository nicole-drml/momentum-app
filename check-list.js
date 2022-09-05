import { toDoBtn } from "./welcome.js";

const taskContainer = document.getElementById("task-container");

const tasksUl = document.getElementsByClassName("tasks");
const tasksInput = document.getElementsByClassName("task-text");



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

let newTaskValue = ""
function updateTaskContainer() {
tasksInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    newTaskValue = event.target.value;
    const newTaskLi = document.createElement("li");
    const newTaskContent = document.createElement("span");

    newTaskContent.textContent = `"${newTaskValue}"`;

    newTaskLi.append(newTaskContent);
    tasksUl.append(newEntryLi);
  }
});
console.log(newTaskUl)
}






export { showCheckListFunction, updateTaskContainer };
