function TodoItem ({todo, onComplete}) {
    
    const handleChange = () => {
        onComplete(todo.id)
    }

    const onDeleteItem = () => {
        onDeleteItem(todo.id)
    }

    return (
        <>

        <input type = 'checkbox' checked = {todo.body} 
            onChange = {handleChange}
        />
        

        <ul>
            <li>
            id: {todo.id},
            title: {todo.title},
            body: {todo.body}
            </li>
        </ul>

        <button className = 'del-btn' onClick = {onDeleteItem}> Eliminar</button>
        </>
    )
}

export default TodoItem