const list = document.querySelector(".tasks");
const inputTask = document.querySelector(".input-new-task");

function CreateLi() {
  const li = document.createElement("li");

  return li;
}

function createTask(task) {
  const li = CreateLi();

  li.innerHTML = task;
  list.appendChild(li);
  clearInput();
  inputTask.focus();
  createRmvBtn(li);
}

function removeTask(element) {
  const remove = document.querySelector("btn-rm");
  element.parentElement.remove();
}

function createRmvBtn(li) {
  
  const btn = document.createElement("button");
  btn.innerText = "Remove";
  btn.classList.add = "btn-rm";
  btn.setAttribute('class', 'btn-rm')

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
