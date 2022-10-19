import TodoList from './TodoList'
import {useState} from 'react'
import Notas from './Notas.json'
import TodoForm from './TodoForm'

function App() {
  const [todos, setTodos] = useState(Notas)

  const onCompleted = (id) => {
    setTodos(todos.map((todo) => {
    return todo.id === Number(id) ? {...todo, completed: !todo.completed} : {...todo}
    }))    
  }

  const onDeleteItem = (id) => {
    setTodos([...todos].filter(todo => 
      todo.id !== id
    ))
  }

  const addTodo = (newTodo) => {
    let newItem = {id : +new Date(), title: newTodo, completed: false}
    setTodos([...todos, newItem])
  }

  return (
    <div className = 'container'>
      <TodoList todos = {todos} onCompleted = {onCompleted} onDeleteItem = {onDeleteItem} />
      <TodoForm addTodo = {addTodo}/>
    </div> 
  );
}

export default App;
