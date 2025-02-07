/*
    Default Todo list item.
*/
const CROSSSTYLE = {
    "textDecoration": "line-through",
}

function TodoItem({ todoIndex, text, isCompleted, onCheckboxClick, onDeleteClick }) {
    return (
        <li style={isCompleted ? CROSSSTYLE : {}}>
            <input type="checkbox" onClick={() => onCheckboxClick(todoIndex)} />
            {text}
            <button onClick={() => onDeleteClick(todoIndex)}>X</button>
            <button>Edit</button>
        </li>
    );
}

export default TodoItem;