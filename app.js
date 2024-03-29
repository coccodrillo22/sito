const taskInput = document.querySelector('#input');
const inputButton = document.querySelector('#input-button');
const taskList = document.querySelector('#task-list');
inputButton.addEventListener('click', addTask);
taskList.addEventListener('click', removeTask);
function addTask(e) {
    if(taskInput.value === "") {
        alert('scrivi qualcosa')
    }
    const li = document.createElement('li');
    li.className = 'task';
    li.appendChild(document.createTextNode(taskInput.value))
    const link = document.createElement('a');
    link.className = "delete-todo"
    link.innerHTML = "<h3>X</h3>"
    li.appendChild(link)
    taskList.appendChild(li)
    taskInput.value = ""
    e.preventDefault()
}
function removeTask(e) {
    if(e.target.parentElement.classList.contains('delete-todo')) {
        e.target.parentElement.parentElement.remove();
    }
}