const addForm = document.querySelector(".add");
const todosUl = document.querySelector(".todos");
const searchForm = document.querySelector(".search");


//add
const addTemplate = todo =>{
    const html =`
    <li class="list-group-item d-flex justify-content-between align-items-center list-group-item-action list-group-item-secondary">
        <span class="text-danger fw-bold fst-italic">${todo}</span>
        <i class="fa-solid fa-trash-can delete"></i>
    </li>
    `
    todosUl.innerHTML += html;
}

addForm.addEventListener("submit", e=>{
    e.preventDefault();
    const todo = addForm.add.value.trim();
    if(todo.length){
         addTemplate(todo);
         addForm.reset();
    }
});

//delete
todosUl.addEventListener("click", (e) => {
    if(e.target.classList.contains("delete")) {
        e.target.parentElement.remove();
    }
});

//search
const filterTodos = term =>{
    
    Array.from(todosUl.children)
    .filter(todo => !todo.textContent.toLowerCase().includes(term))
    .map(todo => todo.classList.add("filtered"));
    
    //Eğer term boş bir string ("") olursa, todo.textContent.toLowerCase().includes("") her zaman true döner.
    //  Çünkü teknik olarak, her string boş bir string'i içerir. Örneğin:"Merhaba".includes("") → true
    Array.from(todosUl.children)
    .filter(todo => todo.textContent.toLowerCase().includes(term))
    .map(todo => todo.classList.remove("filtered"));
    
}

searchForm.search.addEventListener("keyup", e=>{
    const term = e.target.value.trim().toLowerCase();
    filterTodos(term);
});

searchForm.addEventListener("submit", e=>{
    e.preventDefault();
});