function c(stuff) {
    console.log(stuff) 
    }

c('herp derp')

let todos = []

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


const renderTodos = (todos)=>{
    const ul = document.getElementById('todoList')
    const tdDiv = document.createElement('div')
    let li = document.createElement('li')
    const check = document.createElement('input')
    check.setAttribute('type', 'checkbox')
    check.addEventListener('change', ()=>{
        console.log(this)
    })
    const tdText = document.createElement('span')
    const dltButton = document.createElement('button')
    dltButton.innerText="Delete"
    dltButton.addEventListener('click',()=>{
        
    })

    
    todos.forEach(todo=>{
        tdText.innerHTML =`${todo.text}`

        tdDiv.appendChild(check)
        tdDiv.appendChild(tdText)
        tdDiv.appendChild(dltButton)
    })
    li.appendChild(tdDiv)
    ul.appendChild(li)
} 


document.getElementById('addTodo').addEventListener('click', ()=>{
    let text = document.getElementById('txtBox').value
    if (text !== ''){
        todos.push({
            id: todos.length,
            text
        })
    } else {
        alert('Please input task')
    }
    document.getElementById('txtBox').value = ''
    console.log(todos)
    renderTodos(todos)
})
