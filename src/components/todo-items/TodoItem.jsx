/*
    Default Todo list item.
*/
function TodoItem({ todoIndex, text, style, onCheckboxClick }) {
    return (
        <li style={style}>
            <input type="checkbox" onClick={() => onCheckboxClick(todoIndex)} />
            {text}
            <button>X</button>
            <button>Edit</button>
        </li>
    );
}

export default TodoItem;