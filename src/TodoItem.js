function TodoItem ({todo, onCompleted, onDeleteItem}) {
  
    onCompleted = () => {
    console.log(todo.completed)
  }

    onDeleteItem = () => {
    console.log(todo.id)
   
  }

    return (
       <div>
        
        <ul>
          <li> id = {todo.id} </li>
          <li> tittle = {todo.title} </li>
          <li> completed = {todo.completed}</li>
        </ul>
        <button className = 'del-btn' onClick = {onDeleteItem}> Eliminar </button>
        <input type = 'checkbox' checked = {todo.Completed} onChange = {onCompleted}/>
       </div>
        
    )
}

export default TodoItem