/*
    Default Todo list item.
*/
const CROSSSTYLE = {
    "textDecoration": "line-through",
}

function TodoItem({ todoIndex, text, isCompleted, onCheckboxClick, onDeleteClick, onEditClick }) {
    return (
        <li style={isCompleted ? CROSSSTYLE : {}}>
            <input type="checkbox" onClick={() => onCheckboxClick(todoIndex)} defaultChecked={isCompleted} />
            {text}
            <button onClick={() => onDeleteClick(todoIndex)}>X</button>
            <button onClick={() => onEditClick(todoIndex)}>Edit</button>
        </li>
    );
}

export default TodoItem;