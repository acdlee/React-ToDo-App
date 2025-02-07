import { useState } from "react";

function AddTodoForm({ onAddTodo }) {
    const [inputTodo, setInputTodo] = useState('');

    function addTodoHandler(event) {
        event.preventDefault();
        setInputTodo('');               // Reset input after add click
        onAddTodo(inputTodo);
    }

    function inputChangeHandler(event) {
        setInputTodo(event.target.value);
    }

    return (
        <form onSubmit={addTodoHandler}>
            <p>Add new todos via the input field:</p>
            <input type="text" value={inputTodo} onChange={inputChangeHandler}/>
            <button type="submit">Add Todo</button>
        </form>
    );
}

export default AddTodoForm;