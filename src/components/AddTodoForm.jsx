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
            <label htmlFor="add-todo">Todo:&nbsp;</label>
            <input type="text" value={inputTodo} onChange={inputChangeHandler}/>
            <button type="submit">Add</button>
        </form>
    );
}

export default AddTodoForm;