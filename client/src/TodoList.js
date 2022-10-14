import TodoItem from './TodoItem'

function TodoList({todos, onComplete, onDeleteItem}) {


    return (
        <>
           
           {
             todos.map((todo, index) => {
                return <TodoItem key = {`todo ${index}`}
                    todo = {todo}
                    onComplete = {onComplete}
                    onDeleteItem = {onDeleteItem}
                 />
                 
            })
           
           }
           
           
        </>
    )
}

export default TodoList