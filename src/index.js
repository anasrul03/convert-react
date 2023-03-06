const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

todoForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const todoText = todoInput.value.trim();

    if (todoText) {
        const todoItem = createTodoItem(todoText);
        todoList.appendChild(todoItem);
        todoInput.value = '';
    }
});

function createTodoItem(todoText) {
    const todoItem = document.createElement('li');
    todoItem.innerHTML = `
    <span class="todo-text">${todoText}</span>
    <button class="delete-todo">Delete</button>
  `;

    const deleteButton = todoItem.querySelector('.delete-todo');
    deleteButton.addEventListener('click', function () {
        todoList.removeChild(todoItem);
    });

    return todoItem;
}