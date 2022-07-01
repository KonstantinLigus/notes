//=============ToDo==========
const refs = {
  form: document.querySelector(".form"),
  list: document.querySelector(".list"),
};

refs.form.addEventListener("submit", onSubmit);
refs.list.addEventListener("change", onChange);
refs.form.addEventListener("click", onClick);
document.addEventListener("DOMContentLoaded", onDOMLoad);

function onDOMLoad() {
  if (localStorage.getItem("todo") !== null) {
    todo.setItems(JSON.parse(localStorage.getItem("todo")));
    renderItems(todo.getItems());
  }
}

function onChange(event) {
  event.target.parentNode.classList.toggle("line-through");
}

function onSubmit(event) {
  event.preventDefault();
  const input = event.target.elements.text.value.trim();
  if (input !== "") {
    todo.setItem(input);
    renderItems(todo.getItems());
    refs.form.reset();
  }
}

function onClick(event) {
  if (event.target.classList.contains("erase-btn")) {
    todo.removeItems();
    refs.list.innerHTML = "";
  }
}

function renderItems(items) {
  refs.list.innerHTML = items
    .map(
      (item, indx) =>
        `<li class="item"><input type="checkbox" class="check" /><p class="text">${
          indx + 1
        }) ${item}</p>
      </li>`
    )
    .join("");
}

class ToDo {
  items = [];

  getItems() {
    return JSON.parse(localStorage.getItem("todo"));
  }
  setItem(item) {
    this.items.push(item);
    localStorage.setItem("todo", JSON.stringify(this.items));
  }
  setItems(items) {
    this.items.push(...items);
  }
  removeItems() {
    this.items = [];
    localStorage.removeItem("todo");
  }
}
const todo = new ToDo();
