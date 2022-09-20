const tasks = document.querySelector(".tasks");
const inputTask = document.querySelector(".input-new-task");

function CreateLi() {
  const li = document.createElement("li");

  return li;
}

function createTask(task) {
  const li = CreateLi();

  li.innerHTML = task;
  tasks.appendChild(li);
  clearInput();
  inputTask.focus();
  createRmvBtn(li);
  saveTask();
}

function removeTask(element) {
  element.parentElement.remove();
  saveTask();
}

function createRmvBtn(li) {
  const btn = document.createElement("button");
  btn.innerText = "Remove";
  btn.classList.add = "btn-rm";
  btn.setAttribute("class", "btn-rm");

  li.appendChild(btn);
}

inputTask.addEventListener("keypress", function (e) {
  if (e.keyCode === 13) {
    if (!inputTask.value) return;
    createTask(inputTask.value);
  }
});

function clearInput() {
  inputTask.value = "";
}

document.addEventListener("click", function (e) {
  const el = e.target;

  if (el.classList.contains("btn-add-task") && inputTask.value) {
    createTask(inputTask.value);
    clearInput();
  }
  if (el.classList.contains("btn-rm")) {
    removeTask(el);
  }
});

function saveTask() {
  const liTask = tasks.querySelectorAll('li');
  
  const listOfTasks = [];

  for (let tasks of liTask) {
    let textTask = tasks.innerText;
     textTask = textTask.replace('Remove', '').trim();
     listOfTasks.push(textTask);
  }

  const tarefasJSON = JSON.stringify(listOfTasks);
  localStorage.setItem('tasks', tarefasJSON);
}

function pullSavedTasks() {
  const tasks = localStorage.getItem('tasks');
  const listOfTasks = JSON.parse(tasks);

  for ( let tasks of listOfTasks){
    createTask(tasks);
  }
}

pullSavedTasks()