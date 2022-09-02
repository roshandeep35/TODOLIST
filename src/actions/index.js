// here we will write the action and what they will do in return type and export them


export const addTodo = (data) => {
    return{
        type:"ADD_TODO",
        payload:{
            id:Date.now(),
            data:data
        }
    }
}
export const deleteTodo = (id) => {
    return{
        type:"DELETE_TODO",
        id
    }
}
export const removeTodo = () => {
    return{
        type:"REMOVE_TODO"
        
    }
}