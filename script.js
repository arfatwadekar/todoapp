const form = document.querySelector('form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const todoText = todoInput.value.trim();
  if (todoText !== '') {
    const li = document.createElement('li');
    li.innerHTML = `
      <input type="checkbox">
      <span>${todoText}</span>
      <button>Delete</button>
    `;
    todoList.appendChild(li);
    todoInput.value = '';
  }
});

todoList.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    e.target.parentNode.remove();
  }
});

// Add event listener to mark items as completed
todoList.addEventListener('change', (e) => {
  if (e.target.checked) {
    e.target.nextElementSibling.style.textDecoration = 'line-through';
  } else {
    e.target.nextElementSibling.style.textDecoration = 'none';
  }
});
