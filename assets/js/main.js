const list = document.querySelector(".tasks");

function createItem() {
  const item = document.createElement("li");

  return item;
}

function setItem(task) {
  const item = createItem();

  item.innerHTML = task;
  list.appendChild(item);
}

function createRmvBtn(){
    const btn = document.createElement('button');
    btn.innerHTML = 'remove';

    list.appendChild(btn);
}


document.addEventListener("click", function (e) {
  const el = e.target;
  const inputTask = document.querySelector(".input-new-task");
  const task = inputTask.value;

  if (el.classList.contains("btn-add-task")) {
    setItem(task);
    createRmvBtn();
  }
});
