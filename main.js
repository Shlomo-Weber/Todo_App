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


// const subBtn = document.getElementById('addTodo').addEventListener('submit', (e) =>{
// e.preventDefault()
// let ul = document.querySelector('#todoList')
// let li = document.createElement('li')
// let tdInput = document.querySelector('#txtBox').value
// if (tdInput !=='') {
//     todos.push({
//         id: todos.length,
//         tdInput
//     })
//     todos.forEach(todo =>{
//     li.innerHTML = `
//     <style #check:checked + label {
//         color:blue;
//         text-decoration: line-through;
//     }></style>
//     <input type="checkbox" id="check"><label for="check">${todo.tdInput}</label>
//     <button id="delete">Delete</button>`
//     ul.appendChild(li)
    
//     saveTodos()
//     })
// } else{
//     alert('You need to add something')
// }
// document.querySelector('#txtBox').value = ''
// })


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

    if (todos.length > 0){
        const ul = document.getElementById('todoList')
        let li = document.createElement('li')
        const check = document.createElement('input')
        check.type ="checkbox"
        const dltButton = document.createElement('button')
        dltButton.innerText="Delete"

    
        todos.forEach(todo=>{
            let tdText = document.createElement('span')
            tdText.innerHTML =`${todo.text}`

            li.appendChild(check)
            li.appendChild(tdText)
            li.appendChild(dltButton)
            console.log(todo.text)
        })
        
        ul.appendChild(li)
    }
    console.log(todos)
    document.getElementById('txtBox').value = ''
})



// getSavedTodos();
