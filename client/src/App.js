import './App.css';
import Notas from './Notas.json'
import {useState} from 'react'
import TodoList from './TodoList';
import TodoForm from './TodoForm';

function App() {
  const [todos, setTodos] = useState(Notas)
  console.log(Notas)

  const onComplete = (id) => {
    console.log('id', id)
    setTodos(todos.map((todo) => {
      return todo.id === Number(id) ? {...todo, body: !todo.body} : {...todo}
    }))
  }

  const onDeleteItem = (id) => {
    setTodos([...todos].filter(todo => todo.id !== id))
  }

  const addTodo = (newTodo) => {
    console.log('newTodo', newTodo)
    let newItem =  {id: +new Date(), title: newTodo, body: false} 
    setTodos([...todos, newItem])
  }

  return (
    <>
      <TodoForm addTodo = {addTodo}/>
      <TodoList todos = {todos} onComplete = {onComplete} onDeleteItem = {onDeleteItem}/>
      
    </> 
  );
}

export default App;
