const addBtn = document.querySelector('.addBtn');

const notes = JSON.parse(localStorage.getItem('notes'));

if(notes) {
    notes.forEach(note => {
        addNewNote(note);
    })
}
addBtn.addEventListener('click', () => {
    addNewNote();
});
/**
 * addNewNote()
 * @param {*} text 
 */
function addNewNote(text = '') {
   const note =  document.createElement('div');
   note.classList.add('note');
    
note.innerHTML = ` <div class="notes">
<div class="tools">
    <button>
        <i class="fas fa-edit edit" aria-hidden="true"></i>
    </button>
    <button>
        <i class="fas fa-trash-alt delete" aria-hidden="true"></i>
    </button>
    <button class="toolAddBtn"><i class="fas fa-plus addBtn"></i></button>
</div>
<div class="content ${text ? '': 'hidden'}"></div>
<textarea class="${text ? 'hidden': ''}"></textarea>
</div>`;
const newaddBtn = note.querySelector('.toolAddBtn');
newaddBtn.addEventListener('click', () => {
    addNewNote();
})
const notesElm  = note.querySelector('.notes');
const editBtn = note.querySelector('.edit');
const deleteBtn = note.querySelector('.delete');

const content = notesElm.querySelector(".content");
const textArea = notesElm.querySelector("textarea");

textArea.value = text;
content.innerHTML = marked(text);

editBtn.addEventListener("click", () => {
    content.classList.toggle("hidden");
    textArea.classList.toggle("hidden");
});

deleteBtn.addEventListener('click', () => {
    note.remove();
    updateLocalStorage();
})


textArea.addEventListener("input", (e) => {
  const  {value} = e.target;
  content.innerHTML = marked(value);
  updateLocalStorage();
});

   document.body.appendChild(note);
}
/**
 * updateLocalStorage()
 * update text into the local storag
 */
function updateLocalStorage() {
    const notesText = document.querySelectorAll('textarea');
    const notes = [];
    notesText.forEach(note => {
        notes.push(note.value);
    });
    localStorage.setItem('notes', JSON.stringify(notes));
}
