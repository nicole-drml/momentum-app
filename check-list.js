const taskContainer = document.getElementById("task-container");

const toDoBtn = document.getElementById("todo-button");
const tasksUl = document.getElementById("todo-list");
const tasksInput = document.getElementById("task-input");

function showCheckListFunction() {
  toDoBtn.addEventListener("click", showTask);
  function showTask() {
    if (taskContainer.style.display === "flex") {
      taskContainer.style.display = "none";
    } else {
      taskContainer.style.display = "flex";
      taskContainer.style.color = "rgb(240, 248, 255, 0.9)";
    }
  }
}

tasksInput.addEventListener("keypress", (event) => {
  let newTaskValue = "";
  if (event.key === "Enter") {
    newTaskValue = event.target.value;

    const newTaskLi = document.createElement("li");
    newTaskLi.classList.add("new-task-li");

    const taskCheckbox = document.createElement("input");
    taskCheckbox.type = "checkbox";
    taskCheckbox.classList.add("checkbox-input");
    taskCheckbox.addEventListener("change", checkTaskBox);

    const newTaskContent = document.createElement("span");
    newTaskContent.textContent = `${newTaskValue}`;
    newTaskContent.classList.add("new-task-span");

    const taskBtns = document.createElement("div");
    newTaskContent.classList.add("task-buttons");

    const editTaskBtn = document.createElement("i");
    editTaskBtn.className = "fa-solid fa-pen-nib";
    editTaskBtn.classList.add("edit-task-button");

    const deleteTaskBtn = document.createElement("i");
    deleteTaskBtn.className = "fa-solid fa-eraser";
    deleteTaskBtn.classList.add("delete-task-button");

    function appendTaskElements() {
      taskBtns.append(editTaskBtn);
      taskBtns.append(deleteTaskBtn);
      newTaskLi.append(taskCheckbox);
      newTaskLi.append(newTaskContent);
      newTaskLi.append(taskBtns);
      tasksUl.append(newTaskLi);
    }
    appendTaskElements();

    tasksInput.value = "";


function checkTaskBox() {
  if (taskCheckbox.checked === true) {
    newTaskContent.style.textDecoration = "line-through";
    newTaskContent.style.opacity = ".3";
  } else {
    newTaskContent.style.textDecoration = "none";
    newTaskContent.style.opacity = "1";
  }
}
checkTaskBox();
  }
});


export { showCheckListFunction };
