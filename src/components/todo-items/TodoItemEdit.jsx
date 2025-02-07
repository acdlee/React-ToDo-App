import { useState } from "react";

/*
    Editing view for Todo list item.
*/
function TodoItemEdit({ todoIndex, onEditClick, onUpdateClick }) {
    const [updateText, setUpdateText] = useState('');

    /* Handles text updates for the associated input textbox */
    function onTextChange(e) {
        const inputText = e.target.value;
        setUpdateText(inputText);
    }

    return (
        <li>
            <input type="checkbox" disabled/>
            <input type="text" value={updateText} onChange={onTextChange} />
            <button onClick={() => onUpdateClick(todoIndex, updateText)}>Update</button>
            <button onClick={() => onEditClick(todoIndex)}>Cancel</button>
        </li>
    );
}

export default TodoItemEdit;