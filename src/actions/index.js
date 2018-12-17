let newTodoId = 0;
export const addTodo = text =>({
    type:'ADD_TODO',
    id:newTodoId++,
    text
})
export const toggleTodo = id =>({
    type:'TOGGLE_TODO',
    id
})

