import {useState} from 'react'
function TodoForm({addTodo}) {
    const [userInput, setUserInput] = useState()

    const handleChange = (e) => {
        setUserInput(e.target.value)
    }

    const handleEnviar = (e) => {
        e.prevent.default()
        addTodo(userInput)
        setUserInput('')
    }

    return (
        <>
            <form onSubmit = {handleEnviar}>
                <input type = 'text' value = {userInput} onChange = {handleChange}/>
                <button > Agregar</button>
            </form>
        </>
    )
}
export default TodoForm