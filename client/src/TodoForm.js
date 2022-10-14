import {useState} from 'react'
function TodoForm({addTodo}) {
    const [userInput, setUserInput] = useState()

    const handleOnChange = (e) => {
        setUserInput(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(userInput.trim() !== ''){
            addTodo(userInput)
            setUserInput('')
        } 
    }

    return (
        <>
        <form onSubmit = {handleSubmit}>
            <input type = 'text' value = {userInput} onChange = {handleOnChange} />
            <button className = 'add-btn'> Agre </button>
        </form>
        </>
    )
}
export default TodoForm