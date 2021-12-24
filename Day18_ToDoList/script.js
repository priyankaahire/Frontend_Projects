const todolist = [{
    name: "Javascript Namstye",
    status: "new",
},
{
    name: "Node Js Article",
    status: "new",
},
{
    name: "Rect js Article",
    status: "new",
}];


const getSavedTodos = () => {
    const todosJSON = window.localStorage.getItem('todos');
    try{
        return todosJSON ? JSON.parse(todosJSON) : [];
    } catch (e){
        return [];
    } 
}



const todo_list = document.querySelector(".todo_list");
const form = document.querySelector('#todo_form');

function markAsComplete(current, index) {
    console.log(todolist);
    todolist[index].status = current.checked;
    saveTodos(todolist);
    const span_text = document.querySelector(".text"+index);
    span_text.style.textDecoration = current.checked ? 'line-through' : 'none';
   //generateTodoDOM(todo_list);
}
function removeFromList(current, index) {
    console.log(todolist);
    todolist.splice(index, 1); 
    saveTodos(todolist);
    displayTodoLList(todolist);
}
const generateTodoDOM = function(todos) {
 
    let data =todos;
    // JSON.parse(todos);
    var htmlElemet = ` `;
    for(var i=0; i <data.length; i++) {
        let textStyle= data.status == "checked" ? "text-decoration:line-through": "text-decoration:none";
        htmlElemet = htmlElemet + `<div class="item_item" id="item_item${i}">`;
        htmlElemet = htmlElemet + `<div class="list_item_container"><input  onclick="markAsComplete(this, ${i})" class="che_input" type="checkbox"><span class="text${i}" style="${textStyle}">${data[i].name}</span></div>`;
        htmlElemet = htmlElemet + `<div class="btn_container"><button onclick="removeFromList(this, ${i})" title="Remove" class="btn_remove">Remove</button></div>`;
        htmlElemet = htmlElemet + `</div>`;


    }
    todo_list.innerHTML = htmlElemet;
}
const displayTodoLList =  function(todos) {
    todo_list.innerHTML = '';
    generateTodoDOM(todos);

}

const saveTodos = (todos) => {
    window.localStorage.setItem('todos', JSON.stringify(todos))
}

form.addEventListener('submit', (e) =>{
    e.preventDefault();
    const todoValue = e.target.elements.addTodo.value.trim();
    if (todoValue.length > 0){
        todolist.push({name: todoValue, status: "new"});
        saveTodos(todolist);
        displayTodoLList(todolist);
        e.target.elements.addTodo.value='';
    }
})


const todos = getSavedTodos();
displayTodoLList(todolist);