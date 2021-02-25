function c(stuff) {
    console.log(stuff) 
    }

c('herp derp')

let Todos = []

// const getSavedTodos = ()=>{
//     const todosJSON = localStorage.getItem('todos')
//     try {
//         return todosJSON ? JSON.parse(todosJSON) : []
//     }
//     catch (e){
//         return []
//     }
// }

// const saveTodos = (todos)=>{
//     localStorage.setItem('todos', JSON.stringify(todos))
// }



const renderTodos = (Todos)=>{
    document.getElementById('todoList').innerHTML=''
    const ul = document.getElementById('todoList')
    let li = document.createElement('li')
    // creates list item
    let check = document.createElement('input')
    check.setAttribute('type', 'checkbox')
    // check.addEventListener('change', completeTodo)
    const tdText = document.createElement('span')
    const dltButton = document.createElement('button')
    dltButton.innerText="Delete"
    dltButton.addEventListener('click', deleteTodo)

    //creates checkbox, span with text, and delete button with functions
 
    Todos.forEach(todo=>{
        tdText.innerHTML =`${todo.text}`
        li.appendChild(check)
        li.appendChild(tdText)
        li.appendChild(dltButton)
    })
    //loops through todos and creates list item for each

    ul.appendChild(li)
    console.log(Todos)
} 


const createTodo = ()=>{
    let text = document.getElementById('txtBox').value
    //grabs the text value of the input box
    if (text !== ''){
        Todos.push({
            id: Date.now(),
            text,
            checked: false
        })
    // adds it to the todos array if there is text
    } else {
        alert('Please input task')
    } //if no text, asks to reclarify
    document.getElementById('txtBox').value = ''
    // empties the textbox
    renderTodos(Todos)
}

document.getElementById('addTodo').addEventListener('click', createTodo)


// const completeTodo = (todoID)=>{
//     const newTodos = Todos.filter((todo)=>{
//         if (todo.id ===todoID){
//             todo.checked = true
//         }
//     })
//     Todos = newTodos
//     renderTodos(Todos)
// }


const deleteTodo = (todoID)=>{
    const newTodos = Todos.filter((todo) =>{
        if (todo.id !==todoID){
            return false
        } else {
            return true
        }
    })
    Todos = newTodos
    renderTodos(Todos)
}