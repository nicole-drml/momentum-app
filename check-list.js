const taskContainer = document.getElementById("task-container");
const toDoBtn = document.getElementById("todo-button");
const tasksUl = document.getElementById("todo-list");
const tasksInput = document.getElementById("task-input");

let taskArr = [];
let taskIdx = -1;

let retrievedArr = localStorage.getItem("tasksArray");
let newTaskArr = JSON.parse(retrievedArr);

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

function setTasksLocalStorage() {
  localStorage.setItem("tasksArray", JSON.stringify(taskArr));
}

const addNewTask = (entry) => {
  taskArr.push(entry);
  setTasksLocalStorage();
};

let updateTask = (updatedTask, idx) => {
  newTaskArr[idx] = updatedTask;
};

const deleteTask = (idx) => {
  newTaskArr = newTaskArr.filter((_, index) => index !== idx);
};

tasksInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    if (taskIdx > -1) {
      updateTask(tasksInput.value, taskIdx);
      taskIdx = -1;
    } else {
      addNewTask(tasksInput.value);
    }
    tasksInput.value = "";
    displayTaskList();
    setTasksLocalStorage();
  }
});

const displayTaskList = () => {
  tasksUl.innerHTML = "";
  if (newTaskArr === null) {
    newTaskArr = taskArr;
  } else {
    taskArr = newTaskArr;
  }
  newTaskArr.forEach((task, idx) => {
    const newTaskLi = document.createElement("li");
    newTaskLi.classList.add("new-task-li");

    const taskCheckbox = document.createElement("input");
    taskCheckbox.type = "checkbox";
    taskCheckbox.classList.add("checkbox-input");
    taskCheckbox.addEventListener("change", checkTaskBox);

    const newTaskContent = document.createElement("span");
    newTaskContent.textContent = task;
    newTaskContent.classList.add("new-task-span");

    const taskBtns = document.createElement("div");
    newTaskContent.classList.add("task-buttons");

    const editTaskBtn = document.createElement("i");
    editTaskBtn.className = "fa-solid fa-pen-nib";
    editTaskBtn.classList.add("edit-task-button");

    const deleteTaskBtn = document.createElement("i");
    deleteTaskBtn.className = "fa-solid fa-eraser";
    deleteTaskBtn.classList.add("delete-task-button");

    taskBtns.append(editTaskBtn);
    taskBtns.append(deleteTaskBtn);
    newTaskLi.append(taskCheckbox);
    newTaskLi.append(newTaskContent);
    newTaskLi.append(taskBtns);

    tasksUl.append(newTaskLi);

    editTaskBtn.addEventListener("click", () => {
      taskIdx = idx;
      tasksInput.textContent = taskIdx;
    });

    deleteTaskBtn.addEventListener("click", () => {
      deleteTask(idx);
      displayTaskList();
      setTasksLocalStorage();
    });

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
  });
};
displayTaskList();

export { showCheckListFunction };
