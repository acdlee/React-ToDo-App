function TodoList({ todoData }) {
    return (
        <ul>
            {todoData.map((todo) => (
                <li key={todo.id}>{todo.text}</li>
            ))}
        </ul>  
    );
}

export default TodoList;