let todo = JSON.parse(localStorage.getItem("todo")) || [];

const todoInput = document.getElementById("todoInput");

const todoList = document.getElementById("todoList");
const todoCount = document.getElementById("todoCount");
const addButton = document.querySelector(".btn");
const deleteButton = document.getElementById("deleteButton");

// Initialize

document.addEventListener("DOMContentLoaded", function () {
  addButton.addEventListener("click", addTask());
  todoInput.addEventListener("keydown", (event) => {
    if (event) {
      event.preventDefault();
      addTask();
    }
  });
  deleteButton.addEventListener("click", deleteAllTasks());
  displayTasks();
});

const addTask = () => {};

const deleteAllTasks = () => {};
