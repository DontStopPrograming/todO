import TodoItem from './TodoItem'

function TodoList({todos, onCompleted, onDeleteItem}) {


    return (
        <>
           {
            todos.map((todo, index) => {
                return <TodoItem key = {`indice ${index}`} todo = {todo} onCompleted = {onCompleted} onDeleteItem = {onDeleteItem}/>
            })
           }
          
        </>
    )
}

export default TodoList