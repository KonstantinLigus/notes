// const body = document.querySelector("body");
// const titleEl = document.createElement("h1");
// titleEl.textContent = "Hello";
// body.append(titleEl);
// const a = 5;
// let fk = 5;
// ===========Ex1=======

// const inventory = {
//   items: ["Knife", "Gas mask"],
//   add(itemName) {
//     console.log(`Adding ${itemName} to inventory`);

//     this.items.push(itemName);
//   },
//   remove(itemName) {
//     console.log(`Removing ${itemName} from inventory`);

//     this.items = this.items.filter((item) => item !== itemName);
//   },
// };

// const invokeInventoryAction = function (itemName, action) {
//   console.log(`Invoking action on ${itemName}`);
//   action(itemName);
// };

// invokeInventoryAction("Medkit", inventory.add);
// // Invoking action on Medkit
// // Adding Medkit to inventory

// console.log(inventory.items); // ['Knife', 'Gas mask', 'Medkit']

// invokeInventoryAction("Gas mask", inventory.remove);
// // Invoking action on Gas mask
// // Removing Gas mask from inventory

// console.log(inventory.items); // ['Knife', 'Medkit']

// ============Ex2========

// const findBestEmployee = function (employees) {
//   Object.values(employees);

// твой код
// };

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(
//   findBestEmployee({
//     ann: 29,
//     david: 35,
//     helen: 1,
//     lorence: 99,
//   })
// ); // lorence

// console.log(
//   findBestEmployee({
//     poly: 12,
//     mango: 17,
//     ajax: 4,
//   })
// ); // mango

// console.log(
//   findBestEmployee({
//     lux: 147,
//     david: 21,
//     kiwi: 19,
//     chelsy: 38,
//   })
// ); // lux

// ========Ex3========

// Напиши скрипт управления личным кабинетом интернет банка. Есть объект account в котором необходимо реализовать методы для работы с балансом и историей транзакций.

// /*
//  * Типов транзацкий всего два.
//  * Можно положить либо снять деньги со счета.
//  */
// const Transaction = {
//   DEPOSIT: 'deposit',
//   WITHDRAW: 'withdraw',
// };

// /*
//  * Каждая транзакция это объект со свойствами: id, type и amount
//  */

// const account = {
//   // Текущий баланс счета
//   balance: 0,

//   // История транзакций
//   transactions: [],

//   id: 0,

//   /*
//    * Метод создает и возвращает объект транзакции.
//    * Принимает сумму и тип транзакции.
//    */
//   createTransaction(amount, type, id) {
//       this.id += 1,
//         return {
//         amount,
//         type,
//         id: this.id,
//     }
//   },

//   /*
//    * Метод отвечающий за добавление суммы к балансу.
//    * Принимает сумму танзакции.
//    * Вызывает createTransaction для создания объекта транзакции
//    * после чего добавляет его в историю транзакций
//    */
//   deposit(amount) {

//   },

//   /*
//    * Метод отвечающий за снятие суммы с баланса.
//    * Принимает сумму танзакции.
//    * Вызывает createTransaction для создания объекта транзакции
//    * после чего добавляет его в историю транзакций.
//    *
//    * Если amount больше чем текущий баланс, выводи сообщение
//    * о том, что снятие такой суммы не возможно, недостаточно средств.
//    */
//   withdraw(amount) {},

//   /*
//    * Метод возвращает текущий баланс
//    */
//   getBalance() {},

//   /*
//    * Метод ищет и возвращает объект транзации по id
//    */
//   getTransactionDetails(id) {},

//   /*
//    * Метод возвращает количество средств
//    * определенного типа транзакции из всей истории транзакций
//    */
//   getTransactionTotal(type) {},
// };

// =======Ex4=======

// const obj = {};

// obj.fn = () => console.log("hi");

// console.log(obj);
// obj.fn();
// ==========
// asyncFn();
// console.log(1);
// async function asyncFn() {
//   console.log(2);
//   console.log(await 7);
//   console.log(6);
// }
// console.log(3);
// console.log(5);
// ==============
// const ob = {
//   name: "Mick",
//   date: 777,
// };
// console.log(ob);
// console.log(typeof JSON.stringify(ob));
// const jsonOb = '{ "name": "Mick", "date": 777 }';
// console.log(JSON.parse(jsonOb));
// ================
// const btn = document.querySelector("button");
// btn.addEventListener("click", _.debounce(onClick, 1000));
// function onClick(evt) {
// console.log(evt.target);
// vs;
// console.log(evt.currentTarget);
// }
//=============ToDo==========
const refs = {
  form: document.querySelector(".form"),
  list: document.querySelector(".list"),
};

refs.form.addEventListener("submit", onSubmit);
refs.list.addEventListener("change", onChange);
// refs.form.addEventListener("click", onClick);
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

// function onClick(event) {
//   if (event.target.classList.contains("erase-btn")) {
//     todo.removeItems();
//     refs.list.innerHTML = "";
//   }
// }

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
