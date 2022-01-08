const todolist = [];
const filters = {
    searchText: '',
    hideCompleted: false
}

const getSavedTodos = () => {
    const todosJSON = window.localStorage.getItem('todos');
    try
    {
        return todosJSON ? JSON.parse(todosJSON) : [];
    } 
    catch (e)
    {
        return [];
    } 
}



const todo_list = document.querySelector(".todo_list");
const form = document.querySelector('#todo_form');
const search_text = document.querySelector('#filter-todo');
const hide_completed = document.querySelector('#hide-completed');

search_text.addEventListener('keyup', (e) => {

    e.preventDefault();
    filters.searchText    = e.target.value.trim();
    filters.hideCompleted = document.getElementById('hide-completed').checked ? true : false;
    displayTodoLList(todolist, filters);

})

function checkedHideCompleted(current)
{
    filters.hideCompleted = current.checked;
    displayTodoLList(todolist, filters);
}
function markAsComplete(current, index) 
{
    todolist[index].status = current.checked;
    saveTodos(todolist);
    const span_text = document.querySelector(".text"+index);
    span_text.style.textDecoration = current.checked ? 'line-through' : 'none';

}
function removeFromList(current, index) 
{
    console.log(todolist);
    todolist.splice(index, 1); 
    saveTodos(todolist);
    displayTodoLList(todolist, filters);
}
const generateTodoDOM = function(todos) 
{
    let data =todos;
    var htmlElemet = ` `;
    for(var i=0; i <data.length; i++) {

        let textStyle       = data[i].status ? "text-decoration:line-through": "text-decoration:none";
        let completedStatus = data[i].status ? 'checked': '';

        htmlElemet = htmlElemet + `<div class="item_item" id="item_item${i}">`;
        htmlElemet = htmlElemet + `<div class="list_item_container"><input ${completedStatus} onclick="markAsComplete(this, ${i})" class="che_input" type="checkbox"><span class="text${i}" style="${textStyle}">${data[i].name}</span></div>`;
        htmlElemet = htmlElemet + `<div class="btn_container"><button onclick="removeFromList(this, ${i})" title="Remove" class="btn_remove">Remove</button></div>`;
        htmlElemet = htmlElemet + `</div>`;

    }

    todo_list.innerHTML = htmlElemet;
}
const displayTodoLList =  function(todos, filters) 
{
    todo_list.innerHTML = '';
    let filteredTodos = todos.filter( (todo) => todo.name.toLowerCase().includes(filters.searchText.toLowerCase()));

    if (filters.hideCompleted)
    {
         filteredTodos = filteredTodos.filter((todo) => todo.status === !filters.hideCompleted);

    };
    generateTodoDOM(filteredTodos);

}

const saveTodos = (todos) => {
    window.localStorage.setItem('todos', JSON.stringify(todos))
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const todoValue = e.target.elements.addTodo.value.trim();
    if (todoValue.length > 0){
        todolist.push({name: todoValue, status: false});
        saveTodos(todolist);
        displayTodoLList(todolist, filters);
        e.target.elements.addTodo.value='';
    }
})


const todos = getSavedTodos();
displayTodoLList(todolist, filters);