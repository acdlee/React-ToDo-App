/*
    Default Todo list item.
*/
function TodoItem({ todoIndex, text, onCheckboxClick }) {
    return (
        <li>
            <input type="checkbox" onClick={() => onCheckboxClick(todoIndex)} />
            {text}
            <button>X</button>
            <button>Edit</button>
        </li>
    );
}

export default TodoItem;